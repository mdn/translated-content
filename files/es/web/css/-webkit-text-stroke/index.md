---
title: "-webkit-text-stroke"
slug: Web/CSS/-webkit-text-stroke
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`-webkit-text-stroke`** especifica la [anchura](/es/docs/Web/CSS/length) y [color](/es/docs/Web/CSS/color_value) del trazo para los caractéres de texto. Esta forma es una manera corta en relación con la forma larga que necesita usar las propiedades{{cssxref("-webkit-text-stroke-width")}} y {{cssxref("-webkit-text-stroke-color")}}.

{{cssinfo}}

## Síntaxis

```css
/* Valores anchura y color */
-webkit-text-stroke: 4px navy;

/* Valores globales */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: unset;
```

### Valores

- `<length>`
  - : La anchura del trazo.
- `<color>`
  - : El color del trazo.

### Síntaxis Formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<p id="example">El trazo de este texto es rojo.</p>
```

### CSS

```css
#example {
  font-size: 50px;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

{{EmbedLiveSample("Example", 600, 60)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- [Post en el blog Surfin' Safari anunciando esta característica](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [Artículo en CSS-Tricks explicando esta característica](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
