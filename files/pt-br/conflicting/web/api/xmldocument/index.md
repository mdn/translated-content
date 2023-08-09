---
title: Document.async
slug: conflicting/Web/API/XMLDocument
---

{{APIRef("DOM")}}{{Deprecated_header}} {{Non-standard_header}}

`document.async` pode ser configurado para indicar se uma chamada {{domxref ("document.load")}} deve ser uma solicitação assíncrona ou síncrona. True é o valor padrão, indicando que os documentos devem ser carregados de forma assíncrona.

(Carregamento de documentos assicronos a partir da versão 1.4 alpha.)

## Exemplo

```js
function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // Retorna o conteúdo de querydata.xml em String
}

var xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');
```

## Especificação

- [DOM Level 3 Load & Save module](https://www.w3.org/TR/DOM-Level-3-LS/load-save.html#LS-DocumentLS)

## Veja também

- [XML in Mozilla](/pt-BR/docs/XML_in_Mozilla)
- {{domxref("document.load")}}
