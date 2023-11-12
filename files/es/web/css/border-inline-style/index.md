---
title: border-inline-style
slug: Web/CSS/border-inline-style
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-style`** define el estilo de los bordes lógicos en línea de un elemento, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-style")}} y {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}, y {{cssxref("border-right-style")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
/* <'border-style'> values */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: groove;
```

El estilo del borde en otra dimensión puede establecerse con {{cssxref("border-block-style")}}, que establece {{cssxref("border-block-start-style")}}, y {{cssxref("border-block-end-style")}}.

{{cssinfo}}

## Sintaxis

### Valores

- `<'border-style'>`
  - : La línea de estilo del borde. Mira {{ cssxref("border-style") }}.

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
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-inline-style: dashed;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
