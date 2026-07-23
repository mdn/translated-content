---
title: "Element : propriété ariaMultiSelectable"
short-title: ariaMultiSelectable
slug: Web/API/Element/ariaMultiSelectable
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaMultiSelectable`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable), qui indique que l'utilisateur·ice peut sélectionner plusieurs éléments parmi les descendants sélectionnables actuels.

> [!NOTE]
> Dans la mesure du possible, utilisez un élément HTML {{HTMLElement("select")}}, car cet élément possède des sémantiques intégrées et ne nécessite pas d'attributs ARIA.

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"true"`
  - : Plus d'un élément peut être sélectionné à la fois.
- `"false"`
  - : Un seul élément peut être sélectionné.

## Exemples

Dans cet exemple, l'attribut `aria-multiselectable` sur l'élément avec un ID de `listbox1` est défini sur `"true"`, indiquant que cette zone accepte plusieurs éléments sélectionnés. En utilisant `ariaMultiSelectable`, nous mettons à jour la valeur à `"false"`.

```html
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-multiselectable="true"
  aria-labelledby="listbox1label"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    Vert
  </div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Rouge</div>
</div>
```

```js
let el = document.getElementById("listbox1");
console.log(el.ariaMultiSelectable); // "true"
el.ariaMultiSelectable = "false";
console.log(el.ariaMultiSelectable); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
