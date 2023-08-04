---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
---

{{APIRef}}

El método **`Window.matchMedia()`** devuelve un nuevo objeto {{domxref("MediaQueryList")}} que representa los analizados de la [media query](/es/docs/CSS/Media_queries) indicada.

## Sintaxis

```js
mql = window.matchMedia(mediaQueryString);
```

Donde `mediaQueryString` es una cadena de texto que representa la media query de la que devolver un nuevo objeto {{domxref("MediaQueryList")}}.

## Ejemplo

Este código le permite manejar las cosas de forma diferente cuando la ventana es muy estrecha.

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* La pantalla tiene al menos 400 píxeles de ancho */
} else {
  /* La pantalla tiene menos de 400 píxeles de ancho */
}
```

Consulte [Probando media queries](/es/docs/DOM/Using_media_queries_from_code) para ver ejemplos adicionales.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Media queries](/es/docs/CSS/Media_queries)
- [Probando media queries](/es/docs/Web/Guide/CSS/probando_media_queries)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
