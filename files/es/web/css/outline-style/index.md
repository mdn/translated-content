---
title: outline-style
slug: Web/CSS/outline-style
---

{{CSSRef}}

## Resumen

La propiedad CSS **`outline-style`** es usada para establecer el estilo del contorno de un elemento. Un contorno es una línea que se dibuja al rededor de elementos, fuera de los límites del borde, para resaltar un elemento.

Por lo general, es más conveniente usar la propiedad de forma reducida {{cssxref("outline")}} en vez de `outline-style`, `outline-width` y `outline-color` por separado.

{{cssinfo}}

## Sintaxis

```css
/* Valores clave */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* Valores globales */
outline-style: inherit;
outline-style: initial;
outline-style: unset;
```

## Valores

`<br-style>` puede ser uno de los siguientes:

- none
  - : Sin contorno ({{Cssxref("outline-width")}} es `0`).
- dotted
  - : Línea punteada. El contorno es una serie de puntos.
- dashed
  - : Línea discontinua. El contorno es una serie de segmentos de línea cortos.
- solid
  - : El contorno es una línea simple.
- double
  - : El contorno son dos líneas paralelas. El valor de {{Cssxref("outline-width")}} es la suma de los dos líneas y el espacio entre ellas.
- groove
  - : El contorno parece estar tallado dentro del lienzo.
- ridge
  - : Lo opuesto a `groove`: el contorno parece salir del lienzo.
- inset
  - : El contorno hace a la caja verse como si estuviera embedida dentro del lienzo.
- outset
  - : Lo opuesto a `inset`: el contorno hace a la caja verse como si estuviera saliendo del lienzo.

### Sintaxis formal

{{csssyntax}}

## Ejemplo 1 - `dotted` y `dashed`

HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Outline Demo</p>
  </div>
</div>
```

CSS

```css
.dotted {
  outline-style: dotted; /* same result as "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('Example_1_-_dotted_and_dashed') }}

## Ejemplo 2 - `solid` y `double`

HTML

```html
<div>
  <div class="solid">
    <p class="double">Outline Demo</p>
  </div>
</div>
```

CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('Example_2_-_solid_and_double') }}

## Ejemplo 3 - `groove` y `ridge`

HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Outline Demo</p>
  </div>
</div>
```

CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('Example_3_-_groove_and_ridge') }}

## Ejemplo 4 - `inset` y `outset`

HTML

```html
<div>
  <div class="inset">
    <p class="outset">Outline Demo</p>
  </div>
</div>
```

CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('Example_4_-_inset_and_outset') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
