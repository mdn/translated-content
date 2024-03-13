---
title: GlobalEventHandlers.onselect
slug: Web/API/HTMLInputElement/select_event
---

{{ ApiRef("HTML DOM") }}Un manejador de evento para el evento select en la ventana.

## Sintaxis

```
window.onselect = funcRef;
```

- `funcRef` es una función

## Ejemplo

```html
<html>
  <head>
    <title>onselect test</title>

    <style type="text/css">
      .text1 {
        border: 2px solid red;
      }
    </style>

    <script type="text/javascript">
      window.onselect = selectText;

      function selectText() {
        alert("¡detectado evento select!");
      }
    </script>
  </head>

  <body>
    <textarea class="text1" cols="30" rows="3">
Resalte algo de este texto
con el puntero del ratón
para disparar el evento onselect.
</textarea
    >
  </body>
</html>
```

## Notas

El evento select sólo se genera cuando es seleccionado texto dentro de un control de entrada (INPUT) de tipo text o textarea. El evento es disparado _después_ de que el texto haya sido seleccionado.

## Especificaciones

{{Specifications}}
