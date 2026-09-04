---
title: "Element : propriété ariaColIndex"
short-title: ariaColIndex
slug: Web/API/Element/ariaColIndex
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaColIndex`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), qui définit l'index ou la position d'une colonne par rapport au nombre total de colonnes dans un tableau, une grille ou une grille arborescente.

## Valeur

Une chaîne de caractères contenant un entier.

## Exemples

Dans cet exemple, l'attribut `aria-colindex` de l'élément avec un ID de `entete-role` est défini sur `"1"`. En utilisant `ariaColIndex`, nous mettons à jour la valeur à `"2"`.

```html
<table
  id="tableau-sementique"
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="description_tableau_elements_sementiques"
  aria-rowcount="100">
  <caption id="description_tableau_elements_sementiques">
    Éléments sémantiques à utiliser à la place des rôles ARIA
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="entete-role"
        aria-sort="none"
        aria-rowindex="1"
        aria-colindex="1">
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
console.log(el.ariaColIndex); // 1
el.ariaColIndex = "2";
console.log(el.ariaColIndex); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
