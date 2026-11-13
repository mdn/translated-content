---
title: "Element : propriété ariaSelected"
short-title: ariaSelected
slug: Web/API/Element/ariaSelected
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaSelected`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), qui indique l'état «&nbsp;sélectionné&nbsp;» actuel des éléments qui ont un état sélectionné.

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : L'élément est sélectionné.
- `"false"`
  - : L'élément n'est pas sélectionné.
- `"undefined"`
  - : L'élément n'est pas sélectionnable.

## Exemples

Dans cet exemple, l'attribut `aria-selected` de l'élément avec un ID de `tab-id` est défini sur `"true"`. En utilisant `ariaSelected`, nous mettons à jour la valeur à `"false"`.

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Étiquette de l'onglet
</button>
```

```js
let el = document.getElementById("tab-id");
console.log(el.ariaSelected); // true
el.ariaSelected = "false";
console.log(el.ariaSelected); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
