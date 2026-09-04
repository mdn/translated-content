---
title: "ARIA : attribut aria-valuemin"
short-title: aria-valuemin
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-valuemin` définit la valeur minimale autorisée pour un composant de type plage.

## Description

L'attribut `aria-valuemin` définit la valeur minimale autorisée pour les composants de type plage. Il est similaire à l'attribut `min` des éléments HTML {{HTMLElement('progress')}}, {{HTMLElement('meter')}} et {{HTMLElement('input')}} de type [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range), [`number`](/fr/docs/Web/HTML/Reference/Elements/input/number) et tous les types date et heure.

Lors de la création d'un rôle de type plage, y compris [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) et [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) sur un élément non sémantique, `aria-valuemin` permet de définir une valeur minimale inférieure à la valeur maximale et est un attribut requis pour `slider`, `scrollbar` et `spinbutton`.

Déclarer les valeurs minimale et maximale permet aux technologies d'assistance d'indiquer la taille de la plage aux utilisateur·ice·s.

La valeur maximale est définie avec [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax).

> [!WARNING]
> Le rôle [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) ne doit **PAS** être utilisé car il est [«&nbsp;abstrait&nbsp;»](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). L'attribut `aria-valuemin` est utilisé sur tous les sous-types de rôles de plage.

## Valeurs

- `<number>`
  - : Un nombre décimal, inférieur à la valeur maximale.

## Interfaces associées

- {{DOMxRef("Element.ariaValueMin")}}
  - : La propriété [`ariaValueMin`](/fr/docs/Web/API/Element/ariaValueMin), qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-valuemin`.
- {{DOMxRef("ElementInternals.ariaValueMin")}}
  - : La propriété [`ariaValueMin`](/fr/docs/Web/API/ElementInternals/ariaValueMin), qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-valuemin`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Hérité dans les rôles&nbsp;:

- [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spécifications

{{Specifications}}

## Voir aussi

- Le rôle ARIA [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- Attribut `min` de l'élément [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range#min)
- L'attribut ARIA [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- L'attribut ARIA [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
