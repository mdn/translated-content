---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

L'interface **`HTMLFrameSetElement`** fournit des propriétés spéciales (au-delà de celles de l'interface standard {{domxref("HTMLElement")}} dont elles héritent aussi) pour manipuler les éléments {{HTMLELEment("frameset")}}.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

- {{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} structuré comme une liste séparée par des virgules spécifiant la largeur de chaque colonne à l'intérieur d'un jeu de cadres.
- {{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}
  - : Est un {{domxref("DOMString")}} structuré comme une liste séparée par des virgules spécifiant la hauteur de chaque colonne à l'intérieur d'un jeu de cadres.

## Méthodes

_Pas de méthode spécifique; hérite des méthodes de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

## Gestionnaires d'événements

_Aucun gestionnaire d'événements spécifique; hérite des gestionnairs d'événements de son parent, {{domxref("HTMLElement")}} et de {{domxref("WindowEventHandlers")}}._

- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`afterprint`](/fr/docs/Web/API/Window/afterprint_event) est déclenché.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`beforeprint`](/fr/docs/Web/API/Window/beforeprint_event) est déclenché.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`beforeunload`](/fr/docs/Web/API/Window/beforeunload_event) est déclenché.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`hashchange`](/fr/docs/Web/API/Window/hashchange_event) est déclenché.
- {{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`languagechange`](/fr/docs/Web/API/Window/languagechange_event) est déclenché.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`message`](/fr/docs/Web/API/Window/message_event) est déclenché.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`offline`](/fr/docs/Web/API/Window/offline_event) est déclenché.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`online`](/fr/docs/Web/API/Window/online_event) est déclenché.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`pagehide`](/fr/docs/Web/API/Window/pagehide_event) est déclenché.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`pageshow`](/fr/docs/Web/API/Window/pageshow_event) est déclenché.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`popstate`](/fr/docs/Web/API/Window/popstate_event) est déclenché.
- {{domxref("WindowEventHandlers.onresize")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`resize`](/fr/docs/Web/API/Window/resize_event) est déclenché.
- {{domxref("WindowEventHandlers.onstorage")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`storage`](/fr/docs/Web/API/Window/storage_event) est déclenché.
- {{domxref("WindowEventHandlers.onunload")}}
  - : Est un gestionnaire d'évènement représentant le code à appeler lorsque l'événement [`unload`](/fr/docs/Web/API/Window/unload_event) est déclenché.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface : {{HTMLElement("frameset")}}
- L'équivalent de cet élément en dehors des cadres : {{domxref("HTMLBodyElement")}}.
