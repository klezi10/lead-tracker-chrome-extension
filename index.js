let leads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.querySelector('#save-input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-input-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'));
console.log(leadsFromLocalStorage);

//to show leads after refresh
if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener('click', function () {
  leads.push(inputEl.value);
  inputEl.value = null;

  //save data in localstorage
  localStorage.setItem('leads', JSON.stringify(leads));
  renderLeads();

  //to verify that it works
  console.log(localStorage.getItem('leads'));
});

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  leads = [];
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads[i]}" target="_blank">
    ${leads[i]}
       </a>
     </li>`;
  }
  ulEl.innerHTML = listItems;
}
