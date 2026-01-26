---
title: inset-inline
slug: Web/CSS/inset-inline
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`inset-inline`** define los bloques lógicos de inicio y fin de las compensaciones de un elemento, que se asignan a las compensaciones físicas en función del modo de escritura del elemento, la direccionalidad y la orientación del texto. Corresponde a las propiedades {{cssxref ("top")}} y {{cssxref ("bottom")}}, o {{cssxref ("right")}} y {{cssxref ("left")}} dependiendo de las propiedades en los valores definidos para {{cssxref ("modo de escritura")}}, {{cssxref ("dirección")}} y {{cssxref ("orientación de texto")}}.

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: unset;
```

La abreviación para la otra dimensión es {{cssxref("inset-block")}}, que es la abreviación para {{cssxref("inset-block-start")}}, y {{cssxref("inset-block-end")}}.

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `inset-inline` toma los mismos valores de la propiedad {{cssxref("left")}}.

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
  position: relative;
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades físicas mapeadas: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, y {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
