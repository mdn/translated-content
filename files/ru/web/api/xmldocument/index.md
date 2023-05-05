---
title: Document.async
slug: Web/API/XMLDocument
translation_of: Web/API/XMLDocument/async
original_slug: Web/API/XMLDocument/async
---

{{APIRef("DOM")}}{{Deprecated_header}} {{Non-standard_header}}

`document.async` может быть установлен, для того, чтобы определить, что вызов {{domxref("document.load")}} должен быть выполнен синхронно или не синхронно. `true` - стандартное значение, определяющее, асинхронно ли должны быть загружены документы.

(Загружать документы синхронно стало возможно с версии 1.4 alpha.)

## Пример

```js
function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Gives querydata.xml contents as string
}

var xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');
```

## Спецификация

- [DOM Level 3 Load & Save module](http://www.w3.org/TR/DOM-Level-3-LS/load-save.html#LS-DocumentLS)

## Смотрите также

- [XML in Mozilla](/ru/docs/XML_in_Mozilla)
- {{domxref("document.load")}}
