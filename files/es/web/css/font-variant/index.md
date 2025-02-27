---
title: font-variant
slug: Web/CSS/font-variant
---

{{CSSRef}}

## Resumen

La propiedad `font-variant` selecciona entre los aspectos `normal` y `small-caps` para la {{ Cssxref("font-family", "familia de fuente") }} determinado.

{{cssinfo}}

## Sintaxis

```
font-variant: [normal | small-caps] ;
```

### Valores

- normal
  - : Especifica un aspecto de letra normal.

<!---->

- small-caps
  - : Especifica un tipo de letra que está declarado como tipo de letra small-caps. Si no hay un tipo de letra small-caps disponible, Mozilla simulará un tipo de letra small-caps, por ejemplo tomando un tipo de letra normal y reemplazando las letras en minúsculas por caracteres en mayúsculas escalados.

## Ejemplos

```
h1 { font-variant: small-caps }
p { font-variant: small-caps}
```

## Especificaciones

- [Fuentes en CSS 2 (en)](https://www.w3.org/TR/CSS2/fonts.html#propdef-font-variant)
- [Fuentes en CSS 3 (en)](https://www.w3.org/TR/css3-fonts/#font-variant)
