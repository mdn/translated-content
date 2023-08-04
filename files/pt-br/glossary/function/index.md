---
title: Função
slug: Glossary/Function
---

Uma **função** **(function)** é um fragmento de código que pode ser invocado por outro código, por si mesmo ou uma {{Glossary ("variável")}} que se refere à função. Quando uma função é invocada, o {{Glossary ("Argument", "argumento")}} é passado para a função como input (entrada) e a função pode opcionalmente retornar um output (saída). Uma função em {{glossary ("JavaScript")}} também é um {{glossary ("objeto")}}.

O nome da função é um {{Glossary ("identificador")}} declarado como parte de uma declaração de função ou expressão de função. O nome da função {{Glossary ("escopo")}} depende se o nome da função é uma declaração ou expressão.

### Diferentes tipos de funções

Uma **função anônima** é uma função sem o nome da função:

```js
function () {};
// or using the ECMAScript 2015 arrow notation
() => {};
```

Uma **função nomeada** é uma função com o nome da função:

```js
function foo() {}
// or using the ECMAScript 2015 arrow notation
const foo = () => {};
```

Uma **função interna** é uma função dentro de outra função (`square` nesse caso). Uma **função externa** é uma função contendo uma função (`addSquares` nesse caso):

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
//Using ECMAScript 2015 arrow notation
const addSquares = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

Uma **função recursiva** é uma função que invoca a si mesma. Veja {{Glossary("Recursão", "recursão")}}.

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}
//Using ECMAScript 2015 arrow notation
const loop = (x) => {
  if (x >= 10) return;
  loop(x + 1);
};
```

Uma **Expressão de Função Invocada Imediatamente** (IIFE em Inglês) é uma função que é invocada diretamente após a função ser carregada no compilador do navegador. A maneira de identificar um IIFE é localizar os parênteses extra esquerdo e direito no final da declaração da função.

```js
// Error (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
function foo() {
    console.log('Hello Foo');
}();
*/

(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();
```

Se gostaria de saber mais sobre o IIFE, confira a seguinte página no Wikipédia : [Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

## Leia mais

### Referência técnica

- [Funções](/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)
- [Funções Arrow](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
