---
title: Propiedad CSS `-webkit-text-stroke-width`
short-title: -webkit-text-stroke-width
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-width
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

La propiedad **`-webkit-text-stroke-width`** [CSS](/es/docs/Web/CSS) especifica el ancho del trazo del texto.

## Sintaxis

```css
/* Valores de palabra clave */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* Valores de <length> */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* Valores globales */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: revert;
-webkit-text-stroke-width: revert-layer;
-webkit-text-stroke-width: unset;
```

### Valores

Esta propiedad se especifica con el siguiente valor:

- `<line-width>`
  - : El ancho del trazo.

## Definición formal

{{CSSInfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Anchos de trazo variables

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

#### HTML

```html
<p id="thin">Trazo fino</p>
<p id="medium">Trazo medio</p>
<p id="thick">Trazo grueso</p>
```

#### Resultado

{{EmbedLiveSample("Anchos_de_trazo_variables", "450px", "230px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Introducción a Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) en webkit.org (2006)
- [Artículo de CSS-Tricks que explica esta característica](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
