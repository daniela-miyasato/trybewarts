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

const textarea = document.querySelector('#textarea');

// let limite = 500;

// function contador(event) {
//   const counter = document.querySelector('#counter');
//   if (limite <= 500 && limite >= 0) {
//     if (event.key === 'Backspace') {
//       limite += 1;

//       // counter.innerText = limite.toString();
//     } else {
//       limite -= 1;

//       // counter.innerText = limite.toString();
//     }
//     counter.innerText = limite.toString();
//   }
// }

// textarea.addEventListener('keydown', contador);

const limite = 500;

function contador() {
  if (textarea.value.length <= 500 && textarea.value.length > -1) {
    const counter = document.querySelector('#counter');
    counter.innerText = limite - textarea.value.length;
  }
}

textarea.addEventListener('keyup', contador);
