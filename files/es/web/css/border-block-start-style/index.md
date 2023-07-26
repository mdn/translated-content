---
title: border-block-start-style
slug: Web/CSS/border-block-start-style
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad de [CSS](/es/docs/Web/CSS) **`border-block-start-style`** define el estilo del borde lógico de bloque inicial de un elemento, que se asigna al estilo de borde físicodependen del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}} dependiendo de los valores definidos por{{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-start-style.html")}}

## Sintaxis

```css
/* <'border-style'> values */
border-block-start-style: dashed;
border-block-start-style: dotted;
border-block-start-style: groove;
```

Propiedades relacionadas son {{cssxref("border-block-end-style")}}, {{cssxref("border-inline-start-style")}}, y {{cssxref("border-inline-end-style")}}, que definen los otros estilos del borde del elemento.

{{cssinfo}}

### Valores

- `<'border-style'>`
  - : El estilo de la línea del borde. Mira {{ cssxref("border-style") }}.

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
  border-block-start-style: dashed;
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
