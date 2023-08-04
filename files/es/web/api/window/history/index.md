---
title: Window.history
slug: Web/API/Window/history
---

{{ APIRef }}

La propiedad de solo lectura **`Window.history`** regresa una referencia al objeto {{domxref("History")}}, quien provee una interfaz para manipular el historial de _sesión del navegador_ (páginas visitadas en el tab o marco de la pagina actual cargada).

Ver [Manipulando el historial del navegador](/es/docs/DOM/Manipulando_el_historial_del_navegador) para ejemplos y detalles. En particular, este articulo explica características seguras de los métodos `pushState()` y `replaceState()` que debe tener en cuenta antes de usarlos.

## Sintaxis

```js
var historyObj = window.history;
```

## Ejemplo

```js
history.back(); // equivalente a hacer clic en el botón de regresar
history.go(-1); // equivalente a history.back();
```

## Notas

Para las páginas de nivel superior se puede ver la lista de páginas en el historial de la sesión, accesible a través del objeto de la `History`, en los desplegables de tu navegador junto a los botones de avance y retroceso.

Por razones de seguridad el objeto `History` no permite que el código sin privilegio acceda a las URLs de otras páginas en el historial de la sesión, pero permite navegar por el historial de la sesión.

No hay manera de limpiar el historial de la sesión o desactivar la parte de atrás/adelante desde la navegación de código sin privilegios. La solución más cercana disponible es el método [`location.replace()`](/es/docs/Web/API/Window/location#replace), que sustituye al elemento actual de la historia sesión con la URL proporcionada.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
