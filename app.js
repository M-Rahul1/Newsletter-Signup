const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
