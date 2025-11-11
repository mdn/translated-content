---
title: Document.scrollingElement
slug: Web/API/Document/scrollingElement
---

{{APIRef("DOM")}}

La propriété en lecture seule **`scrollingElement`** de l'interface [`Document`](/fr/docs/Web/API/Document) renvoie une référence à l'[élément](/fr/docs/Web/API/Element) qui fait défiler le document. En mode standard, il s'agit de l'élément racine du document, [`document.documentElement`](/fr/docs/Web/API/Document/documentElement).

En mode quirks, l'attribut `scrollingElement` renvoie l'élément HTML `body` s'il existe et est [potentiellement défilable](https://drafts.csswg.org/cssom-view/#potentially-scrollable), sinon il renvoie `null`.

## Syntaxe

```js
var element = document.scrollingElement;
```

## Exemple

```js
var scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
