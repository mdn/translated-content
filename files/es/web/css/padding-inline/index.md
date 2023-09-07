---
title: padding-inline
slug: Web/CSS/padding-inline
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`padding-inline`** define el relleno en línea lógico de inicio y final de un elemento, que asigna las propiedades de relleno físicas dependiendo del modo de escritura del elemento, direccionalidad, y orientación del texto.

```css
/* <length> values */
padding-inline: 10px 20px; /* An absolute length */
padding-inline: 1em 2em; /* relative to the text size */
padding-inline: 5% 2%; /* relative to the nearest block container's width */
padding-inline: 10px; /* sets both start and end values */

/* Keyword values */
padding-inline: auto;

/* Global values */
padding-inline: inherit;
padding-inline: initial;
padding-inline: unset;
```

Estos valores corresponden a las propiedades{{cssxref("padding-top")}} y {{cssxref("padding-bottom")}}, o {{cssxref("padding-right")}}, y {{cssxref("padding-left")}} dependiendo de los valores definidos {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Los valores pueden ser establecidos individualmente como {{cssxref("padding-inline-start")}} y {{cssxref("padding-inline-end")}}. La propiedad de la dirección bloque es {{cssxref("padding-block")}} que establece {{cssxref("padding-block-start")}}, y {{cssxref("padding-block-end")}}.

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `padding-inline` toma los mismos valores de la propiedad {{cssxref("padding-left")}}.

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
  padding-inline: 20px 40px;
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
