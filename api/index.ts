require('dotenv').config();

const express = require('express');
const app = express();
const { sql } = require('@vercel/postgres');

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.json({ message: 'Hello from Express + Vercel!' });
});

app.get('/api/hello', function (req, res) {
  res.json({ message: 'Hello from Express + Vercel!' });
});

app.get('/api/hello2', function (req, res) {
  res.json({ message: 'Hello from Express + Vercel!' });
});

app.get('/api/hello3', function (req, res) {
  res.json({ message: 'Hello from Express + Vercel!' });
});





app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;