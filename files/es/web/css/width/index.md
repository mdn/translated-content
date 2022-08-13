---
title: width
slug: Web/CSS/width
tags:
  - Propiedad CSS
  - Referencia
translation_of: Web/CSS/width
---
{{CSSRef}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`width`** especifica la anchura del area de contenido de un elemento. El [área de contenido](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area) está _dentro_ del padding, borde, y margen del elemento.

Las propiedades {{cssxref("min-width")}} y {{cssxref("max-width")}} sobreescriben el valor de {{cssxref("width")}}.

{{cssinfo}}

## Sintaxis

```css
/* Valores <length> */
width: 300px;
width: 25em;

/* Valores <percentage> */
width: 75%;

/* Valores clave */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Valores globales */
width: inherit;
width: initial;
width: unset;
```

### Valores

- `<length>`
  - : Ver {{cssxref("&lt;length&gt;")}} para unidades disponibles.
- `<percentage>`
  - : Especificado con el tipo {{cssxref("&lt;percentage&gt;")}} como porcentaje de la anchura del bloque contenedor. Si la anchura del bloque contenedor depende de la anchura del elemento, la presentación resultante es indefinida.
- `border-box`{{experimental_inline}}
  - : Si está presente, el valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}} precedente es aplicado a los límites del borde del elemento.
- `content-box` {{experimental_inline}}
  - : Si está presente, el valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}} precedente será aplicado a los límites de contenido del elemento.
- `auto`
  - : El navegador calculará y seleccionará la anchura para el elemento especificado.
- fill {{experimental_inline}}
  - : Use el tamaño `fill-available` para elementos inline o block, según sea más apropiado para el modo de escritura.
- `max-content` {{experimental_inline}}
  - : La anchura preferida intrínseca.
- `min-content` {{experimental_inline}}
  - : La anchura mínima intrínseca.
- `available` {{experimental_inline}}
  - : La anchura del bloque contenedor menos su margen horizontal, borde y padding.
- `fit-content` {{experimental_inline}}
  - : El mayor entre:\* la anchura mínima intrínseca
    - la menor entre la anchura prefereida intrínseca y la anchura disponible

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Anchura predeterminada

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

### Píxeles y ems

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

{{EmbedLiveSample('Pixels_and_ems', '500px', '64px')}}

### Porcentaje

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Width in percentage</div>
```

{{EmbedLiveSample('Percentage', '500px', '64px')}}

### max-content

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic;           /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content;    /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('max-content', '500px', '64px')}}

### min-content

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content;    /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('min-content', '500px', '155px')}}

## Especificaciones

| Especificación                                                                               | Estado                                   | Comentarios                                                                                                     |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-width-and-height-properties', 'width')}} | {{Spec2('CSS3 Box')}}             | Añade las palabras clave `max-content`, `min-content`, `available`, `fit-content`, `border-box`, `content-box`. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'width')}}             | {{Spec2('CSS3 Transitions')}} | Incluye `width` como propiedad que puede ser animada.                                                           |
| {{SpecName('CSS2.1', 'visudet.html#the-width-property', 'width')}}     | {{Spec2('CSS2.1')}}                 | Especifica a qué elementos es aplicable.                                                                        |
| {{SpecName('CSS1', '#width', 'width')}}                                         | {{Spec2('CSS1')}}                 | Definición inicial                                                                                              |
| {{SpecName('CSS3 Sizing', '#width-height-keywords', 'width')}}         | {{Spec2('CSS3 Sizing')}}         | Añade nuevas palabras clave de tamaño para `width` y `height`                                                   |

## Compatibilidad de navegadores

{{Compat("css.properties.width")}}

## Véase también

- [box model](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}
