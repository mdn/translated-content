---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 82ef8b5c50a0045add71f1a06f5be1db781aede4
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`min-width`** est utilisée pour définir la largeur minimale d'un élément donné. Elle empêche [la valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2) de la propriété [`width`](/fr/docs/Web/CSS/width) de devenir inférieure à la valeur spécifiée par `min-width`.

{{InteractiveExample("CSS Demo: min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the minimum width.
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

La largeur de l'élément sera la valeur de la propriété `min-width` si celle-ci est supérieure à [`max-width`](/fr/docs/Web/CSS/max-width) ou à [`width`](/fr/docs/Web/CSS/width).

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
min-width: 3.5em;

/* Valeurs relatives */
/* Type <percentage> */
min-width: 10%;

/* Valeurs avec un mot-clé */
min-width: max-content;
min-width: min-content;
min-width: fit-content(20em);

/* Valeurs globales */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/length)
  - : La largeur minimale sous la forme d'une valeur absolue. Une largeur négative rendra la déclaration invalide.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : La largeur minimale, exprimée comme une fraction de la largeur du bloc englobant. Les valeurs négatives rendront la déclaration invalide.
- `auto`
  - : Le navigateur calculera et sélectionnera une valeur de `min-width` pour l'élément ciblé.
- `max-content`
  - : La valeur intrinsèque préférée pour `min-width`.
- `min-content`
  - : La valeur intrinsèque minimale pour `min-width`.
- `fit-content(<length-percentage>)`
  - : Utilise la formule `fit-content` avec le maximum d'espace disponible remplacé par l'argument indiqué, c'est-à-dire `min(max-content, max(min-content, argument))`. Voir [`<length-percentage>`](/fr/docs/Web/CSS/length-percentage) pour le type de valeur qui peut être utilisée en argument.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  Lorem ipsum tralala sit amet, consectetur adipisicing
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
</div>
```

### CSS

```css
div {
  width: 200px;
  border: solid 1px red;
}

p {
  min-width: 250px;
  border: solid 1px blue;
}
```

### Résultat

{{EmbedLiveSample("","",200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`width`](/fr/docs/Web/CSS/width)
- [`max-width`](/fr/docs/Web/CSS/max-width)
- [`min-height`](/fr/docs/Web/CSS/min-height)
- [`box-sizing`](/fr/docs/Web/CSS/box-sizing)
- [Le modèle de boîtes](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
