---
title: border-block-end-width
slug: Web/CSS/border-block-end-width
---

{{CSSRef}}{{SeeCompatTable}}

La propieda de [CSS](/es/docs/Web/CSS) **`border-block-end-width`** define el ancho del borde final lógico de bloque de un elemento, que se asigna al borde físico que depende del modo de escritura, direccionalidad, y orientación del texto del elemento. Esto corresponde a la propiedad {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, o {{cssxref("border-left-width")}} property dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-end-width.html")}}

## Sintaxis

```css
/* <'border-width'> values */
border-block-end-width: 5px;
border-block-end-width: thick;
```

Las propiedades relacionadas son {{cssxref ("border-block-start-width")}}, {{cssxref ("border-inline-width")}}, y {{cssxref ("border-inline-end-width ")}}, que define los otros anchos de borde del elemento.

{{cssinfo}}

### Valores

- `<'border-width'>`
  - : El tamaño del borde. Mira {{ cssxref("border-width") }}.

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
  border-block-end-width: 5px;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
