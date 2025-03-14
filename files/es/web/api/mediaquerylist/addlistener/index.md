---
title: MediaQueryList.addListener()
slug: Web/API/MediaQueryList/addListener
---

{{APIRef("CSSOM View")}}El método **`addListener()`** de la interfaz {{domxref ("MediaQueryList")}} añade un escucha al `MediaQueryListener` que ejecutará una función de devolución de llamada personalizada en respuesta al cambio de estado de consulta de medios.

Esto es básicamente un alias para {{domxref("EventTarget.addEventListener()")}}, para propósitos de compatibilidad con versiones anteriores: en los navegadores antiguos se puede usar `addEventListener.`

## Sintaxis

```
MediaQueryList.addListener(func)
```

### Parametros

- func
  - : A function or function reference representing the callback function you want to run when the media query status changes. In the original implementation, the callback was a non-standard {{domxref("MediaQueryListListener")}} object. In the new implementation the standard event mechanism is used, the callback is a standard function, and the event object is a {{domxref("MediaQueryListEvent")}}, which inherits from {{domxref("Event")}}.

### Return value

Void.

## Examples

```js
var mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addListener(screenTest);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Media queries](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/es/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
