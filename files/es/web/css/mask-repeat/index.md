---
title: "-webkit-mask-repeat"
slug: Web/CSS/mask-repeat
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

`La propiedad -webkit-mask-repeat` especifica si la imagen de máscara se repite (en mosaico) y cómo se repite.

{{cssinfo}}

## Síntaxis

```css
/* Palabras clave de valor únicas */
-webkit-mask-repeat: repeat;
-webkit-mask-repeat: repeat-x;
-webkit-mask-repeat: repeat-y;
-webkit-mask-repeat: no-repeat;

/* Palabras clave de valor mútiple */
-webkit-mask-repeat: repeat, repeat-x, no-repeat;

/* Valores globlaes */
-webkit-mask-repeat: inherit;
-webkit-mask-repeat: initial;
-webkit-mask-repeat: unset;
```

## Valores

- repeat
  - : La máscara de imagen se repite tanto vertical como horizontalmente.
- repeat-x
  - : La imagen de máscara de repite sólo horizontalmente.
- repeat-y
  - : La imagen de máscara de repite sólo verticalemente.
- no-repeat
  - : La máscara de imagen no se repite. Sólo se dibuja una copia suya. El resto del contenido del elemento con máscara no se muestra.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
.exampleone {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat: repeat-x;
}

.exampletwo {
  -webkit-mask-image: url("mask.png");
  -webkit-mask-repeat: no-repeat;
}
```

### Soporte para múltiples imágenes de máscara

Se puede especificar, seperados por comas, un `<repeat-style>` para cada una de las imágenes de máscara:

```css
.examplethree {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-repeat: repeat-x, repeat-y;
}
```

Cada imagen se relaciona con el correspondiente estilo, desde la primera especificada hasta la última.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-webkit-mask")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-clip")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}, {{cssxref("-webkit-mask-image")}}, {{cssxref("-webkit-mask-composite")}}
