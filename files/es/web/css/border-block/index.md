---
title: border-block
slug: Web/CSS/border-block
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-block`** es una [propiedad abreviada](/es/docs/Web/CSS/Shorthand_properties) para establecer los valores lógicos individuales del borde de bloque en un solo lugar en la hoja de estilos.

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;
```

`border-block` puede ser usada para establecer los valores de uno o más {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}}, y {{cssxref("border-block-color")}} estableciendo tanto el inicio como el final en la dimensión del bloque a la vez. Los bordes físicos a los que se asigna dependen del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a las propiedades {{cssxref ("border-top")}} y {{cssxref ("border-bottom")}} o {{cssxref ("border-right")}}, y {{cssxref ("border -left ")}} dependiendo de los valores definidos para {{cssxref (" modo de escritura ")}}, {{cssxref (" dirección ")}}, y {{cssxref (" orientación de texto ")}} .

Los bordes en la otra dimensión se pueden establecer con {{cssxref ("border-inline")}}, que establece {{cssxref ("border-inline-start")}}, y {{cssxref ("border-inline- fin")}}.

{{cssinfo}}

## Sintaxis

### Valores

El `border-block` es especificado con uno o más de los siguientes valores, en cualquier orden:

- `<'border-width'>`
  - : El ancho del borde. Mirar {{cssxref("border-width")}}.
- `<'border-style'>`
  - : El estilo de la línea del borde. Mirar {{cssxref("border-style")}}.
- `<'color'>`
  - : El color del borde. Mirar {{cssxref("color")}}.

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
  border-block: 5px dashed blue;
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
