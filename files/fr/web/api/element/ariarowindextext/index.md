---
title: "Element : propriété ariaRowIndexText"
short-title: ariaRowIndexText
slug: Web/API/Element/ariaRowIndexText
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaRowIndexText`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-rowindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext), qui définit une alternative textuelle lisible par un·e humain·e de `aria-rowindex`.

## Valeur

Une chaîne de caractères.

## Exemples

Dans cet exemple, l'attribut `aria-rowindextext` de l'élément avec un ID de `entete-role` est défini sur «&nbsp;Ligne d'en-tête&nbsp;». En utilisant `ariaRowIndexText`, nous mettons à jour la valeur à «&nbsp;Ligne d'en-tête mise à jour&nbsp;».

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
        aria-rowindextext="Ligne d'en-tête">
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
console.log(el.ariaRowIndexText); // "Ligne d'en-tête"
el.ariaRowIndexText = "Ligne d'en-tête mise à jour";
console.log(el.ariaRowIndexText); // "Ligne d'en-tête mise à jour"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ARIA&nbsp;: rôle `table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
