---
title: gap (grid-gap)
slug: Web/CSS/Reference/Properties/gap
original_slug: Web/CSS/gap
---

{{CSSRef}}

La propriété **`gap`** est [une propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) pour [`row-gap`](/fr/docs/Web/CSS/Reference/Properties/row-gap) et [`column-gap`](/fr/docs/Web/CSS/Reference/Properties/column-gap) qui permet de définir les espaces (les [gouttières](/fr/docs/Glossary/Gutters)) entre les lignes et entre les colonnes d'une grille.

{{InteractiveExample("CSS Demo: gap")}}

```css interactive-example-choice
gap: 0;
```

```css interactive-example-choice
gap: 10%;
```

```css interactive-example-choice
gap: 1em;
```

```css interactive-example-choice
gap: 10px 20px;
```

```css interactive-example-choice
gap: calc(20px + 10%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>          */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* Une valeur proportionnelle */
/* Type <percentage>          */
gap: 16%;
gap: 100%;

/* Deux valeurs de longueur */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* Une ou deux valeurs proportionnelles */
/* Type <percentage>                    */
gap: 16% 100%;
gap: 21px 82%;

/* Valeurs calc() */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Valeurs globales */
gap: inherit;
gap: initial;
gap: revert;
gap: unset;
```

Cette propriété est définie avec une valeur `<'row-gap'>`, éventuellement suivi d'une valeur `<'column-gap'>`. Si `<'column-gap'>` n'est pas défini, la valeur utilisée sera la même que `<'row-gap'>`.

`<'row-gap'>` et `<'column-gap'>` sont des valeurs de type `<length>` ou `<percentage>`.

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/Reference/Values/length)
  - : La largeur de l'espace entre les pistes de grille.
- [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)
  - : La largeur de l'espace entre les pistes de grille en fonction de la taille de l'élément englobant.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition flexible", "auto", "230px")}}

### Disposition en grille

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css hidden
#grid {
  grid-gap: 20px 5px;
}
```

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Disposition en grille", "auto", "230px")}}

### Disposition multi-colonnes

#### HTML

```html
<p class="content-box">
  Voici un texte en multi-colonne sur des colonnes avec une gouttière de 40px
  créée grâce à la propriété CSS <code>gap</code>. Est-ce que c'est pas trop
  génial ?
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition multi-colonnes", "auto", "120px")}}

## Spécifications

{{Specifications("css.properties.gap.grid_context")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux gouttières&nbsp;: [`row-gap`](/fr/docs/Web/CSS/Reference/Properties/row-gap), [`column-gap`](/fr/docs/Web/CSS/Reference/Properties/column-gap)
- Guide sur les grilles&nbsp;: _[Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)_
