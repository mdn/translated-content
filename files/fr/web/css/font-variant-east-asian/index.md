---
title: font-variant-east-asian
slug: Web/CSS/font-variant-east-asian
---

{{CSSRef}}

La propriété **`font-variant-east-asian`** contrôle l'utilisation des glyphes alternatifs pour les scripts japonais, chinois et d'Asie orientale.

```css
font-variant-east-asian: normal;
font-variant-east-asian: ruby;
font-variant-east-asian: jis78; /* <east-asian-variant-values> */
font-variant-east-asian: jis83; /* <east-asian-variant-values> */
font-variant-east-asian: jis90; /* <east-asian-variant-values> */
font-variant-east-asian: jis04; /* <east-asian-variant-values> */
font-variant-east-asian: simplified; /* <east-asian-variant-values> */
font-variant-east-asian: traditional; /* <east-asian-variant-values> */
font-variant-east-asian: full-width; /* <east-asian-width-values> */
font-variant-east-asian: proportional-width; /* <east-asian-width-values> */
font-variant-east-asian: ruby full-width jis83;

/* Valeurs globales */
font-variant-east-asian: inherit;
font-variant-east-asian: initial;
font-variant-east-asian: unset;
```

## Syntaxe

### Valeurs

- `normal`
  - : Ce mot-clé désactive les glyphes alternatifs.
- `ruby`
  - : Ce mot-clé force l'utilisation de glyphes spécifiques pour les caractères ruby. Généralement, ceux-ci sont plus petits et légèrement plus gras pour améliorer le contraste. Ce mot-clé correspond aux valeurs OpenType `ruby`.
- `<east-asian-variant-values>`

  - : Ces valeurs définissent un ensemble de variantes de glypes logographiques à utiliser pour l'affichage. Les valeurs possibles sont :

    | Mot-clé       | Standard dans lequel sont définis les glyphs                                | Équivalent OpenType |
    | ------------- | --------------------------------------------------------------------------- | ------------------- |
    | `jis78`       | [JIS X 0208:1978](https://en.wikipedia.org/wiki/JIS_X_0208#First_standard)  | `jp78`              |
    | `jis83`       | [JIS X 0208:1983](https://en.wikipedia.org/wiki/JIS_X_0208#Second_standard) | `jp83`              |
    | `jis90`       | [JIS X 0208:1990](https://en.wikipedia.org/wiki/JIS_X_0208#Third_standard)  | `jp90`              |
    | `jis04`       | [JIS X 0213:2004](https://en.wikipedia.org/wiki/JIS_X_0213)                 | `jp04`              |
    | `simplified`  | Aucun, ce sont les glyphes chinois simplifiés qui sont utilisés.            | `smpl`              |
    | `traditional` | Aucun, ce sont les glyphes chinois traditionnels qui sont utilisés.         | `trad`              |

- `<east-asian-width-values>`

  - : Ces valeurs permettent de contrôler le dimensionnement des symboles pour les caractères des langues d'Asie orientale. Deux valeurs sont possibles :

    - `proportional-width` qui active l'ensemble de caractères d'Asie orientale qui n'ont pas tous la même largeur. Elle correspond aux valeurs OpenType `pwid`.
    - `full-width` qui active l'ensemble de caractères d'Asie orientale où les caractères ont tous la même taille et forme carrée. Elle correspond aux valeurs OpenType `fwid`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
exemple {
  font-variant-east-asian: ruby;
}
```

### HTML

```html
<p class="exemple">!</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

{{LiveSampleLink("Exemples","Lien vers l'exemple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
