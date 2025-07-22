---
title: border-inline-end
slug: Web/CSS/border-inline-end
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-end`** es una [propiedad abreviada](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) para establecer los valores lógicos individuales del borde en línea final en un solo lugar en la hoja de estilos.

{{InteractiveExample("CSS Demo: border-inline-end")}}

```css interactive-example-choice
border-inline-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end: 1rem solid;
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
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Sintaxis

```css
border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;
```

`border-inline-end` puede ser usado para establecer los valores de uno o más de {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}}, y {{cssxref("border-inline-end-color")}}. El borde físico al que se mapea depende del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

Propiedades relacionadas son {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, and {{cssxref("border-inline-start")}}, que definen los otros bordes del elemento.

{{cssinfo}}

### Valores

El `border-inline-end` es especificado con uno o más de los siguientes valores, en cualquier orden:

- `<'border-width'>`
  - : El ancho del borde. Mira {{cssxref("border-width")}}.
- `<'border-style'>`
  - : La línea de estilo del borde. Mira {{cssxref("border-style")}}.
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
  writing-mode: vertical-rl;
  border-inline-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico:{{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
