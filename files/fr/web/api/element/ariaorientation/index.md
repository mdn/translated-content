---
title: "Element : propriété ariaOrientation"
short-title: ariaOrientation
slug: Web/API/Element/ariaOrientation
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaOrientation`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation), qui indique si l'orientation de l'élément est horizontale, verticale ou inconnue/ambiguë.

## Valeur

Une chaîne de caractères avec l'une des valeurs suivantes&nbsp;:

- `"horizontal"`
  - : L'élément est horizontal.
- `"vertical"`
  - : L'élément est vertical.
- `"undefined"`
  - : L'orientation de l'élément est inconnue.

## Exemples

Dans cet exemple, l'attribut [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) de l'élément avec un ID de `gestion_curseurZoom` est défini sur `"vertical"`. En utilisant `ariaOrientation`, nous mettons à jour la valeur à `"horizontal"`.

```html
<div
  id="gestion_curseurZoom"
  role="slider"
  aria-orientation="vertical"
  aria-valuemin="0"
  aria-valuemax="17"
  aria-valuenow="14"
  tabindex="0">
  <span>11</span>
</div>
```

```js
let el = document.getElementById("gestion_curseurZoom");
console.log(el.ariaOrientation); // "vertical"
el.ariaOrientation = "horizontal";
console.log(el.ariaOrientation); // "horizontal"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
