---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
---

{{CSSRef}}{{SeeCompatTable}}

The **`margin-inline-start`** define el margen de inicio en línea lógico de un elemento, que se asigna a un margen físico según el modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a la las propiedades {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, o {{cssxref("margin-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-start.html")}}

## Sintaxis

```css
/* <length> values */
margin-inline-start: 10px; /* An absolute length */
margin-inline-start: 1em; /* relative to the text size */
margin-inline-start: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
```

Se relaciona con {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-end")}}, que define las otras márgenes del elemento.

{{cssinfo}}

### Valores

La propiedad `margin-inline-start` toma los mismos valores de la propiedad {{cssxref("margin-left")}}.

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
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{cssxref("margin-inline-end")}}
- Las propiedades físicas mapeadas: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, y {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
