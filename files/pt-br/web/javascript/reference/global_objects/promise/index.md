---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
---

{{JSRef}}

O objeto **`Promise`** representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Para saber como as promises funcionam e como você pode usá-las, recomendamos que você leia [Usando promises](/pt-BR/docs/Web/JavaScript/Guide/Using_promises) primeiro.

## Descrição

Uma **`Promise`** é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma _promise_ para fornecer o valor em algum momento no futuro.

Uma `Promise` está em um destes estados:

- _pending_: estado inicial, nem cumprido nem rejeitado.
- _fulfilled_: significa que a operação foi concluída com sucesso.
- _rejected_: significa que a operação falhou.

O _estado eventual_ de uma promise pendente pode ser _fulfilled_ com um valor ou _rejected_ com um motivo (erro).
Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método `then` de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promise é considerada _resolvida_ se for cumprida ou rejeitada, mas não pendente.

![Fluxograma mostrando como o estado Promise transita entre pendente, cumprido e rejeitado por meio de manipuladores then/catch. Uma promise pendente pode ser cumprida ou rejeitada. Se preenchido, o manipulador "on fulfillment", ou primeiro parâmetro do método then(), é executado e realiza outras ações assíncronas. Se rejeitado, o manipulador de erro, passado como o segundo parâmetro do método then() ou como o único parâmetro do método catch(), é executado.](promises.png)

Você também ouvirá o termo _resolved_ usado com promises — isso significa que a promise é liquidada ou "bloqueada" para corresponder ao estado eventual de outra promise e resolvê-la ou rejeitá-la não tem efeito. O documento [Estados e destinos](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) da proposta original da Promise contém mais detalhes sobre a terminologia da promise. Coloquialmente, promises "resolvidas" geralmente são equivalentes a promises "cumpridas", mas, conforme ilustrado em "Estados e destinos", as promises resolvidas também podem estar pendentes ou rejeitadas. Por exemplo:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Essa promise já está _resolvida_ no momento em que é criada (porque o `resolveOuter` é chamado de forma síncrona), mas é resolvido com outra promise e, portanto, não será _cumprida_ até 1 segundo depois, quando a promise interna for cumprida. Na prática, a "resolução" muitas vezes é feita nos bastidores e não observável, e apenas o seu cumprimento ou rejeição o são.

> **Nota:** várias outras linguagens têm mecanismos para avaliação preguiçosa e adiamento de uma computação, que eles também chamam de "promises", por exemplo, Esquema. As promises em JavaScript representam processos que já estão acontecendo, que podem ser encadeados com funções de retorno de chamada. Se você deseja avaliar lentamente uma expressão, considere usar uma função sem argumentos, por exemplo. `f = () => expressão` para criar a expressão avaliada lentamente e `f()` para avaliar a expressão imediatamente.

### Promises em cadeia

Os métodos `{{jsxref("Promise.prototype.then()")}}`, `{{jsxref("Promise.prototype.catch()")}}` e `{{jsxref("Promise.prototype.finally()")}}` são usados para associar uma ação adicional com uma promise que se torna liquidada. Como `{{JSxRef("Promise/then", "Promise.prototype.then()")}}` e `{{JSxRef("Promise/catch", "Promise.prototype.catch()")}}` métodos retornam promises, eles podem ser encadeados.

O método `.then()` aceita até dois argumentos; o primeiro argumento é uma função de retorno de chamada para o caso cumprido da promise e o segundo argumento é uma função de retorno de chamada para o caso rejeitado. Cada `.then()` retorna um objeto de promise recém-gerado, que pode ser usado opcionalmente para encadeamento; por exemplo:

```js
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

minhaPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```

O processamento continua para o próximo elo da cadeia mesmo quando um `.then()` não possui uma função de retorno de chamada que retorna um objeto Promise. Portanto, uma cadeia pode omitir com segurança cada _rejection_ função de retorno de chamada até o `.catch()` final.

