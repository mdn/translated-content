---
title: Modelo de Concorrência e Event Loop
slug: Web/JavaScript/EventLoop
tags:
  - Avançado
  - Event Loop
  - Event Management
  - Event Queue
  - Handling Events
  - JavaScript
  - events
translation_of: Web/JavaScript/EventLoop
---

{{JsSidebar("Advanced")}}

O JavaScript possui um modelo de concorrência baseado em um **event loop** ([laço de eventos](https://pt.wikipedia.org/wiki/La%C3%A7o_de_eventos)), em português), responsável pela execução do código, coleta e processamento de eventos e execução de subtarefas enfileiradas. Este modelo é bem diferente de outras linguagens, como C ou Java, por exemplo.

## Conceitos de runtime (tempo de execução)

Os próximos tópicos irão explicar teoricamente o modelo. Interpretadores modernos de JavaScript implementam e otimizam fortemente as semânticas descritas.

### Representação visual

![Stack, heap, queue](the_javascript_runtime_environment_example.svg)

### Pilha (Stack)

As chamadas de funções criam uma pilha de _frames_ (quadros).

```js
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

const baz = bar(7); // atribui 42 a baz
```

Ordem das operações:

1. Quando chamamos a função `bar`, o primeiro _frame_ é criado contendo argumentos e variáveis locais de `bar`.
2. Quando a função `bar` chama `foo`, o segundo _frame_ é criado e é colocado no topo da pilha, contendo os argumentos e as variáveis locais de `foo`.
3. Quando `foo` retorna, o _frame_ do topo é removido da pilha (deixando apenas o _frame_ da chamada de `bar`).
4. Quando `bar` retorna, a pilha fica vazia.

Note que os argumentos e variáveis locais podem continuar existindo, pois são armazenados fora da pilha — de forma que podem ser acessados por quaisquer [funções aninhadas](/en-US/docs/Web/JavaScript/Guide/Functions#nested_functions_and_closures) muito depois de sua função externa ter retornado.

### Acervo (Heap)

Os objetos são alocados em um _heap_ (acervo), que é apenas um nome para denotar uma grande região não estruturada da memória.

### Fila (Queue)

O _runtime_ do JavaScript contém uma fila de mensagens, que é uma lista de mensagens a serem processadas. Cada mensagem é associada a uma função, que é chamada para lidar com a mensagem.

Em algum ponto durante o [_event loop_ (laço de eventos)](#event_loop), o _runtime_ começa a manipular as mensagens na fila, começando pela mais antiga. Para fazer isso, a mensagem é removida da fila e sua função correspondente é chamada com a mensagem como um parâmetro de _input_ (entrada). Como de costume, chamar uma função cria um novo _frame_ (quadro) na pilha para uso dessa função.

O processamento de funções continua até que a pilha fique novamente vazia, então o _event loop_ processará a próxima mensagem na fila (se houver uma).

## Laço de Eventos (Event loop)

O **_Event loop_** tem esse nome por causa da forma que normalmente é implementado, que se assemelha a:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage` aguarda, de maneira síncrona, receber uma mensagem (se não houver nenhuma já disponível esperando para ser tratada).

### Processamento Completo ("Run-to-completion")

Cada mensagem é processada completamente antes de outra mensagem ser processada. Isso oferece um bom fundamento ao pensar sobre o seu _software_, incluindo o fato de que, independente de quando uma função é executada, ela não pode ser interrompida e, portanto, será executada por completo antes que outro código rode (e modifique dados manipuláveis pela função). Isso é diferente do C, por exemplo, no qual uma função que está sendo executada em uma _thread_ (um fluxo de execução), pode ser interrompida a qualquer momento para executar um outro código em outra _thread_.

Um aspecto negativo deste modelo é que se uma mensagem levar muito tempo para ser finalizada, a aplicação web ficará indisponível para processar as interações do usuário, como cliques ou rolagens. O navegador mitiga este problema através do aviso: "_Um script desta página pode estar ocupado, ou parou de responder_". Uma boa prática a seguir é fazer o processamento de mensagens curtas, e, se possível, dividir uma longa mensagem em múltiplas mensagens menores.

### Adicionando mensagens

Nos navegadores, as mensagens são adicionadas a qualquer momento que um evento é acionado se este possuir um _listener_ (ouvinte). Caso não haja, o evento será ignorado. Assim, um clique em um elemento com um manipulador de eventos de clique adicionará uma mensagem, como qualquer outro evento.

A função [`setTimeout`](/en-US/docs/Web/API/WindowTimers.setTimeout) é chamada com 2 argumentos: uma mensagem para adicionar à fila (queue) e um valor em tempo (opcional, o padrão é `0`). O valor de tempo (_time value_) representa o intervalo (mínimo) com que a mensagem será realmente enviada à fila. Se não houver outra mensagem na fila, a mensagem será processada logo após o intervalo. No entanto, caso haja mensagens, a mensagem `setTimeout` terá que esperar até que outras mensagens sejam processadas. Por esse motivo, o segundo argumento indica um tempo _mínimo_ e não um tempo _garantido_.

Aqui está um exemplo que demonstra esse conceito (`setTimeout` não é executado imediatamente após o temporizador expirar):

```js
const s = new Date().getSeconds();

setTimeout(function () {
  // imprime "2", o que significa que o callback não é chamado imediatamente após 500 milissegundos.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
```

### Intervalos de zero segundos

O intervalo zero não significa, necessariamente, que o _callback_ será disparado após zero milissegundos. Chamar [`setTimeout`](/en-US/docs/Web/API/setTimeout) com um intervalo de `0` (zero) milissegundos não executa a função do _callback_ após intervalo dado.

A execução depende do número de mensagens em espera na fila. No exemplo abaixo, a mensagem `''this is just a message''` será escrita no console antes que a mensagem do _callback_ seja processada, porque, como informado previamente, o intervalo definido na função indica o tempo _mínimo_ necessário para que a aplicação processe a requisição e não o tempo _exato_ de processamento.

Basicamente, `setTimeout` precisa esperar que todo o código das mensagens enfileiradas seja concluído, mesmo que você tenha especificado um tempo limite específico para o seu `setTimeout`.

```js
(function () {
  console.log("this is the start");

  setTimeout(function cb() {
    console.log("Callback 1: this is a msg from call back");
  }); // tem um valor de tempo padrão de 0

  console.log("this is just a message");

  setTimeout(function cb1() {
    console.log("Callback 2: this is a msg from call back");
  }, 0);

  console.log("this is the end");
})();

// "this is the start"
// "this is just a message"
// "this is the end"
// "Callback 1: this is a msg from call back"
// "Callback 2: this is a msg from call back"
```

### Múltiplos _runtimes_ comunicando-se em conjunto

Um _web worker_ ou um `iframe` com uma diferente origem [(cross-origin)](/pt-BR/docs/Web/HTTP/CORS) tem seu próprio _stack_, _heap_ e _queue_ de messagens. Dois _runtimes_ distintos só podem se comunicar por meio do envio de mensagens via método [`postMessage`](/pt-BR/docs/Web/API/Window/postMessage). Este método adiciona uma mensagem ao outro _runtime_, se este escutar os eventos de `message`.

## Sem bloqueio

Uma propriedade muito interessante do modelo _event loop_ é que o JavaScript, ao contrário de muitas outras linguagens, nunca bloqueia. A manipulação de E/S (_I/O_) é tipicamente realizada através de eventos e _callbacks_. Portanto, quando uma aplicação está esperando pelo retorno de uma consulta do [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) ou de uma requisição [XHR](/en-US/docs/Web/API/XMLHttpRequest), ela ainda pode processar outras coisas, como as ações do usuário.

Exceções de legado existem, como por exemplo, `alert` ou XHR síncrono, mas é considerado uma boa prática evitá-los. Tome cuidado, [exceções a exceção existem](https://stackoverflow.com/questions/2734025/is-javascript-guaranteed-to-be-single-threaded/2734311#2734311) (mas geralmente são, mais do que qualquer coisa, _bugs_ de implementação).

## Veja também

- [Event loops no HTML standard](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)
