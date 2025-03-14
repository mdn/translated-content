---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-numeric`** permet de contrôler l'utilisation de glyphes alternatifs pour les nombres, fractions et les marqueurs ordinaux.

{{EmbedInteractiveExample("pages/css/font-variant-numeric.html")}}

## Syntaxe

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* Valeurs globales */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: unset;
```

La valeur de cette propriété peut être définie selon deux formes&nbsp;:

- la première avec le mot-clé `normal`
- la seconde avec une ou plusieurs valeurs parmi celles définies ci-après, séparées par des espaces et dans n'importe quel ordre.

### Valeurs

- `normal`
  - : Ce mot-clé désactive l'utilisation des glyphes alternatifs.
- `ordinal`
  - : Ce mot-clé permet de forcer l'utilisation de glyphes spéciaux pour les marqueurs ordinaux utilisés par exemple pour 1<sup>er</sup>, 2<sup>e</sup>, 3<sup>e</sup>, etc. Il correspond aux valeurs OpenType values `ordn`.
- `slashed-zero`
  - : Ce mot-clé permet de forcer l'application d'une barre oblique après un 0. Cela peut être utile quand on cherche à distinguer un O majuscule d'un 0. Il correspond aux valeurs OpenType `zero`.
- `<numeric-figure-values>`

  - : Ces valeurs contrôlent les chiffres utilisés pour les nombres. Deux valeurs peuvent être utilisées&nbsp;:

    - `lining-nums` permet d'activer l'ensemble de chiffres pour lequel tous les nombres sont apposés sur la ligne de base. Elle correspond aux valeurs OpenType `lnum`.
    - `oldstyle-nums` permet d'activer l'ensemble de chiffres pour lequel certains nombres, comme 3, 4, 7, 9, ont un jambage. Elle correspond aux valleurs OpenType `onum`.

- `<numeric-spacing-values>`

  - : Ces valeurs permettent de contrôler la taille des chiffres utilisés pour les nombres. On peut utiliser deux valeurs&nbsp;:
    - `proportional-nums` permet d'activer l'ensemble où les chiffres ne sont pas tous de la même taille. Elle correspond aux valeurs OpenType `pnum`.
    - `tabular-nums` permet d'activer l'ensemble où les chiffres ont la même taille (ce qui leur permet d'être facilement alignés dans des tableaux). Elle correspond aux valeurs OpenType `tnum`.

- `<numeric-fraction-values>`

  - : Ces valeurs permettent de contrôler les glyphes utilisés pour afficher les fractions&nbsp;:
    - `diagonal-fractions` permet d'utiliser l'ensemble où le numérateur et le dénominateur sont plus petits et séparés par une barre oblique. Elle correspond aux valeurs OpenType `frac`.
    - `stacked-fractions` permet d'utiliser l'ensemble où les chiffres du numérateur et du dénominateur sont plus petits et séparés par une ligne horizontale. Elle correspond aux valeurs OpenType `afrc`.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-example.html", '100%', 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-variant-alternates`](/fr/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/fr/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/fr/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-ligatures`](/fr/docs/Web/CSS/font-variant-ligatures)
- [`font-variant`](/fr/docs/Web/CSS/font-variant)
