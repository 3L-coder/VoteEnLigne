const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//DB config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

//declaration du chemin vers le dossier public
app.use(express.static(path.join(__dirname, 'public')));

//appel du middleware Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//activation du module CORS
app.use(cors());

app.use('/poll', poll);

//declaration du port sur lequel le serveur va ecouter
const port = 3000;
app.listen(port, () => console.log(`Serveur demarre sur le port ${port}`));
