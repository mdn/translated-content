---
title: mask-mode
slug: Web/CSS/mask-mode
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-mode`** détermine si le masque défini par [`mask-image`](/fr/docs/Web/CSS/mask-image) est considéré comme un masque de luminance ou un masque alpha (transparence).

```css
/* Valeurs avec un mot-clé */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Gestion de plusieurs masques */
mask-mode: alpha, match-source;

/* Valeurs globales */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: unset;
```

## Syntaxe

La propriété `mask-mode` est définie avec un ou plusieurs mots-clés parmi ceux de la liste suivante, séparés par des virgules.

### Valeurs

- `alpha`
  - : Ce mot-clé indique que ce sont les valeurs du canal alpha (le canal d'opacité) qui sont utilisées comme valeurs de masque.
- `luminance`
  - : Ce mot-clé indique que ce sont les valeurs de luminance qui sont utilisées comme valeurs de masque.
- `match-source`

  - : Si la propriété [`mask-image`](/fr/docs/Web/CSS/mask-image) est de type `<mask-source>`, les valeurs de luminance de l'image doivent être utilisées comme valeurs pour le masque.

    Si elle est de type [`<image>`](/fr/docs/Web/CSS/image), ce seront les valeurs de transparence (canal alpha) qui seront utilisées.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser le mode de masque alpha

{{EmbedGHLiveSample("css-examples/masking/mask-mode.html", '100%', 760)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage avec CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)
