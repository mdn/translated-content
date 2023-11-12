---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

Интерфейс **`Response`** из [Fetch API](/ru/docs/Web/API/Fetch_API) представляет собой ответ на запрос.

Вы можете создать новый экземпляр объекта `Response` используя конструктор {{domxref("Response.Response()")}}, но скорее всего вы столкнётесь с объектом `Response`, как результат какой-нибудь API операции — например, service worker {{domxref("Fetchevent.respondWith")}}, или {{domxref("WindowOrWorkerGlobalScope.fetch()")}}.

## Конструктор

- {{domxref("Response.Response","Response()")}}
  - : Создаёт новый экземпляр объекта `Response`.

## Свойства

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : Объект {{domxref("Headers")}}, который описывает заголовок ответа.
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : Булевское значение, которое указывает, выполнился ли запрос успешно или нет (то есть находится ли код ответа в диапазоне `200`–`299`).
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : Указывает, является ли результат запроса перенаправлением.
- {{domxref("Response.status")}} {{readonlyinline}}
  - : Код ответа.
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : Строка, соответствующая коду ответа (например, `OK` для кода `200`).
- {{domxref("Response.trailers")}}
  - : A {{domxref("Promise")}} resolving to a {{domxref("Headers")}} object, associated with the response with {{domxref("Response.headers")}} for values of the HTTP {{HTTPHeader("Trailer")}} header.
- {{domxref("Response.type")}} {{readonlyinline}}
  - : The type of the response (e.g., `basic`, `cors`).
- {{domxref("Response.url")}} {{readonlyinline}}
  - : The URL of the response.
- {{domxref("Response.useFinalURL")}}
  - : A boolean indicating whether this is the final URL of the response.

### Body Interface Properties

`Response` implements {{domxref("Body")}}, so it also has the following properties available to it:

- {{domxref("Body.body")}} {{readonlyInline}}
  - : A simple getter exposing a {{domxref("ReadableStream")}} of the body contents.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Stores a {{domxref("Boolean")}} that declares whether the body has been used in a response yet.

## Методы

- {{domxref("Response.clone()")}}
  - : Creates a clone of a `Response` object.
- {{domxref("Response.error()")}}
  - : Returns a new `Response` object associated with a network error.
- {{domxref("Response.redirect()")}}
  - : Creates a new response with a different URL.

### Body Interface Methods

`Response` implements {{domxref("Body")}}, so it also has the following methods available to it:

- {{domxref("Body.arrayBuffer()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with an {{domxref("ArrayBuffer")}}.
- {{domxref("Body.blob()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with a {{domxref("Blob")}}.
- {{domxref("Body.formData()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with a {{domxref("FormData")}} object.
- {{domxref("Body.json()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as {{jsxref("JSON")}}, which is a JavaScript value of datatype object, string, etc.
- {{domxref("Body.text()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with a {{domxref("USVString")}} (text).

## Примеры

### Fetching an image

In our [basic fetch example](https://github.com/mdn/fetch-examples/tree/master/basic-fetch) ([run example live](http://mdn.github.io/fetch-examples/basic-fetch/)) we use a simple `fetch()` call to grab an image and display it in an {{htmlelement("img")}} element. The `fetch()` call returns a promise, which resolves to the `Response` object associated with the resource fetch operation.

You'll notice that since we are requesting an image, we need to run {{domxref("Body.blob")}} ({{domxref("Response")}} implements Body) to give the response its correct MIME type.

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob) {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

You can also use the {{domxref("Response.Response()")}} constructor to create your own custom `Response` object:

```js
const response = new Response();
```

### Ajax запрос

Здесь мы с помощью функции doAjax вызываем PHP скрипт, который генерирует JSON строку, и возвращает распарсенный JSON в виде JavaScript объекта. Также реализована простая обработка ошибок.

```js
// Функция, которая делает Ajax запрос
const doAjax = async () => {
    const response = await fetch('Ajax.php'); // Генерируем объект Response
    if (response.ok) {
        const jVal = await response.json(); // Парсим тело ответа
        return Promise.resolve(jVal);
        }
    else
        return Promise.reject('*** PHP file not found');
    }
}

// Вызываем doAjax и выводим результат в консоль
doAjax().then(console.log).catch(console.log);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ru/docs/Web/HTTP)
