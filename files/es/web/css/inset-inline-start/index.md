---
title: inset-inline-start
slug: Web/CSS/inset-inline-start
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`inset-inline-start`** define la inserción de inicio en línea lógica de un elemento, que se asigna a un desplazamiento físico en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a la propiedad {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, o {{cssxref("left")}} dependiendo de la propiedad en los valores definidos para {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
/* <length> values */
inset-inline-start: 3px;
inset-inline-start: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-inline-start: 10%;

/* Keyword value */
inset-inline-start: auto;

/* Global values */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: unset;
```

{{cssinfo}}

## Sintaxis

### Valores

La propiedad `inset-inline-start` toma los mismos valores de la propiedad {{cssxref("left")}}.

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
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Las propiedades que definen otras inserciones: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, y {{cssxref("inset-inline-end")}}
- Las propiedades físicas mapeadas: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, y {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
