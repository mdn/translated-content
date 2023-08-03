---
title: XMLHttpRequest.statusText
slug: Web/API/XMLHttpRequest/statusText
---

{{APIRef('XMLHttpRequest')}}

Свойство **`XMLHttpRequest.statusText`**, доступное только для чтения, возвращает строку `DOMString`, содержащую сообщение о состоянии ответа, возвращаемое HTTP-сервером. В отличие от `XMLHTTPRequest.status`, который указывает числовой код состояния, это свойство содержит текст состояния ответа, например «OK» или «Not Found». Если запрос `readyState` находится в состоянии `UNSENT` или `OPENED`, значением `statusText` будет пустая строка.

Если в ответе сервера явно не указан текст состояния, для `statusText` будет принято значение по умолчанию «ОК».

## Пример

```js
var xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = function () {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = function () {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * Outputs the following:
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- Список [HTTP response codes](/ru/docs/Web/HTTP/Response_codes)
- [HTTP](/ru/docs/Web/HTTP)
