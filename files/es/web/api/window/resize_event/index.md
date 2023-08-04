---
title: GlobalEventHandlers.onresize
slug: Web/API/Window/resize_event
---

{{ ApiRef() }}

La propiedad **GlobalEventHandlers.onresize** contiene un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) desencadenado cuando un evento [`resize`](/es/docs/Web/Reference/Events/resize) es recibido.

## Sintaxis

```js
window.onresize = funcRef;
```

### Parametros

- `funcRef` es una referencia a una función.

## Ejemplo

```js
window.onresize = doFunc;
```

```html
<html>
  <head>
    <title>onresize test</title>

    <script type="text/javascript">
      window.onresize = resize;

      function resize() {
        alert("resize event detected!");
      }
    </script>
  </head>

  <body>
    <p>Resize the browser window to fire the resize event.</p>
  </body>
</html>
```

## Notas

El evento **resize** es activado después de que la ventana ha sido redimensionada.

## Especificaciones

{{Specifications}}
