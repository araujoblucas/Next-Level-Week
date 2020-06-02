import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');
    
    response.json([
        'Lucas',
        'Diego',
        'Robson',
        'Cleiton',
        'Daniel'
    ]);
});


app.listen(3333);
