---
title: "ARIA : attribut aria-valuetext"
short-title: aria-valuetext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-valuetext` définit l'alternative textuelle compréhensible par l'humain de `aria-valuenow` pour un composant de type plage.

## Description

Les nombres — même les pourcentages — ne sont pas toujours conviviaux. Les technologies d'assistance présentent [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) comme des valeurs numériques. Si une barre de progression est à 8%, qu'est-ce que cela signifie&nbsp;? `aria-valuetext` permet de présenter la valeur actuelle de façon plus conviviale et compréhensible. Par exemple, la valeur d'une jauge de batterie pourrait être transmise comme `aria-valuetext="8% (34 minutes restantes)"`.

L'attribut `aria-valuetext` s'utilise avec l'attribut `aria-valuenow`, et non à sa place, sauf si cette valeur n'est pas connue.

`aria-valuetext` n'est nécessaire que lorsque la valeur numérique de `aria-valuenow` n'est pas parlante. Par exemple, les valeurs d'une plage sont numériques mais peuvent être utilisées pour des valeurs non numériques, comme le niveau d'une classe universitaire. Les valeurs de `aria-valuenow` pour un cursus universitaire de 4 ans pourraient aller de 1 à 4, ce qui indique la position de chaque valeur dans l'ensemble des valeurs. Dans ce cas, `aria-valuetext` pourrait être l'une des chaînes de caractères suivantes&nbsp;: «&nbsp;première année&nbsp;», «&nbsp;deuxième année&nbsp;», «&nbsp;troisième année&nbsp;», «&nbsp;quatrième année&nbsp;».

Si la valeur numérique est parlante, comme un sélecteur avec `aria-valuenow="3"` pour le nombre de parts de pizza à commander, `aria-valuetext` n'est pas nécessaire.

Lorsque `aria-valuetext` et `aria-valuenow` sont tous deux présents, c'est `aria-valuetext` qui est annoncé. Lorsqu'il n'y a pas d'attribut `aria-valuetext`, les technologies d'assistance annoncent la valeur de l'attribut `aria-valuenow` pour la valeur actuelle.

## Valeurs

- `<string>`
  - : Une alternative textuelle compréhensible par l'humain à la valeur de `aria-valuenow`.

## Interfaces associées

- {{DOMxRef("Element.ariaValueText")}}
  - : La propriété {{DOMxRef("Element.ariaValueText", "ariaValueText")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-valuetext`.
- {{DOMxRef("ElementInternals.ariaValueText")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaValueText", "ariaValueText")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-valuetext`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`range`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
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

- L'attribut ARIA [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
