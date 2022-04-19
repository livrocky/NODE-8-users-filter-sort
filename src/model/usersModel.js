/* eslint-disable no-console */
const { dbClient } = require('../config');

async function findUserKaunas() {
  console.log('findUserKaunas ran');
  try {
    // prisijungti
    const query = { town: 'Kaunas' };
    await dbClient.connect();
    // atlikti veiksmus
    const resourse = await dbClient.db('node7').collection('users');
    const kaunasArr = await resourse.find(query).filter.toArray();
    console.log('kaunasArr===', kaunasArr);
    return kaunasArr;
  } catch (error) {
    console.log('findUserKaunas === error', error);
    return false;
  } finally {
    // atsijungti
    await dbClient.close();
  }
}

module.exports = {
  findUserKaunas,
};
