---
title: "-webkit-mask-attachment"
slug: Web/CSS/-webkit-mask-attachment
---

{{ CSSRef() }}

{{ Non-standard_header() }}

Si se ha especificado una {{ Cssxref("-webkit-mask-image") }} , `-webkit-mask-attachment` determina si la posición de la imagen de la máscara es fija dentro de la ventana (viewport) , o se desplaza a lo largo del bloque que la contiene.

{{cssinfo}}

## Síntaxis

{{csssyntax}}

## Valores

- scroll
  - : Si se ha especifiacod `scroll` , la imagen de máscara se desplaza dentro de la ventana (viewport) junto con el bloque que contiene la máscara de imagen.
- fixed
  - : Si se ha especificado el valor `fixed` , la imagen de máscara no se desplaza junto con el elemento que la contienen, en vez de eso permanece es una posición fija dentro de la ventana (viewport).

## Ejemplos

```css
body {
  -webkit-mask-image: url("images/mask.png");
  -webkit-mask-attachment: fixed;
}
```

## Especificaciones

No forma parte de ningún estándar.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{ cssxref("-webkit-mask") }}, {{ cssxref("-webkit-mask-clip") }}, {{ cssxref("-webkit-mask-box-image") }}, {{ cssxref("-webkit-mask-origin") }}, {{ cssxref("-webkit-mask-image") }},{{ cssxref("-webkit-mask-composite") }},{{ cssxref("-webkit-mask-repeat") }}
