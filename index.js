const express = require('express');

const app = express();

//Variável exemplo de como deve ser um projeto
const projectsExample = [{
    id: 1, 
    title: "Projeto Node.js", 
    tasks: ["Nova Tarefa"]
}];
const projects = [];

/*
    Middlewares
*/

/*
    Rotas
*/
//Lista todos os projetos
app.get('/projects', (req,res) => {
    return;
});

//Insere um projeto novo
app.post('/projects', (req,res) => {
    return;
});

//Insere tasks novas
app.post('/projects/:id/tasks', (req,res) => {
    return;
});

//Altera um projeto
app.put('/projects/:id', (req,res) => {
    return;
});

//Deleta um projeto
app.delete('/projects/:id', (req,res) => {
    return;
});


/*
    Porta da aplicação
*/
app.listen(3000);