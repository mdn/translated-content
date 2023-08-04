---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
---

{{APIRef('XMLHttpRequest')}}

Доступное только для чтения свойство **`XMLHttpRequest.status`**, возвращает числовой [код состояния](/ru/docs/Web/HTTP/Status) HTTP ответа `XMLHttpRequest`.

До завершения запроса значение `status` равно 0. Браузеры также сообщают о состоянии 0 в случае ошибок `XMLHttpRequest`.

## Пример

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT: ", xhr.status);

xhr.open("GET", "/server");
console.log("OPENED: ", xhr.status);

xhr.onprogress = function () {
  console.log("LOADING: ", xhr.status);
};

xhr.onload = function () {
  console.log("DONE: ", xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## Спецификации

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- Список [HTTP response codes](/ru/docs/Web/HTTP/Response_codes)
- [HTTP](/ru/docs/Web/HTTP)
