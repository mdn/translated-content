---
title: "-webkit-mask-origin"
slug: Web/CSS/mask-origin
---

{{CSSRef}}{{Non-standard_header}}

La propiedad [CSS](/es/docs/Web/CSS) `-webkit-mask-origin` determina el origen de una imagen de máscara. El valor de la propiedad {{cssxref("-webkit-mask-position")}} se interpreta en relación al valor de esta propiedad. No se aplica cuando `-webkit-mask-attachment` es `fixed`.

{{cssinfo}}

## Síntaxis

{{csssyntax}}

## Valores

- padding
  - : Valor por defecto. La posición de la imagen de máscara es relativa al padding (relleno). (Para cajas solas "`0 0`" es la esquina superior izquierda del límite del padding, "`100% 100%`" es la esquina inferior derecha.)
- border
  - : La posición de la imagen de máscara es relativa al borde.
- content
  - : La posición de la imagen de máscara es relativa al contenido.

## Ejemplos

```css
.example {
  border: 10px double;
  padding: 10px;
  -webkit-mask-image: url("mask.png");

  /* La imagen de máscara estará dentro del padding */
  -webkit-mask-origin: content;
}
```

```css
div {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-origin: padding, content;
}
```

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-webkit-mask")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-attachment")}}, {{cssxref("-webkit-mask-image")}},{{cssxref("-webkit-mask-composite")}}, {{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-clip")}}
