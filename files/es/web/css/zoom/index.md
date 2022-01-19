---
title: zoom
slug: Web/CSS/zoom
tags:
  - CSS
  - Propiedad CSS
  - No estandar
  - Referencia
  - recipe:css-property
translation_of: Web/CSS/zoom
---

{{CSSRef}}{{Non-standard_header}}

La propiedad [CSS](/es/docs/Web/CSS) no estándarizada **`zoom`**
se puede usar para controlar el aumento de escala de un elemento.
En la medida de lo posible se deben usar [transform: scale()](/es/docs/Web/CSS/transform-function/scale()) en vez de esta propiedad.

```css
/* Keyword values */
zoom: normal;
zoom: reset;

/* <percentage> values */
zoom: 50%;
zoom: 200%;

/* <number> values */
zoom: 1.1;
zoom: 0.7;

/* Global values */
zoom: inherit;
zoom: initial;
zoom: unset;
```

## Sintaxis

### Valores

- `normal`
  - : Dibuja el elemento con su tamaño normal.
- `reset` {{non-standard_inline}}

  - : No cambia la escala del elemento (por ejemplo al presionar `<kbd>Ctrl</kbd>  \+  <kbd>-</kbd>` o `<kbd>Ctrl</kbd>  \+ <kbd>+</kbd>` )
   
  - si el usuario aplica `non-pinch-zooming`.
    Sólo soportado por WebKit (y posiblemente Blink).

- {{cssxref("&lt;percentage&gt;")}}
  - : Factor de Zoom. `100%` es a tamaño `normal`. Valores superiores a ` 100%` aumentan y valores inferiores al `100%` encogen el elemento.
- {{cssxref("&lt;number&gt;")}}
  - : Factor de Zoom. Equivalente al porcentaje correspondiente (`1.0` = `100%` = `normal`). Valores mayores de `1.0` aumentarán el tamaño. Valores menores de `1.0` encogerán.

## Definición Formal

{{cssinfo}}

## Sintaxis Formal

{{csssyntax}}

## Ejemplos

### Primer ejemplo

#### HTML

```html
<p class="small">Small</p>
<p class="normal">Normal</p>
<p class="big">Big</p>
```

#### CSS

```css
p.small {
  zoom: 75%;
}
p.normal {
  zoom: normal;
}
p.big {
  zoom: 2.5;
}
p {
  display: inline-block;
}
p:hover {
  zoom: reset;
}
```

#### Result

{{EmbedLiveSample('First_example')}}

### Segundo ejemplo

#### HTML

```html
<div id="a" class="circle"></div>
<div id="b" class="circle"></div>
<div id="c" class="circle"></div>
```

#### CSS

```css
div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  zoom: 1.5;
}
div#a {
  background-color: gold;
  zoom: normal;
}
div#b {
  background-color: green;
  zoom: 200%;
}
div#c {
  background-color: blue;
  zoom: 2.9;
}
```

#### Resultado

{{EmbedLiveSample('Second_example')}}

## Especificaciones

Esta propiedad no es estándar y tiene su origen en Internet Explorer.
Apple tiene [una descripción en la Referencia CSS de Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15).

## Compatibilidad del navegador

{{Compat}}

## Ver además

- [Artículo de `zoom` en la página de CSS-Tricks](https://css-tricks.com/almanac/properties/z/zoom/)
- [Bug 390936: Implementar la propiedad `zoom` de Internet Explorer para CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=390936) en el rastreador de problemas de Firefox Bugzilla.
