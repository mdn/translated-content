---
title: "Document : propriété scrollingElement"
short-title: scrollingElement
slug: Web/API/Document/scrollingElement
l10n:
  sourceCommit: b404c3f8442ae2f9095d106219b5b74d6ae91446
---

{{APIRef("DOM")}}

La propriété en lecture seule **`scrollingElement`** de l'interface {{DOMxRef("Document")}} retourne une référence à l'élément ({{DOMxRef("Element")}}) qui fait défiler le document. En mode standard, il s'agit de l'élément racine du document, {{DOMxRef("document.documentElement")}}.

En mode «&nbsp;quirks&nbsp;», la propriété `scrollingElement` retourne l'élément HTML `body` s'il existe et n'est pas [potentiellement défilable <sup>(angl.)</sup>](https://drafts.csswg.org/cssom-view/#potentially-scrollable), sinon elle retourne `null`. Cela peut sembler surprenant, mais c'est vrai selon la spécification et les navigateurs.

## Valeur

L'élément ({{DOMxRef("Element")}}) qui fait défiler le document, généralement l'élément racine (sauf en mode non standard).

## Exemples

```js
const scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
