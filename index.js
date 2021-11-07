let list = [];
let inputEl = document.getElementById('input-el');
let inputBtn = document.querySelector('#save-input-btn');
let ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  ulEl.innerHTML = inputEl.value;
  inputEl.value = null;
});
