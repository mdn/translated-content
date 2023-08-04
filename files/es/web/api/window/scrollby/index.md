---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

## Resumen

Desplaza el documento el número de pixels proporcionados.

## Sintaxis

```js
window.scrollBy(X, Y);
window.scrollBy(opciones);
```

### Parámetros

- `X` es el número de pixels a desplazar horizontalmente.
- `Y` es el número de pixels a desplazar verticalmente.

Si X o Y son positivos, desplazarán la página hacia la derecha o hacia abajo respectivamente. Si son negativos, la desplazarán hacia la izquierda o hacia arriba respectivamente.

\- or -

- `opciones` es un objeto con tres posibles propiedades:

  - `top`, que es lo mismo que `Y`
  - `left`, que es lo mismo que `X`
  - `behavior`, que es un string cuyo valor puede ser smooth, instant, or auto. Por defecto el valor es `auto`

## Ejemplo

```js
// Desplazarse la longitud de una página
window.scrollBy(0, window.innerHeight);
```

Para hacer scroll hacia arriba:

```js
window.scrollBy(0, -window.innerHeight);
```

Utilizando opciones:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behaviour: "smooth",
});
```

## Notas

[window.scrollBy](/es/docs/DOM/Window.scrollBy) desplaza el documento una cantidad determinada, mientras que [window.scroll](/es/docs/DOM/Window.scroll) lo hace hacia una posición absoluta en el documento. Vea también [window.scrollByLines](/es/docs/DOM/Window.scrollByLines), [window.scrollByPages](/es/docs/DOM/Window.scrollByPages)

## Especificaciones

{{Specifications}}
