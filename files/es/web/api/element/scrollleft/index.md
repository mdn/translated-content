---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
---

{{ APIRef }}

La propiedad `Element.scrollLeft` obtiene o establece el número de píxeles que desplaza el contenido de un elemento hacia la izquierda.

Tenga en cuenta que si el elemento `{{cssxref ( "dirección")}}` del elemento es `rtl` (derecha-a-izquierda), entonces `scrollLeft` es 0 cuando la barra de desplazamiento está en su posición más a la derecha (al inicio del contenido desplazado) y cada vez más Negativo mientras se desplaza hacia el final del contenido.

## Síntaxis

```js
// Obtener el número de píxeles desplazados
var sLeft = element.scrollLeft;
```

_SLeft_ es un número entero que representa el número de píxeles que el elemento ha desplazado hacia la izquierda.

```js
// Establecer el número de píxeles desplazados
element.scrollLeft = 10;
```

`ScrollLeft` se puede establecer en cualquier valor entero, sin embargo:

- Si el elemento no se puede desplazar (por ejemplo, no tiene desbordamiento), `scrollLeft` se establece en 0.
- Si se establece en un valor menor que 0 (mayor que 0 para elementos de derecha a izquierda), `scrollLeft` se establece en 0.
- Si se establece en un valor mayor que el máximo que se puede desplazar el contenido, `scrollLeft` se establece en el valor máximo.

## Ejemplo

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      #container {
        border: 1px solid #ccc;
        height: 100px;
        overflow: scroll;
        width: 100px;
      }
      #content {
        background-color: #ccc;
        width: 250px;
      }
    </style>
    <script>
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          var button = document.getElementById("slide");
          button.onclick = function () {
            document.getElementById("container").scrollLeft += 20;
          };
        },
        false,
      );
    </script>
  </head>
  <body>
    <div id="container">
      <div id="content">Lorem ipsum dolor sit amet.</div>
    </div>
    <button id="slide" type="button">Slide</button>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
