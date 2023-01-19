import _ from 'lodash';
import './style.css';

const add = document.querySelector('.p-add');
const popup = document.querySelector('.popup')
const popup2 = document.querySelector('.popup2')
const cancel = document.querySelector('.cancel')
const more = document.querySelectorAll('.more')

add.addEventListener('click', () => {
  popup.classList.toggle('active');
});
cancel.addEventListener('click', () => {
  popup.classList.remove('active');
});

more.forEach((e) => {
  e.addEventListener('click', () => {
  popup2.classList.toggle('active');
});
});
// document.addEventListener('click', () => {
//   popup2.classList.remove('active');
// });
