---
title: "HTMLMediaElement: timeupdate"
slug: Web/API/HTMLMediaElement/timeupdate_event
---

El evento `timeupdate` es llamado cuando el tiempo indicado por el atributo `currentTime` es actualizado.

La frecuencia del evento depende de la carga del sistema, pero se encuentra en un rango de 4Hz y 66Hz (asumiendo que los manejadores de eventos no toman mas de 250ms para correr). Se recomienda a los User agents variar la frecuencia del evento basados en la carga del sistema y el costo promedio de procesamiento del evento cada vez que corre, para que las actualizaciones a la UI no sean mas frecuentes que las que el user agent puede manejar confortablemente mientras se decodifica el video.

## Información General

- Specification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-timeupdate)
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

- [`playing`](/es/docs/Web/Reference/Events/playing)
- [`waiting`](/es/docs/Web/Reference/Events/waiting)
- [`seeking`](/es/docs/Web/Reference/Events/seeking)
- [`seeked`](/es/docs/Web/Reference/Events/seeked)
- [`ended`](/es/docs/Web/Reference/Events/ended)
- [`loadedmetadata`](/es/docs/Web/Reference/Events/loadedmetadata)
- [`loadeddata`](/es/docs/Web/Reference/Events/loadeddata)
- [`canplay`](/es/docs/Web/Reference/Events/canplay)
- [`canplaythrough`](/es/docs/Web/Reference/Events/canplaythrough)
- [`durationchange`](/es/docs/Web/Reference/Events/durationchange)
- [`timeupdate`](/es/docs/Web/Reference/Events/timeupdate)
- [`play`](/es/docs/Web/Reference/Events/play)
- [`pause`](/es/docs/Web/Reference/Events/pause)
- [`ratechange`](/es/docs/Web/Reference/Events/ratechange)
- [`volumechange`](/es/docs/Web/Reference/Events/volumechange)
- [`suspend`](/es/docs/Web/Reference/Events/suspend)
- [`emptied`](/es/docs/Web/Reference/Events/emptied)
- [`stalled`](/es/docs/Web/Reference/Events/stalled)
