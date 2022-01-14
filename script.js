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

// const respostas = [];
// respostas.push(nomeCompleto, email, casa, familia, materias, avaliacao, observacao);

// const main = document.getElementById('main');

textarea.addEventListener('keyup', contador);

function constantes() {
  const form = document.querySelector('#evaluation-form');
  const name = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const familiaLista = document.getElementsByName('family');
  let familia;
  for (let i = 0; i < familiaLista.length; i += 1) {
    if (familiaLista[i].checked) {
      familia = familiaLista[i].value;
    }
  }
  form.innerHTML = `<p>Nome: ${name} ${sobreNome}</p> <p>Email: ${email}</p> <p>Casa: ${casa}</p> 
  <p>Família: ${familia}</p>`;
  const formV = form.innerHTML;
  return formV;
}

function constantesTwo() {
  // const avaliacaoLista = document.querySelectorAll('.rate');
  // let avaliacao;
  // for (let i = 0; i < avaliacaoLista.length; i += 1) {
  //   if (avaliacaoLista[i].checked) {
  //     avaliacao = avaliacaoLista[i].value;
  //   }
  // }
  // return avaliacao;
  const avaliacaoLista = document.querySelectorAll('.rate');

  for (let i = 0; i < avaliacaoLista.length; i += 1) {
    if (avaliacaoLista[i].checked) {
      const avaliacao = avaliacaoLista[i].value;
      return avaliacao;
    }
  }
}

function redefinir(event) {
  event.preventDefault();
  const form = document.querySelector('#evaluation-form');
  const materiasLista = document.querySelectorAll('.subject');
  let materias = [];
  for (let i = 0; i < materiasLista.length; i += 1) {
    if (materiasLista[i].checked) {
      materias.push(materiasLista[i].value);
    }
  }
  materias = materias.join(', ');
  const observacao = document.getElementById('textarea').value;
  const constantesTwoo = constantesTwo();
  form.innerHTML = `${constantes()} <p>Matérias: ${materias}</p> 
  <p>Avaliação: ${constantesTwoo}</p> <p>Observações: ${observacao} </p>`;
}

buttonEnviar.addEventListener('click', redefinir);
