---
title: 'HTMLMediaElement: canplay'
slug: Web/API/HTMLMediaElement/canplay_event
translation_of: Web/API/HTMLMediaElement/canplay_event
---
El evento canplay es lanzado cuando el elemento [\<video>](/es/docs/Web/HTML/Elemento/video) o [\<audio>](/es/docs/Web/HTML/Elemento/Audio) puede ser iniciado o fue iniciado satisfactoriamente.

Lo que puede evitar que el evento `canplay`se dispare puede ser por alguna de estás razones:

- El ruta del `audio` o `video`están mal especificadas.
- El navegador no soporta la etiqueta.``

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Evento oncanplay - Javascript</title>
    <script>
        function Start() {
            alert("Start")
        }
    </script>
</head>
<body>

<video controls autoplay oncanplay="Start()">
     <source src="audio.mp4" type="video/mp4">
</video>

</body>
</html>
```

Intente especificar mal la ruta del `src`y comprobrará que el evento no funciona.

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

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Related Events

- {{event("playing")}}
- {{event("waiting")}}
- {{event("seeking")}}
- {{event("seeked")}}
- {{event("ended")}}
- {{event("loadedmetadata")}}
- {{event("loadeddata")}}
- {{event("canplay")}}
- {{event("canplaythrough")}}
- {{event("durationchange")}}
- {{event("timeupdate")}}
- {{event("play")}}
- {{event("pause")}}
- {{event("ratechange")}}
- {{event("volumechange")}}
- {{event("suspend")}}
- {{event("emptied")}}
- {{event("stalled")}}
