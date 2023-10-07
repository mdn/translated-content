---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef("Global_Objects", "Promise")}}

## Resumo

O método **then()** retorna uma **Promise**. Possui dois argumentos, ambos são "**call back functions**", sendo uma para o sucesso e outra para o fracasso da promessa.

## Sintaxe

```
p.then(quandoRealizada, quandoRejeitada);

p.then(function(valor) {
   // sucesso
  }, function(motivo) {
  // rejeitada
});
```

### Parametros

- quandoRealizada
  - : Uma {{jsxref("Function")}} chamada quando a **Promise** é cumprida (Sucesso). Essa função tem um argumento, o valor do cumprimento.
- quandoRejeitada
  - : Uma {{jsxref("Function")}} chamada quando a Promise é rejeitada. Essa função tem um argumento, o motivo da recusa.

## Descrição

Assim como o método .then() e {{jsxref("Promise.prototype.catch()")}} retornam uma **Promise**, eles podem ser encadeados - uma operação chamada _**composition**._

## Exemplos

### Usando o método then

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Success!");
  // or
  // reject ("Error!");
});

p1.then(
  function (value) {
    console.log(value); // Success!
  },
  function (reason) {
    console.log(reason); // Error!
  },
);
```

### Encadeando

Já que o método then() devolve uma **Promise**, você pode facilmente encadeá-los.

```js
var p2 = new Promise(function (resolve, reject) {
  resolve(1);
});

p2.then(function (value) {
  console.log(value); // 1
  return value + 1;
}).then(function (value) {
  console.log(value); // 2
});
```

No exemplo acima, o último **.then()** recebeu a soma value + 1, que resultou em 2, porém se o retorno de value + 1 fosse uma **Promise** que também retornasse value + 1, o resultado seria o mesmo. Note, no exemplo abaixo, que leva 1000ms para a impressão de 2 ocorrer.

```js
var p2 = new Promise(function (resolve, reject) {
  resolve(1);
});

p2.then(function (value) {
  console.log(value); // 1
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value + 1);
    }, 1000);
  });
}).then(function (value) {
  console.log(value); // 2
});
```

## Especificações

| Especificações                                                                | Status           | Comentários                                |
| ----------------------------------------------------------------------------- | ---------------- | ------------------------------------------ |
| [domenic/promises-unwrapping](https://github.com/domenic/promises-unwrapping) | Draft            | Standardization work is taking place here. |
| {{SpecName('ES6', '#sec-promise.prototype.then', 'Promise.prototype.then')}}  | {{Spec2('ES6')}} | Initial definition in an ECMA standard.    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise.then")}}

## Veja também

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
