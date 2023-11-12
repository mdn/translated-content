---
title: Window.close()
slug: Web/API/Window/close
---

{{ ApiRef() }}

## Resumen

Cierra la ventana actual, o la ventana en la cual fue llamada.

## Sintaxis

```js
window.close();
```

## Descripción

Cuando este método es llamado, la ventana referenciada es cerrada.

Este método solo se permite ser llamado por ventanas que fueron abiertas por un script utilizando el método {{domxref("window.open()")}}. Si la ventana no fue abierta por un script, el siguiente error aparece en la consola de JavaScript: Scripts may not close windows that were not opened by script.

## Ejemplos

### Cerrar una ventana abierta con window\.open()

Este es un ejemplo que demuestra como utilizar este método para cerrar una ventana que fue abierta por un script llamando {{domxref("window.open()")}}.

```html
<script type="text/javascript">
  //Global var to store a reference to the opened window
  var openedWindow;

  function openWindow() {
    openedWindow = window.open("moreinfo.htm");
  }

  function closeOpenedWindow() {
    openedWindow.close();
  }
</script>
```

### Cerrando la ventana actual

Cuando se llama al método del objeto window close() directamente, en vez de llamar a close() en una instancia de la ventana, el navegador cerrará la ventana que está en primer plano, independientemente si el script fue creado en la ventana o no. (Firefox 35.0.1: los scripts no pueden cerrar ventanas que ellos no han abierto)

```html
<script type="text/javascript">
  function closeCurrentWindow() {
    window.close();
  }
</script>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
