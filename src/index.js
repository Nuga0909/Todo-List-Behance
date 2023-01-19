import _ from 'lodash';
import './style.css';

const add = document.querySelector('.p-add');
const popup = document.querySelector('.popup')
const cancel = document.querySelector('.cancel')

add.addEventListener('click', () => {
  popup.classList.toggle('active');
});
cancel.addEventListener('click', () => {
  popup.classList.remove('active');
});