Manipular uma promise rejeitada em cada `.then()` tem consequências mais adiante na cadeia de promises. Às vezes não há escolha, porque um erro deve ser tratado imediatamente. Nesses casos, devemos lançar um erro de algum tipo para manter o estado de erro na cadeia. Por outro lado, na ausência de uma necessidade imediata, é mais simples deixar de fora o tratamento de erros até uma instrução `.catch()` final. Um `.catch()` é realmente apenas um `.then()` sem um slot para uma função de retorno de chamada para o caso em que a promise é cumprida.

```js
minhaPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Usando {{JSxRef("Functions/Arrow_functions", "Arrow Function Expressions", "", 1)}} para as funções de retorno de chamada, a implementação da cadeia de promises pode ser algo assim:

```js
minhaPromise
  .then((valor) => `${valor} e barra`)
  .then((valor) => `${valor} e barra novamente`)
  .then((valor) => `${valor} e novamente`)
  .then((valor) => `${valor} e novamente`)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.error(err);
  });
```

> **Nota:** para uma execução mais rápida, todas as ações síncronas devem ser feitas preferencialmente em um manipulador, caso contrário, seriam necessários vários tiques para executar todos os manipuladores em sequência.

A condição de término de uma promise determina o estado "estabelecido" da próxima promise na cadeia. Um estado "cumprido" indica uma conclusão bem-sucedida da promise, enquanto um estado "rejeitado" indica falta de sucesso. O valor de retorno de cada promise cumprida na cadeia é passado para o próximo `.then()`, enquanto o motivo da rejeição é passado para a próxima função de tratamento de rejeição na cadeia.

As promises de uma corrente são aninhadas como bonecas russas, mas são estouradas como o topo de uma pilha. A primeira promise na cadeia está mais profundamente aninhada e é a primeira a aparecer.

```plain
(promise D, (promise C, (promise B, (promise A))))
```

Quando um `nextValue` é uma promise, o efeito é uma substituição dinâmica. O `return` faz com que uma promise seja exibida, mas a promise `nextValue` é colocada em seu lugar. Para o aninhamento mostrado acima, suponha que `.then()` associado a "promise B" retorne um `nextValue` de "promise X". O aninhamento resultante ficaria assim:

```plain
(promise D, (promise C, (promise X)))
```

Uma promise pode participar de mais de um aninhamento. Para o código a seguir, a transição de `promiseA` para um estado "settled" fará com que ambas as instâncias de `.then()` sejam invocadas.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

Uma ação pode ser atribuída a uma promise já "estabelecida". Nesse caso, a ação (se apropriado) será executada na primeira oportunidade assíncrona. Observe que as promises são garantidas como assíncronas. Portanto, uma ação para uma promise já "estabelecida" ocorrerá somente depois que a pilha for limpa e um tique-taque do relógio passar. O efeito é muito parecido com `setTimeout(action,10)`.

```js
const promiseA = new Promise((resoluçãoFunc, rejeiçãoFunc) => {
  resoluçãoFunc(777);
});
// Neste ponto, "promiseA" já está liquidado.
promiseA.then((val) => console.log("log assíncrono tem val:", val));
console.log("log imediato");

// produz saída nesta ordem:
// registro imediato
// registro assíncrono tem valor: 777
```

### Thenables

O ecossistema JavaScript fez várias implementações do Promise muito antes de se tornar parte da linguagem. Apesar de serem representados de forma diferente internamente, no mínimo, todos os objetos do tipo Promise implementam a interface _Thenable_. Um thenable implementa o método [`.then()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), que é chamado com dois retornos de chamada: um para quando a promise é cumprida, um para quando for rejeitado. Promises também são possíveis.

Para interoperar com as implementações de Promise existentes, a linguagem permite o uso de thenables no lugar de promises. Por exemplo, [`Promise.resolve`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) não apenas resolverá as promises, mas também rastreará os entãoables.

```js
const aThenable = {
  then(onFulfilled, onRejected) {
    onCumprido({
      // O thenable é preenchido com outro thenable
      then(onFulfilled, onRejected) {
        onCumprido(42);
      },
    });
  },
};

Promise.resolve(aThenable); // Uma promise cumprida com 42
```

### Rastreamento de objetos de configurações incumbentes

