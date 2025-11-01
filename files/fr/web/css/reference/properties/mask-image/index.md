---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
original_slug: Web/CSS/mask-image
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-image`** définit l'image utilisée comme calque de masque pour un élément, masquant les sections de l'élément sur lesquelles l'image de masquage est définie en fonction du canal alpha de l'image de masque et, selon la valeur de la propriété {{cssxref("mask-mode")}}, de la luminosité de l'image de masque.

```css
/* Valeur avec un mot-clé */
mask-image: none;

/* Valeur de type <mask-source> */
mask-image: url(masks.svg#mask1);

/* Valeurs de type <image> */
mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
mask-image: image(url(mask.png), skyblue);

/* Gestion de plusieurs masques */
mask-image:
  image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1), transparent);

/* Valeurs globales */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Le masque défini par ce mot-clé sera une image noire transparente.
- `<mask-source>`
  - : Une référence {{cssxref("url_value", "&lt;url&gt;")}} vers un masque SVG {{SVGElement("mask")}} ou une image CSS.
- {{cssxref("&lt;image&gt;")}}
  - : Une image utilisée pour le masque.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir une image de masque avec une URL

{{EmbedGHLiveSample("css-examples/masking/mask-image.html", '100%', 560)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage avec CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)
- [Appliquer des effets à des images avec la propriété CSS `mask-image` (en anglais)](https://web.dev/css-masking/)
