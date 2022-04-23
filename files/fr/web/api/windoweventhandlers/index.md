---
title: WindowEventHandlers
slug: Web/API/WindowEventHandlers
tags:
  - API
translation_of: Web/API/WindowEventHandlers
---
{{APIRef("HTML DOM")}}La mixin **`WindowEventHandlers`** décrit les gestionnaires d'événements communs à plusieurs interfaces comme {{domxref("Window")}}, or {{domxref("HTMLBodyElement")}} et {{domxref("HTMLFrameSetElement")}}. Chacune de ces interfaces peut implémenter des gestionnaires d'événement supplémentaires.

> **Note :** `WindowEventHandlers` est une mixin et non une interface; il n'est pas possible de créer un objet de type `WindowEventHandlers`.

## Propriétés

_Les propriétés d'événement, de la forme `onXYZ`, sont définis sur {{domxref("WindowEventHandlers")}} et implémentées par {{domxref("Window")}} ou {{domxref("WorkerGlobalScope")}} pour les Web Workers._

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

## Méthodes

_Cette interface ne définit aucune méthode._

## Spécifications

| Specification                                                                                        | Status                           | Comment                                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} | Pas de changement depuis {{SpecName("HTML5.1")}}.                                                                       |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName("HTML WHATWG")}}. Ajoute `onlanguage`.                                                           |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName("HTML WHATWG")}}. Création de `WindowEventHandlers` (les propriétés étaient sur la cible avant). |

## Compatibilité des navigateurs

{{Compat("api.WindowEventHandlers")}}

## Voir aussi

- {{domxref("Window")}} et {{domxref("WorkerGlobalScope")}}
