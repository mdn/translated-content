---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
---

{{CSSRef}}

## Resumen

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) `:-moz-window-inactive` selecciona cualquier elemento mientras está en una ventana inactiva.

> **Nota:** Antes de añadir esta pseudo-clase, dar dieferentes estilos a las ventanas de fondo podría lograrse con el atributo (`active="true"`) en la venta del nivel superior XUL. Este atributo ya no se usa.

`:-moz-window-inactive` funciona también en documentos de contenido HTML.

## Ejemplo

Este ejemplo modifica la apariencia del fondo de una caja dependiendo de si está o no en una ventana activa.

```html
<style type="text/css">
  #mybox {
    background: linear-gradient(to bottom, blue, cyan);
  }

  #mybox:-moz-window-inactive {
    background: cyan;
  }
</style>

<div id="mybox" style="width:200px; height:200px;">
  <p>This is a box!</p>
</div>
```

Puedes verlo aquí en un [ejemplo en directo](/samples/cssref/moz-window-inactive.html).

## Especificaciones

No es parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}
