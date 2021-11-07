let leads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.querySelector('#save-input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  leads.push(inputEl.value);
  inputEl.value = null;
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
