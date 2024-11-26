---
title: "Response: свойство ok"
short-title: ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Fetch API")}}

Доступное только для чтения свойство **`ok`** объекта {{domxref("Response")}} содержит в себе значение логического типа, указывающее был ли ответ от сервера успешным (статус в диапазоне 200-299) или нет.

## Значение

Логическое значение.

## Примеры

В нашем примере [Fetch Response](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) ([живой пример](https://mdn.github.io/dom-examples/fetch/fetch-response/)) мы создаëм новый экземпляр объекта {{domxref("Request")}} с помощью конструктора {{domxref("Request.Request","Request()")}}, передавая ему путь к изображению.
Затем мы отправляем запрос, применяя {{domxref("fetch()")}}, извлекаем из ответа объект Blob, используя {{domxref("Response.blob")}}, создаëм объект URL с помощью {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} и отображаем результат в теге {{htmlelement("img")}}.

> [!NOTE]
> В верхних строчках функции `fetch()` мы выводим в консоль ответ `ok`.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // содержит true если на запрос вернулся успешный ответ
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
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
