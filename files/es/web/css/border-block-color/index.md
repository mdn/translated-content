---
title: border-block-color
slug: Web/CSS/border-block-color
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-block-color`** define el color del borde de bloque de un elemento, que se asigna al color del borde físico dependiendo de los elementos de modo de escrituro, direccionalidad y la orientación del texto. Esto corresponde a las propiedades {{cssxref("border-top-color")}} y {{cssxref("border-bottom-color")}}, o {{cssxref("border-right-color")}} y {{cssxref("border-left-color")}} dependiendo de los valores definidos para {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
border-block-color: yellow;
border-block-color: #f5f6f7;
```

El color de borde en la otra dimensión puede ser establecida con {{cssxref("border-inline-color")}} que establece {{cssxref("border-inline-start-color")}}, y {{cssxref("border-inline-end-color")}}.

{{cssinfo}}

## Sintaxis

### Valores

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-color: red;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a las propiedades del borde físico: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}+ error 1297097
