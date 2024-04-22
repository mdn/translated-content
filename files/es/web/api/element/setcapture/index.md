---
title: Element.setCapture()
slug: Web/API/Element/setCapture
---

{{ APIRef }}

Llame a este método durante el manejo de un evento mousedown para redirigir todos los eventos de mouse a este elemento hasta que se suelte el botón del mouse o se llame {{domxref ( "document.releaseCapture ()")}}.

## Sintaxis

```
element.setCapture(retargetToElement);
```

- `retargetToElement`
  - : Si es verdadero, todos los eventos se dirigen directamente a este elemento; Si es falso, los eventos también pueden descargar a los descendientes de este elemento.

## Ejemplo

En este ejemplo, las coordenadas actuales del mouse se dibujan mientras situas el mouse alrededor después de hacer clic y mantener pulsado un elemento.

```html
<html>
  <head>
    <title>Mouse Capture Example</title>
    <style type="text/css">
      #myButton {
        border: solid black 1px;
        color: black;
        padding: 2px;
        -moz-box-shadow: black 2px 2px;
      }
    </style>

    <script type="text/javascript">
      function init() {
        var btn = document.getElementById("myButton");
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
      }

      function mouseDown(e) {
        e.target.setCapture();
        e.target.addEventListener("mousemove", mouseMoved, false);
      }

      function mouseUp(e) {
        e.target.removeEventListener("mousemove", mouseMoved, false);
      }

      function mouseMoved(e) {
        var output = document.getElementById("output");
        output.innerHTML = "Position: " + e.clientX + ", " + e.clientY;
      }
    </script>
  </head>
  <body onload="init()">
    <p>
      This is an example of how to use mouse capture on elements in Gecko 2.0.
    </p>
    <p><a id="myButton" href="#">Test Me</a></p>
    <div id="output">No events yet</div>
  </body>
</html>
```

[Ver ejemplo en vivo](/samples/domref/mousecapture.html)

## Notas

El elemento no puede desplazarse completamente hacia arriba o hacia abajo dependiendo del diseño de otros elementos.

## Especificaciones

Ninguna.

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{ domxref("document.releaseCapture()") }}
