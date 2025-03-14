---
title: border-block-end-style
slug: Web/CSS/border-block-end-style
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad [CSS](/es/docs/Web/CSS) **`border-block-end-style`** define el estilo del borde del final lógico del bloque de un elemento, que se mapea a un estilo de borde físico, dependiendo el modo de escritura, direccionalidad y orientación de texto del elemento. Corresponde a las propiedades {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}, dependiendo de los valores definidos para {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
border-block-end-style: dashed;
border-block-end-style: dotted;
border-block-end-style: groove;
```

Está relacionada a {{cssxref("border-block-start-style")}}, {{cssxref("border-inline-start-style")}}, y {{cssxref("border-inline-end-style")}}, que definen las otras propiedades de estilos de borde del elemento.

{{cssinfo}}

## Sintaxis

### Valores

- `<'border-style'>`
  - : See {{ cssxref("border-style") }}

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<div>
  <p class="exampleText">Texto de ejemplo</p>
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
  border-block-end-style: dashed;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Las propiedades físicas mapeadas: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, y {{cssxref("border-left-style")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
