const express = require('express');

const app = express();

app.get('/teste', (require, response) => {

    return response.json({ hello: 'World' })

});

app.listen(3333);