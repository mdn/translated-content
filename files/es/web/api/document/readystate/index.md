---
title: Document.readyState
slug: Web/API/Document/readyState
translation_of: Web/API/Document/readyState
---
{{APIRef("DOM")}} {{ gecko_minversion_header("1.9.2") }}

## Resumen

La propiedad **Document.readyState** de un {{ domxref("document") }} describe el estado de carga del documento.

### Valores

El readyState de un documento puede tener uno de los siguientes valores:

- loading
  - : El {{ domxref("document") }} todavía esta cargando.
- interactive
  - : El documento ha terminado de cargar y ha sido analizado pero los sub-recursos como imágenes, estilos y frames aún siguen cargando. El estado indica que el evento {{event("DOMContentLoaded")}} ha sido disparado.
- complete
  - : El documento y todos los sub-recursos han cargado completamente. El estado indica que el evento {{event("load")}} ha sido disparado.

Cuando el valor de esta propiedad cambia, un evento {{event("readystatechange")}} se dispara en el objecto {{ domxref("document") }}.

## Sintaxis

```js
var string = document.readyState;
```

## Ejemplos

### Diferentes estados del readyState

```js
switch (document.readyState) {
  case "loading":
    // The document is still loading.
    break;
  case "interactive":
    // The document has finished loading. We can now access the DOM elements.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // The page is fully loaded.
    console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
```

### readystatechange como alternativa al evento DOMContentLoaded

```js
// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
}
```

### readystatechange como alternativa al evento load

```js
// alternative to load event
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- Evento {{event("readystatechange")}}
- Evento {{event("DOMContentLoaded")}}
- Evento {{event("load")}}
