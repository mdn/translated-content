---
title: Element.scrollWidth
slug: Web/API/Element/scrollWidth
---

{{ APIRef }}

La propiedad de sólo lectura `Element.scrollWidth` retorna bien la anchura en pixels del contenido de un elemento o bien la anchura del elemento en si, la que sea mayor de ambas. Si el elemento es más ancho que su área contenedora (por ejemplo, si existen barras de desplazamiento para desplazarse a través del contenido), `scrollWidth` es mayor que `clientWidth`.

> **Nota:** El valor de esta propiedad será red redondedo a un entero. Si necesita un valor fraccional, use {{ domxref("element.getBoundingClientRect()") }}.

## Sintaxis

```js
var xScrollWidth = element.scrollWidth;
```

_xScrollWidth_ es el ancho del contenido de _element_ en pixels.

## Ejemplo

```html
<!doctype html>
<html>
  <head>
    <title>Ejemplo</title>
    <style>
      div {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #aDiv {
        width: 100px;
      }

      button {
        margin-bottom: 2em;
      }
    </style>
  </head>

  <body>
    <div id="aDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="aButton">Check for overflow</button>

    <div id="anotherDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="anotherButton">Check for overflow</button>
  </body>
  <script>
    var buttonOne = document.getElementById("aButton"),
      buttonTwo = document.getElementById("anotherButton"),
      divOne = document.getElementById("aDiv"),
      divTwo = document.getElementById("anotherDiv");

    //comprueba si un desbordamiento está ocurriendo
    function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
    }

    function alertOverflow(element) {
      if (isOverflowing(element)) {
        alert("El contenido desborda el contenedor.");
      } else {
        alert("Sin desobordamiento!");
      }
    }

    buttonOne.addEventListener("click", function () {
      alertOverflow(divOne);
    });

    buttonTwo.addEventListener("click", function () {
      alertOverflow(divTwo);
    });
  </script>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determinando las dimensiones de elementos](/es/docs/Determining_the_dimensions_of_elements)
