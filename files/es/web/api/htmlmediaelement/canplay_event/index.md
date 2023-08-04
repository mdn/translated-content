---
title: "HTMLMediaElement: canplay"
slug: Web/API/HTMLMediaElement/canplay_event
---

El evento canplay es lanzado cuando el elemento [\<video>](/es/docs/Web/HTML/Elemento/video) o [\<audio>](/es/docs/Web/HTML/Elemento/Audio) puede ser iniciado o fue iniciado satisfactoriamente.

Lo que puede evitar que el evento `canplay`se dispare puede ser por alguna de estás razones:

- El ruta del `audio` o `video` están mal especificadas.
- El navegador no soporta la etiqueta.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Evento oncanplay - Javascript</title>
    <script>
      function Start() {
        alert("Start");
      }
    </script>
  </head>
  <body>
    <video controls autoplay oncanplay="Start()">
      <source src="audio.mp4" type="video/mp4" />
    </video>
  </body>
</html>
```

Intente especificar mal la ruta del `src` y comprobrará que el evento no funciona.

## General info

- Specification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-canplay)
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

## Properties

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Related Events

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
