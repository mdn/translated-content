---
title: "Element : propriété ariaSetSize"
short-title: ariaSetSize
slug: Web/API/Element/ariaSetSize
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaSetSize`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), qui définit le nombre d'éléments dans l'ensemble actuel de `listitems` ou de `treeitems`.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-setsize` de l'élément avec un ID de `tab-id` est défini sur `"3"`, pour informer un dispositif qu'il y a actuellement 3 onglets dans le groupe. En utilisant `ariaSetSize`, nous mettons à jour la valeur à `"4"`.

```html
<button
  role="tab"
  aria-selected="true"
  aria-setsize="3"
  aria-controls="tabpanel-id"
  id="tab-id">
  Étiquette de l'onglet
</button>
```

```js
let el = document.getElementById("tab-id");
console.log(el.ariaSetSize); // 3
el.ariaSetSize = "4";
console.log(el.ariaSetSize); // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
