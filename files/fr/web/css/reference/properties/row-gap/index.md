---
title: row-gap (grid-row-gap)
slug: Web/CSS/Reference/Properties/row-gap
original_slug: Web/CSS/row-gap
---

{{CSSRef}}

La propriété **`row-gap`** définit la taille des espaces ({{glossary("gutters", "gouttières")}}) entre les lignes d'un élément.

{{InteractiveExample("CSS Demo: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
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
/* Valeurs de longueur */
/* Type <largeur>      */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* Valeurs proportionnelles */
/* Type <pourcentage>       */
row-gap: 10%;

/* Valeurs globales */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: unset;
```

### Valeurs

- [`<length-percentage>`](/fr/docs/Web/CSS/Reference/Values/length-percentage)
  - : La largeur de la « gouttière » placée entre les lignes de la grille. Les valeurs exprimées en pourcentages ([`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)) sont relatives aux dimensions de l'élément.

## Formal definition

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
  row-gap: 20px;
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

{{EmbedLiveSample('', "auto", "240px")}}

### Disposition en grille

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample('', 'auto', '240px')}}

## Spécifications

{{Specifications("css.properties.row-gap.grid_context")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux gouttières&nbsp;: [`column-gap`](/fr/docs/Web/CSS/Reference/Properties/column-gap), [`gap`](/fr/docs/Web/CSS/Reference/Properties/gap)
- Guide sur les grilles&nbsp;: _[Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)_
