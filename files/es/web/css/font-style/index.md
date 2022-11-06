---
title: font-style
slug: Web/CSS/font-style
tags:
  - CSS
  - Propiedad de CSS
  - Referencia
  - Tipos de letra de CSS
  - Web
  - tipo de letra
translation_of: Web/CSS/font-style
---
{{CSSRef}}

## Resumen

La propiedad `font-style` permite definir el aspecto de una familia tipográfica entre los valores: `normal`, italic (cursiva) y `oblique`.

{{cssinfo}}

## Sintaxis

```css
font-style: normal;
font-style: italic;
font-style: oblique;

/* Valores globales */
font-style: inherit;
font-style: initial;
font-style: unset;
```

### Valores

- `normal`
  - : Escoge un tipo de letra clasificado como `normal` dentro de una {{Cssxref("font-family", "familia de fuente")}}.
- `italic`
  - : Escoge un tipo de letra etiquetado como `italic`, o, si una versión cursiva del tipo de letra no esté disponible, escoge un tipo de letra etiquetado como `oblique` en lugar de eso.
- `oblique`
  - : Escoge un tipo de letra etiquetado como `oblique`, o, si una versión oblique del tipo de letra no esté disponible, escoge un tipo de letra etiquetado como `italic` en lugar de eso.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

El ejemplo muestra los valores diferentes de `font-style`.

```html
<p class="normal">This paragraph is normal.</p>
<p class="italic">This paragraph is italic.</p>
<p class="oblique">This paragraph is oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{ EmbedLiveSample('Ejemplo') }}

Ten en cuenta que no todas las fuentes tienen tipos de letra distintos para `oblique` y `italic`, si este no es el caso, los navegadores simulan el estilo que falta utilizando el tipo de letra presente. Un ejemplo de representación de una fuente con ambos tipos de letra:

![](https://mdn.mozillademos.org/files/12049/Screen%20Shot%202015-12-05%20at%2008.41.03.png)

## Especificaciones

| Especificación                                                                               | Estado                           | Comentario         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('CSS3 Fonts', '#font-style-prop', 'font-style')}}             | {{Spec2('CSS3 Fonts')}} | Sin cambio         |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-style', 'font-style')}} | {{Spec2('CSS2.1')}}         | Sin cambio         |
| {{SpecName('CSS1', '#font-style', 'font-style')}}                             | {{Spec2('CSS1')}}         | Definición inicial |

{{Compat("css.properties.font-style")}}
