/* eslint-disable no-console */
const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

// ROUTES
userRoutes.get('/users', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    // parsisiusti visus userius is node7 ir grazinti json [] pavidalu
    const usersArr = await dbClient.db('node7').collection('users').find().toArray();
    console.log('connected');
    res.json(usersArr);
  } catch (error) {
    console.error('error in get users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

module.exports = userRoutes;
