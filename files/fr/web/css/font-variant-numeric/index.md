---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-variant-numeric
---
{{CSSRef}}

La propriété **`font-variant-numeric`** permet de contrôler l'utilisation de glyphes alternatifs pour les nombres, fractions et les marqueurs ordinaux.

{{EmbedInteractiveExample("pages/css/font-variant-numeric.html")}}

## Syntaxe

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums;         /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums;       /* <numeric-figure-values> */
font-variant-numeric: proportional-nums;   /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums;        /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions;  /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions;   /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* Valeurs globales */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: unset;
```

La valeur de cette propriété peut être définie selon deux formes :

- la première avec le mot-clé `normal`
- la seconde avec une ou plusieurs valeurs parmi celles définies ci-après, séparées par des espaces et dans n'importe quel ordre.

### Valeurs

- `normal`
  - : Ce mot-clé désactive l'utilisation des glyphes alternatifs.
- `ordinal`

  - : Ce mot-clé permet de forcer l'utilisation de glyphes spéciaux pour les marqueurs ordinaux utilisés par exemple pour 1

    <sup>er</sup>

    , 2

    <sup>e</sup>

    , 3

    <sup>e</sup>

    , etc. Il correspond aux valeurs OpenType values `ordn`.

- `slashed-zero`
  - : Ce mot-clé permet de forcer l'application d'une barre oblique après un 0. Cela peut être utile quand on cherche à distinguer un O majuscule d'un 0. Il correspond aux valeurs  OpenType `zero`.
- _\<numeric-figure-values_>

  - : Ces valeurs contrôlent les chiffres utilisés pour les nombres. Deux valeurs peuvent être utilisées :

    - `lining-nums` permet d'activer l'ensemble de chiffres pour lequel tous les nombres sont apposés sur la ligne de base. Elle correspond aux valeurs OpenType `lnum`.
    - `oldstyle-nums` permet d'activer l'ensemble de chiffres pour lequel certains nombres, comme 3, 4, 7, 9, ont un jambage. Elle correspond aux valleurs OpenType `onum`.

- _\<numeric-spacing-values_>

  - : Ces valeurs permettent de contrôler la taille des chiffres utilisés pour les nombres. On peut utiliser deux valelurs :

    - `proportional-nums` permet d'activer l'ensemble où les chiffres ne sont pas tous de la même taille. Elle correspond aux valeurs OpenType `pnum`.
    - `tabular-nums` permet d'activer l'ensemble où les chiffres ont la même taille (ce qui leur permet d'être facilement alignés dans des tableaux). Elle correspond aux valeurs OpenType `tnum`.

- _\<numeric-fraction-values_>

  - : Ces valeurs permettent de contrôler les glyphes utilisés pour afficher les fractions :

    - `diagonal-fractions` permet d'utiliser l'ensemble où le numérateur et le dénominateur sont plus petits et séparés par une barre oblique. Elle correspond aux valeurs OpenType `frac`.
    - `stacked-fractions` permet d'utiliser l'ensemble où les chiffres du numérateur et du dénominateur sont plus petits et séparés par une ligne horizontale. Elle correspond aux valeurs OpenType `afrc`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
/*
Cet exemple utilise la police Source Sans Pro OpenType développée par Adobe
et utilisée ici sous les termes de la licence SIL Open Font en Version 1.1 :
http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web
*/

@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  src: url("https://mdn.mozillademos.org/files/15757/SourceSansPro-Regular.otf") format("opentype");
}

.ordinal {
  font-variant-numeric: ordinal;
  font-family: "Source Sans Pro";
}
```

### HTML

```html
<p class="ordinal">Premier, deuxième, troisième, quatrième, cinquième</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Fonts', '#propdef-font-variant-numeric', 'font-variant-numeric')}} | {{Spec2('CSS3 Fonts')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-variant-numeric")}}
