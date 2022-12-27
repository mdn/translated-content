---
title: border-inline-width
slug: Web/CSS/border-inline-width
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-width`** define al ancho del borde lógico en línea de un elemento, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-width")}} y {{cssxref("border-bottom-width")}}, o {{cssxref("border-left-width")}}, y {{cssxref("border-right-width")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
/* <'border-width'> values */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;
```

El ancho del borde en otra dimensión puede establecerse con {{cssxref("border-block-width")}}, que establece {{cssxref("border-block-start-width")}}, y {{cssxref("border-block-end-width")}}.

{{cssinfo}}

## Sintaxis

### Valores

- `<'border-width'>`
  - : El ancho del borde. Mira {{ cssxref("border-width") }}.

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
  border: 1px solid blue;
  border-inline-width: 5px 10px;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad en navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico:{{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, y {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
