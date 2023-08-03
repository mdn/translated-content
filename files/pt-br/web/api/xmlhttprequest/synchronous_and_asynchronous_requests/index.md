---
title: Requisições síncronas e assíncronas
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---

`XMLHttpRequest` suporta comunicações síncronas e assíncronas. No geral, entretando, requisições assíncronas devem prevalecer sobre requisições síncronas por questões de performance.

Requisições síncronas podem bloquear a execução do codigo, gerando um "congelamento" da tela, prejudicando a experiência do usuário.

## Requisição assíncrona

Se você usa `XMLHttpRequest` de uma extensão, você deveria usá-la de forma assíncrona. Neste caso, você recebe um callback quando os dados forem recebidos, o que permite que o browser continue seu trabalho normalmente enquanto sua requisição estiver sendo processada.

### Exemplo: envie um arquivo para o console de log

Esse é o exemplo mais simples de uso do `XMLHttpRequest assíncrono.`

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
```

A Linha 2 define o terceiro parâmetro como true, indicando que a requisição deve ser tratada assincronamente.

A Linha 3 cria um objeto função do tipo _event handler_ e atribui ele ao atributo **onload** da requisição.

Na LInha 4, Este _handler_ verifica o estado da requisição, através da variável _readyState,_ para ver se a transação está completa, e se o status do HTTP é 200. Em caso positivo lê o conteúdo recebido. Se um erro ocorrer, uma mensagem de erro será exibida no console.

A requisição é, de fato, realizada na Linha 15. A rotina de _callback_ é invocada quando o estado da requisição muda.

### Exemplo: Criando uma função standard para ler arquivos externos

Em alguns casos, você pode precisar ler muitos arquivos externos. Esta é uma função padrão que utiliza o objeto `XMLHttpRequest` de forma assíncrona para alternar o conteúdo do arquivo legível para um listener especificado.

```js
function xhrSuccess() {
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(
  sURL,
  fCallback /*, argumentToPass1, argumentToPass2, etc. */,
) {
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}
```

Uso:

```js
function showMessage(sMsg) {
  alert(sMsg + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

A assinatura da função _**loadFile**_ declara (i) uma URL de destino que será lida (via HTTP GET), (ii) uma função de callback para executar na conclusão bem-sucedida da instância xhr, e (iii) uma lista opcional de argumentos adicionais que são "passados através" do objeto XHR caso a função de callback seja bem-sucedida.

A linha 1 declara uma função que será invocada quando a operação XHR for completada com sucesso. Isso, por sua vez, invoca uma função de callback especificada na invocação da função loadFile (neste caso, a função showMessage) que foi atribuída a propriedade do objeto XHR (Linha 7). Os argumentos adicionais (caso existam) fornecem a invocação da função loadFile são "aplicados" para a execução da função de callback..

A linha 3 declara uma função que será invocada quando a operação XHR não for completada com sucesso.

A linha 7 define no objeto XHR the success callback function given as the second argument to loadFile.

Line 8 slices the arguments array given to the invocation of loadFile. Starting with the third argument, all remaining arguments are collected, assigned to the arguments property of the variable oReq, passed to the success callback function xhrSuccess., and ultimately supplied to the callback function (in this case, showMessage) which is invoked by function xhrSuccess.

Line 9 designates the function xhrSuccess as the callback to be invoked when the onload event fires, that is, when the XHR sucessfully completes.

Line 10 designates the function xhrError as the callback to be invoked when the XHR requests fails to complete.

Line 11 specifies `true` for its third parameter to indicate that the request should be handled asynchronously.

Line 12 actually initiates the request.

### Example: using a timeout

You can use a timeout to prevent hanging your code forever while waiting for a read to occur. This is done by setting the value of the `timeout` property on the `XMLHttpRequest` object, as shown in the code below:

```js
function loadFile(sUrl, timeout, callback) {
  var args = arguments.slice(3);
  var xhr = new XMLHttpRequest();
  xhr.ontimeout = function () {
    console.error("The request for " + url + " timed out.");
  };
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}
```

Notice the addition of code to handle the "timeout" event by setting the `ontimeout` handler.

Usage:

```js
function showMessage(sMsg) {
  alert(sMsg + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

Here, we're specifying a timeout of 2000 ms.

> **Nota:** Support for `timeout` was added in Gecko 12.0.

## Synchronous request

> **Nota:** Starting with Gecko 30.0, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.

Em casos raros, o uso do método síncrono é preferível ao invés do método assíncrono.

### Example: HTTP synchronous request

This example demonstrates how to make a simple synchronous request.

```js
var request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

Line 3 sends the request. The `null` parameter indicates that no body content is needed for the `GET` request.

Line 5 checks the status code after the transaction is completed. If the result is 200 — HTTP's "OK" result — the document's text content is output to the console.

### Example: Synchronous HTTP request from a `Worker`

One of the few cases in which a synchronous request does not usually block execution is the use of `XMLHttpRequest` within a [`Worker`](/pt-BR/DOM/Worker).

**`example.html`** (the main page):

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MDN Example</title>
    <script type="text/javascript">
      var worker = new Worker("myTask.js");
      worker.onmessage = function (event) {
        alert("Worker said: " + event.data);
      };

      worker.postMessage("Hello");
    </script>
  </head>
  <body></body>
</html>
```

**`myFile.txt`** (the target of the synchronous [`XMLHttpRequest`](/pt-BR/DOM/XMLHttpRequest) invocation):

```
Hello World!!
```

**`myTask.js`** (the [`Worker`](/pt-BR/DOM/Worker)):

```js
self.onmessage = function (event) {
  if (event.data === "Hello") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false); // synchronous request
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> **Nota:** The effect, because of the use of the `Worker`, is however asynchronous.

It could be useful in order to interact in background with the server or to preload some content. See [Using web workers](/En/DOM/Using_web_workers) for examples and details.

### Adapting Sync XHR usecases to the Beacon API

There are some cases in which the synchronous usage of XMLHttpRequest was not replaceable, like during the [`window.onunload`](/pt-BR/DOM/window.onunload) and [`window.onbeforeunload`](/pt-BR/DOM/window.onbeforeunload) events. The [navigator.sendBeacon](/pt-BR/docs/Web/API/Navigator/sendBeacon) API can support these usecases typically while delivering a good UX.

The following example (from the [sendBeacon docs](/pt-BR/docs/Web/API/Navigator/sendBeacon)) shows a theoretical analytics code that attempts to submit data to a server by using a synchronous XMLHttpRequest in an unload handler. This results in the unload of the page to be delayed.

```js
window.addEventListener("unload", logData, false);

function logData() {
  var client = new XMLHttpRequest();
  client.open("POST", "/log", false); // third parameter indicates sync xhr. :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

Using the **`sendBeacon()`** method, the data will be transmitted asynchronously to the web server when the User Agent has had an opportunity to do so, **without delaying the unload or affecting the performance of the next navigation.**

The following example shows a theoretical analytics code pattern that submits data to a server using the by using the **`sendBeacon()`** method.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## See also

- [`XMLHttpRequest`](/pt-BR/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [AJAX](/pt-BR/docs/AJAX)
- [`navigator.sendBeacon`](/pt-BR/docs/Web/API/Navigator/sendBeacon)
