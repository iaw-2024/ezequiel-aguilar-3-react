const express = require("express");
const app = express();
const path = require("path");

async function obtenerDatosAPI() {
    const datos = await fetch("https://660332b22393662c31ceb508.mockapi.io/api/ej2/Eze");
    const datosEnJson = await datos.json();
    return datosEnJson;
}

app.post("/datos", async (req, res) => {
    const datosRecibido = req.body.nombreNuevo;
    const datosAPI = await obtenerDatosAPI();

    if (datosRecibido.toLowerCase() == datosAPI[0].name.toLowerCase()) {
        // Si el dato coincide, enviar el peleador correspondiente
        res.json(datosAPI[0]);
    } else if (datosRecibido.toLowerCase() == datosAPI[1].name.toLowerCase()){
        res.json(datosAPI[1]);
    } else if (datosRecibido.toLowerCase() == datosAPI[2].name.toLowerCase()){
        res.json(datosAPI[2]);
    } else if (datosRecibido.toLowerCase() == datosAPI[3].name.toLowerCase()){
        res.json(datosAPI[3]);
    } else if (datosRecibido.toLowerCase() == datosAPI[4].name.toLowerCase()){
        res.json(datosAPI[4]);
    } else if (datosRecibido.toLowerCase() == datosAPI[5].name.toLowerCase()){
        res.json(datosAPI[5]);
    } 

});

app.use(express.static(path.join(__dirname, '../public/build')));


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;