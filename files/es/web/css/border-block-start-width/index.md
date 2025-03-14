---
title: border-block-start-width
slug: Web/CSS/border-block-start-width
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-block-start-width`** define el ancho del borde lógico de bloque inicial de un elemento, que se asigna al estilo de borde físico dependen del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, o {{cssxref("border-left-width")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-start-width")}}

```css interactive-example-choice
border-block-start-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-width: 4px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-width: 4px;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Sintaxis

```css
/* <'border-width'> values */
border-block-start-width: 5px;
border-block-start-width: thick;
```

Propiedades relacionadas son{{cssxref("border-block-end-width")}}, {{cssxref("border-inline-start-width")}}, y {{cssxref("border-inline-end-width")}}, que definen los otros anchos del borde del elemento.

{{cssinfo}}

### Valores

- `<'border-width'>`
  - : El ancho del borde. Mira {{ cssxref("border-width") }}.

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
  border: 1px solid blue;
  border-block-start-width: 5px;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, y {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
