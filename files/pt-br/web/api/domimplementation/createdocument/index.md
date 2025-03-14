---
title: DOMImplementation.createDocument()
slug: Web/API/DOMImplementation/createDocument
---

{{ApiRef("DOM")}}

O método **`DOMImplementation.createDocument()`** cria e retorna um {{domxref("XMLDocument")}}.

## Sintaxe

```
doc = document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType);
```

### Parâmetros

- _namespaceURI_
  - : É um {{domxref("DOMString")}} contendo a URI do namespace do documento que será criado, ou `null` se o documento não pertencer a nenhum.
- _qualifiedNameStr_
  - : Is a {{domxref("DOMString")}} containing the qualified name, that is an optional prefix and colon plus the local root element name, of the document to be created.
- _documentType_ {{optional_inline}}
  - : Is the {{domxref("DocumentType")}} of the document to be created. It defaults to `null`.

## Example

```js
var doc = document.implementation.createDocument(
  "https://www.w3.org/1999/xhtml",
  "html",
  null,
);
var body = document.createElementNS("https://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [object HTMLBodyElement]
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- The {{domxref("DOMImplementation")}} interface it belongs to.
