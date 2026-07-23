---
title: Propriété CSS `border-top-width`
short-title: border-top-width
slug: Web/CSS/Reference/Properties/border-top-width
l10n:
  sourceCommit: 0c62b082755017d0773ecaaee7e74efd5e066d0b
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-top-width`** permet de définir l'épaisseur de la bordure supérieure d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-top-width")}}

```css interactive-example-choice
border-top-width: thick;
```

```css interactive-example-choice
border-top-width: 2em;
```

```css interactive-example-choice
border-top-width: 4px;
```

```css interactive-example-choice
border-top-width: 2ex;
```

```css interactive-example-choice
border-top-width: 0;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* Valeur de type <length> */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Valeurs globales */
border-top-width: inherit;
border-top-width: initial;
border-top-width: revert;
border-top-width: revert-layer;
border-top-width: unset;
```

### Valeurs

- `<line-width>`
  - : Définit l'épaisseur de la bordure, soit par une valeur explicite de type {{CSSxRef("&lt;length&gt;")}} positive, soit par un mot-clé. Si c'est un mot-clé, il doit s'agir de l'une des valeurs suivantes&nbsp;:
    - `thin` (fin)
      - Identique à `1px`.
    - `medium` (intermédiaire)
      - Identique à `3px`.
    - `thick` (épais)
      - Identique à `5px`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div>Élément 1</div>
<div>Élément 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées à la largeur de la bordure&nbsp;: {{CSSxRef("border-left-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-bottom-width")}} et {{CSSxRef("border-width")}}.
- Les autres propriétés CSS liées à la bordure du côté haut&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-top")}}, {{CSSxRef("border-top-style")}} et {{CSSxRef("border-top-color")}}.
