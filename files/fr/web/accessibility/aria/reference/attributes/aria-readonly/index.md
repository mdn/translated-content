---
title: "ARIA : attribut aria-readonly"
short-title: aria-readonly
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-readonly
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-readonly` indique que l'élément n'est pas modifiable, mais reste utilisable.

## Description

Lorsque vous souhaitez indiquer qu'un élément interactif fonctionne mais n'est pas modifiable, définissez `aria-readonly="true"`. Cela indique à l'utilisateur·ice qu'un élément interactif normalement sélectionnable et copiable a été placé en mode lecture seule (et non désactivé).

Quand `aria-readonly` est défini à `true`, cela signifie que l'utilisateur·ice peut lire mais pas modifier la valeur du widget. Les éléments en lecture seule restent pertinents pour l'utilisateur·ice&nbsp;: il ne faut pas empêcher la navigation vers l'élément ou ses descendants sélectionnables, ni la copie de la valeur.

Exemples&nbsp;:

- Éléments de formulaire qui ne doivent pas être modifiés.
- En-têtes de ligne et de colonne dans un tableur.
- La valeur totale dans un panier d'achat.

Si la valeur non modifiable ne doit pas pouvoir recevoir la sélection, utilisez [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) à la place.

> [!NOTE]
> Lorsque vous utilisez des contrôles de formulaire HTML sémantiques, si vous définissez l'attribut `readonly`, il n'est pas nécessaire d'ajouter `aria-readonly="true"`.

> [!NOTE]
> La valeur d'un `<input type="checkbox">` ne peut pas être modifiée, ce qui rend `readonly` non pertinent. Cependant, lors de la création de cases à cocher avec `role="checkbox"`, l'attribut `aria-readonly` est pris en charge.

## Valeurs

- `true`
  - : L'élément est en lecture seule.
- `false` (valeur par défaut)
  - : L'élément n'est pas en lecture seule.

## Interfaces associées

- {{DOMxRef("Element.ariaReadOnly")}}
  - : La propriété {{DOMxRef("Element.ariaReadOnly", "ariaReadOnly")}}, qui fait partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-readonly`.
- {{DOMxRef("ElementInternals.ariaReadOnly")}}
  - : La propriété {{DOMxRef("ElementInternals.ariaReadOnly", "ariaReadOnly")}}, qui fait partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-readonly`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut HTML [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly)
- L'attribut ARIA [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
