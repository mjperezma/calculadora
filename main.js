'use strict';
// SUMAR
const inputA = document.getElementById('a');

const inputB = document.getElementById('b');

const sumar = (a, b, cb) => {
  const result = a + b;
  cb(result);
};
const result = document.querySelector('.js-result-sum');

const btnSum = document.querySelector('.js-button-sum').addEventListener('click', () => {
  const a = +inputA.value;
  const b = +inputB.value;
  sumar(a, b, (r) => {
    result.innerHTML = `El resultado de tu suma es ${r}`;
  });
});

// RESTAR

const inputC = document.getElementById('c');

const inputD = document.getElementById('d');
const restar = (a, b, cb) => {
  const result = a - b;
  cb(result);
};

const resultRest = document.querySelector('.js-result-rest');
const btnRest = document.querySelector('.js-button-restar').addEventListener('click', () => {
  const c = +inputC.value;
  const d = +inputD.value;
  restar(c, d, (r) => {
    resultRest.innerHTML = `El resultado de la resta es: ${r}`;
  });
});

// MULTIPLICAR

const inputE = document.getElementById('e');

const inputF = document.getElementById('f');
const multi = (a, b, cb) => {
  const result = a * b;
  cb(result);
};

const resulMulti = document.querySelector('.js-result-multi');
const btnMulti = document.querySelector('.js-button-multi').addEventListener('click', () => {
  const e = +inputE.value;
  const f = +inputF.value;
  multi(e, f, (r) => {
    resulMulti.innerHTML = `El resultado de la multiplicación es: ${r}`;
  });
});

// DIVIDIR

const inputG = document.getElementById('g');

const inputH = document.getElementById('h');
const divi = (a, b, cb) => {
  const result = a / b;
  cb(result);
};

const resulDivi = document.querySelector('.js-result-div');
const btnDivi = document.querySelector('.js-button-div').addEventListener('click', () => {
  const g = +inputG.value;
  const h = +inputH.value;
  divi(g, h, (r) => {
    resulDivi.innerHTML = `El resultado de la división es: ${r}`;
  });
});
