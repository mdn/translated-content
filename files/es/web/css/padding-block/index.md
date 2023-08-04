---
title: padding-block
slug: Web/CSS/padding-block
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`padding-block`** define el relleno lógico de inicio y final del bloque de un elemento, que se asigna a las propiedades físicas del relleno según el modo de escritura del elemento, la direccionalidad y la orientación del texto.

```css
/* <length> values */
padding-block: 10px 20px; /* An absolute length */
padding-block: 1em 2em; /* relative to the text size */
padding-block: 5% 2%; /* relative to the nearest block container's width */
padding-block: 10px; /* sets both start and end values */

/* Keyword values */
padding-block: auto;

/* Global values */
padding-block: inherit;
padding-block: initial;
padding-block: unset;
```

Estos valores corresponde a las propiedades {{cssxref("padding-top")}} y {{cssxref("padding-bottom")}}, o {{cssxref("padding-right")}}, y {{cssxref("padding-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Los valores pueden ser establecidos individualmente como {{cssxref("padding-block-start")}} y {{cssxref("padding-block-end")}}. La propiedad de dirección en línea es {{cssxref("padding-inline")}} que establece {{cssxref("padding-inline-start")}}, y {{cssxref("padding-inline-end")}}.

{{cssinfo}}

## Sintaxis

### Valores

`La propiedad padding-block` toma los mismos valores que la propiedad {{cssxref("padding-left")}}.

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
  padding-block: 20px 40px;
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
