---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

{{JSRef}}

O método **`Promise.reject(motivo)`** retorna um objeto Promise que é rejeitada com um dado motivo.

## Sintaxe

```
Promise.reject(motivo);
```

### Parâmetros

- motivo
  - : Motivo pelo qual este Promise foi rejeitado.

## Descrição

O método estático `Promise.reject` retorna uma `Promise` que é rejeitada. Para fins de debug e captura de erros seletiva, é útil que o motivo seja uma `instanceof` {{jsxref("Error")}}.

## Exemplos

### Usando o método estático Promise.reject()

```js
Promise.reject("Testando reject estático").then(
  function (motivo) {
    // não executado
  },
  function (motivo) {
    console.log(motivo); // "Testando reject estático"
  },
);

Promise.reject(new Error("falha")).then(
  function (erro) {
    // não executado
  },
  function (erro) {
    console.log(erro); // Stacktrace
  },
);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{jsxref("Promise")}}
- [Captura de erros seletiva com a biblioteca de Promise BlueBird](https://github.com/petkaantonov/bluebird#error-handling)
