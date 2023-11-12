---
title: GlobalEventHandlers.onclick
slug: conflicting/Web/API/Element/click_event
original_slug: Web/API/GlobalEventHandlers/onclick
---

{{ ApiRef("HTML DOM") }}

La propiedad **onclick** devuelve el manejador del evento `click` del elemento actual.

> **Nota:** Cuando uses el evento `click` para ejecutar algo, considera agregar la misma acción al evento `keydown`, para permitirle el uso a personas que no usan mouse o pantalla táctil.

## Sintaxis

```
element.onclick = functionRef;
```

Donde _functionRef_ es una función - muchas veces el nombre de la función está declarado ya en otro sitio o como una _expresión de la función_ .Ver "[JavaScript Guide:Functions](/es/docs/JavaScript/Guide/Functions)" para más detalles.

el único argumento pasado a la función manejador de evento especificamente {{domxref("MouseEvent")}} object. Dentro del manejador, `this` será el elemento sobre él el evento ha sido invocado.

## Ejemplo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>onclick event example</title>
    <script>
      function initElement() {
        var p = document.getElementById("foo");
        // NOTE: showAlert(); or showAlert(param); will NOT work here.
        // Must be a reference to a function name, not a function call.
        p.onclick = showAlert;
      };

      function showAlert(event) {
        alert("onclick Event detected!");
      }
    </script>
    <style>
      #foo {
        border: solid blue 2px;
      }
    </style>
  </head>
  <body onload="initElement();">
    <span id="foo">My Event Element</span>
    <p>click on the above element.</p>
  </body>
</html>
```

O se puede usar una función anoníma, como esa:

```js
p.onclick = function(event) { alert("moot!"); };
```

## Notas

El evento `click` se genera cuando el usuario hace clic en un elemento. El evento clic ocurrirá después de los eventos `mousedown` y `mouseup`.

Solo se puede asignar un controlador `click` a un objeto a la vez con esta propiedad. Puede que prefiera utilizar el método {{domxref ("EventTarget.addEventListener()")}} en su lugar, ya que es más flexible y forma parte de la especificación DOM Events.
