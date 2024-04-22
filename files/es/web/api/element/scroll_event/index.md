---
title: GlobalEventHandlers.onscroll
slug: Web/API/Element/scroll_event
---

{{ApiRef("HTML DOM")}}

Un manejador de eventos para desplazamiento en `element`.

## Sintaxis

```js
element.onscroll = functionReference;
```

### Parámetros

`functionReference` es una referencia a una función para ser ejecutada cuando `element` es desplazado (enrollado).

## Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <style>
      #container {
        position: absolute;
        height: auto;
        top: 0;
        bottom: 0;
        width: auto;
        left: 0;
        right: 0;
        overflow: auto;
      }

      #foo {
        height: 1000px;
        width: 1000px;
        background-color: #777;
        display: block;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div id="foo"></div>
    </div>

    <script type="text/javascript">
      document.getElementById("container").onscroll = function () {
        console.log("scrolling");
      };
    </script>
  </body>
</html>
```

## Notas

El evento es generado cuando el usuario realiza desplazamiento (scrolls) sobre el contenido de un elemento. `Element.onscroll` es equivalente a `element.addEventListener("scroll" ... )`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
