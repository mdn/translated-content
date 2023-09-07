---
title: border-inline-color
slug: Web/CSS/border-inline-color
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-color`** define el color del borde lógico en línea de un elemento, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-color")}} y {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}}, y {{cssxref("border-right-color")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
border-inline-color: yellow;
border-inline-color: #f5f6f7;
```

El color del borde en otra dimensión puede establecerse con {{cssxref("border-block-color")}} que establece {{cssxref("border-block-start-color")}}, y {{cssxref("border-block-end-color")}}.

{{cssinfo}}

## Sintaxis

### Valores

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-color: red;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}+ bug 1297097
