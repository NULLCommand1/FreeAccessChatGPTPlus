const express = require('express');
const fetch = require('node-fetch');
const defaultRoutes = require('./routes/defaultRoutes');
const path = require('path');
require('dotenv').config();
const app = express();
const IP_ALWAYS_DATA = '::';
const PORT_ALWAYS_DATA = 8100;

app.use('/unlock_server', express.static(path.join(__dirname, '../unlock_related')));


app.use('/', defaultRoutes);

const startServer = async () => {
    app.listen(PORT_ALWAYS_DATA, IP_ALWAYS_DATA, () => {
        console.log(`Server is running on http://${IP_ALWAYS_DATA}:${PORT_ALWAYS_DATA}`);
    });
}

startServer();