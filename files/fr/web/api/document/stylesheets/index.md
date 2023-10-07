---
title: Document.styleSheets
slug: Web/API/Document/styleSheets
---

{{APIRef}}

La propriété **`Document.styleSheets`** est en lecture seule et retourne une liste [`StyleSheetList`](/fr/docs/Web/API/StyleSheetList) d'objets [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet), qui font référence à l'ensemble des feuilles de style contenues ou embarquées dans le document.

## Syntaxe

```js
var styleSheetList = document.styleSheets;
```

L'objet retourné est une liste {{domxref("StyleSheetList")}}.

Il s'agit d'une collection ordonnée d'objets [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet). `styleSheetList.item(index)` ou `styleSheetList[index]` retourne un seul objet stylesheet par son `index` (`index` débute par 0).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
