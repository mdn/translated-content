---
title: "-webkit-mask"
slug: Web/CSS/mask
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad `-webkit-mask` es una manera corta de establecer, en un único sitio en una hoja de estilos, los valores individuales de máscara. `-webkit-mask` puede ser utilizado para fijar los valores en una o más de las siguiente propiedades: {{Cssxref("-webkit-mask-image")}}, {{Cssxref("-webkit-mask-repeat")}}, {{Cssxref("-webkit-mask-attachment")}}, {{Cssxref("-webkit-mask-position")}}, {{Cssxref("-webkit-mask-origin")}}, y {{Cssxref("-webkit-mask-clip")}}.

{{cssinfo}}

## Síntaxis

```css
/* Palabras clave valor */
-webkit-mask: none;

/* Valores de imágene */
-webkit-mask: url(mask.png); /* Imagen de pixel usado coo máscara */
-webkit-mask: url(masks.svg#star); /* Elemento dentro de un gráfico SVG usado como máscara */
-webkit-mask: linear-gradient(
  transparent,
  black
); /* Gradiente usado como máscara */

/* Valores combinados */
-webkit-mask: url(masks.svg#star) 40px 20px; /* Elemento dentro de un gráfico SVG usado como máscara y posicionado  40px desde la parte superior y 20px a la izquierda */
-webkit-mask: url(masks.svg#star) 0 0/50px 50px; /* Elemento dentro de un gráfico SVG usado como máscara con una anchura y altura de 50px */
-webkit-mask: url(masks.svg#star) repeat-x; /* Elemento dentro de un gráfico SVG usado como una máscara que se repite horizontalmente */
-webkit-mask: url(masks.svg#star) border; /* Elemento dentro de un gráfico SVG usado como una máscara que sobrepasa la caja que rodea el borde */
-webkit-mask: url(masks.svg#star) text; /* Elemento dentro de un gráfico SVG usado como una máscara que recorta el texto que contiene */

/* Valores globales */
-webkit-mask: inherit;
-webkit-mask: initial;
-webkit-mask: unset;
```

### Valores

- mask-image
  - : _Requierido_.Ver {{Cssxref("-webkit-mask-image")}}.
- mask-repeat
  - : _Opcional_. Ver {{Cssxref("-webkit-mask-repeat")}}.
- mask-attachment
  - : _Opcional_ Ver {{Cssxref("-webkit-mask-attachment")}}.
- mask-position
  - : _Opcional_. Ver {{Cssxref("-webkit-mask-position")}}.
- mask-origin
  - : _Opcional_. Ver {{Cssxref("-webkit-mask-origin")}}.
- mask-clip
  - : _Opcional_ Ver {{Cssxref("-webkit-mask-clip")}}.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
.example {
  -webkit-mask: url("mask.png") no-repeat fixed 20px 20px padding padding;
}
```

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-attachment")}}, {{cssxref("-webkit-mask-clip")}}, {{cssxref("-webkit-mask-image")}}, {{cssxref("-webkit-mask-composite")}}, {{cssxref("-webkit-mask-repeat")}}
