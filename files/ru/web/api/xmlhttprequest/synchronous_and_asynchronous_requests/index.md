---
title: Синхронные и асинхронные запросы
slug: Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
---

`XMLHttpRequest` поддерживает как синхронные, так и асинхронные запросы. В основном предпочтительно использовать асинхронные запросы вместо синхронных из-за соображений производительности.

Синхронный запрос приводит к выполнению кода, который "блокирует" взаимодействие с вкладкой браузера до тех пор, пока запрос не будет полностью выполнен, что существенно ухудшает отклик страницы.

## Асинхронные запросы

Если вы используете асинхронный режим `XMLHttpRequest`, то после того, как данные будут получены, будет вызвана функция обработчик. Это позволяет браузеру работать нормально пока ваш запрос будет обрабатываться.

### Пример: отправка запроса и получение файла ответа

`Приведём простейший пример асинхронного запроса XMLHttpRequest`.

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

2 строка. 3 параметр метода `open` установлен как `true` для того, чтобы явно указать, что этот запрос будет обрабатываться асинхронно.

3 строка. Создаётся функция обработчик события `onload`. Этот обработчик следить за параметром `readyState`, для того, чтобы определить завершена ли передача данных и если это так и HTTP статус 200, то полученные данные выводятся в консоль. А если в результате передачи данных возникла ошибка, то сообщение об ошибки будет выведено в консоль.

15 строка. Происходит инициализация отправки запроса. Функция обработчик будет вызываться каждый раз, как будет происходить изменения состояния данного запроса.

### Пример: создание стандартной функции для чтения внешних файлов

В разных сценариях существует необходимость принимать внешние файлы (ответ от сервера, к примеру, json файл). Это стандартная функция, которая использует
`XMLHttpRequest` объект асинхронно, чтобы передать прочитанный контент в специальную функцию обработчик.

```js
function xhrSuccess() {
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(url, callback /*, opt_arg1, opt_arg2, ... */) {
  var xhr = new XMLHttpRequest();
  xhr.callback = callback;
  xhr.arguments = Array.prototype.slice.call(arguments, 2);
  xhr.onload = xhrSuccess;
  xhr.onerror = xhrError;
  xhr.open("GET", url, true);
  xhr.send(null);
}
```

Использование:

```js
function showMessage(message) {
  console.log(message + this.responseText);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

Сигнатура вспомогательной функции `LoadFile` следующая: 1 аргумент - URL адрес для запроса (через HTTP GET), 2 аргумент - функция, которая будет вызвана после успешного выполнения ajax запроса и 3 аргумент - список аргументов, которые будут передаваться через XHR объект в функцию, которая была указана во 2 аргументе.

Строка 1 определяет функцию, которая будет вызвана, когда ajax запрос завершиться успешно. В свою очередь это вызовет функции callback, которая была указана в вызове функции `loadFile` (то есть функция `showMessage`) которая была обозначена как свойство `XHR` объекта (строка 11). Дополнительные аргументы, которые были указаны при вызове функции `loadFile`, подставляются в вызов callback функции.

Строка 5 определяет функцию, которая будет вызвана в случаи, если ajax запрос не сможет завершиться успешно.

Строка 11 сохраняет в `XHR` объекте функцию, которая будет вызвана после успешного завершения ajax запроса. (эта функция передаётся 2 аргументов в вызове функции `loadFile`).

12 строка срезает псевдомассив аргументов, который был передан при вызове функции `loadFile`. Начиная с 3 аргумента все аргументы будут хранится в массиве arguments объекта `xhr`, который передаётся в функцию `xhrSuccess` и в конечном итоге будут использованы при вызове функции `showMessage`, которая будет вызвана функцией `xhrSuccess` .

Строка 15 устанавливает `true` для 3 параметра, что явно указывает на то, что запрос будет выполняться асинхронно.

Строка 16 инициализирует запрос.

### Пример: использование timeout

При использовании асинхронных запросов, можно установить максимальное время ожидания ответа от сервера. Это делается путём установки значения свойства `timeout` `XMLHttpRequest` объекта, как показано ниже:

```js
function loadFile(url, timeout, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
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

Отметим, что в код была добавлена функция обработчик события `ontimeout`.

Использование:

```js
function showMessage(message) {
  console.log(message + this.responseText);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

2 аргумент функции `loadFile` устанавливает время ожидание равное 2000ms.

> **Примечание:** Поддержка `timeout` была добавлена начиная с Gecko 12.0.

## Synchronous request

> **Примечание:** Starting with Gecko 30.0, Blink 39.0, and Edge 13, synchronous requests on the main thread have been deprecated due to the negative effects to the user experience.

Synchronous XHR often causes hangs on the web. But developers typically don't notice the problem because the hang only manifests during poor network conditions or slow server response. Synchronous XHR is now in deprecation state. Developers are recommended to move away from the API.

All new XHR features such as `timeout` or `abort` aren't allowed for synchronous XHR. Doing so would invoke `InvalidAccessError`.

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

One of the few cases in which a synchronous request does not usually block execution is the use of `XMLHttpRequest` within a [`Worker`](/ru/docs/Web/API/Worker).

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

**`myFile.txt`** (the target of the synchronous [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) invocation):

```
Hello World!!
```

**`myTask.js`** (the [`Worker`](/ru/docs/Web/API/Worker)):

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

> **Примечание:** The effect, because of the use of the `Worker`, is however asynchronous.

It could be useful in order to interact in the background with the server or to preload some content. See [Using web workers](/ru/docs/Web/API/Web_Workers_API/Using_web_workers) for examples and details.

### Adapting Sync XHR usecases to the Beacon API

There are some cases in which the synchronous usage of XMLHttpRequest was not replaceable, like during the [`window.onunload`](/ru/docs/Web/API/WindowEventHandlers/onunload) and [`window.onbeforeunload`](/ru/docs/Web/API/WindowEventHandlers/onbeforeunload) events. You should consider using the `fetch` API with `keepalive` flag. When `fetch` with `keepalive` isn't available, you can consider using the [navigator.sendBeacon](/ru/docs/Web/API/Navigator/sendBeacon) API can support these use cases typically while delivering a good UX.

The following example (from the [sendBeacon docs](/ru/docs/Web/API/Navigator/sendBeacon)) shows a theoretical analytics code that attempts to submit data to a server by using a synchronous XMLHttpRequest in an unload handler. This results in the unloading of the page to be delayed.

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

The following example shows a theoretical analytics code pattern that submits data to a server by using the **`sendBeacon()`** method.

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## See also

- [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [AJAX](/ru/docs/Web/Guide/AJAX)
- [`navigator.sendBeacon`](/ru/docs/Web/API/Navigator/sendBeacon)
