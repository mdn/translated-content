---
title: "ARIA : attribut aria-haspopup"
short-title: aria-haspopup
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

L'attribut `aria-haspopup` indique la disponibilité et le type d'élément contextuel interactif pouvant être déclenché par l'élément sur lequel l'attribut est défini.

## Description

En ARIA, les menus interactifs, zones de liste, arbres, grilles et boîtes de dialogue qui apparaissent au-dessus d'autres contenus lorsqu'ils sont déclenchés sont considérés comme des «&nbsp;éléments contextuels&nbsp;». Ces éléments contextuels sont déclenchés par un ou plusieurs éléments interactifs de la page. La disponibilité et le type d'élément contextuel que l'élément interactif va déclencher doivent être identifiés avec l'état `aria-haspopup`.

La présence de `aria-haspopup`, avec l'une des six valeurs énumérées — `menu`, `listbox`, `tree`, `grid`, `dialog` ou `true` — indique que l'élément peut déclencher un élément contextuel et le type d'élément qui sera affiché. L'élément qui apparaît doit avoir le rôle indiqué. La valeur `true` est équivalente à `menu`. Toute autre valeur, y compris une chaîne de caractères vide ou un autre [rôle](/fr/docs/Web/Accessibility/ARIA/Reference/Roles), est traitée comme si `false` était défini.

Un [`tooltip`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role) n'est pas considéré comme un élément contextuel dans ce contexte, car il n'est pas interactif.

> [!NOTE]
> Assurez-vous que le rôle de l'élément servant de conteneur pour le contenu contextuel est [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role), [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ou [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) et que la valeur de `aria-haspopup` correspond au rôle du conteneur contextuel.

L'état `aria-haspopup` informe les utilisateur·ice·s de technologies d'assistance qu'il existe un élément contextuel et de quel type il s'agit, mais ne fournit aucune interactivité. Pour que l'élément contextuel soit accessible au clavier, assurez-vous que l'élément avec `aria-haspopup` peut recevoir la sélection et déclencher l'élément contextuel, qu'il existe un mécanisme clavier pour ouvrir l'élément contextuel, et que l'élément contextuel gère la sélection de tous ses descendants.

> [!NOTE]
> ARIA n'active pas de fonctionnalité accessible. ARIA ne fait que transmettre le comportement prévu de votre fonctionnalité.

Lors de la création d'une [barre de menu](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role), un [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) parent doit avoir `aria-haspopup="menu"` (ou `true`). Tout bouton ouvrant un menu doit avoir le rôle [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) ou, de préférence, être un élément HTML {{HTMLElement('button')}} et également avoir `aria-haspopup="menu"` (ou `true`). Les éléments [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) avec des menus contextuels doivent aussi avoir `aria-haspopup="menu"`. Notez que les barres de menu ne doivent pas être utilisées pour créer la navigation d'un site web.

> [!NOTE]
> Les éléments avec le rôle [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ont une valeur implicite de `aria-haspopup` à `listbox`.

## Valeurs

- `false` (par défaut)
  - : L'élément ne possède pas d'élément contextuel.
- `true`
  - : L'élément contextuel est un menu.
- `menu`
  - : L'élément contextuel est un menu.
- `listbox`
  - : L'élément contextuel est une zone de liste.
- `tree`
  - : L'élément contextuel est un arbre.
- `grid`
  - : L'élément contextuel est une grille.
- `dialog`
  - : L'élément contextuel est une boîte de dialogue.

## Interfaces associées

- {{domxref("Element.ariaHasPopup")}}
  - : La propriété [`ariaHasPopup`](/fr/docs/Web/API/Element/ariaHasPopup), partie de l'interface {{domxref("Element")}}, reflète la valeur de l'attribut `aria-haspopup`, qui indique la disponibilité et le type d'élément contextuel interactif, tel qu'un menu ou une boîte de dialogue, pouvant être déclenché par un élément.
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : La propriété [`ariaHasPopup`](/fr/docs/Web/API/ElementInternals/ariaHasPopup) de l'interface {{domxref("ElementInternals")}} reflète la valeur de l'attribut `aria-haspopup`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

Hérité dans les rôles&nbsp;:

- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- Le rôle ARIA [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- Le rôle ARIA [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- Le rôle ARIA [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- Le rôle ARIA [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)
- Le rôle ARIA [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [Exemple de barre d'outils <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/) - Pratiques WAI ARIA du W3C
