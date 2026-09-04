---
title: HTMLUListElement
slug: Web/API/HTMLUListElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLUListElement`** fournit des propriétés particulières (en plus de celles définies sur l'interface {{DOMxRef("HTMLElement")}} dont elle hérite également) pour manipuler les éléments de liste non ordonnée ({{HTMLElement("ul")}}).

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLUListElement.type` {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/ul#type) et définissant le type de marqueur à utiliser pour l'affichage. Les valeurs dépendent du navigateur et n'ont jamais été normalisées.
- {{DOMxRef("HTMLUListElement.compact")}} {{Deprecated_Inline}}
  - : Un booléen indiquant que l'espacement entre les éléments de la liste doit être réduit. Cette propriété reflète uniquement l'attribut [`compact`](/fr/docs/Web/HTML/Reference/Elements/ul#compact), elle ne prend pas en compte la propriété CSS {{CSSxRef("line-height")}} utilisée pour ce comportement dans les pages modernes.

## Méthodes d'instance

_Aucune méthode spécifique&nbsp;; hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("ul")}}.
