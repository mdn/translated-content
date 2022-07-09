---
title: mask-composite
slug: Web/CSS/mask-composite
translation_of: Web/CSS/mask-composite
browser-compat: css.properties.mask-composite
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-composite`** permet d'effectuer une opération de composition entre le masque situé sur la couche de l'élément et le masque présent en dessous.

```css
/* Valeurs avec un mot-clé*/
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Valeurs globales */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: unset;
```

## Syntaxe

Un ou plusieurs mots-clés parmi ceux listés ci-après, chacun séparé par une virgule.

### Valeurs

La couche du masque de l'élément est appelée _source_ et les couches inférieures sont appelées _destination_.

- `add`
  - : La source est placée sur la destination.
- `subtract`
  - : La source est placée lorsque la destination est vide à cet endroit.
- `intersect`
  - : Les endroits de la source qui chevauchent la destination prennent le pas sur la destination.
- `exclude`
  - : Les régions de la source et de la destination qui ne se chevauchent pas sont combinées.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}}

## Exemples

### Composer des couches de masques de façon additive

{{EmbedGHLiveSample("css-examples/masking/mask-composite.html", '100%', 550)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage avec CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)
