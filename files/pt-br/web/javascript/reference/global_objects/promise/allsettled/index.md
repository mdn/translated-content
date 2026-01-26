---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---

{{JSRef}}

O método **`Promise.allSettled()`** retorna uma promessa que é resolvida após todas as promessas dadas serem resolvidas ou rejeitadas, com um array de objetos que descrevem o resultado de cada promessa.

É tipicamente usado quando você tem múltiplas tarefas assíncronas que não são dependentes das conclusões umas das outras, ou quando você sempre quer ter o resultado de cada promessa.

Para comparação, a promessa retornada por {{jsxref("Promise.all()")}} pode ser mais apropriada para tarefas que dependem umas das outras, ou se você precisa que todas as tarefas sejam rejeitadas quando apenas uma é.

{{InteractiveExample("JavaScript Demo: Promise.allSettled()")}}

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"
```

## Sintaxe

```
promise.allSettled(iterable);
```

### Parâmetros

- `iterable`
  - : Um objeto [iterável](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols), como um {{jsxref("Array")}}, onde cada membro é uma `Promise`.

### Valor retornado

Uma {{jsxref("Promise")}} **pendente** que vai ser **preenchida assíncronamente** quando todas as promessas na coleção fornecida forem completas, sendo aceitas ou rejeitadas. Quando isso acontecer, é retornado um array contendo um resultado para cada promessa passada como entrada.

Para cada objeto no array retornado, existe uma string `status`. Se o status for `fulfilled`, então o campo `value` estará presente. Se o status for `rejected`, então o campo `reason` estará presente. O valor (value) ou o motivo da falha (reason) refletem o valor com que cada promessa foi completada (ou rejeitada).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Promessas](/pt-BR/docs/Archive/Add-ons/Techniques/Promises)
- [Usando promessas](/pt-BR/docs/Web/JavaScript/Guide/Using_promises)
- [Programando assincronamente de maneira elegante usando promessas](/pt-BR/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
