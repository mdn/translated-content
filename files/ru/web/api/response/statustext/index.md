---
title: "Response: свойство statusText"
slug: Web/API/Response/statusText
l10n:
  sourceCommit: 18234f36b082bdbdeb1177880974a3aa29a115ab
---

{{APIRef("Fetch API")}}

Доступное только для чтения свойство **`statusText`** интерфейса {{domxref("Response")}} содержит сообщение о состоянии, соответствующее коду состояния HTTP в {{domxref("Response.status")}}.

Например, сообщение будет `OK` для кода состояния `200`, `Continue` для `100`, `Not Found` для `404`.

## Значение

Строка {{jsxref("String")}}, в которой содержится сообщение о состоянии HTTP, связанное с ответом. Значение по умолчанию — "".

Смотрите [Коды состояния ответа HTTP](/ru/docs/Web/HTTP/Status) для получения списка кодов и связанных с ними сообщений о сосотоянии.
Обратите внимание, что HTTP/2 [не поддерживает](https://fetch.spec.whatwg.org/#concept-response-status-message) сообщения о состоянии.

## Примеры

В нашем примере [Fetch Response](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) ([живой пример](https://mdn.github.io/dom-examples/fetch/fetch-response/)) мы создаëм новый экземпляр объекта {{domxref("Request")}} с помощью конструктора {{domxref("Request.Request","Request()")}}, передавая ему путь к изображению.
Затем мы отправляем запрос, применяя {{domxref("fetch()")}}, извлекаем из ответа объект Blob, используя {{domxref("Response.blob")}}, создаëм объект URL с помощью {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} и отображаем результат в теге {{htmlelement("img")}}.

Заметьте, что в верхних строках блока `fetch()` мы выводим в консоль значение `statusText` из ответа.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.statusText =", response.statusText); // response.statusText = "OK"
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
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/CORS)
- [HTTP](/ru/docs/Web/HTTP)
