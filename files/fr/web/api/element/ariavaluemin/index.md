---
title: "Element : propriété ariaValueMin"
short-title: ariaValueMin
slug: Web/API/Element/ariaValueMin
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaValueMin`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin), qui définit la valeur minimale autorisée pour un composant de type plage.

## Valeur

Une chaîne de caractères contenant un nombre.

## Exemples

Dans cet exemple, l'attribut `aria-valuemin` de l'élément ayant pour ID `curseur` est défini sur `"1"`. En utilisant `ariaValueMin`, nous mettons à jour la valeur à `"2"`.

```html
<div
  id="curseur"
  role="slider"
  aria-valuenow="1"
  aria-valuemin="1"
  aria-valuemax="7"
  aria-valuetext="Dimanche"></div>
```

```js
let el = document.getElementById("curseur");
console.log(el.ariaValueMin); // 1
el.ariaValueMin = "2";
console.log(el.ariaValueMin); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
