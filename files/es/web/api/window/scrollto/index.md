---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{ APIRef }}

## Resumen

Desplaza el visor a un conjunto específico de coordenadas en el documento.

## Sintaxis

```js
window.scrollTo(x_coord, y_coord);
```

### Parámetros

- `x-coord` es el pixel en el eje horizontal del documento que debe terminar posicionado en el extremo superior izquierdo.
- `y-coord` es el pixel en el eje vertical del documento que debe terminar posicionado en el extremo superior izquierdo.

## Ejemplo

```js
window.scrollTo(0, 1000);
```

## Notas

Esta función es en efecto la misma que [window.scroll](/es/docs/Web/API/Window/scroll). Para desplazamiento relativo, ver [window.scrollBy](/es/docs/Web/API/Window/scrollBy), [window.scrollByLines](/es/docs/Web/API/Window/scrollByLines), y [window.scrollByPages](/es/docs/Web/API/Window/scrollByPages).

Para desplazar el visor dentro de elementos, ver [Element.scrollTop](/es/docs/Web/API/Element/scrollTop) and [Element.scrollLeft](/es/docs/Web/API/Element/scrollLeft).

## Especificaciones

{{Specifications}}
