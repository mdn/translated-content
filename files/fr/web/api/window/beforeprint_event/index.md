---
title: beforeprint
slug: Web/API/Window/beforeprint_event
tags:
  - Evènement
  - Reference
translation_of: Web/API/Window/beforeprint_event
original_slug: Web/Events/beforeprint
---
L'événement **`beforeprint`** est déclenché lorsque le document associé est sur le point d'être imprimé ou qu'un "aperçu avant impression" est lancé.

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

## Exemples

En utilisant `window.addEventListener()` :

    window.addEventListener("beforeprint", (evenement) => {
      console.log("Before print");
    });

## Propriétés

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Evénements liés

- [afterprint](/en-US/docs/Mozilla_event_reference/afterprint)
