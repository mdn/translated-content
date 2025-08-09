---
title: border-inline-end-width
slug: Web/CSS/border-inline-end-width
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-end-width`** [CSS](/es/docs/Web/CSS) property defines the width of the logical inline-end border of an element, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-width")}} y {{cssxref("border-bottom-width")}}, o {{cssxref("border-left-width")}}, y {{cssxref("border-right-width")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-end-width")}}

```css interactive-example-choice
border-inline-end-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end-width: 4px;
writing-mode: horizontal-tb;
direction: rtl;
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
border-inline-end-width: 2px;
border-inline-end-width: thick;
```

Propiedades relacionadas son {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, and {{cssxref("border-inline-start-width")}}, que definen los otros anchos del borde del elemento.

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
  border-inline-end-width: 5px;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico:{{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, y {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
