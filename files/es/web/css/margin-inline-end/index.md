---
title: margin-inline-end
slug: Web/CSS/margin-inline-end
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`margin-inline-end`** define el margen final lógico en línea de un elemento, que se asigna a un margen físico en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. En otras palabras, corresponde a las propiedades {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} o {{cssxref("margin-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: margin-inline-end")}}

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline-end: 20%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Sintaxis

```css
/* <length> values */
margin-inline-end: 10px; /* An absolute length */
margin-inline-end: 1em; /* relative to the text size */
margin-inline-end: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-end: auto;

/* Global values */
margin-inline-end: inherit;
margin-inline-end: initial;
margin-inline-end: unset;
```

Se relaciona con {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-start")}}, que define las otras márgenes del elemento.

{{cssinfo}}

### Valores

La propiedad `margin-inline-end` toma los mismos valores de la propiedad {{cssxref("margin-left")}}.

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
  margin-inline-end: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{cssxref("margin-inline-start")}}
- Las propiedades físicas mapeadas: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, y {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
