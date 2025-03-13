---
title: border-block-start-color
slug: Web/CSS/border-block-start-color
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-block-start-color`** define el color del borde lógico de bloque inicial de un elemento, que se asigna al color de borde físico dependen del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-start-color")}}

```css interactive-example-choice
border-block-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-color: rgb(170, 50, 220, 0.6);
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-color: hsl(60, 90%, 50%, 0.8);
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
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Sintaxis

```css
border-block-start-color: blue;
border-block-start-color: #4c5d21;
```

Propiedades relacionadas son {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}}, y {{cssxref("border-inline-end-color")}}, que definen los otros colores del borde del elemento.

{{cssinfo}}

### Valores

- `<'color'>`
  - : Mira {{ cssxref("border-color") }}

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
  border: 10px solid blue;
  border-block-start-color: red;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
