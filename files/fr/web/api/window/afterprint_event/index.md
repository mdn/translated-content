---
title: afterprint
slug: Web/API/Window/afterprint_event
translation_of: Web/API/Window/afterprint_event
original_slug: Web/Events/afterprint
---
L'événement **afterprint** est déclenché après que le document associé a été imprimé ou que l'aperçu avant impression a été fermé.

## Informations générales

- Spécification
  - : [HTML5](https://html.spec.whatwg.org/multipage/webappapis.html#printing)
- Interface
  - : Event
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : DefaultView (`<window>`)
- Action par défaut
  - : Aucune

## Propriétés

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Evénements liés

- [beforeprint](/fr/docs/Mozilla_event_reference/beforeprint)
