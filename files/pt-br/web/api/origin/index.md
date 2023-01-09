---
title: Document.origin
slug: Web/API/origin
original_slug: Web/API/Document/origin
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

| Especificação                                                                                                                                | Status                           | Comentário         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('DOM WHATWG', '#dom-document-origin', 'Document.origin')}}                                                 | {{Spec2('DOM WHATWG')}} | Definição inicial. |
| {{SpecName('HTML WHATWG', '#concept-origin', 'origin for various objects (including Document objects)')}} | {{Spec2('HTML WHATWG')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("api.Document.origin")}}

## Veja também

- A propriedade {{domxref("URLUtils.origin")}}.
