---
title: Document.origin
slug: Web/API/Document/origin
tags:
  - API
  - DOM
  - Document
  - Propriétés
  - origine
translation_of: Web/API/Document/origin
---
{{APIRef("DOM")}}{{SeeCompatTable}}

La propriété en lecture seule **`Document.origin`** renvoie l'origine du document. Dans la plupart des cas, cette propriété est équivalente à  `document.defaultView.location.origin`.

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

| Spécification                                                                                            | Statut                           | Commentaire          |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-document-origin', 'Document.origin')}}             | {{Spec2('DOM WHATWG')}} | Définition initiale. |
| {{SpecName('HTML WHATWG', '#origin:document', 'origin for Document objects')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Document.origin")}}

## Voir aussi

- La propriété {{domxref("URLUtils.origin")}}.
