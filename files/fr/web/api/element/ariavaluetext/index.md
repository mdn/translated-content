---
title: "Element : propriété ariaValueText"
short-title: ariaValueText
slug: Web/API/Element/ariaValueText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaValueText`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext), qui définit le texte alternatif lisible par un·e humain·e de `aria-valuenow` pour un composant de type plage.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-valuetext` de l'élément ayant pour ID `curseur` est défini sur `"Dimanche"` pour fournir une valeur lisible par un·e humain·e pour le composant de type plage. En utilisant `ariaValueText`, nous mettons à jour la valeur à `"Lundi"`.

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
console.log(el.ariaValueText); // Dimanche
el.ariaValueText = "Lundi";
console.log(el.ariaValueText); // Lundi
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
