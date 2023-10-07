---
title: MediaQueryList.matches
slug: Web/API/MediaQueryList/matches
---

{{APIRef("CSSOM View")}}

La propiedad **`matches`** de sólo lectura de la interfaz {{domxref ("MediaQueryList")}} es {{domxref ("Boolean")}} que devuelve `true` si el {{domxref ("document")}} coincide actualmente con el medio lista de consultas, o `false` si no.

## Sintaxis

```
var matches = MediaQueryList.matches;
```

### Value

A {{domxref("Boolean")}}; returns `true` if the {{domxref("document")}} currently matches the media query list, `false` if not.

## Examples

```js
var mql = window.matchMedia("(max-width: 600px)");

if (mql.matches) {
  // media query test returning true
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Media queries](/es/docs/CSS/Media_queries)
- [Using media queries from code](/es/docs/CSS/Using_media_queries_from_code)
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListEvent")}}
