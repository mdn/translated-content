---
title: XMLHttpRequest.responseText
slug: Web/API/XMLHttpRequest/responseText
---

{{APIRef('XMLHttpRequest')}}

Только для чтения {{domxref("XMLHttpRequest")}} свойство **`responseText`** возвращает текст ответа от сервера на отправленный запрос.

## Syntax

```
var resultText = XMLHttpRequest.responseText;
```

### Значение

Строка {{domxref("DOMString")}} содержащая либо текстовые данные, полученные при использовании `XMLHttpRequest`, либо `null` в случае, когда вопрос возвратил ошибку, или же ещё не был отослан на сервер вызовом функции {{domxref("XMLHttpRequest.send", "send()")}}.

Во время выполнения асинхронных запросов, в значении `responseText` всегда находится текущее содержимое, полученное от сервера, даже если запрос ещё не завершён, и данные от сервера не получены полностью.

Понять, что ответ получен полностью, можно когда значение {{domxref("XMLHttpRequest.readyState", "readyState")}} становится {{domxref("XMLHttpRequest.DONE", "XMLHttpRequest.DONE")}} (`4`), а значение {{domxref("XMLHttpRequest.status", "status")}} становится 200 (`"OK"`).

### Исключения

- `InvalidStateError`
  - : Возникает, когда значению {{domxref("XMLHttpRequest.responseType")}} не присвоена либо пустая строка, либо "text". Поскольку свойство `responseText` предназначено только для текстового содержимого, любое другое значение вызовет ошибку.

## Пример

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// responseType должно быть пустой строкой, либо "text"
xhr.responseType = "text";

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
