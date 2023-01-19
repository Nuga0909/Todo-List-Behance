import _ from 'lodash';
import './style.css';

const add = document.querySelector('.p-add');
const popup = document.querySelector('.popup')

add.addEventListener('click', () => {
  popup.classList.toggle('active');
});