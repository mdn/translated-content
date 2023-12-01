---
title: Document.async
slug: Web/API/XMLDocument
---

`document.async` es utilizado para indicar cuándo un llamado de {{domxref("document.load")}} debe ser sincrónico o asincrónico. `true` es su valor por defecto, indicando que el documento se cargó asincrónicamente.

(Desde la versión 1.4 alpha es posible cargar documentos sincrónicamente)

## Ejemplo

```js
function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Devuelve los contenidos de querydata.xml como un string
}

var xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load("querydata.xml");
```

## Especificación

- [DOM Level 3 Load & Save module](http://www.w3.org/TR/DOM-Level-3-LS/load-save.html#LS-DocumentLS)

## Véase también

- [XML in Mozilla](/es/docs/XML_in_Mozilla)
- {{domxref("document.load")}}
