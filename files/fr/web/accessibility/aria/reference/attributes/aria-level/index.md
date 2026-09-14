---
title: "ARIA : attribut aria-level"
short-title: aria-level
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-level
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-level` définit le niveau hiérarchique d'un élément au sein d'une structure.

## Description

Les niveaux de hiérarchie apparaissent dans les titres, les arbres, les grilles imbriquées, les listes d'onglets imbriquées, etc. Si l'arborescence du DOM ne représente pas correctement le niveau, l'attribut `aria-level` doit être utilisé pour définir le niveau hiérarchique des éléments dans leur structure. Les niveaux augmentent avec la profondeur. La valeur de `aria-level` est un entier supérieur ou égal à `1`.

Pour les titres dans la structure d'un document, il peut y avoir des titres de premier niveau, de second niveau, de troisième niveau, etc. Dans les arbres, il y a l'élément racine, ses enfants, les enfants des enfants (ou petits-enfants), et ainsi de suite.

L'attribut `aria-level` expose la hiérarchie aux technologies d'assistance afin qu'elle puisse être communiquée aux utilisateur·ice·s. Comme tous les attributs ARIA, il n'a aucun impact sur l'agent utilisateur et donc aucun impact sur la détermination de la structure du document par l'agent utilisateur.

Si l'arborescence du DOM représente correctement le niveau, l'agent utilisateur peut calculer le niveau d'un élément à partir de la structure du document, rendant `aria-level` non seulement redondant mais risqué car il peut induire en erreur. `aria-level` ne doit être utilisé que pour indiquer explicitement un niveau lorsqu'il n'est pas possible de le calculer à partir de la structure du document. Testez si cet attribut est nécessaire. Si l'agent utilisateur peut calculer le niveau, il est préférable d'omettre l'attribut `aria-level`.

### Avec le rôle `heading`

L'attribut `aria-level` est requis pour le rôle [`heading`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), qui indique aux technologies d'assistance que l'élément doit être traité comme un titre. `<div role="heading" aria-level="1">` définit le `<div>` comme titre principal de la page. Un titre de niveau 2, défini avec `aria-level="2"`, sera le premier sous-titre, un niveau 3 sera un sous-titre de celui-ci, etc.

```html
<div role="heading" aria-level="3">Titre de cette sous-section</div>
```

Privilégiez l'utilisation des éléments {{HTMLElement("Heading_Elements", "h1")}} à {{HTMLElement("Heading_Elements", "h6")}}.

### Dans le rôle `treegrid`

Dans le cas d'une [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role), `aria-level` est pris en charge sur les éléments ayant le rôle [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), et non sur les éléments ayant le rôle [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role). Les lignes agissent comme des nœuds feuilles dans l'orientation verticale de la grille. Les cellules de grille sont des nœuds feuilles dans l'orientation horizontale de chaque ligne. `aria-level` n'est pas pris en charge sur les cellules à l'intérieur des lignes. Ainsi, dans les treegrids, l'attribut `aria-level` s'applique à l'élément ayant le rôle `row`.

Si l'ensemble complet des nœuds disponibles n'est pas présent dans le DOM en raison d'un chargement dynamique lors du déplacement de la sélection ou du défilement dans l'arbre, chaque nœud doit inclure `aria-level`, [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) et [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset).

## Valeurs

- `<integer>`
  - : Un entier supérieur ou égal à 1

## Interfaces associées

- {{DOMxRef("Element.ariaLevel")}}
  - : La propriété [`ariaLevel`](/fr/docs/Web/API/Element/ariaLevel), qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-level`.
- {{DOMxRef("ElementInternals.ariaLevel")}}
  - : La propriété [`ariaLevel`](/fr/docs/Web/API/ElementInternals/ariaLevel), qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-level`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`associationlistitemkey`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`comment`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role)
- [`heading`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [`<h1>` à `<h6>`&nbsp;: Les éléments de titre de section HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) ({{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}} et {{HTMLElement("Heading_Elements", "h6")}})
