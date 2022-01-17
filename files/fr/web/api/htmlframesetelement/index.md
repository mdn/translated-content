---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
tags:
  - API
  - HTML-DOM
  - HTMLFrameSetElement
  - Interface
  - Obsolete
  - Reference
translation_of: Web/API/HTMLFrameSetElement
---
{{APIRef("HTML DOM")}}{{Obsolete_header}}

L'interface **`HTMLFrameSetElement`** fournit des propriétés spéciales (au-delà de celles de l'interface standard {{domxref("HTMLElement")}} dont elles héritent aussi) pour manipuler les éléments {{HTMLELEment("frameset")}}.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

- {{domxref("HTMLFrameSetElement.cols")}} {{obsolete_inline}}
  - : Est un {{domxref("DOMString")}} structuré comme une liste séparée par des virgules spécifiant la largeur de chaque colonne à l'intérieur d'un jeu de cadres.
- {{domxref("HTMLFrameSetElement.rows")}} {{obsolete_inline}}
  - : Est un {{domxref("DOMString")}} structuré comme une liste séparée par des virgules spécifiant la hauteur de chaque colonne à l'intérieur d'un jeu de cadres.

## Méthodes

_Pas de méthode spécifique; hérite des méthodes de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

## Gestionnaires d'événements

_Aucun gestionnaire d'événements spécifique; hérite des gestionnairs d'événements de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("afterprint")}} est déclenché.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("beforeprint")}} est déclenché.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("beforeunload")}} est déclenché.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("hashchange")}} est déclenché.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("languagechange")}} est déclenché.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("message")}} est déclenché.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("offline")}} est déclenché.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("online")}} est déclenché.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("pagehide")}} est déclenché.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("pageshow")}} est déclenché.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("popstate")}} est déclenché.
- {{domxref("WindowEventHandlers.onresize")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("resize")}} est déclenché.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("storage")}} est déclenché.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("unload")}} est déclenché.

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "#htmlframesetelement", "HTMLFrameSetElement")}}             | {{Spec2('HTML WHATWG')}} | À partir de l'instantané {{SpecName('HTML5 W3C')}}, l'interface {{domxref("WindowEventHandlers")}} a maintenant une propriété `onlanguagechange`. |
| {{SpecName('HTML5 W3C', "obsolete.html#htmlframesetelement", "HTMLFrameSetElement")}} | {{Spec2('HTML5 W3C')}}     | Instantané d'un précédent {{SpecName('HTML WHATWG')}} Les cadres sont désormais obsolètes. Implémente {{domxref("WindowEventHandlers")}}.       |
| {{SpecName('DOM2 HTML', 'html.html#ID-ID-43829095', 'HTMLBodyElement')}}                 | {{Spec2('DOM2 HTML')}}     | Aucun changement par rapport à {{SpecName("DOM1")}}.                                                                                                       |
| {{SpecName('DOM1', 'level-one-html.html#ID-43829095', 'HTMLBodyElement')}}             | {{Spec2('DOM1')}}         | Définition initiale.                                                                                                                                               |

## Compatibilité des navigateurs

{{Compat("api.HTMLFrameSetElement")}}

## Voir aussi

- Élément HTML implémentant cette interface : {{HTMLElement("frameset")}}
- L'équivalent de cet élément en dehors des cadres : {{domxref("HTMLBodyElement")}}.
