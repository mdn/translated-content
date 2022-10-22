---
title: '-webkit-text-stroke'
slug: Web/CSS/-webkit-text-stroke
tags:
  - CSS
  - No estándar(2)
  - Propiedad
  - Referencia
translation_of: Web/CSS/-webkit-text-stroke
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

| Especificación                                                                                                                                                                                                                                            | Estado                                 | Comentario              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------- |
| {{SpecName('Compat', '#the-webkit-text-stroke', '-webkit-text-stroke')}}                                                                                                                                                          | {{Spec2('Compat')}}               | Estandarización Inicial |
| [Referencia CSS Safari '-webkit-text-stroke' en ese documento.](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_text_stroke) | Documentación no oficial y no estándar | Documentación Inicial   |

## Compatibilidad con los distintos navegadores

{{Compat("css.properties.-webkit-text-stroke")}}

## Ver además

- [Post en el blog Surfin' Safari anunciando esta característica](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [Artículo en CSS-Tricks explicando esta característica](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
