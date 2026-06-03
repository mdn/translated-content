---
title: "HTMLOListElement: start property"
short-title: start
slug: Web/API/HTMLOListElement/start
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

La propriété **`start`** de l'interface {{domxref("HTMLOListElement")}} indique la valeur de départ de la liste ordonnée, avec une valeur par défaut de 1.

Elle reflète l'attribut [`start`](/fr/docs/Web/HTML/Reference/Elements/ol#start) de l'élément HTML {{HTMLElement("ol")}}.

> [!NOTE]
> La valeur de la propriété `start` est indépendante de la propriété {{domxref("HTMLOListElement.type")}}&nbsp;: elle est toujours numérique, même lorsque le type correspond à des lettres ou à des chiffres romains.

## Valeur

Un entier long (`long`).

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
console.log(olElement.start); // Affiche : "1"
olElement.start = "11";
console.log(olElement.start); // Affiche : "11"
```

### Résultat

{{EmbedLiveSample("exemples", 400, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
