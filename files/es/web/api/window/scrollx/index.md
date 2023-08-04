---
title: Window.scrollX
slug: Web/API/Window/scrollX
---

{{ APIRef() }}

## Resumen

Retorna el número de pixels que el documento ha sido desplazado horizontalmente.

## Sintaxis

```js
var x = window.scrollX;
```

### Parámetros

- `x` será el número de pixels que el documento está desplazado actualmente desde la izquierda.

## Ejemplo

```js
// Si scrollX es mayor que 400, reinicia la posición de desplazxamiento al inicio supuerior-izquierdo del documento.
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## Notas

La propiedad `pageXOffset` es un alias de la propiedad `scrollX`:

```js
window.pageXOffset == window.scrollX; // siempre true
```

Para compatibilidad cruzada entre navegadores, use `window.pageXOffset` en lugar de `window.scrollX`. **Adicionalmente**, versiones más antiguas de Internet Explorer (< 9) no soportan ninguna de las dos propiedades y deben ser sorteadas examinando otras propiedade no estandar. Un ejemplo totalmente compatible:

```js
var x =
  window.pageXOffset !== undefined
    ? window.pageXOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollLeft;

var y =
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [window.scrollY](/es/docs/DOM/window.scrollY)
