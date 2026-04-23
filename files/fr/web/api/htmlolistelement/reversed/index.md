---
title: "HTMLOListElement : propriété reversed"
short-title: reversed
slug: Web/API/HTMLOListElement/reversed
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

La propriété **`reversed`** de l'interface {{domxref("HTMLOListElement")}} indique l'ordre d'une liste.

Elle reflète l'attribut [`reversed`](/fr/docs/Web/HTML/Reference/Elements/ol#reversed) de l'élément HTML {{HTMLElement("ol")}}.

## Valeur

Un booléen. Si la valeur est `true`, cela indique que la liste est décroissante (..., 3, 2, 1).

## Exemples

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
console.log(olElement.reversed); // Affiche : false
olElement.reversed = true;
console.log(olElement.reversed); // Affiche : true
```

### Résultat

{{EmbedLiveSample("exemples", 400, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
