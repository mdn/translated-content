---
title: "-moz-orient"
slug: Web/CSS/-moz-orient
---

{{CSSRef}}{{Non-standard_header}}

The `-moz-orient` [CSS](/es/docs/Web/CSS) especifica la orientación del elemento al que se aplica.

{{cssinfo}}

## Sintaxis

{{csssyntax}}

### Valores

- `inline`
  - : El elemento se representa en la misma dirección que el eje del texto : horizontal para los modos de escritura horizontales , verticalmente para los modos de escritura vertical .
- `block`
  - : El elemento se representa de forma ortogonal al eje del texto : verticalmente para los modos de escritura horizontal , horizontal para los modos de escritura vertical .
- `horizontal`
  - : El elemento se representa horizontalmente.
- `vertical`
  - : El elemento se representa verticalmente.

## Ejemplos

### HTML

```html
<p>The following progress meter is horizontal (the default):</p>
<progress max="100" value="75"></progress>

<p>The following progress meter is vertical:</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### Resultado

{{EmbedLiveSample("Examples","200","360")}}

## Especificaciones

Aunque [somete](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html) al W3C , con retroalimentación positiva inicial , esta propiedad no es todavía parte de ninguna especificación ; Actualmente , esto es una extensión de Mozilla-specific (that is, `-moz-orient`).

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{cssxref("box-orient")}}
