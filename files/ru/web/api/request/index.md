---
title: Request
slug: Web/API/Request
---

{{APIRef("Fetch")}}

`Интерфейс Request` из [Fetch API](/ru/docs/Web/API/Fetch_API) является запросом ресурсов или данных.

Создать новый объект `Request` можно, используя конструктор {{domxref("Request.Request","Request()")}}, однако чаще всего встречается способ возврата объекта `Request` , как результат операции API. Например такой как service worker {{domxref("FetchEvent.request")}}.

## Конструктор

- {{domxref("Request.Request","Request()")}}
  - : Создаёт новый `Request` объект.

## Параметры

- {{domxref("Request.cache")}} {{readonlyInline}}
  - : Содержит кешированное состояние запроса (напр., `default`, `reload`, `no-cache`).
- {{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}
  - : Содержит контекст запроса (напр., `audio`, `image`, `iframe`, и т.д..)
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : Содержит данные идентификации запроса (напр., `"omit"`, `"same-origin"`, `"include"`). Значение по умолчанию: `"same-origin"`.
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : Возвращает строку из {{domxref("RequestDestination")}} enum, описывая назначение запроса. Это строка, указывающая тип запрошенных данных.
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : Содержит назначенный {{domxref("Headers")}} объект запроса (заголовки).
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : Содержит "[subresource integrity](/ru/docs/Web/Security/Subresource_Integrity)" значение запроса (напр., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.method")}} {{readonlyInline}}
  - : Содержит метод запроса (`GET`, `POST`, и т.д.)
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : Содержит режим запроса (напр., `cors`, `no-cors`, `same-origin`, `navigate`.)
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : Содержит режим перенаправления. Может быть одним из следующих: `follow`, `error`, или `manual`.
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : Содержит значение "referrer" ("ссылающийся") запроса (например., `client`).
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : Содержит политику "ссылающегося" данного запроса (e.g., `no-referrer`).
- {{domxref("Request.url")}} {{readonlyInline}}
  - : Содержит URL запроса.

`Request` имплементирует {{domxref("Body")}}, таким образом наследуя следующие параметры:

- {{domxref("Body.body", "body")}} {{readonlyInline}}
  - : Простой getter используемый для раскрытия {{domxref("ReadableStream")}} "тела" (body) содержимого.
- {{domxref("Body.bodyUsed", "bodyUsed")}} {{readonlyInline}}
  - : Хранит {{domxref("Boolean")}}, декларирующее использовалось ли "тело" ранее в ответе.

## Методы

- {{domxref("Request.clone()")}}
  - : Создаёт копию текущего `Request` объекта.

`Request` имплементирует {{domxref("Body")}}, таким образом наследуя следующие параметры:

- {{domxref("Body.arrayBuffer()")}}
  - : Возвращает промис, который выполняется, возвращая {{domxref("ArrayBuffer")}} репрезентацию тела запроса.
- {{domxref("Body.blob()")}}
  - : Возвращает promise
- {{domxref("Body.formData()")}}
  - : Возвращает promise который разрешается с помощью {{domxref("FormData")}} представления тела запроса.
- {{domxref("Body.json()")}}
  - : Returns a promise that resolves with a {{domxref("JSON")}} representation of the request body.
- {{domxref("Body.text()")}}
  - : Returns a promise that resolves with an {{domxref("USVString")}} (text) representation of the request body.

> **Примечание:** The {{domxref("Body")}} functions can be run only once; subsequent calls will resolve with empty strings/ArrayBuffers.

## Examples

In the following snippet, we create a new request using the `Request()` constructor (for an image file in the same directory as the script), then return some property values of the request:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
```

You could then fetch this request by passing the `Request` object in as a parameter to a {{domxref("WindowOrWorkerGlobalScope.fetch()")}} call, for example:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

In the following snippet, we create a new request using the `Request()` constructor with some initial data and body content for an api request which need a body payload:

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> **Примечание:** Типом тела может быть только {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} или {{domxref("ReadableStream")}} поэтому, для добавления объекта JSON в полезную нагрузку вам необходимо структурировать этот объект.

Вы можете получить этот запрос API, передав объект Request в качестве параметра для вызова {{domxref("WindowOrWorkerGlobalScope.fetch()")}}, например, и получить ответ:

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Что-то пошло не так на API сервере.");
    }
  })
  .then((response) => {
    console.debug(response);
    // ...
  })
  .catch((error) => {
    console.error(error);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Читай также

- [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ru/docs/Web/HTTP)
