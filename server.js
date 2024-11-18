const express = require('express');
const app = express();
const PORT = 3000; //porta 

// Endpoint REST
app.get('/api', (req, res) => {
    res.json({ message: 'Digite aqui sua mensagem a ser exibida no EndPoint padrão' });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`REST API is running on http://localhost:${PORT}`);
});