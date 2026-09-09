---
title: "Element : propriété ariaLabel"
short-title: ariaLabel
slug: Web/API/Element/ariaLabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaLabel`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), qui définit une chaîne de caractères étiquetant l'élément actuel.

## Valeur

Une chaîne de caractères ou `null`.

## Exemples

Dans cet exemple, l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sur l'élément avec un ID de `bouton-fermer` est défini sur «&nbsp;Fermer&nbsp;». En utilisant `ariaLabel`, nous mettons à jour la valeur à «&nbsp;Fermer la boîte de dialogue&nbsp;».

```html
<button aria-label="Fermer" id="bouton-fermer">X</button>
```

```js
let el = document.getElementById("bouton-fermer");
console.log(el.ariaLabel); // "Fermer"
el.ariaLabel = "Fermer la boîte de dialogue";
console.log(el.ariaLabel); // "Fermer la boîte de dialogue"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
