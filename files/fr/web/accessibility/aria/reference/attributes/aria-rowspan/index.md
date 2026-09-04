---
title: "ARIA : attribut aria-rowspan"
short-title: aria-rowspan
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-rowspan` définit le nombre de lignes sur lesquelles une cellule ou une cellule de grille s'étend dans un tableau, une grille ou une arborescence de grille.

## Description

Similaire à l'attribut `rowspan` des éléments HTML {{HTMLElement('td')}} et {{HTMLElement('th')}}, mais pour les cellules et cellules de grille qui ne sont pas contenues dans un tableau natif, l'attribut `aria-rowspan` définit le nombre de lignes sur lesquelles une `cell` ou une `gridcell` s'étend dans un `table`, une `grid` ou une `treegrid`.

Cet attribut est destiné aux cellules et cellules de grille qui ne font **pas** partie d'un élément HTML {{HTMLElement('table')}}. Lorsqu'une cellule est imbriquée dans un `<table>` sémantique, il faut utiliser l'attribut `rowspan` si un <td> ou <th> s'étend sur plusieurs lignes. Si les deux sont présents, `rowspan` prévaut sur `aria-rowspan`. Comme tous les attributs ARIA, `aria-rowspan` n'affecte que l'arbre d'accessibilité. Il ne modifie pas la présentation.

> [!NOTE]
> ARIA modifie l'arbre d'accessibilité et la façon dont les technologies d'assistance présentent le contenu aux utilisateur·ice·s. ARIA ne change rien à la fonction, au comportement ou à l'apparence d'un élément. Lorsque vous utilisez des éléments non sémantiques, vous devez utiliser CSS pour gérer la présentation et l'apparence.

La valeur de `aria-rowspan` est un entier supérieur ou égal à 0 et inférieur à la valeur qui ferait chevaucher la cellule ou la cellule de grille avec la suivante dans la même colonne. Définir la valeur à `0` indique que la cellule ou la cellule de grille doit s'étendre sur toutes les lignes restantes du groupe de lignes. La valeur par défaut est `1`.

## Valeurs

- `<integer>`
  - : Entier supérieur ou égal à `0` et inférieur à la valeur qui ferait chevaucher la cellule avec la suivante dans la même colonne.

## Interfaces associées

- {{DOMxRef("Element.ariaRowSpan")}}
  - : La propriété {{DOMxRef("Element.ariaRowSpan", "ariaRowSpan")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-rowspan`.
- {{DOMxRef("ElementInternals.ariaRowSpan")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaRowSpan", "ariaRowSpan")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-rowspan`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut HTML [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#rowspan) sur {{HTMLElement('td')}}
- L'attribut ARIA [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- L'attribut ARIA [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
