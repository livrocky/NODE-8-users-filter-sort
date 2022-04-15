const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json('Hello world');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('server is online', PORT));
