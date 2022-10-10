---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - ECMAScript6
  - JavaScript
  - Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
---
{{JSRef("Global_Objects", "Promise")}}

**`Promise`** é um objeto usado para processamento assíncrono. Uma `Promise` (_de "promessa"_) representa um valor que pode estar disponível agora, no futuro ou nunca.

> **Nota:** Esse artigo descreve o construtor `Promise`,os métodos e propriedades de tais objetos. Para aprender sobre como promises funcionam e como utilizá-los, é aconselhavel a leitura de [utilizando promises](/pt-BR/docs/Web/JavaScript/Guide/Usando_promises). O construtor é utilizado para embrulhar funções sem suporte ao conceito "promise".

## Descrição

Uma **`Promise`** representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma _promessa_ ao valor em algum momento no futuro.

Uma **`Promise`** está em um destes estados:

- _pending (pendent)_: Estado inicial, que não foi realizada nem rejeitada.
- _fulfilled (realizada)_: sucesso na operação.
- _rejected (rejeitado)_: falha na operação.

Uma promessa pendente pode se tornar _realizada_ com um valor ou _rejeitada_ por um motivo (erro). Quando um desses estados ocorre, o método `then` do `Promise` é chamado, e ele chama o método de tratamento associado ao estado (`rejected` ou `resolved`). Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, desta forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados.

Como os métodos `Promise.prototype.then` e `Promise.prototype.catch` retornam promises, eles podem ser encadeados — uma operação chamada _composição_.

![](https://mdn.mozillademos.org/files/8633/promises.png)

## Propriedades

- `Promise.length`
  - : Propriedade length cujo valor é sempre 1 (número de argumentos do método construtor).
- {{jsxref("Promise.prototype")}}
  - : Representa o protótipo para o método construtor da `Promise`.

## Métodos

- {{jsxref("Promise.all", "Promise.all(lista)")}}
  - : Retorna uma promise que é resolvida quando todas as promises no argumento _lista_ forem resolvidas ou rejeitada assim que uma das promises da lista for rejeitada. Se a promise retornada for resolvida, ela é resolvida com um array dos valores das promises resolvidas da lista. Se a promise for rejeitada, ela é rejeitada com o motivo da primeira promise que foi rejeitada na lista. Este método pode ser útil para agregar resultados de múltiplas promises.
- {{jsxref("Promise.race", "Promise.race(lista)")}}
  - : Retorna uma promise que resolve ou rejeita assim que uma das promises do argumento lista resolve ou rejeita, com um valor ou o motivo daquela promise.
- {{jsxref("Promise.reject", "Promise.reject(motivo)")}}
  - : Retorna um objeto `Promise` que foi rejeitado por um dado motivo.
- {{jsxref("Promise.resolve", "Promise.resolve(valor)")}}
  - : Retorna um objeto `Promise` que foi resolvido com um dado valor. Se o valor é `thenable` (possui um método `then`), a promise retornada "seguirá" este método, adotando esse estado eventual; caso contrário a promise retornada será realizada com o valor. Geralmente, se você quer saber se um valor é uma promise ou não, utilize {{jsxref("Promise.resolve", "Promise.resolve(valor)")}} e trabalhe com a valor de retorno que é sempre uma promise.

## Protótipo Promise

### Propriedades

{{page('pt-BR/Web/JavaScript/Reference/Global_Objects/Promise/prototype','Propriedades')}}

### Métodos

{{page('pt-BR/Web/JavaScript/Reference/Global_Objects/Promise/prototype','Métodos')}}

## Exemplos

### Criando uma Promise

\<div id="log">\</div>

Este pequeno exemplo mostra o mecanismo de uma `Promise`. O método `testPromise()` é chamado cada vez que {{HTMLElement("button")}} é clicado. Isso cria uma promise que resolverá, usando {{domxref("window.setTimeout()")}}, o contador de promise `promiseCount` (iniciando em 1) a cada 1 a 3s randomicamente. O construtor `Promise()` é usado para criar a promise.

A realização da promise é simplesmente registrada, por meio de configuração na função callback de realização usando {{jsxref("Promise.prototype.then()","p1.then()")}}. Alguns logs mostram como a parte síncrona do método é desacoplada da conclusão assíncrona da promise.

```js
var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Started (<small>Sync code started</small>)<br/>');

  // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
  var p1 = new Promise(
    // a função resolve() é chamada com a capacidade para resolver ou
    // rejeitar a promise
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
          ') Promise started (<small>Async code started</small>)<br/>');
      // Isto é apenas um exemplo para criar assincronismo
      window.setTimeout(
        function() {
          // Cumprimos a promessa !
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // definimos o que fazer quando a promise for realizada
  p1.then(
    // apenas logamos a mensagem e o valor
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Promise made (<small>Sync code terminated</small>)<br/>');
}
```

```js hidden
if ("Promise" in window) {
  btn = document.getElementById("btn");
   btn.addEventListener("click",testPromise);
}
else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the Promise interface.";
}
```

Este exemplo é executado pelo click do botão. Você precisa de uma versão de navegedor com suporte a `Promise`. Clicando algumas vezes no botão num curto intervalo de tempo, você verá as diferentes promises sendo realizadas uma após a outra.

{{EmbedLiveSample("Criando_uma_Promise", "500", "200")}}

### Carregando uma imagem com XHR

Outro simples exemplo usando `Promise` e [`XMLHTTPRequest`](/en-US/docs/Web/API/XMLHttpRequest) para carregar imagens está disponível no repositório GitHub MDN [promise-test](https://github.com/mdn/js-examples/blob/master/promises-test/index.html). Você também pode [vê-lo em ação](https://mdn.github.io/js-examples/promises-test/). Cada passo é comentado e lhe permite acompanhar de perto a arquitetura de Promise e XHR.

## Especificações

| Especificação                                                                 | Status                   | Comentário                                 |
| ----------------------------------------------------------------------------- | ------------------------ | ------------------------------------------ |
| [domenic/promises-unwrapping](https://github.com/domenic/promises-unwrapping) | Draft                    | Standardization work is taking place here. |
| {{SpecName('ES2015', '#sec-promise-objects', 'Promise')}}  | {{Spec2('ES2015')}} | Initial definition in an ECMA standard.    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise")}}

Veja também

- [Promises/A+ specification](http://promisesaplus.com/)
- [Jake Archibald: JavaScript Promises: There and Back Again](http://www.html5rocks.com/en/tutorials/es6/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patter in JavaScript](http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
- [Matt Greer: JavaScript Promises ... In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
- [Forbes Lindesay: promisejs.org](https://www.promisejs.org/)
