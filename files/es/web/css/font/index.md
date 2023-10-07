---
title: font
slug: Web/CSS/font
---

{{CSSRef}}

## Resumen

La propiedad {{ Cssxref("font") }} permite establecer de una sola vez los valores para todas las propiedades: {{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{ Cssxref("line-height") }} y {{ Cssxref("font-family") }} en una hoja de estilo.

{{cssinfo}}

## Sintaxis

`font:` \[ <[font-style](/es/CSS/font-style)> || <[font-variant](/es/CSS/font-variant)> || <[font-weight](/es/CSS/font-weight)> ]? <[font-size](/es/CSS/font-size)> \[ / <[line-height](/es/CSS/line-height)> ]? <[font-family](/es/CSS/font-family)>

`font:` `caption` | `icon` | `menu` | `message-box` | `small-caption` | `status-bar` | `-moz-window` | `-moz-document` | `-moz-workspace` | `-moz-desktop` | `-moz-info` | `-moz-dialog` | `-moz-button` | `-moz-pull-down-menu` | `-moz-list` | `-moz-field`

`font:` {{ Cssxref("inherit") }}

### Valores

La propiedad {{ Cssxref("font") }} establece los valores individuales tal como se especifica y a las otras su valor inicial.

Ver las propiedades individuales: {{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }} y {{ Cssxref("font-family") }}.

También se pueden especificar los tipos de letra del sistema usando la propiedad {{ Cssxref("font") }},_en lugar_ de tener que especificar cada propiedad individualmente:

- caption
  - : el tipo de letra para elementos de control (por ejemplo: botones, cajas de selección, etc.).
- icon
  - : el tipo de letra usado para etiquetar iconos.
- menu
  - : el tipo de letra usado en menús (por ejemplo: barra de menú o menús desplegables).
- message-box
  - : el tipo de letra usado en cajas de diálogo.
- small-caption
  - : el tipo de letra usado para etiquetar pequeños controles (small control).
- status-bar
  - : el tipo de letra usado en la barra de estado de la ventana.
- Gecko implementa:
  - : `-moz-window`, `-moz-document`, `-moz-workspace`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list`, `-moz-field`

## Ejemplos

[Ver El Ejemplo Vivo](/samples/cssref/font.html)

```
/* Ajusta el tamaño de letra a 12pt y el alto de línea a 14pt. La familia tipográfica es sans-serif */
p { font: 12pt/14pt sans-serif }
```

```
/* Ajusta el tamaño de letra al 80% del elemento padre o al tamaño por defecto (si no hay elemento padre) y la familia tipográfica a sans-serif */
p { font: 80% sans-serif }
```

```
/* Ajusta el peso tipográfico a '''bold''' (negrita), el estilo de letra a ''italic'' (cursiva), el tamaño de letra a large (grande) y la familia a serif. */
p { font: bold italic large serif }
```

## Notas

Las partes {{ Cssxref("font-size") }} y {{ Cssxref("font-family") }} de {{ Cssxref("font") }} son obligatorias. Omitirlas causa un error de sintaxis y la declaración CSS será completamente ignorada.

Si no se establece un valor concreto, las propiedades tomarán el valor por defecto: `normal`. Las propiedades que se pueden omitir son: ({{ Cssxref("font-style") }}, {{ Cssxref("font-variant") }}, {{ Cssxref("font-weight") }} y {{ Cssxref("line-height") }}).

La propiedad {{ Cssxref("font-size-adjust") }} también se establece a su valor inicial (`none`) cuando se usa la propiedad general {{ Cssxref("font") }}.

## Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#font)
- [CSS 2](http://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html#propdef-font) (para {{ Cssxref("font-size-adjust") }})
- [CSS 2.1](http://www.w3.org/TR/CSS21/fonts.html#propdef-font)
- [css3-ui](http://www.w3.org/TR/css3-ui/#font) (para los nuevos valores de fuentes de sistema])

## Compatibilidades

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 3              |
| Netscape          | 4              |
| Opera             | 3.5            |
