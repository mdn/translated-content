---
title: event.type
slug: Web/API/Event/type
---

{{APIRef}}

La propiedad de sólo-lectura **`Event.type`** devuelve una cadena de texto que contiene el tipo de evento. Se establece cuando se contruye el evento y es el nombre que se utiliza normalmente para referirse al evento en cuestión, como `click`, `load` o `error`.

El argumento `event` de {{ domxref("EventTarget.addEventListener()") }} y {{ domxref("EventTarget.removeEventListener()") }} no es sensible a mayúsculas.

Para una lista de tipos de evento displonibles, vea la [referencia de eventos](/es/docs/Web/Reference/Events)

## Sintaxis

```
event.type
```

## Ejemplos

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>Event.type Example</title>

    <script>
      var currEvent;
      function getEvtType(evt) {
        console.group();

        currEvent = evt.type;
        console.log(currEvent);

        document.getElementById("Etype").innerHTML = currEvent;

        console.groupEnd();
      }

      // Eventos de teclado
      document.addEventListener("keypress", getEvtType, false); //[second]

      document.addEventListener("keydown", getEvtType, false); //first
      document.addEventListener("keyup", getEvtType, false); //third

      // Eventos de ratón
      document.addEventListener("click", getEvtType, false); // third

      document.addEventListener("mousedown", getEvtType, false); //first
      document.addEventListener("mouseup", getEvtType, false); //second
    </script>
  </head>

  <body>
    <p>Press any key or click the mouse to get the event type.</p>
    <p>Event type: <span id="Etype" style="color:red">-</span></p>
  </body>
</html>
```

### Resultado

{{EmbedLiveSample('Example')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
