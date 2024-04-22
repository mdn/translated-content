---
title: Document.origin
slug: Web/API/origin
---

{{APIRef("DOM")}}{{SeeCompatTable}}

A propriedade read-only **`Document.origin`** retorna a origem do documento. Na maioria dos casos, essa propriedade é equivalente a `document.defaultView.location.origin`.

## Sintaxe

```
var origin = document.origin;
```

## Exemplos

```js
var origin = document.origin;
// Nesta página, retorna:'https://developer.mozilla.org'

var origin = document.origin;
// Em "about:blank", retorna:'null'

var origin = document.origin;
// Em "data:text/html,<b>foo</b>", retorna:'null'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A propriedade {{domxref("URLUtils.origin")}}.
