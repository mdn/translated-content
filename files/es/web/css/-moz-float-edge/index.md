---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
---

{{CSSRef}}{{Non-standard_header}}

La propiedad [CSS](/es/docs/Web/CSS) no estandarizada **`-moz-float-edge`** especifica si las propiedades {{cssxref("height")}} y {{cssxref("width")}} del elemento incluyen el grosor del margen, borde, o relleno.

```css
/* Palabras clave */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Valores globales */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

## Sintaxis

### Valores

- `border-box`
  - : Las propiedades {{cssxref("height")}} y {{cssxref("width")}} incluyen el contenido, relleno y borde, pero no el margen.
- `content-box`
  - : Las propiedades {{cssxref("height")}} y {{cssxref("width")}} incluyen el contenido, pero no el relleno, borde o margen.
- `margin-box`
  - : Las propiedades {{cssxref("height")}} y {{cssxref("width")}} incluyen el contenido, relleno, borde y margen.
- `padding-box`
  - : Las propiedades {{cssxref("height")}} y {{cssxref("width")}} incluyen el contenido y relleno pero no el borde ni el margen.

## Definición formal

{{CSSInfo}}

## Sintaxis formal

```plain
-moz-float-edge =
  border-box | content-box | margin-box | padding-box
```

## Ejemplo

### HTML

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### Resultado

{{ EmbedLiveSample('Examples') }}

## Especificaciones

No es parte de ningún estándar.

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Error 432891 en Firefox](https://bugzil.la/432891)
