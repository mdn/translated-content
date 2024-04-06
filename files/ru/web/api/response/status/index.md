---
title: "Response: status property"
short-title: status
slug: Web/API/Response/status
l10n:
  sourceCommit: 18234f36b082bdbdeb1177880974a3aa29a115ab
---

{{APIRef("Fetch API")}}

Доступное только для чтения свойство **`status`** объекта {{domxref("Response")}} содержит [коды состояния ответа HTTP](/ru/docs/Web/HTTP/Status).

Например, `200` в случае успеха, `404` если ресурс не найден.

## Значение

Беззнаковое короткое число `unsigned short`.
Это один из [кодов состояния ответа HTTP](/ru/docs/Web/HTTP/Status).

## Примеры

В нашем примере [Fetch Response](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) ([живой пример](https://mdn.github.io/dom-examples/fetch/fetch-response/)) мы создаëм новый экземпляр объекта {{domxref("Request")}} с помощью конструктора {{domxref("Request.Request","Request()")}}, передавая ему путь к изображению.
Затем мы отправляем запрос, применяя {{domxref("fetch()")}}, извлекаем из ответа объект Blob, используя {{domxref("Response.blob")}}, создаëм объект URL с помощью {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} и отображаем результат в теге {{htmlelement("img")}}.

Заметьте, что в верхних строчках функции `fetch()` мы выводим в консоль `status`.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.status =", response.status); // response.status = 200
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
