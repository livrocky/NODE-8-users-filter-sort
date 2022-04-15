/* eslint-disable no-undef */
/* eslint-disable no-console */
const BASE_URL = 'http://localhost:3002/api';
const listEl = document.getElementById('list');
const sortAgeBtn = document.getElementById('ageSort');

function renderUsers(userArr) {
  const listString = userArr
    .map(
      (uObj) => `
      <li>
      <p><strong>${uObj.name}</strong> ${uObj.age} years old ${uObj.isStudent ? 'student' : ''} <i>Gender:</i>${uObj.gender}</p>
  </li>
  `
    )
    .join('');
  listEl.innerHTML = listString;
}

async function getUsers(urlEnd) {
  const resp = await fetch(`${BASE_URL}/${urlEnd}`);
  const dataInJs = await resp.json();
  console.log('dataInJs===', dataInJs);
  renderUsers(dataInJs);
}

getUsers('users');

sortAgeBtn.addEventListener('click', () => {
  // kai paspaudziam mygtuka pakeisti jame esanti zodeli ASC i DESC
  getUsers('users/sort-age');
  console.log('sorting');
});
