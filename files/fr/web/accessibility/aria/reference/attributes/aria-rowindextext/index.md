---
title: "ARIA : attribut aria-rowindextext"
short-title: aria-rowindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-rowindextext` définit une alternative textuelle lisible par l'humain pour `aria-rowindex`.

## Description

Lorsque vous avez un tableau très long ou que vous souhaitez afficher uniquement une section d'un tableau, toutes les lignes ne sont pas forcément présentes dans le DOM. Dans ce cas, on utilise [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) avec une valeur entière pour définir le nombre de lignes que le tableau (ou la grille) aurait si toutes les lignes étaient présentes, et on ajoute la propriété [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) sur chaque ligne et cellule étendue pour indiquer l'index de la ligne dans le tableau complet. Lorsque la valeur de `aria-rowindex` n'est pas parlante ou ne reflète pas l'index affiché, on peut aussi ajouter `aria-rowindextext` pour fournir une alternative textuelle lisible à la valeur entière de `aria-rowindex`.

`aria-rowindextext` doit être utilisé **en complément** de `aria-rowindex`, jamais en remplacement. Certaines technologies d'assistance utilisent l'index numérique pour suivre la position de l'utilisateur·ice ou proposer une navigation alternative dans le tableau. `aria-rowindextext` est utile si la valeur entière n'est pas parlante ou ne reflète pas l'index affiché, comme dans un jeu d'échecs ou de bataille navale.

`aria-rowindextext` s'ajoute à chaque {{HTMLElement('tr')}} ou aux éléments avec le rôle `row`. Il peut aussi être ajouté aux cellules ou aux éléments enfants de chaque ligne.

## Valeurs

- `<string>`
  - : Alternative textuelle lisible par l'humain à la valeur numérique de [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex).

## Interfaces associées

- {{DOMxRef("Element.ariaRowIndexText")}}
  - : La propriété {{DOMxRef("Element.ariaRowIndexText", "ariaRowIndexText")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-rowindextext`.
- {{DOMxRef("ElementInternals.ariaRowIndexText")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaRowIndexText", "ariaRowIndexText")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-rowindextext`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- L'attribut ARIA [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- L'attribut ARIA [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- L'attribut ARIA [`aria-colindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext)
- L'attribut ARIA [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
