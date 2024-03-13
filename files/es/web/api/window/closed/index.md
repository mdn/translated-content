---
title: Window.closed
slug: Web/API/Window/closed
---

{{APIRef}}

## Resumen

Esta propiedad de solo lectura indica si la ventana referenciada está cerrada o no.

## Syntax

```js
isClosed = windowRef.closed;
```

- `isClosed`

  - : Booleano. Valores posibles:

    - `true`: La ventana ha sido cerrada.
    - `false`: La ventana está abierta.

## Ejemplos

### Cambiar la URL de una ventana desde una ventana emergente

El siguiente ejemplo demuestra cómo una ventana emergente puede cambiar la URL de la ventana que la abrió. Antes de intentar cambiar la URL, verifica que la ventana actual tiene referencia a la ventana que la abrió usando la propiedad [window.opener](/es/docs/DOM/window.opener) y que esa ventana no está cerrada:

```js
// Verifica que opener existe y no esté cerrado
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "http://www.mozilla.org";
}
```

Nótese que las ventanas emergentes solo pueden acceder a la ventana que las abrió.

### Actualizando una ventana emergente abierta previamente

En este ejemplo la función `refreshPopupWindow()` llama al método `reload` del objeto location de la ventana emergente para actualizar su información. Si la ventana emergente no ha sido abierta o el usuario la cerró una nueva ventana es abierta.

```js
var popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow está abierta, actualízala
    popupWindow.location.reload(true);
  } else {
    // Abre una nueva ventana emergente
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## Especificación

HTML5
