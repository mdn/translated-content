---
title: Window.locationbar
slug: Web/API/Window/locationbar
---

{{APIRef}}

Devuelve el objeto `locationbar`, del cual se puede comprobar su visibilidad.

## Sintaxis

```js
objRef = window.locationbar;
```

## Ejemplo

El siguiente ejemplo completo en HTML, muestra la forma en la que se utiliza la propiedad `visible` del objeto `locationbar.`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Various DOM Tests</title>

    <script>
      var visible = window.locationbar.visible;
    </script>
  </head>
  <body>
    <p>Various DOM Tests</p>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Ver también

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}}, {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}
