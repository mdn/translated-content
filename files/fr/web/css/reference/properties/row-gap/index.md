---
title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`row-gap`** définit la taille des espaces ({{Glossary("gutters", "gouttières")}}) entre les lignes d'un élément.

Les premières versions de la spécification appelaient cette propriété `grid-row-gap`, et pour maintenir la compatibilité avec les sites Web existants, les navigateurs accepteront toujours `grid-row-gap` comme alias de `row-gap`.

{{InteractiveExample("Démonstration CSS&nbsp;: row-gap")}}

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
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
      <div>Quatre</div>
      <div>Cinq</div>
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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Valeurs de type <largeur> */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* Valeurs de type <pourcentage> */
row-gap: 10%;

/* Valeurs globales */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Valeurs

- `<length-percentage>`
  - : La largeur de la gouttière séparant les lignes. Les valeurs en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) sont relatives à la dimension de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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

{{EmbedLiveSample("Disposition flexible", "auto", 120)}}

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
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Disposition en grille", "auto", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-gap")}}
- La propriété {{CSSxRef("gap")}}
- [Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)
