---
title: inset
slug: Web/CSS/inset
---

La propiedad de [CSS](/es/docs/Web/CSS) **`inset`** define el bloque lógico y las compensaciones de inicio y finalización en línea de un elemento, que se asignan a las compensaciones físicas en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a las propiedades {{cssxref ("top")}} y {{cssxref ("bottom")}}, o {{cssxref ("right")}} y {{cssxref ("left")}} dependiendo de las propiedades en los valores definidos para {{cssxref ("modo de escritura")}}, {{cssxref ("dirección")}} y {{cssxref ("orientación de texto")}}.

```css
/* <length> values */
inset: 3px 10px 3px 10px;
inset: 2.4em 3em 3em 3em;
inset: 10px; /* value applied to all edges */

/* <percentage>s of the width or height of the containing block */
inset: 10% 5% 5% 5%;

/* Keyword value */
inset: auto;

/* Global values */
inset: inherit;
inset: initial;
inset: unset;
```

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `inset` toma los mismos valores de la propiedad {{cssxref("left")}}.

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
  inset: 20px 50px 30px 10px;
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
