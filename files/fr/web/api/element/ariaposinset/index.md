---
title: "Element : propriété ariaPosInSet"
short-title: ariaPosInSet
slug: Web/API/Element/ariaPosInSet
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaPosInSet`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), qui définit le numéro ou la position d'un élément dans l'ensemble actuel des `listitem` ou `treeitem`.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-posinset` de l'élément avec un ID de `article2` a été défini sur `"2"`. En utilisant `ariaPosInSet`, nous mettons à jour la valeur à `"3"`.

```html
<article id="article1" aria-posinset="1">…</article>
<article id="article2" aria-posinset="2">…</article>
```

```js
let el = document.getElementById("article2");
console.log(el.ariaPosInSet); // "2"
el.ariaPosInSet = "3";
console.log(el.ariaPosInSet); // "3"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
