---
title: border-inline
slug: Web/CSS/border-inline
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline`** es una [propiedad abreviada](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) para establecer los valores lógicos individuales del borde de bloque en un solo lugar en la hoja de estilos.

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;
```

`border-inline` puede ser usada para establecer los valores de uno o más de {{cssxref("border-inline-width")}}, {{cssxref("border-inline-style")}}, y {{cssxref("border-inline-color")}} estableciendo tanto el inicio como el final en la dimensión en línea a la vez. Los bordes físicos a los que se asigna dependen del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponden a las propiedades {{cssxref("border-top")}} y {{cssxref("border-bottom")}} o {{cssxref("border-right")}}, and {{cssxref("border-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

El estilo del borde en otra dimensión puede establecerse con {{cssxref("border-block")}}, que establece {{cssxref("border-block-start")}}, y {{cssxref("border-block-end")}}.

{{cssinfo}}

## Sintaxis

### Valores

El `border-inline` es especificado con uno o más de los siguientes valores, en cualquier orden:

- `<'border-width'>`
  - : El ancho del borde. Mira {{cssxref("border-width")}}.
- `<'border-style'>`
  - : La línea de estilo del borde. Mira {{cssxref("border-style")}}.
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
  border-inline: 5px dashed blue;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico:{{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
