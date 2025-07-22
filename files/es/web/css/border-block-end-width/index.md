---
title: border-block-end-width
slug: Web/CSS/border-block-end-width
---

{{SeeCompatTable}}

La propieda de [CSS](/es/docs/Web/CSS) **`border-block-end-width`** define el ancho del borde final lógico de bloque de un elemento, que se asigna al borde físico que depende del modo de escritura, direccionalidad, y orientación del texto del elemento. Esto corresponde a la propiedad {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, o {{cssxref("border-left-width")}} property dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-end-width")}}

```css interactive-example-choice
border-block-end-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end-width: 4px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-width: 4px;
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
border-block-end-width: 5px;
border-block-end-width: thick;
```

Las propiedades relacionadas son {{cssxref ("border-block-start-width")}}, {{cssxref ("border-inline-width")}}, y {{cssxref ("border-inline-end-width ")}}, que define los otros anchos de borde del elemento.

{{cssinfo}}

### Valores

- `<'border-width'>`
  - : El tamaño del borde. Mira {{ cssxref("border-width") }}.

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
  border-block-end-width: 5px;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
