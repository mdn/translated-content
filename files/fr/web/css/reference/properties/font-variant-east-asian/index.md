---
title: font-variant-east-asian
slug: Web/CSS/Reference/Properties/font-variant-east-asian
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-east-asian`** contrôle l'utilisation des glyphes alternatifs pour les scripts japonais, chinois et d'Asie orientale.

{{InteractiveExample("Démonstration CSS&nbsp;: font-variant-east-asian")}}

```css interactive-example-choice
font-variant-east-asian: normal;
```

```css interactive-example-choice
font-variant-east-asian: ruby;
```

```css interactive-example-choice
font-variant-east-asian: jis78;
```

```css interactive-example-choice
font-variant-east-asian: proportional-width;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      JIS78とJIS83以降では、檜と桧、籠と篭など、一部の文字の入れ替えが行われている。また、「唖然」や「躯体」などの書体が変更されている。
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-family:
    "YuGothic Medium", "YuGothic", "Yu Gothic Medium", "Yu Gothic", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

## Syntaxe

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
font-variant-east-asian: revert;
font-variant-east-asian: revert-layer;
font-variant-east-asian: unset;
```

### Valeurs

- `normal`
  - : Ce mot-clé désactive les glyphes alternatifs.
- `ruby`
  - : Ce mot-clé force l'utilisation de glyphes spécifiques pour les caractères ruby. Généralement, ceux-ci sont plus petits et légèrement plus gras pour améliorer le contraste. Ce mot-clé correspond aux valeurs OpenType `ruby`.
- `<east-asian-variant-values>`
  - : Ces valeurs définissent un ensemble de variantes de glypes logographiques à utiliser pour l'affichage. Les valeurs possibles sont&nbsp;:

    | Mot-clé       | Standard dans lequel sont définis les glyphs                                                   | Équivalent OpenType |
    | ------------- | ---------------------------------------------------------------------------------------------- | ------------------- |
    | `jis78`       | [JIS X 0208:1978 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/JIS_X_0208#First_standard)  | `jp78`              |
    | `jis83`       | [JIS X 0208:1983 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/JIS_X_0208#Second_standard) | `jp83`              |
    | `jis90`       | [JIS X 0208:1990 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/JIS_X_0208#Third_standard)  | `jp90`              |
    | `jis04`       | [JIS X 0213:2004 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/JIS_X_0213)                 | `jp04`              |
    | `simplified`  | Aucun, ce sont les glyphes chinois simplifiés qui sont utilisés.                               | `smpl`              |
    | `traditional` | Aucun, ce sont les glyphes chinois traditionnels qui sont utilisés.                            | `trad`              |

- `<east-asian-width-values>`
  - : Ces valeurs permettent de contrôler le dimensionnement des symboles pour les caractères des langues d'Asie orientale. Deux valeurs sont possibles&nbsp;:
    - `proportional-width` qui active l'ensemble de caractères d'Asie orientale qui n'ont pas tous la même largeur. Elle correspond aux valeurs OpenType `pwid`.
    - `full-width` qui active l'ensemble de caractères d'Asie orientale où les caractères ont tous la même taille et forme carrée. Elle correspond aux valeurs OpenType `fwid`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les variantes de glyphes d'Asie orientale

Cet exemple nécessite que la police «&nbsp;Yu Gothic&nbsp;» soit installée sur votre système d'exploitation, d'autres polices peuvent ne pas prendre en charge les fonctionnalités OpenType.

#### HTML

```html
<table>
  <thead></thead>
  <tbody>
    <tr>
      <th>normal/jis78&nbsp;:</th>
      <td>麹町</td>
      <td class="jis78">麹町</td>
    </tr>
    <tr>
      <th>normal/ruby&nbsp;:</th>
      <td>しんかんせん</td>
      <td class="ruby">しんかんせん</td>
    </tr>
    <tr>
      <th>normal/traditional&nbsp;:</th>
      <td>大学</td>
      <td class="traditional">大学</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
tbody {
  border: 0;
}

td {
  font-family: "Yu Gothic", fantasy;
  font-size: 20px;
}
th {
  color: grey;
  padding-right: 10px;
}

.ruby {
  font-variant-east-asian: ruby;
}

.jis78 {
  font-variant-east-asian: jis78;
}

.traditional {
  font-variant-east-asian: traditional;
}
```

#### Résultat

{{EmbedLiveSample('Définir les variantes de glyphes d'Asie orientale')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-alternates")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- La propriété {{CSSxRef("font-variant-ligatures")}}
- La propriété {{CSSxRef("font-variant-numeric")}}
- La propriété {{CSSxRef("font-variant-position")}}