Um objeto de configurações é um [ambiente](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) que fornece informações adicionais quando o código JavaScript está em execução. Isso inclui o mapa do domínio e do módulo, bem como informações específicas do HTML, como a origem. O objeto de configurações incumbente é rastreado para garantir que o navegador saibas qual usar para um determinado pedaço de código de usuário.

Para melhor visualizar isso, podemos dar uma olhada mais de perto em como o reino pode ser um problema. Um **reino** pode ser pensado aproximadamente como o objeto global. O que é único sobre os realms é que eles contêm todas as informações necessárias para executar o código JavaScript. Isso inclui objetos como [`Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) e [`Error`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error). Cada objeto de configurações tem sua própria "cópia" e não são compartilhados. Isso pode causar algum comportamento inesperado em relação às promises. Para contornar isso, rastreamos algo chamado **objeto de configurações incumbentes**. Isso representa informações específicas do contexto do código do usuário responsável por uma determinada chamada de função.

Para ilustrar isso um pouco mais, podemos dar uma olhada em como um [`<iframe>`](/pt-BR/docs/Web/HTML/Element/iframe) embutido em um documento se comunica com seu host. Como todas as APIs da Web estão cientes do objeto de configurações incumbente, o seguinte funcionará em todos os navegadores:

```html
<!doctype html> <iframe></iframe>
<!-- temos um reino aqui -->
<script>
  // temos um reino aqui também
  const bound = frames[0].postMessage.bind(frames[0], "alguns dados", "*");
  // bound é uma função embutida — não há usuário
  // código na pilha, então qual reino usamos?
  setTimeout(limite);
  // isso ainda funciona, porque usamos o mais novo
  // reino (o titular) na pilha
</script>
```

O mesmo conceito se aplica às promises. Se modificarmos um pouco o exemplo acima, obtemos isso:

```html
<!doctype html> <iframe></iframe>
<!-- temos um reino aqui -->
<script>
  // temos um reino aqui também
  const bound = frames[0].postMessage.bind(frames[0], "alguns dados", "*");
  // bound é uma função incorporada — não há usuário
  // código na pilha — qual reino usamos?
  Promise.resolve(undefined).then(bound);
  // isso ainda funciona, porque usamos o mais novo
  // reino (o titular) na pilha
</script>
```

Se alterarmos isso para que o `<iframe>` no documento esteja ouvindo as mensagens de postagem, podemos observar o efeito do objeto de configurações incumbente:

```html
<!-- y.html -->
<!doctype html>
<iframe src="x.html"></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "alguns dados", "*");
  Promise.resolve(undefined).then(bound);
</script>
```

```html
<!-- x.html -->
<!doctype html>
<script>
  window.addEventListener(
    "mensagem",
    (evento) => {
      document.querySelector("#texto").textContent = "olá";
      // este código será executado apenas em navegadores que rastreiam o objeto de configurações incumbente
      console.log(evento);
    },
    falso,
  );
