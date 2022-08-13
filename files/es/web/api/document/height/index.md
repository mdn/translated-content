---
title: Document.height
slug: Web/API/Document/height
translation_of: Web/API/Document/height
---
{{APIRef("DOM")}} {{Obsolete_header}}

> **Nota:** Comenzando en {{Gecko("6.0")}},` document.height `no es soportada. En lugar usar `document.body.clientHeight`. Ver {{domxref("element.clientHeight")}}.

## Summary

Devuelve la altura del objeto {{domxref("document")}} . En la mayoría de los casos, esto equivale al elemento {{HTMLElement("body")}} del documento actual.

## Syntax

    height_value = document.height

## Example

```js
// alert document height
alert(document.height);
```

## Alternatives

    document.body.clientHeight
    document.documentElement.clientHeight
    document.documentElement.scrollHeight

## Specification

HTML5

## See also

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
