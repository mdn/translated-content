---
title: HTMLQuoteElement
slug: Web/API/HTMLQuoteElement
tags:
  - DOM
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLQuoteElement
---
{{ ApiRef() }}

## Interface des éléments HTML de citation

Les objets DOM quote expose l'interface [`HTMLQuoteElement`](http://www.w3.org/TR/html5/grouping-content.html#htmlquoteelement) (ou {{ HTMLVersionInline(4) }} [`HTMLQuoteElement`](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-70319763)), qui fournissent plusieurs propriétés pour manipuler les éléments de citation (et viennent s'ajouter aux propriétés habituelles pour un objet de l'interface {{domxref("element")}}, disponibles par héritage).

## Propriétés

| Nom    | Type                             | Description                                                                                                               |
| ------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `cite` | {{domxref("DOMString")}} | Reflète l'attribut HTML {{ htmlattrxref("cite", "blockquote") }} contenant l'URL de la source de la citation. |

## Voir également

Cette interface est supportée par les deux éléments HTML {{ HTMLElement("blockquote") }} et {{ HTMLElement("q") }}.
