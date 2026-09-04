---
title: "Element : propriété ariaRowCount"
short-title: ariaRowCount
slug: Web/API/Element/ariaRowCount
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaRowCount`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), qui définit le nombre total de lignes dans un tableau, une grille ou une grille arborescente.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-rowcount` sur l'élément avec un ID de `tableau-semantique` est défini sur `"100"`, représentant le nombre total de lignes dans le tableau, plutôt que les lignes actuellement visibles. En utilisant `ariaRowCount`, nous mettons à jour la valeur à `"101"`.

```html
<table
  id="tableau-semantique"
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="description_tableau_elements_semantiques"
  aria-rowcount="100">
  <caption id="description_tableau_elements_semantiques">
    Éléments sémantiques à utiliser à la place des rôles ARIA
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="entete-role"
        aria-sort="none"
        aria-rowindex="1">
        Rôle ARIA
      </th>
      <th
        role="columnheader"
        id="entete-element"
        aria-sort="none"
        aria-rowindex="1">
        Élément sémantique
      </th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell" aria-rowindex="11">header</td>
      <td role="cell" aria-rowindex="11">h1</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="16">header</td>
      <td role="cell" aria-rowindex="16">h6</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="18">rowgroup</td>
      <td role="cell" aria-rowindex="18">thead</td>
    </tr>
    <tr role="row">
      <td role="cell" aria-rowindex="24">term</td>
      <td role="cell" aria-rowindex="24">dt</td>
    </tr>
  </tbody>
</table>
```

```js
let el = document.getElementById("tableau-semantique");
console.log(el.ariaRowCount); // 100
el.ariaRowCount = "101";
console.log(el.ariaRowCount); // 101
```

## Spécifications

{{Specifications}}

## Compatibilité du navigateur

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
