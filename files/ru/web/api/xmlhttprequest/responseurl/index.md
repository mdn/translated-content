---
title: XMLHttpRequest.responseURL
slug: Web/API/XMLHttpRequest/responseURL
---

{{APIRef('XMLHttpRequest')}}

Свойство **`XMLHttpRequest.responseURL`** доступно только для чтения, возвращает сериализованный URL ответа или пустую строку, если URL равен `null`. Если URL возвращён, любой URL фрагмент в URL будет стёрт. Значение `responseURL` станет окончательным URL, получаемым после любых редиректов.

## Пример

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/test", true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}
