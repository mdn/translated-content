---
title: zoom
slug: Web/CSS/zoom
translation_of: Web/CSS/zoom
---

{{CSSRef}}{{Non-standard_header}}

La propiedad no estándar de [CSS](/es/docs/Web/CSS) **_`zoom`_** se puede usar para controlar el aumento de escala de un elemento. Si es posible, se debe usar {{cssxref("transform-function/scale", "transform: scale()")}}  en lugar de esta propiedad. Sin embargo, a diferencia de los CSS Transforms, `zoom` afecta el tamaño del diseño del elemento.

## Sintaxis

```css
/* Valores de palabras clave */
zoom: normal;
zoom: reset;

/* <percentage> values */
zoom: 50%;
zoom: 200%;

/* <number> values */
zoom: 1.1;
zoom: 0.7;

/* Valores globales */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### Valores

- `normal`
  - : Dibuja el elemento con su tamaño normal.
- `reset` {{non-standard_inline}}

  - : No cambia la escala de este elemento si el usuario aplica zoom no basado en toques al documento (p. ej.: presionando los atajos de teclado <kbd>Ctrl</kbd> \- <kbd>-</kbd> o <kbd>Ctrl</kbd> \+ <kbd>+</kbd>). Sólo soportado por `WebKit` (y posiblemente `Blink`).

- {{cssxref("&lt;percentage&gt;")}}
  - : Factor de Zoom. `100%` es equivalente a  `normal`. Valores superiores a `100%` aumentan y valores inferiores al `100%` alejan el elemento.

- {{cssxref("&lt;number&gt;")}}
  - : Factor de `zoom`. Equivalente al porcentaje correspondiente (`1.0` = `100%` = `normal`). Valores mayores de `1.0` aumentan. Valores menores de `1.0` alejan.

## Definición formal

{{cssinfo}}

## Sintaxis formal

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

#### Resultado

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

No forma parte de ningún estándar. Esta propiedad tiene su origen en Internet Explorer. Apple tiene [una descripción en la Referencia CSS de Safari](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15). Rossen Atanassov de Microsoft posee [un borrador de propuesta de especificación no oficial en Github](https://cdn.jsdelivr.net/gh/atanassov/css-zoom@master/Overview.html).

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Artículo de `zoom` en la página de CSS-Tricks](https://css-tricks.com/almanac/properties/z/zoom/)
- El descriptor de viewport `zoom` usado con [`@viewport`](/es/docs/Web/CSS/@viewport)
- [Bug 390936: Implementar la propiedad `zoom` de Internet Explorer para CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=390936) en el rastreador de problemas de Firefox Bugzilla.
