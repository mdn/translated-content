---
title: "Response: свойство type"
slug: Web/API/Response/type
l10n:
  sourceCommit: 18234f36b082bdbdeb1177880974a3aa29a115ab
---

{{APIRef("Fetch API")}}

Доступное только для чтения свойство **`type`** интерфейса {{domxref("Response")}} содержит тип ответа.
Его возможные значения:

- `basic`: Стандартный ответ того же источника со всеми заголовками, за исключением "Set-Cookie".
- `cors`: Ответ был получен от корректного кросс-доменного запроса. Возможен доступ к [к некоторым заголовкам и телу](https://fetch.spec.whatwg.org/#concept-filtered-response-cors).
- `error`: Сетевая ошибка. Нет полезной информации, описывающей ошибку. Статус ответа — 0, заголовки пусты и неизменяемы. Это тип ответа, получаемого из `Response.error()`.
- `opaque`: Ответ на [запрос с параметром `mode: "no-cors"`](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque) к кросс-доменному ресурсу. Статус ответа — 0, заголовки и тело пустые.
- `opaqueredirect`: Ответ на запрос с параметром `redirect: "manual"`. Статус ответа — 0, заголовки и тело пустые.

> [!NOTE]
> Ответ "error" фактически никогда не вернётся, такой ответ от {{domxref("fetch()")}} приведёт к отклонению промиса.

## Значение

Строка `ResponseType`, указывающая на тип ответа.

## Примеры

В нашем примере [Fetch Response](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) ([живой пример](https://mdn.github.io/dom-examples/fetch/fetch-response/)) мы создаëм новый экземпляр объекта {{domxref("Request")}} с помощью конструктора {{domxref("Request.Request","Request()")}}, передавая ему путь к изображению.
Затем мы отправляем запрос, применяя {{domxref("fetch()")}}, извлекаем из ответа объект Blob, используя {{domxref("Response.blob")}}, создаëм объект URL с помощью {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} и отображаем результат в теге {{htmlelement("img")}}.

Заметьте, что в верхних строках блока `fetch()` мы выводим в консоль значение `type` из ответа.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.type =", response.type); // response.type = 'basic'
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [ServiceWorker API](/ru/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ru/docs/Web/HTTP)
