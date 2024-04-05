const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//cors son para que se pueda hacer solicitudes desde cualquier origen
app.use(cors({ origin: "*" }));

async function obtenerDatosAPI() {
    const datos = await fetch("https://660332b22393662c31ceb508.mockapi.io/api/ej2/Eze");
    const datosEnJson = await datos.json();
    return datosEnJson;
}

app.post("/datos", async (req, res) => {
    const datosRecibido = req.body.nombreNuevo;
    const datosAPI = await obtenerDatosAPI();

    datosAPI.forEach(peleador => {
        if (datosRecibido.toLowerCase() == peleador.name.toLowerCase()) {
            // Si el dato coincide, enviar el peleador correspondiente
            res.json(peleador);
            return; // Esto detiene el forEach una vez que se encontró una coincidencia
        }
    });

});

app.use(express.static(path.join(__dirname, '../public/build')));


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;