</script>
```

No exemplo acima, o texto interno do `<iframe>` será atualizado somente se o objeto de configurações incumbente for rastreado. Isso porque, sem rastrear o titular, podemos acabar usando o ambiente errado para enviar a mensagem.

> **Nota:** atualmente, o rastreamento de realm incumbente é totalmente implementado no Firefox e tem implementações parciais no Chrome e no Safari.

## Construtor

- {{jsxref("Promise/Promise", "Promise()")}}
  - : Cria um novo objeto `Promise`. O construtor é usado principalmente para encapsular funções que ainda não suportam promises.

## Métodos estáticos

- {{JSxRef("Promise.all", "Promise.all(iterable)")}}

  - : Aguarde que todas as promises sejam cumpridas ou que alguma seja rejeitada.

    Se a promise retornada for cumprida, ela será cumprida com uma matriz de agregação dos valores das promises cumpridas, na mesma ordem definida no iterável de várias promises.

    Se for rejeitado, será rejeitado com o motivo da primeira promise no iterável que foi rejeitada.

- {{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}

  - : Aguarde até que todas as promises sejam resolvidas (cada uma pode cumprir ou rejeitar).

    Retorna uma Promise que cumpre depois que todas as promises fornecidas são cumpridas ou rejeitadas, com uma matriz de objetos que descrevem o resultado de cada promise.

- {{JSxRef("Promise.any", "Promise.any(iterable)")}}
  - : Pega um iterável de objetos Promise e, assim que uma das promises do iterável é cumprida, retorna uma única promise que cumpre com o valor dessa promise.
- {{JSxRef("Promise.race", "Promise.race(iterable)")}}

  - : Aguarde até que alguma das promises seja cumprida ou rejeitada.

    Se a promise retornada for cumprida, ela será cumprida com o valor da primeira promise no iterável que foi cumprida.

    Se for rejeitado, será rejeitado com o motivo da primeira promise que foi rejeitada.

- {{JSxRef("Promise.reject", "Promise.reject(reason)")}}
  - : Retorna um novo objeto `Promise` que é rejeitado com o motivo fornecido.
- {{JSxRef("Promise.resolve", "Promise.resolve(value)")}}

  - : Retorna um novo objeto `Promise` que é resolvido com o valor fornecido. Se o valor for um thenable (ou seja, tem um método `then`), a promise retornada "seguirá" esse thenable, adotando seu estado eventual; caso contrário, a promise devolvida será cumprida com o valor.

    Geralmente, se você não sabe se um valor é uma promise ou não, {{JSxRef("Promise.resolve", "Promise.resolve(value)")}} e trabalhe com o valor de retorno como uma promise.

## Métodos de instância

Consulte o [Guia do Microtask](/pt-BR/docs/Web/API/HTML_DOM_API/Microtask_guide) para saber mais sobre como esses métodos usam a fila e os serviços do Microtask.

- {{jsxref("Promise.prototype.catch()")}}
  - : Anexa um retorno de chamada do manipulador de rejeição à promise e retorna uma nova promise resolvendo o valor de retorno do retorno de chamada se for chamado ou seu valor de cumprimento original se a promise for cumprida.
- {{jsxref("Promise.prototype.then()")}}
  - : Anexa manipuladores de cumprimento e rejeição à promise e retorna uma nova promise resolvendo o valor de retorno do manipulador chamado ou seu valor estabelecido original se a promise não foi tratada (ou seja, se o manipulador relevante `onFulfilled` ou `onRejected` não é uma função).
- {{jsxref("Promise.prototype.finally()")}}
  - : Anexa um manipulador à promise e retorna uma nova promise que é resolvida quando a promise original é resolvida. O manipulador é chamado quando a promise é liquidada, seja cumprida ou rejeitada.

## Exemplos

### Exemplo básico

```js
const minhaPrimeiraPromise = new Promise((resolve, reject) => {
  // Chamamos resolve(...) quando o que estávamos fazendo de forma assíncrona foi bem-sucedido e reject(...) quando falhou.
  // Neste exemplo, usamos setTimeout(...) para simular código assíncrono.
  // Na realidade, você provavelmente estará usando algo como XHR ou uma API HTML.
  setTimeout(() => {
    resolve("Sucesso!"); // Yay! Tudo ocorreu bem!
  }, 250);
});

