---
title: mask-position
slug: Web/CSS/mask-position
translation_of: Web/CSS/mask-position
browser-compat: css.properties.mask-position
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-position`** indique la position initiale pour chaque image de masque utilisée. Cette position est relative à l'origine définie via la propriété [`mask-origin`](/fr/docs/Web/CSS/mask-origin).

```css
/* Valeurs avec un mot-clé */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/* Valeurs de <position> */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Valeurs multiples */
mask-position: top right;
mask-position: 1rem 1rem, center;

/* Valeurs globales */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: unset;
```

## Syntaxe

Cette propriété s'utilise avec une ou plusieurs valeurs de position, séparées par des virgules.

### Valeurs

- `<position>`
  - : Une position CSS (type [`<position>`](/fr/docs/Web/CSS/position_value)) qui représente une position par rapport aux côtés de la boîte de l'élément. Les décalages indiqués peuvent être relatifs ou absolus. On notera que la position obtenue peut être située en dehors de la boîte de l'élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir la position du masque

Dans le fragment de code qui suit, vous pouvez modifier la valeur de `mask-position` avec une des valeurs autorisées (voir ci-avant) pour observer l'effet de la propriété.

Si vous utilisez un navigateur basé sur Chromium, modifiez la valeur de la propriété `-webkit-mask-position`.

{{EmbedGHLiveSample("css-examples/masking/mask-position.html", '100%', 760)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage avec CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)
