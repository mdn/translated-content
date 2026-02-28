---
title: border-left-width
slug: Web/CSS/Reference/Properties/border-left-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-left-width`** permet de définir l'épaisseur de la bordure gauche d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-left-width")}}

```css interactive-example-choice
border-left-width: thick;
```

```css interactive-example-choice
border-left-width: 2em;
```

```css interactive-example-choice
border-left-width: 4px;
```

```css interactive-example-choice
border-left-width: 2ex;
```

```css interactive-example-choice
border-left-width: 0;
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
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* Valeur de type <length> */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* Valeurs globales */
border-left-width: inherit;
border-left-width: initial;
border-left-width: revert;
border-left-width: revert-layer;
border-left-width: unset;
```

### Valeurs

- `<line-width>`
  - : Définit l'épaisseur de la bordure, soit par une valeur explicite de type {{CSSxRef("&lt;length&gt;")}} positive, soit par un mot-clé. Si c'est un mot-clé, il doit s'agir de l'une des valeurs suivantes&nbsp;:
    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

> [!NOTE]
> La spécification ne précise pas exactement l'épaisseur associée à chaque mot-clé, le résultat précis dépend donc de l'implémentation. Cependant, l'ordre `thin ≤ medium ≤ thick` est toujours respecté et les valeurs restent constantes pour un même document.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer les largeurs de bordure

#### HTML

```html
<div>Élément 1</div>
<div>Élément 2</div>
```

#### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}
```

#### Résultat

{{EmbedLiveSample("Comparer les largeurs de bordure", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées à la largeur de la bordure&nbsp;: {{CSSxRef("border-top-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-bottom-width")}} et {{CSSxRef("border-width")}}.
- Les autres propriétés CSS liées à la bordure du côté gauche&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-left")}}, {{CSSxRef("border-left-style")}} et {{CSSxRef("border-left-color")}}.
