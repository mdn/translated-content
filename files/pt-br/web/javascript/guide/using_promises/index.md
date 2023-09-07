---
title: Usando promises
slug: Web/JavaScript/Guide/Using_promises
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}

Uma {{jsxref("Promise")}} é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Como a maioria das pessoas consomem promises já criadas, este guia explicará o consumo de promises devolvidas antes de explicar como criá-las.

Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

Por exemplo, em vez de uma função old-style que espera dois callbacks, e chama um deles em uma eventual conclusão ou falha:

```js
function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);
```

…funções modernas retornam uma promise e então você pode adicionar seus callbacks:

```js
const promise = doSomething();
promise.then(successCallback, failureCallback);
```

…ou simplesmente:

```js
doSomething().then(successCallback, failureCallback);
```

Nós chamamos isso de _chamada de função assíncrona_. Essa convenção tem várias vantagens. Vamos explorar cada uma delas.

## Garantias

Ao contrário dos callbacks com retornos de funções old-style, uma promise vem com algumas garantias:

- Callbacks nunca serão chamados antes da [conclusão da execução atual](/pt-BR/docs/Web/JavaScript/EventLoop#Run-to-completion) do loop de eventos do JavaScript.
- Callbacks adicionadas com .then mesmo _depois_ do sucesso ou falha da operação assíncrona, serão chamadas, como acima.
- Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados independentemente da ordem de inserção.

Mas o benefício mais imediato das promises é o encadeamento.

## Encadeamento

Uma necessidade comum é executar duas ou mais operações assíncronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem sucedida, com o resultado do passo anterior. Nós conseguimos isso criando uma _cadeia de promises_.

Aqui está a mágica: a função `then` retorna uma nova promise, diferente da original:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

ou

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

Essa segunda promise representa a conclusão não apenas de `doSomething()`, mas também do `successCallback` ou `failureCallback` que você passou, que podem ser outras funções assíncronas que retornam uma promise. Quando esse for o caso, quaisquer callbacks adicionados a `promise2` serão enfileiradas atrás da promise retornada por `successCallback` ou `failureCallback`.

Basicamente, cada promise representa a completude de outro passo assíncrono na cadeia.

Antigamente, realizar operações assíncronas comuns em uma linha levaria à clássica pirâmide da desgraça:

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result: " + finalResult);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);
```

Ao invés disso, com funções modernas, nós atribuímos nossas callbacks às promises retornadas, formando uma _cadeia de promise_:

```js
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);
```

Os argumentos para `then` são opcionais, e `catch(failureCallback)` é uma abreviação para `then(null, failureCallback)`. Você pode também pode ver isso escrito com [arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

**Importante:** Sempre retorne um resultado, de outra forma as callbacks não vão capturar o resultado da promise anterior.

### Encadeando depois de um catch

É possivel encadear _depois_ de uma falha, i.e um `catch`. Isso é muito útil para realizar novas ações mesmo depois de uma falha no encadeamento. Leia o seguinte exemplo:

```js
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.log("Do that");
  })
  .then(() => {
    console.log("Do this whatever happened before");
  });
```

Isso vai produzir o seguinte texto:

```
Initial
Do that
Do this whatever happened before
```

Observe que o texto "Do this" não foi impresso por conta que o erro "Something failed" causou uma rejeição.

## Propagação de erros

Na pirâmide da desgraça vista anteriormente, você pode se lembrar de ter visto `failureCallback` três vezes, em comparação a uma única vez no fim da corrente de promises:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Basicamente, uma corrente de promises para se houver uma exceção, procurando por catch handlers no lugar. Essa modelagem de código segue bastante a maneira de como o código síncrono funciona:

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

Essa simetria com código assíncrono resulta no _syntactic sugar_ [`async`/`await`](/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) presente no ECMAScript 2017:

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
```

É construído sobre promises, por exemplo, `doSomething()` é a mesma função que antes. Leia mais sobre a sintaxe [aqui](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions).

Por pegar todos os erros, até mesmo exceções jogadas(_thrown exceptions_) e erros de programação, as promises acabam por solucionar uma falha fundamental presente na pirâmide da desgraça dos callbacks. Essa característica é essencial para a composição funcional das operações assíncronas.

## Criando uma Promise em torno de uma callback API antiga

Uma {{jsxref("Promise")}} pode ser criada do zero utilizando o seu construtor. Isto deve ser necessário apenas para o envolvimento de APIs antigas.

Em um mundo ideal, todas as funções assíncronas já retornariam promises. Infelizmente, algumas APIs ainda esperam que os retornos de sucesso e/ou falha sejam passados da maneira antiga. O exemplo por excelência é o {{domxref("WindowTimers.setTimeout", "setTimeout()")}} function:

```js
setTimeout(() => saySomething("10 seconds passed"), 10000);
```

Misturar chamadas de retorno e promises de _old-style_ é problemático. Se `saySomething` falhar ou contiver um erro de programação, nada o captura.

Por sorte nós podemos envolvê-la em uma promise. É uma boa prática envolver funções problemáticas no menor nivel possível, e nunca chamá-las diretamente de novo:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Basicamente, um construtor de promises pega uma função executora que nos deixa resolver ou rejeitar uma promise manualmente. Desde que `setTimeout` não falhe, nós deixamos a rejeição de fora neste caso.

## Composição

{{jsxref("Promise.resolve()")}} e {{jsxref("Promise.reject()")}} são atalhos para se criar manualmente uma promise que já foi resolvida ou rejeitada, respectivamente. Isso pode ser útil em algumas situações.

{{jsxref("Promise.all()")}} e {{jsxref("Promise.race()")}} são duas ferramentas de composição para se executar operações assíncronas em paralelo.

Uma composição sequencial é possível usando JavaScript de uma forma esperta:

```js
[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
```

Basicamente reduzimos um vetor de funções assíncronas a uma cadeia de promises equivalentes a: `Promise.resolve().then(func1).then(func2);`

Isso também pode ser feito com uma função de composição reutilizável, que é comum em programação funcional:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

A função composeAsync aceitará qualquer número de funções como argumentos e retornará uma nova função que aceita um valor inicial a ser passado pelo pipeline de composição. Isso é benéfico porque alguma, ou todas as funções, podem ser assíncronas ou síncronas, e é garantido de que serão executadas na ordem correta.

```js
const transformData = composeAsync(func1, asyncFunc1, asyncFunc2, func2);
transformData(data);
```

No ECMAScript 2017, uma composição sequencial pode ser feita de forma mais simples com async/await:

```js
for (const f of [func1, func2]) {
  await f();
}
```

## Cronometragem

Para evitar surpresas, funções passadas para `then` nunca serão chamadas sincronamente, mesmo com uma função já resolvida:

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

Ao invés de rodar imediatamente, a função passada é colocada em uma micro tarefa, o que significa que ela roda depois que a fila estiver vazia no final do atual processo de evento de loop do Javascript, ou seja: muito em breve:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

## Ver também

- {{jsxref("Promise.then()")}}
- [Promises/A+ specification](http://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}
