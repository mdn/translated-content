---
title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
translation_of: Web/API/Document/fullscreenchange_event
---
Das `onfullscreenchange` Event wird gesendet, wenn der Browser den Vollbildmodus startet oder beendet.

## Allgemeine Information

- Speifikation
  - : [Fullscreen](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api)
- Schnittstelle
  - : Event
- Blubbert
  - : Ja
- Abbrechbar
  - : Nein
- Ziel
  - : Dokument
- Standardaktion
  - : Keine

## Eigenschaften

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Beispiel

```js
// Diese API hat noch immer Vendor Prefixe in den Browsern, die sie implementieren
document.addEventListener("fullscreenchange", function( event ) {

    // Das Event selber hat keine Informationen über darüber, ob sich der Browser
    // im Vollbildmodus befindet, aber man kann diesen über die Fullscreen API
    // erhalten
    if ( document.fullscreen ) {

        // Das Ziel des Events ist immer das Dokument,
        // aber man kann das eigentliche Element im Vollbildmodus über die API
        // abrufen
        document.fullscreenElement;
    }

});
```

## Verwandte Events

- [`fullscreenerror`](/de/docs/Mozilla_event_reference/fullscreenerror)

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
