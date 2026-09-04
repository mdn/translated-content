---
title: "Element : propriété ariaHidden"
short-title: ariaHidden
slug: Web/API/Element/ariaHidden
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaHidden`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden), qui indique si l'élément est exposé à une API d'accessibilité.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est masqué de l'API d'accessibilité.
- `"false"`
  - : L'élément est exposé à l'API d'accessibilité comme s'il était rendu.
- `"undefined"`
  - : L'état de masquage de l'élément est déterminé par l'agent utilisateur en fonction de son rendu.

## Exemples

Dans cet exemple, l'attribut [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) sur l'élément avec un ID de `cache` est défini sur `"true"`. En utilisant `ariaHidden`, nous mettons à jour la valeur à `"false"`.

```html
<div id="cache" aria-hidden="true">
  Certaines choses sont mieux laissées non dites.
</div>
```

```js
let el = document.getElementById("cache");
console.log(el.ariaHidden); // true
el.ariaHidden = "false";
console.log(el.ariaHidden); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
