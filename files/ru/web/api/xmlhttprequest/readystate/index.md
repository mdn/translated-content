---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
---

{{APIRef('XMLHttpRequest')}}

**Свойство XMLHttpRequest.readyState** возвращает текущее состояние объекта XMLHttpRequest. Объект XHR может иметь следующие состояния:

| Значение | Состояние          | Описание                                                          |
| -------- | ------------------ | ----------------------------------------------------------------- |
| `0`      | `UNSENT`           | Объект был создан. Метод `open()` ещё не вызывался.               |
| `1`      | `OPENED`           | `Метод open()` был вызван.                                        |
| `2`      | `HEADERS_RECEIVED` | `Метод send()` был вызван, доступны заголовки (headers) и статус. |
| `3`      | `LOADING`          | Загрузка; `responseText` содержит частичные данные.               |
| `4`      | `DONE`             | Операция полностью завершена.                                     |

- UNSENT
  - : Объект XMLHttpRequest был создан, но метод `open()` ещё не вызывался.
- OPENED
  - : Был вызван метод open(). На этом этапе методом [setRequestHeader()](/ru/docs/Web/API/XMLHttpRequest/setRequestHeader) могут быть установлены заголовки запроса (request headers), после чего для начала выполнения запроса может быть вызван метод [send()](/ru/docs/Web/API/XMLHttpRequest/send) .
- HEADERS_RECEIVED
  - : Был вызван метод send() и получены заголовки ответа (response headers) .
- LOADING
  - : Получена часть ответа. Если [`responseType`](/ru/docs/Web/API/XMLHttpRequest/responseType) - это пустая строка или имеет значение "text", [`responseText`](/ru/docs/Web/API/XMLHttpRequest/responseText) будет содержать загруженную порцию текста ответа.
- DONE
  - : Операция доставки данных завершена. Это может означать как то, что передача данных полностью завершена успешно, так и то, что произошла ошибка.

> **Примечание:** Названия состояний отличаются в версиях Internet Explorer ранее 11. Вместо `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING` и `DONE`, используются названия `READYSTATE_UNINITIALIZED` (0), `READYSTATE_LOADING` (1), `READYSTATE_LOADED` (2), `READYSTATE_INTERACTIVE` (3) и `READYSTATE_COMPLETE` (4).

## Пример

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState будет равно 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState будет равно 1

xhr.onprogress = function () {
  console.log("LOADING", xhr.readyState); // readyState будет равно 3
};

xhr.onload = function () {
  console.log("DONE", xhr.readyState); // readyState будет равно 4
};

xhr.send(null);
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}
