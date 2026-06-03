---
title: "ARIA : attribut aria-colindextext"
short-title: aria-colindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-colindextext` définit une alternative textuelle lisible par humain·e à la valeur numérique de [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex).

## Description

Lorsque vous avez un tableau très large ou que vous souhaitez n'afficher qu'une partie d'un tableau, il se peut que toutes les colonnes ne soient pas présentes dans le DOM. Dans ce cas, on utilise [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) avec une valeur entière pour indiquer combien de colonnes le tableau (ou la grille) comporterait si toutes étaient présentes, et on ajoute la propriété [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) sur chaque colonne pour fournir l'indice de colonne dans le tableau complet.

Dans l'exemple HTML suivant, notre tableau comporte 8 colonnes, mais nous n'en affichons que 4. La colonne «&nbsp;Ville&nbsp;» est la cinquième colonne du tableau complet, comme défini par `aria-colindex="5"`.

```html
<table aria-colcount="8">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">Prénom</th>
      <th aria-colindex="2" scope="col">Nom</th>
      <th aria-colindex="5" scope="col">Ville</th>
      <th aria-colindex="7" scope="col">Code postal</th>
    </tr>
  </thead>
  …
</table>
```

Ce tableau n'est pas très complexe. S'il s'agissait d'un tableur de plus de 100 colonnes ou d'une grille sans en-têtes de colonnes (comme un échiquier), la valeur fournie ou calculée de `aria-colindex` pourrait ne pas être parlante ou ne pas refléter l'indice affiché. Dans ce cas, on peut inclure `aria-colindextext`. Sa valeur est une chaîne de caractères lisible par humain·e, alternative à la valeur numérique de `aria-colindex`.

```html
<table aria-colcount="128">
  <thead>
    <tr>
      <th aria-colindex="1" aria-colindextext="Symbole NYSE" scope="col">
        NYSE
      </th>
      <th aria-colindex="110" aria-colindextext="Valeur début 2021" scope="col">
        01/21
      </th>
      <th aria-colindex="122" aria-colindextext="Valeur début 2022" scope="col">
        01/22
      </th>
      <th aria-colindex="124" scope="col">Recommandation</th>
    </tr>
  </thead>
  …
</table>
```

Dans l'exemple ci-dessus, le tableau comporte 128 colonnes dont seulement 4 sont affichées. L'attribut `aria-colindextext` est utilisé sur trois colonnes pour fournir une alternative textuelle lisible. En incluant `aria-colindextext="Valeur début 2021"`, les technologies d'assistance peuvent annoncer «&nbsp;Valeur début 2021&nbsp;» au lieu de «&nbsp;Colonne 110&nbsp;».

N'utilisez `aria-colindextext` que lorsque la valeur fournie ou calculée de `aria-colindex` n'est pas parlante ou ne reflète pas l'indice affiché. Lorsque vous ajoutez `aria-colindextext`, conservez aussi `aria-colindex` car certaines technologies d'assistance s'appuient sur l'indice numérique pour suivre la position de l'utilisateur·ice et proposer une navigation alternative dans le tableau.

> [!NOTE]
> Alors que `aria-colindex` peut être ajouté à une ligne lorsque toutes les colonnes présentes sont contiguës (car des valeurs séquentielles peuvent être déduites), `aria-colindextext` n'est PAS une propriété supportée pour [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role).

Voir aussi [`aria-rowindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext).

## Valeurs

- `<string>`
  - : L'alternative textuelle lisible par humain·e à la valeur numérique de [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)

## Interfaces associées

- {{domxref("Element.ariaColIndexText")}}
  - : La propriété [`ariaColIndexText`](/fr/docs/Web/API/Element/ariaColIndexText), qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-colindextext`.
- {{domxref("ElementInternals.ariaColIndexText")}}
  - : La propriété [`ariaColIndexText`](/fr/docs/Web/API/ElementInternals/ariaColIndexText), qui fait partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-colindextext`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Hérité par les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [`Element.ariaColIndexText`](/fr/docs/Web/API/Element/ariaColIndexText)
- [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-rowindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [ARIA&nbsp;: rôle `cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA&nbsp;: rôle `columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA&nbsp;: rôle `rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
