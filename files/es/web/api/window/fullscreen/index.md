---
title: window.fullScreen
slug: Web/API/Window/fullScreen
---

{{APIRef}}

### Resumen

Esta propiedad indica si la ventana se presenta en modo de pantalla comleta o no. Su funcionamiento es sólo fiable a partir de Gecko 1.9 (Firefox 3), ver Notas más abajo.

### Sintaxis

```js
var isInFullScreen = windowRef.fullScreen;
```

Con privilegios chrome, el valor de esta propiedad se puede cambiar, de otra forma, es de sólo lectura. Ten en cuenta que si intentas cambiar el valor de esta propiedad sin tener privilegios chrome, no cambiará nada y la propiedad simplemente fallará. Esto se hace para evitar que los programas diseñados para Internet Explorer fallen.

### Valor devuelto

- `isInFullScreen`
  - : Un valor*binario* . Los valores posibles son:

<!---->

- `true`: (Cierto) la ventana esta en modo pantalla completa.
- `false`: (Falso)la ventana NO esta en modo pantalla completa.

### Ejemplos

### Especificaciones

DOM nivel 0. `window.fullScreen` no forma parte de ninguna especificación W3C.

### Notas

El funcionamiento de esta propiedad es fiable sólo en Mozilla 1.9 (Firefox 3) y posteriores. Mozilla 1.8 y versiones anteriores manejan esta propiedad pero el valor devuelto es siempre `false`, aún cuando la ventana está en modo pantalla completa ([Error 127013 en Firefox](https://bugzil.la/127013)).
