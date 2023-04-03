---
title: border-block-start
slug: Web/CSS/border-block-start
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-block-start`** es una [propiedad abreviada](/es/docs/Web/CSS/Shorthand_properties) para establecer los valores lógicos individuales del borde de bloque inicial en un solo lugar en la hoja de estilos.

{{EmbedInteractiveExample("pages/css/border-block-start.html")}}

## Sintaxis

```css
border-block-start: 1px;
border-block-start: 2px dotted;
border-block-start: medium dashed blue;
```

`border-block-start` puede ser usado para establecer los valores de uno o más de {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, y {{cssxref("border-block-start-color")}}. El borde físico al que se asigna depende del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}} dependiendo de los valores definidos para {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Propiedades relacionadas son {{cssxref("border-block-end")}}, {{cssxref("border-inline-start")}}, y {{cssxref("border-inline-end")}}, que definen los otros bordes del elemento.

{{cssinfo}}

### Valores

El `border-block-start` es especificado con uno o más de los siguientes valores, en cualquier orden:

- `<'border-width'>`
  - : El ancho del borde. Mira {{cssxref("border-width")}}.
- `<'border-style'>`
  - : El estilo de la línea del borde. Mira {{cssxref("border-style")}}.
- `<'color'>`
  - : El color del borde. Mira {{cssxref("color")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<div>
  <p class="exampleText">Example text</p>
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
  border-block-start: 5px dashed blue;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
