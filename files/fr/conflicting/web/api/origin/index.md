---
title: Document.origin
slug: conflicting/Web/API/origin
tags:
  - API
  - DOM
  - Document
  - Propriétés
  - origine
translation_of: Web/API/Document/origin
original_slug: Web/API/Document/origin
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La propriété en lecture seule **`Document.origin`** renvoie l'origine du document. Dans la plupart des cas, cette propriété est équivalente à `document.defaultView.location.origin`.

## Exemples

```js
var origin = document.origin;
// Sur cette page, renvoie:'https://developer.mozilla.org'

var origin = document.origin;
// Sur "about:blank", renvoie :'null'

var origin = document.origin;
// Sur "data:text/html,<b>foo</b>", renvoie :'null'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("URLUtils.origin")}}.
