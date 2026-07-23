---
title: "Element : propriété ariaSort"
short-title: ariaSort
slug: Web/API/Element/ariaSort
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaSort`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort), qui indique si les éléments d'un tableau ou d'une grille sont triés par ordre croissant ou décroissant.

## Valeur

Une chaîne de caractères contenant l'une des valeurs suivantes&nbsp;:

- `"ascending"`
  - : Les éléments sont triés par ordre croissant dans cette colonne.
- `"descending"`
  - : Les éléments sont triés par ordre décroissant dans cette colonne.
- `"none"`
  - : Aucun tri défini n'est appliqué à la colonne.
- `"other"`
  - : Un algorithme de tri autre que croissant ou décroissant a été appliqué.

## Exemples

Dans cet exemple, l'attribut `aria-sort` de l'élément avec un ID de `entete-role` est défini sur `"none"`. En utilisant `ariaSort`, nous mettons à jour la valeur à `"ascending"`.

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
console.log(el.ariaSort); // none
el.ariaSort = "ascending";
console.log(el.ariaSort); // ascending
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
