---
title: margin-block-start
slug: Web/CSS/margin-block-start
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`margin-block-start`** [CSS](/es/docs/Web/CSS) property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

## Sintaxis

```css
/* <length> values */
margin-block-start: 10px; /* An absolute length */
margin-block-start: 1em; /* relative to the text size */
margin-block-start: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-block-start: auto;

/* Global values */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: unset;
```

Esto corresponde a las propiedades {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, o {{cssxref("margin-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Se relaciona con {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}}, que define las otras márgenes del elemento.

{{cssinfo}}

### Valores

La propiedad `margin-block-start` toma los mismos valores de la propiedad {{cssxref("margin-left")}}.

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
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, y {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
