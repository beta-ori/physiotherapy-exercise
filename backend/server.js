const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const router = require('./routes/ExerciseProperty.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

db.sequelize.sync();

const PORT = 3333;

app.listen(PORT);