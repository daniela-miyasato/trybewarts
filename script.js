const buttonLogin = document.querySelector('#buttonLogin');

function hello() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', hello);

const buttonEnviar = document.querySelector('#submit-btn');

const inputTermos = document.querySelector('#agreement');

function ativarButton() {
  if (inputTermos.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

inputTermos.addEventListener('click', ativarButton);
