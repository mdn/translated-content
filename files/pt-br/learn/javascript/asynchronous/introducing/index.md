---
title: Introdução ao JavaScript Async
slug: Learn/JavaScript/Asynchronous/Introducing
translation_of: Learn/JavaScript/Asynchronous/Introducing
original_slug: Learn/JavaScript/Asynchronous/Introdução
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Concepts", "Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous")}}Neste artigo nós recapitulamos brevemente os problemas que são associados com o JavaScript síncrono, e dar uma primeira olhada em algumas das diferentes técnicas assíncronas que você vai encontrar, mostrando como elas podem nos ajudar a resolver tais problemas.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos de informática e sobre os fundamentos do
        JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Ganhar familiaridade com o que é o Js assíncrono e como ele se difere do
        Js síncrono.
      </td>
    </tr>
  </tbody>
</table>

## JavaScript síncrono

Para entendermos o que é o **{{Glossary("asynchronous")}}** JavaScript, nós primeiro temos que ter certeza que entedemos o que é o **{{Glossary("synchronous")}}** JavaScript. Essa seção revê um pouco das informações que nós vimos no artigo anterior.

Muitas das funcionalidades que nós vimos em áreas anteriores são síncronas — você executa um código, e o reultado é retornado assim que o navegador puder. Vamos ver um exemplo simples ([veja aqui](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/basic-function.html), e [veja o código fonte](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/basic-function.html)):

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Você clicou em mim!');

  let pElem = document.createElement('p');
  pElem.textContent = 'Este é um novo parágrafo adicionado';
  document.body.appendChild(pElem);
});
```

Neste bloco, as linhas são executadas uma após a outra:

1. Nós damos referência à um elemento {{htmlelement("button")}} que já está disponível na DOM.
2. Nós adicionamos um evento de [`click`](/en-US/docs/Web/API/Element/click_event), e quando ele for clicado ele fará o seguinte:

    1. Mostrar uma mensagem no [`alert()`](/en-US/docs/Web/API/Window/alert).
    2. Uma vez que o alert for dispensado, nós criamos um elemento {{htmlelement("p")}}.
    3. Depois nós o preenchemos com um texto.
    4. E finalmente, o adicionamos no body.

Enquanro cada operação é processada, nada mais pode acontecer — a renderização é pausada. Isso acontece porque o JavaScript opera em uma única thread ([JavaScript é single threaded](/pt-BR/docs/Learn/JavaScript/Asynchronous/Concepts#JavaScript_is_single_threaded)). Apenas uma coisa pode acontecer por vez, em uma única thread principal, e tudo é bloqueado até que a operação seja concluída.

Então, no exemplo acima, depois que você tenha clicado no botão, o parágrafo não vai aparecer até que o botão OK do alert seja pressionado. Tente isso com o botão a seguir:

```html hidden
<button>Clique em mim</button>
```

{{EmbedLiveSample('Synchronous_JavaScript', '100%', '70px')}}

> **Nota:** É importante lembrar que, mesmo sendo muito útil para demonstar uma situação de blocking, o [`alert()`](/en-US/docs/Web/API/Window/alert) não é de bom uso em aplicativos reais.

## Asynchronous JavaScript

Por razões esclarecidas anteriormente (e.g. relativas ao blocking), muitas funcionalidades de APIs da Web agora usam código assíncrono na execução, especialmente aquelas que acessam ou buscam algum tipo de recurso de um dispositivo externo, como pegar um arquivo da rede, acessar um banco de dados e retornar dados dele, acessar uma stream de uma web cam, ou transmitir uma tela para um dispositivo VR.

Por que é tão difícil trabalhar com isso usando códigos síncronos? Vamos dar uma olhada em um exemplo rápido. Quando você pega uma imagem de um servidor, você não pode retornar o resultado imediatamente. Isso significa que o pseudocódigo a seguir não poderia funcionar:

```js
let resposta = fetch('myImage.png');
let blob = resposta.blob();
// Mostra sua imagem na UI
```

Isso acontece por que você não sabe quanto tempo a imagem levará para ser baixada, então quando você executar a segunda linha, ela vai resultar em um erro (provalvelmente sempre) porque a `resposta` não estará disponível ainda. Você precisa que o seu código espere até que a `resposta` seja retornada antes de fazer algo com ela.

Existem dois tipos principais de estilo de código assíncrono que você encontrará no código JavaScript, as callbacks com um estilo old-school e código em um estilo das promises mais recente. Nas seções abaixo, revisaremos cada um deles por vez.

## Callbacks assíncronas

Callback são funções que são passada como parâmetros na chamada de outra função que vai executar código por trás do panos. Quando esse código por trás dos panos terminar de ser executado, a função callback será chamada para te informar que a tarefa foi finalizada ou que algo do seu interesse aconteceu. O uso das callbacks é um pouco antiquado agora, mas você ainda pode vê-las em um número de APIs comumente usadas.

Um exemplo de uma callback async é o segundo parâmetro do método {{domxref("EventTarget.addEventListener", "addEventListener()")}} (como vimos em ação anteriormente):

```js
btn.addEventListener('click', () => {
  alert('Você clicou em mim!');

  let pElem = document.createElement('p');
  pElem.textContent = 'Este é um novo parágrafo.';
  document.body.appendChild(pElem);
});
```

O primeiro parâmetro é o tipo de evento a ser executado e o segundo parâmetro é uma função callback que é chamada quando o evento é disparado.

Quando passamos uma função callback como um parâmetro em outra função, nós apenas estamos passando a rêferencia da função como argumento, ou seja, a função callback **não** **é** executada imediatamente. Ela é chamada de volta assíncronamente dentro do corpo da função que a contém, que é responsável por executar a função callback quando for necessário.

Você pode escrever a sua própria função que contém uma callback facilmente. Vamos dar uma olhada em outro exemplo que carrega uma arquivo usando a [API `XMLHttpRequest`](/pt-BR/docs/Web/API/XMLHttpRequest) ([veja aqui](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/xhr-async-callback.html), and [veja o código fonte](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/xhr-async-callback.html)):

```js
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```

Aqui nós criamos uma função `displayImage()` que simplesmente representa um blob que foi passada à ela como uma URL de objeto, e depois cria uma imagem para mostrar a URL, adicionando-a ao `<body>` do documento. Entretando, nós criamos depois uma função `loadAsset()` que pega uma callback como parâmetro, junto com uma URL a ser buscada e um tipo para o conteúdo. Ela usa o `XMLHttpRequest` (abreviação: "XHR") para buscar o recurso na URL dada, para depois passar a resposta para a callback para fazer algo com isso. Neste caso a callback está esperando o XHR terminar de baixar o recurso (usando o manipulador de eventos [`onload`](/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload)) antes de passá-lo para a callback.

Callback são versáteis — elas não apenas lhe permitem controlar a ordem em que as funções são executadas e quais dados são passados entre elas, elas também podem passar dados para diferentes funçoes dependendo das circunstâncias. Então você pode ter ações diferentes para executar na resposta baixada, como `processJSON()`, `displayText()`, etc.

Note que nem todas as callback são assíncronas — algumas são executadas de um modo síncrono. Um exemplo é quando nós usamos o método {{jsxref("Array.prototype.forEach()")}} para iterar sobre os itens de uma array ([veja aqui](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/foreach.html), e a [fonte](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/foreach.html)):

```js
const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

