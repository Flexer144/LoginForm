const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const checkbox = document.getElementById('check-box')
const button = document.querySelector('.button-apply');

function checkInputs() {
  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPassword.value.trim();

  if (emailValue !== '' && passwordValue !== '') {
    button.disabled = false;
    button.classList.add('disabled');
  } else {
    button.disabled = true;
    button.classList.remove('disabled');
  }
}

inputEmail.addEventListener('input', checkInputs);
inputPassword.addEventListener('input', checkInputs);


button.addEventListener('click', ()=>{
  inputEmail.value = '';
  inputPassword.value = '';
  button.classList.remove('disabled')
}) 

checkbox.addEventListener('change', ()=>{
  if(checkbox.checked){
    inputPassword.type = 'text'
  } else{
    inputPassword.type = 'password'
  }
})