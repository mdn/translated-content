---
title: border-right-width
slug: Web/CSS/Reference/Properties/border-right-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-right-width`** permet de définir l'épaisseur de la bordure à droite d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: border-right-width")}}

```css interactive-example-choice
border-right-width: thick;
```

```css interactive-example-choice
border-right-width: 2em;
```

```css interactive-example-choice
border-right-width: 4px;
```

```css interactive-example-choice
border-right-width: 2ex;
```

```css interactive-example-choice
border-right-width: 0;
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
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* Valeurs de longueurs */
/* Type <length> */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* Valeurs globales */
border-right-width: inherit;
border-right-width: initial;
border-right-width: revert;
border-right-width: revert-layer;
border-right-width: unset;
```

### Valeurs

- `<line-width>`
  - : Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) positive ou un mot-clé qui indique l'épaisseur de la bordure pour le côté droit de la boîte. Si la valeur est un mot-clé, ce doit être l'une des valeurs suivantes&nbsp;:
    - `thin` (fin)
    - `medium` (intermédiaire)
    - `thick` (épais)

> [!NOTE]
> La spécification ne précise pas de façon exacte l'épaisseur correspondant à chacun de ces mots-clés (c'est donc à chaque implémentation de choisir). La spécification requiert toutefois que l'inégalité suivante soit respectée `thin ≤ medium ≤ thick` et que ces valeurs soient constantes pour un même document.

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
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

#### Résultat

{{EmbedLiveSample("Comparer les largeurs de bordure", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés liées à la largeur de la bordure&nbsp;: {{CSSxRef("border-bottom-width")}}, {{CSSxRef("border-left-width")}}, {{CSSxRef("border-top-width")}} et {{CSSxRef("border-width")}}.
- Les autres propriétés CSS liées à la bordure du côté droit&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-right-style")}} et {{CSSxRef("border-right-color")}}.
