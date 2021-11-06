---
title: HTMLDivElement
slug: Web/API/HTMLDivElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLDivElement
---
{{APIRef("HTML DOM")}}

L'interface **`HTMLDivElement`** fournit certaines propriétés spécifiques (en plus de celles qui proviennent de l'interface {{domxref("HTMLElement")}} via l'héritage) afin de manipuler les éléments {{HtmlElement("div")}}.

{{InheritanceDiagram(600,120)}}

## Propriétés

_Cette interface hérite des propriétés de son parent {{domxref("HTMLElement")}}._

- {{domxref("HTMLDivElement.align")}} {{obsolete_inline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} qui représente une propriété à valeur contrainte indiquant l'alignement du contenu de l'élément par rapport à son contexte. Les valeurs possibles pour cette propriété sont `"left"`, `"right"`, `"justify"` et `"center"`.

## Méthodes

_Aucune méthode spécifique. Toutes les méthodes sont héritées depuis le parent {{domxref("HTMLElement")}}._

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires                                                 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "#htmldivelement", "HTMLDivElement")}}                             | {{Spec2('HTML WHATWG')}} |                                                              |
| {{SpecName('HTML5 W3C', "grouping-content.html#the-div-element", "HTMLDivElement")}} | {{Spec2('HTML5 W3C')}}     | Aucune modification depuis {{SpecName("DOM2 HTML")}}. |
| {{SpecName('DOM2 HTML', 'html.html#ID-22445964', 'HTMLDivElement')}}                     | {{Spec2('DOM2 HTML')}}     | Aucune modification depuis {{SpecName("DOM1")}}.     |
| {{SpecName('DOM1', 'level-one-html.html#ID-22445964', 'HTMLDivElement')}}                 | {{Spec2('DOM1')}}         | Définition initiale.                                         |

## Compatibilité des navigateurs

{{Compat("api.HTMLDivElement")}}

## Voir aussi

- L'élément HTML qui implémente cette interface : {{HTMLElement("div")}}.
