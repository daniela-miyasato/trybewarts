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

const limite = 500;

function contador() {
  if (textarea.value.length <= 500 && textarea.value.length > -1) {
    const counter = document.querySelector('#counter');
    counter.innerText = limite - textarea.value.length;
  }
}

textarea.addEventListener('keyup', contador);

// const form = document.getElementById('evaluation-form');
// const nome = document.getElementById('input-name').value;
// const sobrenome = document.getElementById('input-lastname').value;

// const nomeCompleto = `${nome} ${sobrenome}`;

// const email = document.getElementById('input-email').value;
// const casa = document.getElementById('house').value;
// const familiaLista = document.getElementsByName('family');
// let familia;
// for (let i = 0; i < familiaLista.length; i += 1) {
//   if (familiaLista[i].checked) {
//     familia = familiaLista[i].value;
//   }
// }
// const materias = document.getElementById('label-content').value;
// const avaliacao = document.getElementById('rate').value;
// const observacao = document.getElementById('textarea').value;

// const respostas = [];
// respostas.push(nomeCompleto, email, casa, familia, materias, avaliacao, observacao);

// const main = document.getElementById('main');
function newForm(event) {
  event.preventDefault();
  // form.parentNode.removeChild(form);
  // const tagForm = document.createElement('form');

  // for (let i = 0; i <= respostas.length; i += 1) {
  // const p = document.createElement('p');
  // p.innerText = respostas[i];
  // forms.appendChild(p);
  // }
  // main.appendChild(form);

  // const p = document.createElement('p');
  // const conteudo = document.createTextNode(`Nome: ${nomeCompleto}`);
  // p.appendChild(conteudo);
  // tagForm.appendChild(p);
  // main.appendChild(tagForm);
}

buttonEnviar.addEventListener('click', newForm);
