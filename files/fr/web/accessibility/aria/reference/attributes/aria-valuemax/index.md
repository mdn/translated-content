---
title: "ARIA : attribut aria-valuemax"
short-title: aria-valuemax
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-valuemax` définit la valeur maximale autorisée pour un composant de type plage.

## Description

L'attribut `aria-valuemax` définit la valeur maximale autorisée pour les composants de type plage. Il est similaire à l'attribut `max` des éléments HTML {{HTMLElement('progress')}}, {{HTMLElement('meter')}} et {{HTMLElement('input')}} de type [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range), [`number`](/fr/docs/Web/HTML/Reference/Elements/input/number) et tous les types date et heure.

Lors de la création d'un rôle de type plage, y compris [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) et [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) sur un élément non sémantique, `aria-valuemax` permet de définir une valeur maximale supérieure à la valeur minimale et est un attribut requis pour `slider`, `scrollbar` et `spinbutton`.

Déclarer les valeurs minimale et maximale permet aux technologies d'assistance d'indiquer la taille de la plage aux utilisateur·ice·s. La valeur minimale est définie avec [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin).

> [!WARNING]
> Le rôle [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) ne doit **PAS** être utilisé car il est [«&nbsp;abstrait&nbsp;»](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). L'attribut `aria-valuemax` est utilisé sur tous les sous-types de rôles de plage.

## Exemple

Le code ci-dessous montre un curseur avec une valeur maximale de 9.

```html
<div id="dimesLabel">Dimes</div>
<div
  role="slider"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="9"
  aria-labelledby="dimesLabel"
  id="dimes"></div>
```

## Valeurs

- `<number>`
  - : Un nombre entier ou décimal qui est supérieur à la valeur minimale.

## Interfaces associées

- {{DOMxRef("Element.ariaValueMax")}}
  - : La propriété {{DOMxRef("Element.ariaValueMax", "ariaValueMax")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-valuemax`.
- {{DOMxRef("ElementInternals.ariaValueMax")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaValueMax", "ariaValueMax")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-valuemax`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`meter`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) (requis)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) (requis)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) (requis)

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
- Attribut `max` de l'élément [`<input type="range">`](/fr/docs/Web/HTML/Reference/Elements/input/range#max)
- L'attribut ARIA [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- L'attribut ARIA [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
