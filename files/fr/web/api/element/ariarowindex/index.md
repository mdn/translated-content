---
title: "Element : propriété ariaRowIndex"
short-title: ariaRowIndex
slug: Web/API/Element/ariaRowIndex
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaRowIndex`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), qui définit l'index de ligne d'un élément ou sa position par rapport au nombre total de lignes dans un tableau, une grille ou une grille arborescente.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-rowindex` sur l'élément avec un ID de `entete-role` est défini sur `"1"`. En utilisant `ariaRowIndex`, nous mettons à jour la valeur à `"2"`.

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
let el = document.getElementById("entete-role");
console.log(el.ariaRowIndex); // 1
el.ariaRowIndex = "2";
console.log(el.ariaRowIndex); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité du navigateur

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
