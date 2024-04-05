---
title: "Response: свойство ok"
short-title: ok
slug: Web/API/Response/ok
---

{{APIRef("Fetch API")}}

Свойство **`ok`** это доступное только для чтения свойство объекта {{domxref("Response")}}. Оно содержит в себе значение типа Boolean, указывающее был ли ответ от сервера успешным (статус в диапазоне 200-299) или не был.

## Значение

Значение типа Boolean.

## Примеры

В нашем примере [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (см. [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
мы создаëм новый экземпляр объекта {{domxref("Request")}} используя {{domxref("Request.Request","Request()")}} конструктор, передавая ему путь к картинке формата JPG.
Затем мы отправляем запрос используя {{domxref("fetch()")}}, получаем в ответе blob объект используя {{domxref("Response.blob")}}, создаëм объект URL используя {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, и отображаем результат в теге {{htmlelement("img")}}.

> **Примечание:** в верхних строчках функции `fetch()` мы выводим в консоль значение `ok` из переменной `response`.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // содержит true если ответ запроса вернулся с успехом
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