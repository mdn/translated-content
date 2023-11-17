---
title: Window.scroll()
slug: Web/API/Window/scroll
---

{{APIRef}}

El método **`Window.scroll()`** desplaza la ventana a un lugar particular en el documento.

## Sintaxis

```js
window.scroll(x_coord, y_coord);
window.scroll(options);
```

### Parámetros

- `x-coord` es la coordenada sobre el eje horizontal del documento del pixel que querés que se muestre en la parte superior izquierda.
- `y-coord` es la coordenada sobre el eje vertical del documento del pixel que querés que se muestre en la parte superior izquierda.

\- o -

- `options` es un diccionario {{domxref("ScrollToOptions")}}.

## Ejemplo

```html
<!-- poner el pixel 100º verticalmente en el tope superior de la ventana -->

<button onClick="scroll(0, 100);">
  Clic para desplazarse hacia abajo 100 pixeles
</button>
```

Utilizando `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Notas

{{domxref("Window.scrollTo()")}} es efectivamente idéntico a este método. Para desplazamiento relativo, mira {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}} y {{domxref("Window.scrollByPages()")}}.

Para desplazarse sobre elementos, mira {{domxref("Element.scrollTop")}} y {{domxref("Element.scrollLeft")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}
