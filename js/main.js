const todoBtn = document.querySelector('.todo__button');
const modalWindow = document.querySelector('.modal');
const modalBtnClose = document.querySelector('.modal__button_close');
const modalBtnAdd = document.querySelector('.modal__button_add');


todoBtn.addEventListener('click', () => {
  modalWindow.className = 'modal_active';
})

modalBtnClose.addEventListener('click', () => {
  modalWindow.className = 'modal';
})

modalBtnAdd.addEventListener('click', () =>{
  modalWindow.className = 'modal';
})