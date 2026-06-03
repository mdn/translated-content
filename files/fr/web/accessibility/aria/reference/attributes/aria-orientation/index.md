---
title: "ARIA : attribut aria-orientation"
short-title: aria-orientation
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-orientation
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-orientation` indique si l'orientation d'un élément est horizontale, verticale ou inconnue/ambiguë.

## Description

Il peut être important pour l'utilisateur·ice de connaître l'orientation afin de savoir comment naviguer dans certains widgets, car l'orientation influence le comportement attendu des flèches gauche, droite, haut et bas. L'attribut `aria-orientation` est utilisé pour indiquer aux technologies d'assistance si l'orientation d'un élément est `horizontal`, `vertical` ou `undefined`.

Plusieurs widgets ont des orientations par défaut&nbsp;:

Horizontal par défaut&nbsp;:

- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)

Vertical par défaut&nbsp;:

- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)

Chaque [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) doit avoir une `aria-orientation` cohérente avec l'orientation du séparateur.

Lorsque les nœuds d'un arbre sont disposés horizontalement au lieu de la disposition verticale par défaut, ou lorsqu'une liste d'onglets est verticale au lieu de l'horizontale par défaut, la flèche bas se comporte comme le ferait normalement la flèche droite, et la flèche haut se comporte comme la flèche gauche. Dans ces cas, les utilisateur·ice·s de technologies d'assistance doivent connaître l'orientation du widget afin de naviguer correctement.

Les flèches haut et bas sont généralement disponibles pour le défilement normal du navigateur, même lorsque le focus se trouve à l'intérieur d'un arbre ou d'une liste d'onglets. Incluez `aria-orientation` pour alerter les utilisateur·ice·s lorsqu'un widget n'a pas l'orientation par défaut attendue et la navigation associée.

Rappelez-vous toujours que ARIA ne modifie que la façon dont les technologies d'assistance présentent le contenu à vos utilisateur·ice·s&nbsp;; modifier le comportement des touches fléchées nécessite JavaScript.

## Valeurs

- `horizontal`
  - : L'élément est orienté horizontalement.
- `undefined` (par défaut)
  - : L'orientation de l'élément est inconnue/ambiguë.
- `vertical`
  - : L'élément est orienté verticalement.

## Interfaces associées

- {{DOMxRef("Element.ariaOrientation")}}
  - : La propriété {{DOMxRef("Element.ariaOrientation", "ariaOrientation")}}[`ariaOrientation`](/fr/docs/Web/API/Element/ariaOrientation) faisant partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-orientation`.
- {{DOMxRef("ElementInternals.ariaOrientation")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaOrientation", "ariaOrientation")}}, faisant partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-orientation`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`select`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/select_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)

Hérité par les rôles&nbsp;:

- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- [Comprendre WCAG&nbsp;: Clavier](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard)
