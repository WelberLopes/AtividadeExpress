
import app from "./app.js"

const PORT = 3000; //porta 

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`REST API is running on http://localhost:${PORT}`);
});