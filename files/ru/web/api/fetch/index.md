---
title: WindowOrWorkerGlobalScope.fetch()
slug: Web/API/fetch
---

{{APIRef("Fetch API")}}

Метод **`fetch()`** , относящийся к миксину {{domxref("WindowOrWorkerGlobalScope")}}, запускает процесс извлечения ресурса из сети. Возвращает promise, содержащий {{domxref("Response")}} объект (ответ на запрос).

`WorkerOrGlobalScope` относится к {{domxref("Window")}} и {{domxref("WorkerGlobalScope")}} сразу. Это означает, что метод `fetch()` доступен практически в любом контексте, в котором бы вы не захотели получить ресурсы.

Промис {{domxref("WindowOrWorkerGlobalScope.fetch","Fetch()")}} завершается {{jsxref("TypeError")}}, если возникает сетевая ошибка, хотя обычно это означает проблему с доступами или аналогичную ей. Для успешного завершения `fetch()` достаточно удостовериться в том, что промис выполнен и что свойство {{domxref("Response.ok")}} имеет значение `true`. HTTP статус 404 не является сетевой ошибкой.

Метод `fetch()` контролируется директивой `connect-src` directive of [Content Security Policy](/ru/docs/Security/CSP/CSP_policy_directives) (политика безопасности контента), а не директивой ресурсов, которые извлекает.

> **Примечание:** Аргументы метода `fetch()` идентичны аргументам {{domxref("Request.Request","Request()")}} конструктора.

## Синтаксис

```
Promise<Response> fetch(input[, init]);
```

### Аргументы

- _input_

  - : Определяет желаемый для получения ресурс. Это может быть:

    - {{domxref("USVString")}} (строка), содержащая прямую URL ссылку на ресурс. Некоторые браузеры принимают `blob:` и `data:` , как схемы.
    - {{domxref("Request")}} объект (объект ответа).

- _init_ {{optional_inline}}

  - : Объект с опциями, содержащий пользовательские настройки, которые вы желаете применить к запросу. Возможные варианты:

    - `method`: Метод запроса, например, `GET`, `POST`.
    - `headers`: Заголовки, содержащиеся в объекте {{domxref("Headers")}} или в объекте литерале с побитовыми значениями ({{domxref("ByteString")}}).
    - `body`: Тело запроса, которое может быть: {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, или {{domxref("USVString")}} объектами. Обратите внимание, что `GET` или `HEAD` запрос не может иметь тела.
    - `mode`: Режим, например, `cors`, `no-cors` или `same-origin`.
    - `credentials`: Полномочия: `omit`, `same-origin` или `include`. Для автоматической отправки куки для текущего домена, эта опция должна быть указана. Начиная с Chrome 50, это свойство также принимает экземпляр класса {{domxref("FederatedCredential")}} или {{domxref("PasswordCredential")}}.
    - `cache`: Режим кеширования запроса `default`, `no-store`, `reload`, `no-cache`, `force-cache` или `only-if-cached`.
    - `redirect`: Режим редиректа: `follow` (автоматически переадресовывать), `error` (прерывать перенаправление ошибкой) или `manual` (управлять перенаправлениями вручную). В Chrome по дефолту стоит `follow` (ранее, в Chrome 47, стояло `manual`).
    - `referrer`: {{domxref("USVString")}}, определяющая `no-referrer`, `client` или a URL. Дефолтное значение - `client`.
    - `referrerPolicy`: Определяет значение HTTP заголовка реферера. Может быть: `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `unsafe-url`.
    - `integrity`: Содержит значение целостности субресурсов ([subresource integrity](/ru/docs/Web/Security/Subresource_Integrity)) запроса (например, `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
    - `keepalive`: Эта опция может быть использована, чтобы разрешить запросу "пережить" страницу. Получение ресурсов с флагом `keepalive` - это альтернатива {{domxref("Navigator.sendBeacon()")}} API.
    - `signal`: Экземпляр объекта {{domxref("AbortSignal")}}; позволяет коммуницировать с fetch запросом и, если нужно, отменять его с помощью {{domxref("AbortController")}}.

### Возвращаемое значение

{{domxref("Promise")}}, содержащий {{domxref("Response")}} объект (ответ на запрос).

### Исключения

| **Тип**      | **Описание**                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AbortError` | Запрос был отменён (используя {{domxref("AbortController.abort()")}}).                                                                                                                  |
| `TypeError`  | Начиная с версии [Firefox 43](/ru/docs/Mozilla/Firefox/Releases/43), `fetch()` завершится ошибкой `TypeError`, если URL имеет такие полномочия, как `http://user:password@example.com`. |

## Пример

В нашем [Fetch Request примере](https://github.com/mdn/fetch-examples/tree/master/fetch-request) (см. [Fetch Request live](https://mdn.github.io/fetch-examples/fetch-request/)) мы создаём новый объект {{domxref("Request")}} (запроса), используя релевантный конструктор, а затем получаем его вызовом `fetch()`. Так как запрашиваемый ресурс - изображение, для того, чтобы присвоить ему подходящий MIME тип и обработать должным образом, мы применяем к ответу метод {{domxref("Body.blob()")}}, после чего создаём для него Object URL и передаём её в элемент {{htmlelement("img")}}.

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

В нашем [Fetch with init then Request примере](https://github.com/mdn/fetch-examples/blob/master/fetch-with-init-then-request/index.html) (см. [Fetch Request init live](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)) мы делаем тоже самое, за исключением того, что передаём в качестве аргумента для `fetch()` объект init:

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg');

fetch(myRequest,myInit).then(function(response) {
  ...
});
```

Обратите внимание, что объект init в качестве аргумента можно передать и в конструктор `Request` для получения аналогичного результата, например:

```js
var myRequest = new Request("flowers.jpg", myInit);
```

Допустимо использования объекта литерала в качестве `headers` в `init`.

```js
var myInit = {
  method: "GET",
  headers: {
    "Content-Type": "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Fetch API](/ru/docs/Web/API/Fetch_API)
- [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ru/docs/Web/HTTP)
