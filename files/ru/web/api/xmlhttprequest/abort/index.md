---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
---

{{APIRef('XMLHttpRequest')}}

Метод **XMLHttpRequest.abort()** прерывает уже отправленный запрос. Когда запрос прерывается, то его свойство {{domxref("XMLHttpRequest.readyState", "readyState")}} устанавливается в `UNSENT` (0), а {{domxref("XMLHttpRequest.status", "status")}} в 0.

## Синтаксис

```
XMLHttpRequest.abort()
```

### Параметры

Нет.

### Возвращаемое значение

`undefined`

## Пример

```js
var xhr = new XMLHttpRequest(),
  method = "GET",
  url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

xhr.abort();
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
