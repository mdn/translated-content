---
title: XMLHttpRequest.responseXML
slug: Web/API/XMLHttpRequest/responseXML
---

{{APIRef('XMLHttpRequest')}}

`Свойство XMLHttpRequest.responseXML` это доступное только для чтения значение, которое содержит {{domxref("Document")}} содержащий HTML или XML полученный запросом, или `null` в случае, если запрос не был успешен, ещё не был отправлен или полученные данные не могут быть корректно обработаны как XML или HTML. Ответ обрабатывается так, как если бы это был `"text/xml"`. В случае, если {{domxref("XMLHttpRequest.responseType", "responseType")}} установлен как `"document"` и запрос был осуществлён асинхронно, ответ обрабатывается как `"text/html"`. `responseXML` содержит `null` для любых других типов данных так же, как и для [`data:` URLs](/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

> **Примечание:** Название `responseXML` это наследие истории этого свойства, на самом деле оно работает как для HTML, так и для XML.

Если сервер не определяет заголовок {{HTTPHeader("Content-Type")}} как `"text/xml"` или `"application/xml"`, вы в любом случае можете использовать {{domxref("XMLHttpRequest.overrideMimeType()")}} чтобы заставить `XMLHttpRequest` обрабатывать ответ как XML.

## Синтаксис

```
var data = XMLHttpRequest.responseXML;
```

### Значение

{{domxref("Document")}} содержащий древовидный результат обработки XML или HTML, полученных с использованием {{domxref("XMLHttpRequest")}}, или `null`, если данные не были получены или содержат другой тип данных.

### Исключения

- `InvalidStateError`
  - : {{domxref("XMLHttpRequest.responseType", "responseType")}} не является `"document"` или пустой строкой (каждый из которых указывает, что принятые данные это XML или HTML).

## Пример

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// Значение responseType, если указано, должно быть пустой строкой или "document"
xhr.responseType = "document";

// overrideMimeType() может быть использован, чтобы заставить ответ обрабатываться как XML
xhr.overrideMimeType("text/xml");

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseXML);
    }
  }
};

xhr.send(null);
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequest.response")}}
- {{domxref("XMLHttpRequest.responseType")}}
