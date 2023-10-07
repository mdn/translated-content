---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

O método **`Promise.all(iterable)`** retorna uma única {{jsxref("Promise")}} que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Sintaxe

```
Promise.all(iterable);
```

### Parâmetros

- iterable
  - : Um objeto [iterável](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols), como um {{jsxref("Array")}} ou {{jsxref("String")}}.

### Retorno

- Uma {{jsxref("Promise")}} **já resolvida** se o iterável passado for vazio.
- Uma {{jsxref("Promise")}} **resolvida assíncronamente** se o iterável passado não conter promises. Nota, Google Chrome 58 retorna uma promise **já resolvida** nesse caso.
- Uma {{jsxref("Promise")}} **pendente** em todos os outros casos. Essa promise retornada é então resolvida/rejeitada **assíncronamente** (tão logo a pilha esteja vazia) quando todas as promises no dado iterável forem resolvidas, ou se alguma das promises for rejeitada. Veja o exemplo sobre "Assincronia ou sincronia da Promise.all" abaixo. Os valores retornados estarão na ordem em que as promises foram passadas. independentemente da ordem em que forem concluídas.

## Descrição

Esse método pode ser usado para agregar resultados de várias promises.

### Resolução

A promise retornada é resolvida com um array contendo **todos** os valores dos iteráveis passados como argumento (como valores que não são promises).

- Se um iterável vazio é passado, então esse método retorna (sincronamente) uma promise já resolvida.
- Se todas as promises passadas forem resolvidas, ou não forem promises, a promise retornada por `Promise.all` é resolvida assincronamente.

### Rejeição

Se qualquer uma das promises passadas for rejeitada, `Promise.all` assíncronamente é rejeitada com o valor da promise rejeitada, independentemente se outras promises foram resolvidas.

## Exemplos

### Utilizando Promise.all

`Promise.all` espera que todas as promises sejam resolvidas (ou a primeira rejeição).

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((valores) => {
  console.log(valores); // [3, 1337, "foo"]
});
```

Se o iterável conter valores que não são promises, eles serão ignorados, mas ainda serão contados no array da promise retornada (se a promise for resolvida):

```js
// Essa será considerada como se o iterável passado fosse vazio, logo ela será resolvido
var p = Promise.all([1, 2, 3]);
// Essa será considerada como se o iterável passado contém apenas a promise resolvida com o valor "444", logo ela é resolvida
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// Esse será considerada como se o iterável passado contém apenas o valor de rejeição "555" da promise, logo ela é rejeitada
var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Utilizando setTimeout para executar código depois que a pilha estiver vazia
setTimeout(function () {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// logs
// Promise { <estado>: "resolvida", <valor>: Array[3] }
// Promise { <estado>: "resolvida", <valor>: Array[4] }
// Promise { <estado>: "rejeitada", <razão>: 555 }
```

### Assincronia ou sincronia da Promise.all

O exemplo a seguir demonstra a assincronia (ou sincronia, se o iterável passado for fazio) de `Promise.all`:

```js
// Passamos o argumento como um array de promises que já estão resolvidas para disparar Promise.all a mais rápido possível
var arrayPromisesResolvidas = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(arrayPromisesResolvidas);
// Logando imediatamente o valor de p
console.log(p);

// Utilizando setTimeout para executar código depois que a pilha estiver vazia
setTimeout(function () {
  console.log("a pilha está vazia agora");
  console.log(p);
});

// logs, em ordem:
// Promise { <estado>: "pendente" }
// a pilha está vazia agora
// Promise { <estado>: "resolvida", <valor>: Array[2] }
```

A mesma coisa acontece se `Promise.all` for rejeitada:

```js
var arrayPromisesMisturadas = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(arrayPromisesMisturadas);
console.log(p);
setTimeout(function () {
  console.log("a pilha está vazia agora");
  console.log(p);
});

// logs
// Promise { <estado>: "pendente" }
// a pilha está vazia agora
// Promise { <estado>: "rejeitada", <razão>: 44 }
```

Mas, `Promise.all` resolve sincromamente **se e somente se** o iterável passado for vazio:

```js
var p = Promise.all([]); // será resolvida imediatamente
var p2 = Promise.all([1337, "oi"]); // um valor que não é uma promise será ignorado, mas a avaliação será feita assíncronamente
console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("a pilha está vazia agora");
  console.log(p2);
});

// logs
// Promise { <estado>: "resolvida", <valor>: Array[0] }
// Promise { <estado>: "pendente" }
// a pilha está vazia agora
// Promise { <estado>: "resolvida", <valor>: Array[2] }
```

### Comportamente de falhar rapidamente de Promise.all

`Promise.all` é rejeitada se qualquer um dos elementos for rejeitado. Por exemplo, se você passar quartro promises que resolvem após um intervalo de tempo e uma promise que rejeita imediatamente, então `Promise.all` será rejeitada imediatamente.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("um"), 1000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("dois"), 2000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("três"), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("quatro"), 4000);
});
var p5 = new Promise((resolve, reject) => {
  reject(new Error("rejeitada"));
});

// Usando .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((valores) => {
    console.log(valores);
  })
  .catch((erro) => {
    console.log(erro.message);
  });

// No console:
// "rejeitada"
```

É possível mudar esse comportamente lidando com possíveis rejeições:

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_resolução_atrasada"), 1000);
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_rejeição_imediata"));
});

Promise.all([
  p1.catch((erro) => {
    return erro;
  }),
  p2.catch((erro) => {
    return erro;
  }),
]).then((valores) => {
  console.log(valores[0]); // "p1_resolução_atrasada"
  console.log(valores[1]); // "Erro: p2_rejeição_imediata"
});
```

## Especificações

| Especificação                                              | Status               | Comentário                           |
| ---------------------------------------------------------- | -------------------- | ------------------------------------ |
| {{SpecName('ES2015', '#sec-promise.all', 'Promise.all')}}  | {{Spec2('ES2015')}}  | Definição inicial em um padrão ECMA. |
| {{SpecName('ESDraft', '#sec-promise.all', 'Promise.all')}} | {{Spec2('ESDraft')}} |                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise.all")}}

## Veja também

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
