---
title: "Element : propriété ariaColCount"
short-title: ariaColCount
slug: Web/API/Element/ariaColCount
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaColCount`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), qui définit le nombre de colonnes dans un tableau, une grille ou une grille arborescente.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-colcount` de l'élément avec un ID de `tableau-sementique` est défini sur `"2"`. En utilisant `ariaColCount`, nous mettons à jour la valeur à `"3"`.

```html
<table
  id="tableau-sementique"
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="description_tableau_elements_sementiques"
  aria-rowcount="100"
  aria-colcount="2">
  <caption id="description_tableau_elements_sementiques">
    Éléments sémantiques à utiliser à la place des rôles ARIA
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" aria-sort="none" aria-rowindex="1">Rôle ARIA</th>
      <th role="columnheader" aria-sort="none" aria-rowindex="1">
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
let el = document.getElementById("tableau-sementique");
console.log(el.ariaColCount); // 2
el.ariaColCount = "3";
console.log(el.ariaColCount); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
