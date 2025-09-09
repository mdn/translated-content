---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: de7d710496266ccf4fce5ade75a67e6605f60ce5
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`max-width`** est utilisée pour définir la largeur maximale d'un élément. Elle empêche la [valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2) de la propriété [`width`](/fr/docs/Web/CSS/width) de devenir supérieure à la valeur spécifiée par `max-width`.

{{InteractiveExample("CSS Demo: max-width")}}

```css interactive-example-choice
max-width: 150px;
```

```css interactive-example-choice
max-width: 20em;
```

```css interactive-example-choice
max-width: 75%;
```

```css interactive-example-choice
max-width: 20ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the maximum width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

La valeur de `max-width` surcharge la valeur de [`width`](/fr/docs/Web/CSS/width), mais `max-width` est, elle, surchargée par [`min-width`](/fr/docs/Web/CSS/min-width).

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
max-width: 3.5em;

/* Valeurs relatives */
/* Type <percentage> */
max-width: 75%;

/* Valeurs avec un mot-clé */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content(20em);

/* Valeurs globales */
max-width: inherit;
max-width: initial;
max-width: revert;
max-width: revert-layer;
max-width: unset;
```

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/length)
  - : Définit la largeur maximale avec une valeur absolue.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : Définit la largeur maximale avec une valeur relative à la largeur du bloc englobant.
- <code>fit-content(<a href="/fr/docs/Web/CSS/length-percentage">&lt;length-percentage&gt;</a>)</code>
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument fourni, c'est-à-dire `min(max-content, max(min-content, argument))`.
- `max-content` {{experimental_inline}}
  - : La largeur maximale intrinsèque préférée.
- `min-content` {{experimental_inline}}
  - : La valeur minimale intrinsèque pour la largeur maximale.
- `none`
  - : Il n'y a pas de maximum pour la largeur.

## Accessibilité

Veiller à s'assurer que les éléments ciblés avec une règle utilisant `max-width` ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.4, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une largeur maximale en pixels

Dans cet exemple, l'élément `enfant` aura la largeur la plus petite entre 150 et celle de l'élément `parent`.

#### HTML

```html
<div id="parent">
  <div id="enfant">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#enfant {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

#### Résultat

{{EmbedLiveSample("", 350, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîtes](/fr/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) et [`box-sizing`](/fr/docs/Web/CSS/box-sizing)
- [`width`](/fr/docs/Web/CSS/width), [`min-width`](/fr/docs/Web/CSS/min-width)
- Les propriétés logiques correspondantes [`max-block-size`](/fr/docs/Web/CSS/max-block-size) et [`max-inline-size`](/fr/docs/Web/CSS/max-inline-size)
