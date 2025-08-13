---
title: inset-block
slug: Web/CSS/inset-block
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`inset-block`** define los bloques lógicos de inicio y fin de las compensaciones de un elemento, que se asignan a las compensaciones físicas en función del modo de escritura del elemento, la direccionalidad y la orientación del texto. Corresponde a las propiedades {{cssxref ("top")}} y {{cssxref ("bottom")}}, o {{cssxref ("right")}} y {{cssxref ("left")}} dependiendo de las propiedades en los valores definidos para {{cssxref ("modo de escritura")}}, {{cssxref ("dirección")}} y {{cssxref ("orientación de texto")}}.

```css
/* <length> values */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* value applied to start and end */

/* <percentage>s of the width or height of the containing block */
inset-block: 10% 5%;

/* Keyword value */
inset-block: auto;

/* Global values */
inset-block: inherit;
inset-block: initial;
inset-block: unset;
```

La abreviación para la otra dimensión {{cssxref("inset-inline")}}, que es una abreviación para {{cssxref("inset-inline-start")}}, y {{cssxref("inset-inline-end")}}.

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `inset-block` toma los mismos valores de la propiedad {{cssxref("left")}}.

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
  inset-block: 20px 50px;
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
