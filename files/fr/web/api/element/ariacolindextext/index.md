---
title: "Element : propriété ariaColIndexText"
short-title: ariaColIndexText
slug: Web/API/Element/ariaColIndexText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaColIndexText`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-colindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext), qui définit une alternative textuelle lisible par une personne pour `aria-colindex`.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-colindex` de l'élément avec un ID de `entete-role` est défini sur `"Colonne de rôle ARIA"`. En utilisant `ariaColIndexText`, nous mettons à jour la valeur à `"Nouvelle colonne de nom"`.

```html
<table
  id="tableau-semantique"
  role="table"
  aria-label="Éléments sémantiques"
  aria-describedby="tableau_description_elements_semantiques"
  aria-rowcount="100">
  <caption id="tableau_description_elements_semantiques">
    Éléments sémantiques à utiliser à la place des rôles ARIA
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <th
        role="columnheader"
        id="entete-role"
        aria-sort="none"
        aria-rowindex="1"
        aria-colindex="1"
        aria-colindextext="Colonne de rôle ARIA">
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
console.log(el.ariaColIndexText); // "Colonne de rôle ARIA"
el.ariaColIndexText = "Nouvelle colonne de nom";
console.log(el.ariaColIndexText); // "Nouvelle colonne de nom"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
