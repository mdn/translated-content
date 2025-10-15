---
title: border-inline-start-color
slug: Web/CSS/border-inline-start-color
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-start-color`** define el color del borde lógico inicial en línea de un elemento, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-color")}} y {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}}, y {{cssxref("border-right-color")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-start-color")}}

```css interactive-example-choice
border-inline-start-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-color: rgb(170, 50, 220, 0.6);
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
border-inline-start-color: red;
border-inline-start-color: #ee4141;
```

Propiedades relacionadas son {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, y {{cssxref("border-inline-end-color")}}, que define los otros colores del borde del elemento.

{{cssinfo}}

### Valores

- `<'color'>`
  - : El color del borde. Mira {{cssxref("color")}}.

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
  border-inline-start-color: red;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, y {{cssxref("border-left-color")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
