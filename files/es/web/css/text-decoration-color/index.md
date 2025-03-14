---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
---

{{ CSSRef }}

## Resumen

La propiedad **`text-decoration-color`** establece el color usado cuando se dibujan subrayados o líneas a través del texto, especificadas por la propiedad {{ cssxref("text-decoration-line") }}. El color especificado será el mismo para los tres tipos de línea.

CSS no provee un mecanismo directo para especificar un color único para cada tipo de línea. Sin embargo, se puede obtener un efecto similar anidando elementos HTML, aplicando diferente tipo de línea para cada uno (via la propiedad `text-decoration-line`), y especificando un color de línea (usando `text-decoration-color`) propio para cada elemento.

{{cssinfo}}

## Sintaxis

```css
/* valores <color> */
text-decoration-color: currentColor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgba(255, 128, 128, 0.5);
text-decoration-color: transparent;

/* Valores globales */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: unset;
```

### Valores

- `<color>`
  - : La propiedad `color` acepta varlos nombres clave y notaciones numéricas. Vea {{cssxref("&lt;color&gt;")}} para más detalles.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
.example {
  text-decoration: underline;
  text-decoration-color: red;
}
```

El ejemplo anterior tiene el mismo efecto que el código siguiente, que además añade un estilo para cuando el elemento tiene el puntero del mouse encima.

```html
<!doctype html>
<html>
  <head>
    <style>
      .example {
        font-size: 24px;
        text-decoration: underline;
        color: red;
      }
      .example:hover {
        color: blue;
        text-decoration: line-through;
      }
    </style>
  </head>
  <body>
    <span class="example">
      <span style="color:black;"
        >texto negro con subrayado rojo, y azul con el cursor encima</span
      >
    </span>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
