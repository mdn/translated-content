---
title: border-inline-end-style
slug: Web/CSS/border-inline-end-style
---

{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-inline-end-style`** [CSS](/es/docs/Web/CSS) property defines the style of the logical inline end border of an element, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-style")}} y {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}, y {{cssxref("border-right-style")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-end-style")}}

```css interactive-example-choice
border-inline-end-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end-style: groove;
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
/* <'border-style'> values */
border-inline-end-style: dashed;
border-inline-end-style: dotted;
border-inline-end-style: groove;
```

Propiedades relacionadas son {{cssxref("border-block-start-style")}}, {{cssxref("border-block-end-style")}}, and {{cssxref("border-inline-start-style")}}, que definen los otros estilos del borde del elemento.

{{cssinfo}}

### Valores

- `<'border-style'>`
  - : La línea de estilo del borde. Mira {{ cssxref("border-style") }}.

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
  border: 5px solid blue;
  border-inline-end-style: dashed;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
