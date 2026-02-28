---
title: font-variant-numeric
slug: Web/CSS/Reference/Properties/font-variant-numeric
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-numeric`** permet de contrôler l'utilisation de glyphes alternatifs pour les nombres, fractions et les marqueurs ordinaux.

{{InteractiveExample("Démonstration CSS&nbsp;: font-variant-numeric")}}

```css interactive-example-choice
font-variant-numeric: normal;
```

```css interactive-example-choice
font-variant-numeric: ordinal;
```

```css interactive-example-choice
font-variant-numeric: slashed-zero;
```

```css interactive-example-choice
font-variant-numeric: tabular-nums;
```

```css interactive-example-choice
font-variant-numeric: oldstyle-nums;
```

```css interactive-example-choice
font-variant-numeric: lining-nums;
```

```css interactive-example-choice
font-variant-numeric: proportional-nums;
```

```css interactive-example-choice
font-variant-numeric: diagonal-fractions;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <table>
      <tbody>
        <tr>
          <td><span class="tabular">0</span></td>
        </tr>
        <tr>
          <td><span class="tabular">3.54</span></td>
        </tr>
        <tr>
          <td><span class="tabular">1.71</span></td>
        </tr>
        <tr>
          <td><span class="tabular">1er</span></td>
        </tr>
        <tr>
          <td><span class="tabular">3/4</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Source Sans Pro";
  src:
    local("SourceSansPro-Regular"),
    url("/shared-assets/fonts/SourceSansPro-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

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
font-variant-numeric: revert-layer;
font-variant-numeric: unset;
```

La valeur de cette propriété peut être définie selon deux formes&nbsp;:

- la première avec le mot-clé `normal`.
- la seconde avec une ou plusieurs valeurs parmi celles définies ci-après, séparées par des espaces et dans n'importe quel ordre.

### Valeurs

- `normal`
  - : Ce mot-clé désactive l'utilisation des glyphes alternatifs.

- `ordinal`
  - : Ce mot-clé permet de forcer l'utilisation de glyphes spéciaux pour les marqueurs ordinaux utilisés par exemple pour 1<sup>er</sup>, 2<sup>e</sup>, 3<sup>e</sup>, etc. Il correspond aux valeurs OpenType values `ordn`.

- `slashed-zero`
  - : Ce mot-clé permet de forcer l'application d'une barre oblique après un 0. Cela peut être utile quand on cherche à distinguer un O majuscule d'un 0. Il correspond aux valeurs OpenType `zero`.

- _`<numeric-figure-values>`_
  - : Ces valeurs contrôlent les chiffres utilisés pour les nombres. Deux valeurs peuvent être utilisées&nbsp;:
    - `lining-nums` permet d'activer l'ensemble de chiffres pour lequel tous les nombres sont apposés sur la ligne de base. Elle correspond aux valeurs OpenType `lnum`.
    - `oldstyle-nums` permet d'activer l'ensemble de chiffres pour lequel certains nombres, comme 3, 4, 7, 9, ont un jambage. Elle correspond aux valleurs OpenType `onum`.

- _`<numeric-spacing-values>`_
  - : Ces valeurs permettent de contrôler la taille des chiffres utilisés pour les nombres. On peut utiliser deux valeurs&nbsp;:
    - `proportional-nums` permet d'activer l'ensemble où les chiffres ne sont pas tous de la même taille. Elle correspond aux valeurs OpenType `pnum`.
    - `tabular-nums` permet d'activer l'ensemble où les chiffres ont la même taille (ce qui leur permet d'être facilement alignés dans des tableaux). Elle correspond aux valeurs OpenType `tnum`.

- _`<numeric-fraction-values>`_
  - : Ces valeurs permettent de contrôler les glyphes utilisés pour afficher les fractions&nbsp;:
    - `diagonal-fractions` permet d'utiliser l'ensemble où le numérateur et le dénominateur sont plus petits et séparés par une barre oblique. Elle correspond aux valeurs OpenType `frac`.
    - `stacked-fractions` permet d'utiliser l'ensemble où les chiffres du numérateur et du dénominateur sont plus petits et séparés par une ligne horizontale. Elle correspond aux valeurs OpenType `afrc`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les formes numériques ordinales

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour éditer l'exemple dans le MDN Playground&nbsp;:

```html live-sample___font-variant-numeric-example
<p class="ordinal">1er, 2e, 3e, 4e, 5e</p>
```

```css live-sample___font-variant-numeric-example
@font-face {
  font-family: "Source Sans Pro";
  src: url("https://mdn.github.io/shared-assets/fonts/SourceSansPro-Regular.otf")
    format("opentype");
  font-weight: normal;
  font-style: normal;
}

.ordinal {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-variant-numeric: ordinal;
}
```

{{EmbedLiveSample("font-variant-numeric-example")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-alternates")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-east-asian")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- La propriété {{CSSxRef("font-variant-ligatures")}}
- La propriété {{CSSxRef("font-variant-position")}}
