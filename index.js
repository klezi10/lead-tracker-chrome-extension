let savedLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.querySelector('#save-input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-input-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('savedLeads'));
// console.log(leadsFromLocalStorage);

//to show leads after refresh
if (leadsFromLocalStorage) {
  savedLeads = leadsFromLocalStorage;
  render(savedLeads);
}

function render(leads) {
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

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  savedLeads = [];
  render(savedLeads);
});

inputBtn.addEventListener('click', function () {
  savedLeads.push(inputEl.value);
  inputEl.value = null;

  //save data in localstorage
  localStorage.setItem('savedLeads', JSON.stringify(savedLeads));
  render(savedLeads);

  //to verify that it works
  // console.log(localStorage.getItem('savedLeads'));
});
