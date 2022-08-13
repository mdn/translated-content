---
title: outline-offset
slug: Web/CSS/outline-offset
tags:
  - Contorno CSS
  - Propiedad CSS
translation_of: Web/CSS/outline-offset
---
{{CSSRef}}

## Resumen

La propiedad CSS **`outline-offset`** es usada para establecer el espacio entre un contorno {{ cssxref("outline") }} y el límite o borde de un elemento. Un contorno es una línea que se dibuja al rededor de los elementos, fuera de los límites de su borde.

{{cssinfo}}

El espacio será transparente (el elemento padre determinará el fondo).

## Sintaxis

```css
/* Valores <length> */
outline-offset: 3px;
outline-offset: 0.2em;

/* Valores globales */
outline-offset: inherit;
outline-offset: initial;
outline-offset: unset;
```

### Valores

- `<length>`
  - : La anchura del espacio. Ver {{cssxref("&lt;length&gt;")}} para unidades posibles. Valores negativos colocan el borde dentro del elemento.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
p {
  outline: dashed thin;
  /* Mueve el contorno 10px lejos del borde */
  outline-offset: 10px;
  border:1px solid black;
}
```

Html

```html
<p>outline: offset 10px. Border is solid and outline is dashed</p>
```

El código anterior producirá este efecto:

{{ EmbedLiveSample('Examples', '', '', '') }}

Otro ejemplo:

outline: multiple offsets;

## Especificaciones

| Especificación                                                                                   | Estado                                   | Comentarios                                                 |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------- |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'outline-offset') }} | {{ Spec2('CSS3 Transitions') }} | Define `outline-offset` como propiedad que se puede animar. |
| {{ SpecName('CSS3 Basic UI', '#outline-offset', 'outline-offset') }}     | {{ Spec2('CSS3 Basic UI') }}     | Definición inicial                                          |

## Compatibilidad de navegadores

{{Compat("css.properties.outline-offset")}}
