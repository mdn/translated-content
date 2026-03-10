---
title: border-bottom-width
slug: Web/CSS/Reference/Properties/border-bottom-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-bottom-width`** définit l'épaisseur de la bordure pour le côté bas d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-bottom-width")}}

```css interactive-example-choice
border-bottom-width: thick;
```

```css interactive-example-choice
border-bottom-width: 2em;
```

```css interactive-example-choice
border-bottom-width: 4px;
```

```css interactive-example-choice
border-bottom-width: 2ex;
```

```css interactive-example-choice
border-bottom-width: 0;
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
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* Une valeur de type <length> */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* Valeurs globales */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: revert;
border-bottom-width: revert-layer;
border-bottom-width: unset;
```

### Valeurs

- `<line-width>`
  - : Définit l'épaisseur de la bordure, soit comme une longueur ({{CSSxRef("&lt;length&gt;")}}) explicite et non négative, soit comme un mot-clé. Si c'est un mot-clé, il doit être l'une des valeurs suivantes&nbsp;:
    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

> [!NOTE]
> Comme la spécification ne définit pas l'épaisseur exacte associée à chaque mot-clé, le résultat précis lors de leur utilisation dépend de l'implémentation. Néanmoins, ils suivent toujours le schéma `thin ≤ medium ≤ thick`, et les valeurs sont constantes dans un même document.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer les épaisseurs de bordure inférieure

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
  border-bottom-width: thick;
}
div:nth-child(2) {
  border-bottom-width: 2em;
}
```

### Résultat

{{EmbedLiveSample("Comparer les épaisseurs de bordure inférieure", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS liées à la largeur de la bordure&nbsp;: {{CSSxRef("border-left-width")}}, {{CSSxRef("border-right-width")}}, {{CSSxRef("border-top-width")}} et {{CSSxRef("border-width")}}.
- Les autres propriétés CSS liées à la bordure basse&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-bottom")}}, {{CSSxRef("border-bottom-style")}} et {{CSSxRef("border-bottom-color")}}.
