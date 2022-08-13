---
title: border-block-end
slug: Web/CSS/border-block-end
tags:
  - CSS
  - Experimental
  - Propiedad CSS
  - Propiedad Lógica CSS
  - Referencia
translation_of: Web/CSS/border-block-end
---
{{CSSRef}}{{SeeCompatTable}}

La propiedad [CSS](/es/docs/Web/CSS "CSS") **`border-block-end`** es un atajo para establecer los valores de las propiedades individuales del borde final lógico de un bloque en un solo lugar de la hoja de estilos. `border-block-end` puede ser usada para establecer los valores de una o más de las siguientes propiedades: {{Cssxref("border-block-end-width")}}, {{Cssxref("border-block-end-style")}}, {{Cssxref("border-block-end-color")}}. Se asigna a un borde físico, dependiendo del modo de escritura del elemento, su direccionalidad y orientación de texto. Corresponde a las propiedades {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}, dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;
```

Está relacionada con {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}}, y {{cssxref("border-inline-end")}}, las cuales definen el borde contrario del elemento.

{{cssinfo}}

## Sintaxis

### Valores

Una o más de los siguientes, en cualquier orden:

- `<'border-width'>`
  - : Véase {{ cssxref("border-width") }}
- `<'border-style'>`
  - : Véase {{ cssxref("border-style") }}
- `<'color'>`
  - : Véase {{ cssxref("color") }}

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
  writing-mode: vertical-rl;
  border-block-end: 5px dashed blue;
}
```

{{EmbedLiveSample("Ejemplo", 140, 140)}}

## Especificación

| Especificación                                                                                                       | Estatus                                          | Comentarios        |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------ |
| {{SpecName("CSS Logical Properties", "#propdef-border-block-end", "border-block-end")}} | {{Spec2("CSS Logical Properties")}} | Definición inicial |

## Compatibilidad en navegadores

{{Compat("css.properties.border-block-end")}}

## Mira también

- Las propiedades físicas mapeadas: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, y {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
