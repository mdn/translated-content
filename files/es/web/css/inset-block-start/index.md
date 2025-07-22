---
title: inset-block-start
slug: Web/CSS/inset-block-start
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`inset-block-start`** define el desplazamiento de inicio de bloque lógico de un elemento, que se asigna a una inserción física en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a la propiedad {{cssxref ("top")}}, {{cssxref ("right")}}, {{cssxref ("bottom")}}, o {{cssxref ("left")}} dependiendo de la propiedad en los valores definidos para {{cssxref ("modo de escritura")}}, {{cssxref ("dirección")}} y {{cssxref ("orientación de texto")}}.

```css
/* <length> values */
inset-block-start: 3px;
inset-block-start: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-block-start: 10%;

/* Keyword value */
inset-block-start: auto;

/* Global values */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: unset;
```

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `inset-block-start` toma los mismos valores de la propiedad {{cssxref("left")}}.

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
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades que definen otras inserciones:: {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, y {{cssxref("inset-inline-end")}}
- Las propiedades físicas mapeadas: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, y {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
