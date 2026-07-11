---
title: "Element : propriété ariaDescription"
short-title: ariaDescription
slug: Web/API/Element/ariaDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaDescription`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), qui définit une valeur de chaîne de caractères décrivant ou annotant l'élément actuel.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-description` de l'élément avec un ID de `bouton-fermer` est défini sur la chaîne de caractères «&nbsp;Une description plus longue de la fonction de cet élément&nbsp;». En utilisant `ariaDescription`, nous pouvons mettre à jour la valeur.

```html
<button
  aria-label="Fermer"
  aria-description="Une description plus longue de la fonction de cet élément"
  id="bouton-fermer">
  X
</button>
```

```js
let el = document.getElementById("bouton-fermer");
console.log(el.ariaDescription); // "Une description plus longue de la fonction de cet élément"
el.ariaDescription = "Une description différente";
console.log(el.ariaDescription); // "Une description différente"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
