---
title: "Element : propriété ariaValueMax"
short-title: ariaValueMax
slug: Web/API/Element/ariaValueMax
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaValueMax`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), qui définit la valeur maximale autorisée pour un composant de type plage.

## Valeur

Une chaîne de caractères contenant un nombre.

## Exemples

Dans cet exemple, l'attribut [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) de l'élément avec un ID de `curseur` est défini sur `"7"`. En utilisant `ariaValueMax`, nous mettons à jour la valeur à `"6"`.

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
console.log(el.ariaValueMax); // 7
el.ariaValueMax = "6";
console.log(el.ariaValueMax); // 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
