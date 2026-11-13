---
title: "Element : propriété ariaColSpan"
short-title: ariaColSpan
slug: Web/API/Element/ariaColSpan
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("DOM")}}

La propriété **`ariaColSpan`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), qui définit le nombre de colonnes qu'une cellule ou une cellule de grille occupe dans un tableau, une grille ou une grille arborescente.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-colspan` de l'élément avec un ID de `spanning-heading` est défini sur `"2"`. En utilisant `ariaColSpan`, nous mettons à jour la valeur à `"3"`.

```html
<table>
  <thead>
    <tr>
      <th>En-tête 1</th>
      <th>En-tête 2</th>
      <th>En-tête 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" aria-colspan="2" id="colonne-etendue">Étendue</td>
      <td>Un</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("colonne-etendue");
console.log(el.ariaColSpan);
el.ariaColSpan = "3";
console.log(el.ariaColSpan);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
