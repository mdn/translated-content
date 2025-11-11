---
title: "HTMLMediaElement: timeupdate"
slug: Web/API/HTMLMediaElement/timeupdate_event
---

{{APIRef("HTMLMediaElement")}}

El evento `timeupdate` es llamado cuando el tiempo indicado por el atributo `currentTime` es actualizado.

La frecuencia del evento depende de la carga del sistema, pero se encuentra en un rango de 4Hz y 66Hz (asumiendo que los manejadores de eventos no toman mas de 250ms para correr). Se recomienda a los User agents variar la frecuencia del evento basados en la carga del sistema y el costo promedio de procesamiento del evento cada vez que corre, para que las actualizaciones a la UI no sean mas frecuentes que las que el user agent puede manejar confortablemente mientras se decodifica el video.

## Información General

- Specification
  - : [HTML5 media](https://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-timeupdate)
- Interface
  - : Event
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : None.

## Propiedades

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Eventos Relacionados

- [`playing`](/es/docs/Web/API/HTMLMediaElement/playing_event)
- [`waiting`](/es/docs/Web/API/HTMLMediaElement/waiting_event)
- [`seeking`](/es/docs/Web/API/HTMLMediaElement/seeking_event)
- [`seeked`](/es/docs/Web/API/HTMLMediaElement/seeked_event)
- [`ended`](/es/docs/Web/API/HTMLMediaElement/ended_event)
- [`loadedmetadata`](/es/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`loadeddata`](/es/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`canplay`](/es/docs/Web/API/HTMLMediaElement/canplay_event)
- [`canplaythrough`](/es/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`durationchange`](/es/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`timeupdate`](/es/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`play`](/es/docs/Web/API/HTMLMediaElement/play_event)
- [`pause`](/es/docs/Web/API/HTMLMediaElement/pause_event)
- [`ratechange`](/es/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`volumechange`](/es/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`suspend`](/es/docs/Web/API/HTMLMediaElement/suspend_event)
- [`emptied`](/es/docs/Web/API/HTMLMediaElement/emptied_event)
- [`stalled`](/es/docs/Web/API/HTMLMediaElement/stalled_event)
