const express = require('express');

const app = express();
app.use(express.json());

const projects = [];
let reqs = 0;

/*
    Middlewares
*/
const requestsCount = (req,res,next) => {
    const reqsNumber = reqs++;

    console.log(`Request number ${reqsNumber}`);
    
    return next();
}

app.use(requestsCount);

const checkProjectID = (req,res,next) => {
    const { id } = req.params;

    const exists = projects.find(p => p.id === id);

    if(!exists)
        return res.status(400).json({ error: "Project not found." });

    return next();
}

/*
    Rotas
*/
//Lista todos os projetos
app.get('/projects', (req,res) => {
    return res.json(projects);
});

//Insere um projeto novo
app.post('/projects', (req,res) => {
    const push = 
    {
        "id": req.body.id,
        "title": req.body.title,
        "tasks": req.body.tasks,
    }    

    projects.push(push);

    return res.json(projects)
});

//Altera um projeto
app.put('/projects/:id', checkProjectID, (req,res) => {
    const { id } = req.params;
    const { title } = req.body;
    
    const project = projects.find(p => p.id === id);

    project.title = title;
    
    return res.json(projects);
});

//Deleta um projeto
app.delete('/projects/:id', checkProjectID, (req,res) => {
    const { id } = req.params;

    const projectIndex = projects.findIndex(p => p.id === id);

    projects.splice(projectIndex, 1);

    return res.send();
});

//Insere tasks novas
app.post('/projects/:id/tasks', checkProjectID, (req,res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id === id);

    project.tasks.push(title);

    return res.json(project);
});

/*
    Porta da aplicação
*/
app.listen(3000);