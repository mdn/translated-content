---
title: "ARIA : attribut aria-colindex"
short-title: aria-colindex
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindex
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-colindex` définit l'indice ou la position de colonne d'un élément par rapport au nombre total de colonnes dans un `table`, `grid` ou `treegrid`.

## Description

Certains tableaux sont très larges et, par conséquent, seule une partie de leur contenu est affichée initialement. Afficher uniquement une sous-partie des colonnes peut améliorer l'expérience utilisateur·ice, mais il faut informer tou·te·s les utilisateur·ice·s des parties affichées et du fait que l'ensemble du contenu du tableau n'est pas présent.

ARIA fournit plusieurs attributs pour décrire les structures de `table`, `grid` et `treegrid`. L'attribut `aria-colindex` définit la sous-structure, c'est-à-dire l'indice ou la position de colonne d'un élément par rapport au nombre total de colonnes dans ces structures.

Utilisé avec l'attribut [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), qui indique aux technologies d'assistance combien de colonnes le tableau comporterait si toutes étaient présentes, `aria-colindex` sert à indiquer l'indice ou la position de colonne d'un élément par rapport à ce nombre total de colonnes.

Si toutes les colonnes sont présentes dans le DOM, il n'est pas nécessaire d'inclure `aria-colindex` car les agents utilisateur peuvent calculer l'indice de colonne de chaque cellule ou cellule de grille. Cependant, si certaines colonnes sont absentes du DOM à un moment donné, utilisez `aria-colindex` pour indiquer la colonne de chaque cellule ou cellule de grille par rapport au tableau complet.

La valeur de `aria-colindex` est un entier supérieur ou égal à 1. Chaque valeur doit être supérieure à celle de la colonne précédente et inférieure ou égale au nombre total de colonnes du tableau complet.

Si une cellule ou cellule de grille s'étend sur plusieurs colonnes, définissez [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) sur le nombre de colonnes qu'elle occupe (si vous n'utilisez pas {{HTMLElement('td')}} et {{HTMLElement('th')}}), et définissez `aria-colindex` sur la valeur de début de la plage&nbsp;: la valeur qu'elle aurait eue si elle n'occupait qu'une seule colonne, c'est-à-dire la première de ses colonnes.

Si l'ensemble des colonnes présentes dans le DOM est contigu et qu'aucune cellule ne s'étend sur plusieurs lignes ou colonnes, il suffit de mettre `aria-colindex` une seule fois par ligne sur la première colonne du groupe. Si les colonnes ne sont pas contiguës, indiquez la valeur de `aria-colindex` sur tous les enfants ou éléments possédés de chaque ligne.

L'exemple suivant montre une grille comportant 6 colonnes, dont seules les colonnes 1, 2, 5 et 6 sont affichées à l'utilisateur·ice. Le nombre total de colonnes du tableau est défini avec `aria-colcount="6"` sur le tableau lui-même. Comme les colonnes ne sont pas contiguës, chaque [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) — dans ce cas [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) et [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) — possède l'attribut `aria-colindex`.

```html
<div role="grid" aria-colcount="6">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader" aria-colindex="1">Prénom</div>
      <div role="columnheader" aria-colindex="2">Nom</div>
      <div role="columnheader" aria-colindex="5">Ville</div>
      <div role="columnheader" aria-colindex="6">Code postal</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="gridcell" aria-colindex="1">Debra</div>
      <div role="gridcell" aria-colindex="2">Burks</div>
      <div role="gridcell" aria-colindex="5">New York</div>
      <div role="gridcell" aria-colindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

La première règle d'utilisation d'ARIA est&nbsp;: «&nbsp;Si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le.&nbsp;» Si vous utilisez la sémantique HTML native avec {{HTMLElement('table')}}, {{HTMLElement('th')}}, {{HTMLElement('td')}}, etc., et que vous n'affichez qu'une sous-partie des colonnes, les attributs `aria-colcount` et `aria-colindex` restent nécessaires, mais le balisage est moins verbeux.

Lorsque vous utilisez des éléments d'en-tête de tableau sémantiques et que toutes les colonnes ne sont pas dans le DOM, l'attribut `aria-colindex` n'a besoin d'être défini qu'une seule fois par colonne dans l'en-tête {{HTMLElement('th')}}.

```html
<table aria-colcount="6">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">Prénom</th>
      <th aria-colindex="2" scope="col">Nom</th>
      <th aria-colindex="5" scope="col">Ville</th>
      <th aria-colindex="6" scope="col">Code postal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Debra</td>
      <td>Burks</td>
      <td>New York</td>
      <td>14127</td>
    </tr>
    …
  </tbody>
</table>
```

Si toutes les colonnes sont dans le DOM, ni `aria-colcount` ni `aria-colindex` ne sont nécessaires.

## Valeurs

- `<integer>`
  - : Entier supérieur ou égal à 1 et inférieur ou égal au nombre total de colonnes si toutes étaient présentes.

## Interfaces associées

- {{domxref("Element.ariaColIndex")}}
  - : La propriété [`ariaColIndex`](/fr/docs/Web/API/Element/ariaColIndex), qui fait partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-colindex`.
- {{domxref("ElementInternals.ariaColIndex")}}
  - : La propriété [`ariaColIndex`](/fr/docs/Web/API/ElementInternals/ariaColIndex), qui fait partie de l'interface {{domxref("ElementInternals")}}, reflète la valeur de l'attribut `aria-colindex`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

Hérité par les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-colindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext)
- L'attribut ARIA [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- L'attribut ARIA [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- L'élément HTML {{HTMLElement('table')}}
- L'élément HTML {{HTMLElement('th')}}
- L'élément HTML {{HTMLElement('td')}}
