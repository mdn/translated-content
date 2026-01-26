---
title: "ARIA : attribut aria-colspan"
short-title: aria-colspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colspan
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-colspan` définit le nombre de colonnes occupées par une cellule ou une cellule de grille (`gridcell`) dans un tableau ([`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)), une grille ([`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)) ou une grille arborescente ([`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)).

## Description

Destiné aux [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role) et [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role) qui ne sont pas contenus dans un élément HTML natif {{HTMLElement('table')}}, la valeur de la propriété `aria-colspan` définit le nombre de colonnes occupées par une cellule individuelle dans un [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role), une [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou une [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) ARIA.

En HTML, les éléments {{HTMLElement('th')}} et {{HTMLElement('td')}} possèdent l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#attributes). Lorsque vous utilisez un {{HTMLElement('table')}} sémantique, utilisez l'attribut natif `colspan` comme prévu. Cet attribut ARIA est destiné aux cellules et cellules de grille qui ne sont pas contenues dans un tableau natif, et sera ignoré s'il est utilisé sur une cellule dans un {{HTMLElement('table')}}.

> [!NOTE]
> La première règle d'utilisation d'ARIA est&nbsp;: si vous pouvez utiliser une fonctionnalité native avec la sémantique et le comportement requis déjà intégrés, au lieu de détourner un élément et **d'ajouter** un rôle, un état ou une propriété ARIA pour le rendre accessible, faites-le. Utilisez les éléments HTML {{HTMLElement('table')}}, y compris {{HTMLElement('td')}} et {{HTMLElement('th')}} avec l'attribut `colspan`, plutôt que des éléments non sémantiques avec des rôles et attributs ARIA dès que possible.

La valeur de `aria-colspan` doit être un entier positif. La valeur par défaut ou supposée d'une cellule est 1. Assurez-vous que la valeur indiquée n'entraîne pas le chevauchement de la cellule ou de la cellule de grille avec la suivante sur la même ligne et ne fait pas dépasser la cellule du tableau, de la grille ou de la treegrid contenant.

## Exemple

Voici un extrait d'un tableau de scores d'une ligue de bowling. Chaque partie comporte 10 frames, et chaque frame regroupe 3 scores&nbsp;: deux lancers et le total courant. Le 10<sup>e</sup> (et dernier) frame de chaque partie occupe 4 colonnes au cas où quelqu'un ferait uniquement des strikes.

```html
<div role="grid" aria-rowcount="27">
  aria-label="Scores de la ligue de bowling"
  <div role="rowgroup">
    <div role="row" aria-rowindex="1">
      <!--
        aria-rowspan et aria-colspan fournissent
        aux technologies d'assistance les bonnes informations d'en-tête de cellule
        lorsque les cellules d'en-tête couvrent plusieurs lignes ou colonnes.
      -->

      <span role="columnheader" aria-rowspan="2">Équipe</span>
      <span role="columnheader" aria-colspan="2">Joueur·euse</span>
      <span role="columnheader" aria-colspan="31">Frames partie 1</span>
      <span role="columnheader" aria-colspan="31">Frames partie 2</span>
      <span role="columnheader" aria-colspan="31">Frames partie 3</span>
      <span role="columnheader" aria-rowspan="2">Total</span>
    </div>
    <div role="row" aria-rowindex="2">
      <span role="columnheader">Nom</span>
      <span role="columnheader">Prénom</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
      <span role="columnheader" aria-colspan="3">1</span>
      <span role="columnheader" aria-colspan="3">2</span>
      <span role="columnheader" aria-colspan="3">3</span>
      <span role="columnheader" aria-colspan="3">4</span>
      <span role="columnheader" aria-colspan="3">5</span>
      <span role="columnheader" aria-colspan="3">6</span>
      <span role="columnheader" aria-colspan="3">7</span>
      <span role="columnheader" aria-colspan="3">8</span>
      <span role="columnheader" aria-colspan="3">9</span>
      <span role="columnheader" aria-colspan="4">10</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="10">
      <span role="rowheader" aria-rowspan="3">The Mighty Quokkas</span>
      <span role="cell">Henderson</span>
      <span role="cell">Alice</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      <span role="cell">20</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">39</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">48</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">76</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">96</span>
      <span role="cell">8</span>
      <span role="cell">/</span>
      <span role="cell">113</span>
      <span role="cell">7</span>
      <span role="cell">-</span>
      <span role="cell">120</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">146</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">166</span>
      <span role="cell">6</span>
      <span role="cell">/</span>
      <span role="cell">X</span>
      <span role="cell">186</span>
      <span role="cell">7</span>
      <span role="cell">2</span>
      <span role="cell">9</span>
      <span role="cell">6</span>
      <span role="cell">-</span>
      <span role="cell">15</span>
      <span role="cell" aria-colspan="2">X</span>
      <span role="cell">35</span>
      <span role="cell">7</span>
      <span role="cell">/</span>
      …
    </div>
    <div role="row" aria-rowindex="11">
      <span role="cell">McPherson</span>
      <span role="cell">Leslie</span>
      <span role="cell">9</span>
      <span role="cell">-</span>
      <span role="cell">9</span>
      <span role="cell">8</span>
      <span role="cell">1</span>
      <span role="cell">18</span>
      …
    </div>
  </div>
</div>
```

Si nous avions utilisé un {{HTMLElement('table')}} et des éléments de tableau sémantiques, notre balisage aurait été moins verbeux et accessible par défaut.

## Valeurs

- `<integer>`
  - : Un entier supérieur ou égal à la valeur par défaut 1, définissant le nombre de colonnes occupées par la cellule. La valeur doit être inférieure à celle qui ferait chevaucher la cellule sur la suivante de la même ligne.

## Interfaces associées

- {{domxref("Element.ariaColSpan")}}
  - : La propriété [`ariaColSpan`](/fr/docs/Web/API/Element/ariaColSpan), qui fait partie de l'interface de chaque élément, reflète la valeur de l'attribut `aria-colspan`, qui définit le nombre de colonnes occupées par une cellule ou une cellule de grille dans un tableau, une grille ou une treegrid.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Hérité par les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#attributes) de {{HTMLElement('th')}} et {{HTMLElement('td')}}
- La propriété [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- La propriété [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [ARIA&nbsp;: rôle `cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [ARIA&nbsp;: rôle `columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA&nbsp;: rôle `rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
