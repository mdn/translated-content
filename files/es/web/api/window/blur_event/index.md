---
title: GlobalEventHandlers.onblur
slug: Web/API/Window/blur_event
---

{{ApiRef("HTML DOM")}}

La propiedad **onblur** retorna el código del manejador de evento onBlur, si existe, en el elemento actual.

## Sintaxis

```js
element.onblur = function;
```

- `function` es el nombre de una función definida por el usuario, sin el sufijo () ni ningún parámetro, o una declaración de función anónima, como:

```js
element.onblur = function () {
  console.log("¡evento onblur detectado!");
};
```

## Ejemplo

```html
<html>
  <head>
    <title>ejemplo de evento onblur</title>

    <script type="text/javascript">
      var elem = null;

      function initElement() {
        elem = document.getElementById("foo");
        // NOTA: doEvent(); ó doEvent(param); no funcionará aquí.
        // Debe ser una referencia a un nombre de función, no una llamada a función.
        elem.onblur = doEvent;
      }

      function doEvent() {
        elem.value = "Bye-Bye";
        console.log("¡Evento onblur detectado!");
      }
    </script>

    <style type="text/css">
      <!--
      #foo {
      border: solid blue 2px;
      }
      -->
    </style>
  </head>

  <body onload="initElement();">
    <form>
      <input type="text" id="foo" value="Hola!" />
    </form>

    <p>
      Haga click en el elemento superior to darle el foco, luego click fuera del
      elemento.<br />
      Recarge la página desde la barra de navegación.
    </p>
  </body>
</html>
```

## Notas

El evento blur es generado cuando un elemento pierde el foco.

A diferencia de MSIE --en el cual la mayoría de tipos de elementos reciben el evento blur-- la mayoría de elementos de los navegadores basados en Gecko NO funcionan con este evento.

## Especificaciones

{{Specifications}}
