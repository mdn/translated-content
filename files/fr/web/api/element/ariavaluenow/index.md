---
title: "Element : propriété ariaValueNow"
short-title: ariaValueNow
slug: Web/API/Element/ariaValueNow
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaValueNow`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow), qui définit la valeur actuelle pour un composant de type plage.

## Valeur

Une chaîne de caractères contenant un nombre.

## Exemples

Dans cet exemple, l'attribut [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) de l'élément ayant pour ID `curseur` est défini sur `"1"`. En utilisant `ariaValueNow`, nous mettons à jour la valeur à `"2"`.

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
console.log(el.ariaValueNow); // 1
el.ariaValueNow = "2";
console.log(el.ariaValueNow); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
