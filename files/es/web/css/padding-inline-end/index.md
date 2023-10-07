---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`padding-inline-end`** define el relleno final lógico en línea de un elemento, que se asigna a un relleno físico en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a las propiedades {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, o {{cssxref("padding-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Esto se relaciona con {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, and {{cssxref("padding-inline-start")}}, que define los otros rellenos del elemento.

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## Sintaxis

```css
/* <length> values */
padding-inline-end: 10px; /* An absolute length */
padding-inline-end: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-end: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: unset;
```

{{cssinfo}}

### Valores

La propiedad `padding-inline-end` toma los mismos valores de la propiedad {{cssxref("padding-left")}}.

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
  padding-inline-end: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, y {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
