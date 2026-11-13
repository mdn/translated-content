---
title: "Element : propriété ariaRowSpan"
short-title: ariaRowSpan
slug: Web/API/Element/ariaRowSpan
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("DOM")}}

La propriété **`ariaRowSpan`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan), qui définit le nombre de lignes qu'une cellule ou une cellule de grille occupe dans un tableau, une grille ou une grille arborescente.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-rowspan` de l'élément avec un ID de `entete-etendu` est défini sur `"3"`. En utilisant `ariaRowSpan`, nous mettons à jour la valeur à `"2"`.

```html
<table>
  <thead>
    <tr>
      <th id="entete-etendu" rowspan="3" aria-rowspan="3">En-tête étendu</th>
      <th>En-tête</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Un</td>
    </tr>
    <tr>
      <td>Deux</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("entete-etendu");
console.log(el.ariaRowSpan);
el.ariaRowSpan = "2";
console.log(el.ariaRowSpan);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
