---
title: MediaQueryList.removeListener()
slug: Web/API/MediaQueryList/removeListener
---

{{APIRef("CSSOM View")}}

El método **`removeListener()`** de la interfaz {{domxref ("MediaQueryList")}} elimina un escucha de `MediaQueryListener`.

Esto es básicamente un alias para {{domxref("EventTarget.removeEventListener()")}}, para propósitos de compatibilidad con versiones anteriores: en los navegadores antiguos puede usar `removeEventListener()`.

## Sintaxis

```
MediaQueryList.removeListener(func)
```

### Parametros

- func
  - : Una función o referencia de función que representa la función de devolución de llamada que desea eliminar. En la implementación original, la devolución de llamada era un objeto {{domxref ("MediaQueryListListener")}} no estándar. En la nueva implementación se utiliza el mecanismo de eventos estándar y la devolución de llamada es una función estándar.

### Return value

Void.

## Ejemplos

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

// Later on, when it is no longer needed
mql.removeListener(screenTest);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Media queries](/es/docs/CSS/Media_queries)
- [Using media queries from code](/es/docs/CSS/Using_media_queries_from_code)
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
