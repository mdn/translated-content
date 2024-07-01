---
title: "-webkit-border-before"
slug: Web/CSS/-webkit-border-before
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`-webkit-border-before`** es una propiedad que permite configurar los valores de la propiedad borde para el bloque lógico de inicio en un sólo sitio de la hoja de estilos. `-webkit-border-before` se puede usar para establecer los valores para más de uno de: {{cssxref("-webkit-border-before-width")}}, {{cssxref("-webkit-border-before-style")}}, y {{cssxref("-webkit-border-before-color")}}. Se mapea a un borde físico dependiendo del modo de escritura del elemento, la direccionalidad y la orientación del texto. Se corresonde con la propiedad {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}} dependiendo de los valores definidos en {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Se relaciona con {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}}, y {{cssxref("-webkit-border-end")}}, que definen los otros bordes del elemento.

Esta propiedad se prevee que será incluida en el estándar como {{cssxref("border-block-start")}}.

{{cssinfo}}

## Síntaxis

```css
/* Valores para el borde */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Valores globales */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: unset;
```

### Valores

Uno o más de los siguiente valores, dando igual el orden en el que se especifiquen:

- `<'border-width'>`
  - : Ver {{cssxref("border-width")}}
- `<'border-style'>`
  - : Ver {{cssxref("border-style")}}
- `<'color'>`
  - : Ver {{cssxref("color")}}

### Formal syntax

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<div>
  <p class="exampleText">Texto de ejemplo</p>
</div>
```

### Contenido CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  -webkit-border-before: 5px dashed blue;
}
```

{{EmbedLiveSample("Example", 140, 140)}}

## Especificaciones

No es parte de ninguna especificación aunque está relacionada con la propiedad {{cssxref("border-block-start")}}.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{cssxref("border-block-start")}}
- Las propiedad físicas mapeadas: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, y{{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
