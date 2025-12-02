---
title: "ARIA : attribut aria-multiline"
short-title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

L'attribut `aria-multiline` indique si une `textbox` accepte plusieurs lignes de saisie ou seulement une.

## Description

Le comportement par défaut de la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> diffère entre les champs de texte sur une seule ligne et ceux sur plusieurs lignes. Lorsque la sélection se trouve dans un `{{HTMLElement("input/text", '&lt;input type="text"&gt;')}}` sur une seule ligne, la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> envoie généralement le formulaire.

Lorsque la sélection se trouve dans un {{HTMLElement('textarea')}}, la même frappe insère un saut de ligne. Applicable uniquement aux éléments ayant le rôle [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), l'attribut `aria-multiline` indique aux technologies d'assistance si ce champ de texte accepte plusieurs lignes de saisie ou seulement une seule ligne, et fixe les attentes quant au type de données à saisir et au comportement des touches.

> [!NOTE]
> Dans la mesure du possible, utilisez l'élément HTML {{HTMLElement('input')}} ou le {{HTMLElement('textarea')}}, car ils possèdent une sémantique et des comportements intégrés, ne requièrent pas d'attributs ARIA ni de scripts, et offrent un support clavier natif.

Si `aria-multiline="true"` est défini, le widget `textbox` acceptera des sauts de ligne dans la saisie, de la même manière que l'élément HTML {{HTMLElement('textarea')}}. Les éléments ayant le rôle `textbox` qui n'ont pas cet attribut, ou dont la valeur est `false`, sont des champs de texte simples d'une seule ligne.

Tenez compte de la sélection et des frappes de touches lors de la conception des champs de texte. ARIA ne modifie que l'arbre d'accessibilité et la manière dont les technologies d'assistance présentent le champ de texte à vos utilisateur·ice·s. ARIA ne change rien au comportement par défaut d'un élément. Si vous n'utilisez pas les éléments HTML sémantiques pour leur usage prévu et leurs comportements par défaut, vous devez utiliser JavaScript pour gérer le comportement, y compris la réponse aux événements de frappe.

## Valeurs

- `true`
  - : Le champ de texte accepte plusieurs lignes de saisie.

- `false`
  - : Le champ de texte n'accepte qu'une seule ligne de saisie.

## Interfaces associées

- {{DOMxRef("Element.ariaMultiLine")}}
  - : La propriété [`ariaMultiLine`](/fr/docs/Web/API/Element/ariaMultiLine), faisant partie de l'interface {{DOMxRef("Element")}}, reflète la valeur de l'attribut `aria-multiline`.
- {{DOMxRef("ElementInternals.ariaMultiLine")}}
  - : La propriété [`ariaMultiLine`](/fr/docs/Web/API/ElementInternals/ariaMultiLine), faisant partie de l'interface {{DOMxRef("ElementInternals")}}, reflète la valeur de l'attribut `aria-multiline`.

## Rôles associés

Utilisé dans les rôles&nbsp;:

- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Hérité par les rôles&nbsp;:

- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spécifications

{{Specifications}}

## Voir aussi

- Le rôle ARIA [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- Le rôle ARIA [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
