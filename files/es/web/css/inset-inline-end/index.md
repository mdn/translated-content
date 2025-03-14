---
title: inset-inline-end
slug: Web/CSS/inset-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`inset-inline-end`** define la inserción final lógica en línea de un elemento, que se asigna a una inserción física en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a la propiedad {{cssxref ("top")}}, {{cssxref ("right")}}, {{cssxref ("bottom")}}, o {{cssxref ("left")}} dependiendo de la propiedad en los valores definidos para {{cssxref ("modo de escritura")}}, {{cssxref ("dirección")}} y {{cssxref ("orientación de texto")}}.

```css
/* <length> values */
inset-inline-end: 3px;
inset-inline-end: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-inline-end: 10%;

/* Keyword value */
inset-inline-end: auto;

/* Global values */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: unset;
```

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `inset-inline-end` toma los mismos valores de la propiedad {{cssxref("left")}}.

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
  position: relative;
  inset-inline-end: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades que definen otras inserciones:: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, y {{cssxref("inset-inline-start")}}
- Las propiedades físicas mapeadas: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, y {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
