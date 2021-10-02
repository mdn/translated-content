---
title: HTMLTimeElement
slug: Web/API/HTMLTimeElement
translation_of: Web/API/HTMLTimeElement
---
{{ APIRef("HTML DOM") }}

L'interface **`HTMLTimeElement`** fournit des propriétés spéciales (en plus de celles fournies en héritage par l'interface {{domxref("HTMLElement")}}) pour manipuler les éléments {{HTMLElement("time")}}.

{{InheritanceDiagram(600, 120)}}

## Propriétés

_Hérite des propriétés de {{domxref("HTMLElement")}}._

- {{domxref("HTMLTimeElement.dateTime")}}
  - : C'est une {{domxref("DOMString")}} qui reflète l'attribut {{htmlattrxref("datetime", "time")}} de l'élément HTML correspondant, dans une forme interprétable par un ordinateur de la date et de l'heure.

## Méthodes

_Pas de méthode spécifique, mais cette interface hérite des méthodes de {{domxref("HTMLElement")}}._

## Spécifications

| Spécification                                                                                                            | Status                           | Commentaires                                               |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#htmltimeelement", "HTMLTimeElement")}}                                 | {{Spec2('HTML WHATWG')}} |                                                            |
| {{SpecName('HTML5.1', "text-level-semantics.html#the-time-element", "HTMLTimeElement")}}     | {{Spec2('HTML5.1')}}     | Pas de changement depuis {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "text-level-semantics.html#the-time-element", "HTMLTimeElement")}} | {{Spec2('HTML5 W3C')}}     | Définition initiale.                                       |

## Compatibilité des navigateurs

{{Compat("api.HTMLTimeElement")}}

## Voir aussi

- L'élément HTML {{HTMLElement("time")}} implémentant cette interface.