gods.forEach(function (eachName, index){
  console.log(index + '. ' + eachName);
});
```

Neste exemplo nós iteramos sobra uma array de Deuses Gregos e imprimos o índice e seus valores no console. O parâmetro de `forEach()` é uma callback function, que por si só toma dois parâmetros: uma refêrencia ao nome da array e e os valores dos índices. Entretanto, ela não espera por algo para fazer a execução, pois isso acontece imediatamente

## Promises

Promises são uma nova maneira de escrever código assíncrono que você verá em APIs Web modernas. Um bom exemplo disso é a API [`fetch()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch), que é basicamente uma versão mais moderna e eficiente de {{domxref("XMLHttpRequest")}}. Vamos dar uma olhada em um exemplo rápido, do nosso artigo de [Pegando dados do servidor](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data):

```js
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
  initialize();
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
```

> **Nota:** Você pode encontrar a versão finalizada no GitHub ([veja aqui](https://github.com/mdn/learning-area/blob/master/javascript/apis/fetching-data/can-store-xhr/can-script.js), e também [seja a execução](https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store-xhr/)).

Aqui nós vemos `fetch()` pegando um único parâmetro — a URL de um recurso que você quer pegar da rede — e retornando uma [promise](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise). A promise é um objeto que representa a conclusão ou falha da operação assíncrona. Ela represente um estado intermediário, por assim dizer. É praticamente o jetio do navegador de dizer "Eu prometo voltar para você com a resposta o mais rápido possível", daí o nome "promessa".

Você pode levar um tempo para se acostumar com esse conceito; Ele se parece um pouco com o {{interwiki("wikipedia", "Gato de Schrödinger")}} em ação. Nenhum dos possíveis resultados aconteceu ainda, então a operação fetch está esperando pelo resultado do navegador que vai completar a operação em algum ponto no futuro.

Nós temos três blocos de código encadeados ao fim do `fetch()`:

- Dois blocos [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then). Ambos contém uma função callback que será executada se a operação anterior for executada, então você pode fazer algo com o resultado. Cada bloco `.then()` retorna outra promise, o que significa que você pode encadear múltiplos blocos `.then()` um ao outro, para que múltiplas operações assíncronas possam ser executadas uma atrás da outra.
- O bloco [`catch()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) no final será executado em casos em que erros ocorrem quando um dos `.then()` falhe — de um modo similar aos blocos [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) síncronos, um objeto de erro fica disponível dentro do `catch()`, e pode ser usado para reportar erros que ocorreram. Note que o bloco `try...catch` não funcionará com promises, embora funcione com [async/await](/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await), como você aprenderá mais adiante.

> **Nota:** Você vai aprender mais sobre promises mais tarde no módulo, então não se preocupe se você não entendeu muito bem.

### A fila de eventos

Operações assíncronas como as promises são colocadas em uma **fila de eventos**, que é executada depois que a main thread terminar de ser processada. As operações serão completadas assim que for possível e depois retornam seus resultados para o ambiente JavaScript.

### Promises versus callbacks

As promises tem algumas semelhanças com as callbacks. Elas são basicamente um objeto retornado em que você vincula funções callback, ao invés de passar as callbacks para uma função.

Entretanto, as promises são feitas especificamente para lidarmos com operações async, e ter muitas vantagens sobre as velhas callbacks:

- Você pode encadear múltiplas operações assíncronas usando múltiplos blocos `.then()`, passando o resultado de uma delas como o resultado como parâmetro da próxima operação. Isso é muito mais difícil de se fazer usando as callback, que normalmente termina em algo chamado de [callback hell](http://callbackhell.com/).
- As callbacks das promises sempre são chamadas na ordem estrita em quesão colocadas na fila de eventos.
- O tratamento de erros é muito melhor — todos os erros são tratados por um único bloco `.catch()` no final do encadeamento, ao invés de ser tratado individualmente em cada função callback.
- Promessas evitam inversão de controle. Ao contrário das callbacks, que perdem totalmente o controle de como a função será executada quando passada para uma biblioteca de terceiros.

## A natureza do código assíncrono

Vamos explorar um exemplo que ilustra a natureza do código assíncrono, mostrando o que pode acontecer quando nós não estamos cientes da ordem de execução e dos problemas em tentar tratar código async como código síncrono. O exemplo a seguir é muito similar ao que vimos antes ([veja aqui](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/async-sync.html), e [a fonte](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync.html)). Uma diferença e que nós icluimos um número de declarações {{domxref("console.log()")}} para ilustrar na ordem que você pensa que o código fosse executado.

```js
console.log ('Starting');
let image;

fetch('coffee.jpg').then((response) => {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');
```

O navegador vai começar a executar o código, veja a primeira declaração `console.log()`(`Starting`) e a execute, e depois crie a variável `image`.

Depois a segunda linha vai começar a ser executada começando com o bloco `fetch()`, mas desde que `fetch()` é executado assíncronamente sem bloquear nada, a execução do código continua mesmo depois do código promise, alcançando a última declaração `console.log()`(`All done!`) e imprimindo a no console.

Uma vez que o bloco `fetch()` tenha terminado a sua execução e retornado seu resultado com os blocos `.then()`, nós finalmente veremos a segunda mensagem `console.log()` (`It worked :)`) appear. Então as mensagens aparecem nessa ordem:

- Starting
- All done!
- It worked :)

Se isso te deixa confuso, então considere o exemplo a seguir:

```js
console.log("registering click handler");

button.addEventListener('click', () => {
  console.log("get click");
});

console.log("all done");
```

Isso é bem similar no comportamento — a primeira e a terceira mensagens `console.log()` são mostradas imediatamente, mas a segunda está bloqueada até alguém clique no botão. O exemplo anterior funciona da mesma forma, exceto que no caso a segunda mensagem está bloqueada na promise pegando um recurso e depois o mostra na tela.

Em um exemplo mais superficial, esse tipo de configuração poderia causar um problema — você não pode incluir um bloco async que retorna um resultado, que depois depende de um código síncrono. Você não pode garantir que a função async vai retornar antes que o navegador processou o bloco síncrono.

Para ver isso em ação, tente fazer uma cópia local do [nosso exemplo](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync.html), e mudar o terceiro `console.log()` para o seguinte:

```js
console.log ('Tudo Feito! ' + image.src + 'mostrada.');
```

Agora você deve ter um erro no seu console ao invés da terceira mensagem:

```
TypeError: image is undefined; can't access its "src" property
```

Isso acontece porque o navegador tenta executar o terceiro `console.log()` e o bloco `fetch()` não terminou de ser executado e não foi dado um valor para a variável `image`.

> **Nota:** :Por razões de segurança, você não pode usar o `fetch()` com arquivos do seu sistema local (ou executar operações localmente); para executar o exemplo acima você teria que rodá-lo em um [servidor local](/pt-BR/docs/Learn/Common_questions/set_up_a_local_testing_server).

## Aprendizado ativo: faça tudo async!

Faça que o exemplo problemático de `fetch()` imprima três mensagens `console.log()` na tela na ordem desejada, você pode fazer a útima declaração `console.log()` assíncrona também. Isso pode ser feito colocando ela em outro bloco `.then()` encadeamo no final do segundo bloco, ou por simplesmente movê-lo para dentro do segundo bloco `then()`.

> **Nota:** If you get stuck, you can [find an answer here](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/async-sync-fixed.html) (see it [running live](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/async-sync-fixed.html) also). You can also find a lot more information on promises in our [Graceful asynchronous programming with Promises](/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises) guide, later on in the module.

## Conclusion

In its most basic form, JavaScript is a synchronous, blocking, single-threaded language, in which only one operation can be in progress at a time. But web browsers define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs (the passage of time, the user's interaction with the mouse, or the arrival of data over the network, for example). This means that you can let your code do several things at the same time without stopping or blocking your main thread.

Whether we want to run code synchronously or asynchronously will depend on what we're trying to do.

There are times when we want things to load and happen right away. For example when applying some user-defined styles to a webpage you'll want the styles to be applied as soon as possible.

If we're running an operation that takes time however, like querying a database and using the results to populate templates, it is better to push this off the main thread and complete the task asynchronously. Over time, you'll learn when it makes more sense to choose an asynchronous technique over a synchronous one.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Concepts", "Learn/JavaScript/Asynchronous/Timeouts_and_intervals", "Learn/JavaScript/Asynchronous")}}

## In this module

- [General asynchronous programming concepts](/pt-BR/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introducing asynchronous JavaScript](/pt-BR/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Cooperative asynchronous JavaScript: Timeouts and intervals](/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Graceful asynchronous programming with Promises](/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises)
- [Making asynchronous programming easier with async and await](/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choosing the right approach](/pt-BR/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
