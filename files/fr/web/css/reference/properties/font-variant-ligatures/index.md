---
title: font-variant-ligatures
slug: Web/CSS/Reference/Properties/font-variant-ligatures
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-ligatures`** contrôle quelles {{Glossary("ligature", "ligatures")}} et formes contextuelles sont utilisées dans les éléments textuels auxquels elle s'applique. Ceci vise à harmoniser l'affichage du texte.

{{InteractiveExample("Démonstration CSS&nbsp;: font-variant-ligatures")}}

```css interactive-example-choice
font-variant-ligatures: normal;
```

```css interactive-example-choice
font-variant-ligatures: no-common-ligatures;
```

```css interactive-example-choice
font-variant-ligatures: common-ligatures;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>La difficulté des gauffres</p>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
font-variant-ligatures: normal;
font-variant-ligatures: none;
font-variant-ligatures: common-ligatures; /* <common-lig-values> */
font-variant-ligatures: no-common-ligatures; /* <common-lig-values> */
font-variant-ligatures: discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: no-discretionary-ligatures; /* <discretionary-lig-values> */
font-variant-ligatures: historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: no-historical-ligatures; /* <historical-lig-values> */
font-variant-ligatures: contextual; /* <contextual-alt-values> */
font-variant-ligatures: no-contextual; /* <contextual-alt-values> */

/* Valeurs avec deux mots-clés */
font-variant-ligatures: no-contextual common-ligatures;

/* Valeurs avec quatre mots-clés */
font-variant-ligatures: common-ligatures no-discretionary-ligatures
  historical-ligatures contextual;

/* Valeurs globales */
font-variant-ligatures: inherit;
font-variant-ligatures: initial;
font-variant-ligatures: revert;
font-variant-ligatures: revert-layer;
font-variant-ligatures: unset;
```

La propriété `font-variant-ligatures` se définit avec le mot-clé `normal`, `none` ou un ou plusieurs autres types de valeurs listés ci-dessous. Les espaces séparent les valeurs multiples.

### Valeurs

- `normal`
  - : Cette valeur active les ligatures et les formes contextuelles courantes pour un rendu correct. Les ligatures et formes activées dépendent de la police utilisée, de la langue et de certains scripts. C'est la valeur par défaut.

- `none`
  - : Cette valeur désactive toutes les ligatures et formes contextuelles, y compris celles couramment utilisées.

- _`<common-lig-values>`_
  - : Ces valeurs contrôlent les ligatures les plus courantes, comme `fi`, `ffi`, `th` et autres. Elles correspondent aux valeurs OpenType `liga` et `clig`. Deux valeurs sont possibles&nbsp;:
    - `common-ligatures`&nbsp;: active ces ligatures. Notez que la valeur `normal` active ces ligatures.
    - `no-common-ligatures`&nbsp;: désactive ces ligatures.

- _`<discretionary-lig-values>`_
  - : Ces valeurs contrôlent les ligatures spécifiques, spécifiques à la police et définies par le fondeur. Elles correspondent à la valeur OpenType `dlig`. Deux valeurs sont possibles&nbsp;:
    - `discretionary-ligatures`&nbsp;: active ces ligatures.
    - `no-discretionary-ligatures`&nbsp;: désactive ces ligatures. Notez que la valeur `normal` désactive ces ligatures.

- _`<historical-lig-values>`_
  - : Ces valeurs contrôlent les ligatures historiques, utilisées dans les livres anciens, comme l'allemand tz qui devient ꜩ. Elles correspondent à la valeur OpenType `hlig`. Deux valeurs sont possibles&nbsp;:
    - `historical-ligatures`&nbsp;: active ces ligatures.
    - `no-historical-ligatures`&nbsp;: désactive ces ligatures. Notez que la valeur `normal` désactive ces ligatures.

- _`<contextual-alt-values>`_
  - : Ces valeurs contrôlent la manière dont les lettres s'adaptent à leur contexte, c'est-à-dire aux lettres qui les entourent. Elles correspondent à la valeur OpenType `calt`. Deux valeurs sont possibles&nbsp;:
    - `contextual`&nbsp;: précise que des alternatives contextuelles peuvent être utilisées. Notez que la valeur `normal` active ces ligatures.
    - `no-contextual`&nbsp;: interdit leur utilisation.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Paramétrer les ligatures et formes contextuelles

#### HTML

```html
<link href="//fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
<p class="normal">
  normal<br />
  if fi ff tf ft jf fj
</p>
<p class="none">
  none<br />
  if fi ff tf ft jf fj
</p>
<p class="common-ligatures">
  common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-common-ligatures">
  no-common-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="discretionary-ligatures">
  discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-discretionary-ligatures">
  no-discretionary-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="historical-ligatures">
  historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="no-historical-ligatures">
  no-historical-ligatures<br />
  if fi ff tf ft jf fj
</p>
<p class="contextual">
  contextual<br />
  if fi ff tf ft jf fj
</p>
<p class="no-contextual">
  no-contextual<br />
  if fi ff tf ft jf fj
</p>
```

#### CSS

```css
p {
  font-family: "Lora", serif;
}
.normal {
  font-variant-ligatures: normal;
}

.none {
  font-variant-ligatures: none;
}

.common-ligatures {
  font-variant-ligatures: common-ligatures;
}

.no-common-ligatures {
  font-variant-ligatures: no-common-ligatures;
}

.discretionary-ligatures {
  font-variant-ligatures: discretionary-ligatures;
}

.no-discretionary-ligatures {
  font-variant-ligatures: no-discretionary-ligatures;
}

.historical-ligatures {
  font-variant-ligatures: historical-ligatures;
}

.no-historical-ligatures {
  font-variant-ligatures: no-historical-ligatures;
}

.contextual {
  font-variant-ligatures: contextual;
}

.no-contextual {
  font-variant-ligatures: no-contextual;
}
```

#### Résultat

{{EmbedLiveSample("Paramétrer les ligatures et formes contextuelles", "", 560)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- La propriété {{CSSxRef("font-variant-east-asian")}}
- La propriété {{CSSxRef("font-variant-numeric")}}
- La propriété {{CSSxRef("font-variant-position")}}
- Le module [des polices CSS](/fr/docs/Web/CSS/Guides/Fonts)
