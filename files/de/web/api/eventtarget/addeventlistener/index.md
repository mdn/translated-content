---
title: EventListener
slug: Web/API/EventTarget/addEventListener
tags:
  - API
  - DOM
  - DOM Events
translation_of: Web/API/EventListener
original_slug: Web/API/EventListener
---
{{APIRef("DOM Events")}}

## Methodenübersicht

| void [`handleEvent`](<#handleEvent()>) (in Event event); |
| -------------------------------------------------------- |

## Methoden

### handleEvent()

Diese Methode wird immer aufgerufen, wenn ein Event auftritt, welche im `EventListener` Interface registriert wurden.

    void handleEvent(
      in Event event
    );

##### Parameter

- `event`
  - : Das DOM-{{ domxref("Event") }} das zu registrieren ist.

### Anmerkungen

Da das Interface mit dem `[function]` Flag gekennzeichnet ist, implementieren alle JavaScript-Funktionen dieses automatisch. Das Aufrufen von [handleEvent](#handleevent) einer solchen Implementierung ruft automatisch diese Funktion auf.

## Siehe auch

- {{ spec("http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener","Document Object Model Events: EventListener","REC") }}
