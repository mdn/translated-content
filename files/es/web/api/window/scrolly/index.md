---
title: Window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef}}

## Sumario

Retorna el número de píxeles que han sido desplazados en el documento mediante el scroll vertical.

## Sintaxis

```js
var y = window.scrollY;
```

- `y` es el número de píxeles que se han desplazado actualmente desde el extremo superior de la página.

## Ejemplo

```js
// Asegurate de bajar a la segunda página
if (window.scrollY) {
  window.scroll(0, 0); // Restablece la posición de desplazamiento en la parte superior izquierda del documento
}

window.scrollByPages(1);
```

## Notas

Usa esta propiedad para verificar que al documento no se le ha hecho scroll, si estás usando funciones relativas de scroll como {{domxref("window.scrollBy")}}, {{domxref("window.scrollByLines")}}, o {{domxref("window.scrollByPages")}}.

La propiedad `pageYOffset` es un alias para la propiedad `scrollY`:

```js
window.pageYOffset == window.scrollY; // Siempre verdadero
```

Para compatibilidad entre navegadores, es recomendable usar window\.pageYOffset en vez de window\.scrollY. **Adicionalmente**, tener en cuenta que versiones más viejas de Internet Explorer (<9) no soportan del todo la propiedad y debe ser solucionado usando propiedades no estandarizadas . Un ejemplo totalmente compatible entre navegadores:

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
  ? document.documentElement.scrollLeft
  : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
  ? document.documentElement.scrollTop
  : document.body.scrollTop;
```

## Especificación

- CSSOM View Module: [window.scrollY](http://dev.w3.org/csswg/cssom-view/#dom-window-scrolly) (Editor's Draft)

## Ver también

- {{domxref("window.scrollX")}}
