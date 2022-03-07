---
title: mask-image
slug: Web/CSS/mask-image
translation_of: Web/CSS/mask-image
browser-compat: css.properties.mask-image
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-image`** définit l'image qui sera utilisée comme masque pour un élément.

Par défaut, cela signifie que le canal alpha de l'image du masque sera multiplié par le canal alpha de l'élément. Cette combinaison peut être contrôlée avec la propriété [`mask-mode`](/fr/docs/Web/CSS/mask-mode).

```css
/* Valeur avec un mot-clé */
mask-image: none;

/* Valeur de type <mask-source> */
mask-image: url(masks.svg#mask1);

/* Valeurs de type <image> */
mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
mask-image: image(url(mask.png), skyblue);

/* Gestion de plusieurs masques */
mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* Valeurs globales */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Le masque défini par ce mot-clé sera une image noire transparente.
- `<mask-source>`
  - : Une référence [`url()`](/fr/docs/Web/CSS/url()) vers un masque SVG ([`<mask>`](/fr/docs/Web/SVG/Element/mask)) ou une image CSS.
- [`<image>`](/fr/docs/Web/CSS/image)
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