minhaPrimeiraPromise.then((mensagem de sucesso) => {
  // successMessage é o que passamos na função resolve(...) acima.
  // Não precisa ser uma string, mas se for apenas uma mensagem de sucesso, provavelmente será.
  console.log(`Yay! ${successMessage}`);
});
```

### Exemplo com diversas situações

Este exemplo mostra diversas técnicas para usar os recursos do Promise e diversas situações que podem ocorrer. Para entender isso, comece rolando até a parte inferior do bloco de código e examine a cadeia de promises. Após o fornecimento de uma promise inicial, uma cadeia de promises pode seguir. A cadeia é composta de chamadas `.then()`, e normalmente (mas não necessariamente) tem um único `.catch()` no final, opcionalmente seguido por `.finally()`. Neste exemplo, a cadeia de promises é iniciada por uma construção `new Promise()` escrita sob medida; mas, na prática, as cadeias de promises geralmente começam com uma função de API (escrita por outra pessoa) que retorna uma promise.

A função de exemplo `tetheredGetNumber()` mostra que um gerador de promise utilizará `reject()` ao configurar uma chamada assíncrona, ou dentro do call-back, ou ambos. A função `promiseGetWord()` ilustra como uma função de API pode gerar e retornar uma promise de maneira independente.

Observe que a função `troubleWithGetNumber()` termina com um `throw`. Isso é forçado porque uma cadeia de promises passa por todas as promises `.then()`, mesmo após um erro, e sem o `throw`, o erro pareceria "corrigido". Isso é um aborrecimento, e por esta razão, é comum omitir `rejectionFunc` em toda a cadeia de promises `.then()`, e ter apenas um único `rejectionFunc` no `catch()` final.

Este código pode ser executado em NodeJS. A compreensão é aprimorada ao ver os erros realmente ocorrerem. Para forçar mais erros, altere os valores de `threshold`.

```js
// Para experimentar o tratamento de erros, os valores "threshold" causam erros aleatoriamente
const THRESHOLD_A = 8; // pode usar zero 0 para garantir o erro

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Muito grande: ${value}`);
    }
  }, 500);
}

function determinaParidade(valor) {
  const isOdd = valor % 2 === 1;
  return { valor, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Problema para obter o número", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Ainda muito grande: ${valor}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "ímpar" : "par";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Recebido: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Já havia tratado o erro anteriormente");
    } else {
      console.error(`Problema com promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("Tudo pronto"));
```

### Exemplo Avançado

Este pequeno exemplo mostra o mecanismo of a `Promise`. O método `testPromise()` é chamado cada vez que o {{HTMLElement("button")}} é clicado. Ele cria uma promise que será cumprida, usando {{domxref("setTimeout()")}}, para a contagem de promises (número começando em 1) a cada 1-3 segundos, aleatoriamente. O construtor `Promise()` é usado para criar a promise.

O cumprimento da promise é registrado, por meio de um callback de cumprimento definido usando {{JSxRef("Promise.prototype.then()","p1.then()")}}. Alguns logs mostram como a parte síncrona do método é dissociada da conclusão assíncrona da promise.

Ao clicar no botão várias vezes em um curto espaço de tempo, você verá até as diferentes promises sendo cumpridas uma após a outra.

#### HTML

```html
<button id="make-promise">Faça uma promise!</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";

let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  const log = document.getElementById("log");
  // começar
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Iniciado<br>`);
  // Fazemos uma nova promise: prometemos uma contagem numérica dessa promise,
  // a partir de 1 (após esperar 3s)
  const p1 = new Promise((resolve, reject) => {
    // A função executora é chamada com a habilidade
    // para resolver ou rejeitar a promise
    log.insertAdjacentHTML(
      "beforeend",
      `${thisPromiseCount}) Construtor de promise<br>`,
    );
    // Este é apenas um exemplo para criar assincronismo
    setTimeout(
      () => {
        // Nós cumprimos a promise
        resolve(thisPromiseCount);
      },
      Math.random() * 2000 + 1000,
    );
  });

  // Definimos o que fazer quando a promise é resolvida com a chamada then(),
  // e o que fazer quando a promise é rejeitada com a chamada catch()
  p1.then((val) => {
    // Registra o valor de atendimento
    log.insertAdjacentHTML("beforeend", `${val}) Promise cumprida<br>`);
  }).catch((reason) => {
    // Registra o motivo da rejeição
    console.log(`Manuseie a promise rejeitada (${reason}) aqui.`);
  });
  // fim
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise feita<br>`);
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
```

#### Resultado

{{EmbedLiveSample("Advanced_Example", "500", "200")}}

### Carregando uma imagem com XHR

Outro exemplo simples usando `Promise` e {{domxref("XMLHttpRequest")}} para carregar uma imagem está disponível no MDN GitHub [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test). Você também pode [ver em ação](https://mdn.github.io/js-examples/promises-test/). Cada etapa é comentada e permite acompanhar de perto a arquitetura Promise e XHR.

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- [Polyfill de `Promise` em `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Usando promises](/pt-BR/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ especificação](https://promisesaplus.com/)
- [Promises JavaScript: uma introdução](https://web.dev/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
