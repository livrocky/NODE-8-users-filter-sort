const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./api/usersRoutes');
const { PORT } = require('./config');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello world');
});

// Routes
app.use('/api', userRoutes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('server is online', PORT));
