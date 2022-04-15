const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3002;

app.get('/', (req, res) => {
  res.json('Hello world');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('server is online', PORT));
