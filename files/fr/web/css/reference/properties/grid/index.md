---
title: grid
slug: Web/CSS/Reference/Properties/grid
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`grid`** permet de définir toutes les propriétés de grille explicites et implicites en une seule déclaration.

En utilisant `grid`, vous définissez un axe avec {{CSSxRef("grid-template-rows")}} ou {{CSSxRef("grid-template-columns")}}, puis vous définissez comment le contenu doit se répéter automatiquement sur l'autre axe avec les propriétés de grille implicites&nbsp;: {{CSSxRef("grid-auto-rows")}}, {{CSSxRef("grid-auto-columns")}}, et {{CSSxRef("grid-auto-flow")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: grid")}}

```css interactive-example-choice
grid: auto-flow / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid: auto-flow dense / 40px 40px 1fr;
```

```css interactive-example-choice
grid: repeat(3, 80px) / auto-flow;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element :nth-child(2) {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
  grid-column: auto / span 3;
  grid-row: auto / span 2;
}

#example-element :nth-child(3) {
  background-color: rgb(94 255 0 / 0.2);
  border: 3px solid green;
  grid-column: auto / span 2;
}
```

> [!NOTE]
> Les sous-propriétés que vous ne définissez pas prennent leur valeur initiale, comme pour toute propriété raccourcie. De plus, les propriétés de gouttière ne sont PAS réinitialisées par cette propriété raccourcie.

## Syntaxe

```css
/* Valeurs <'grid-template'> */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [line-name1] "a" 100px [line-name2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Valeurs globales */
grid: inherit;
grid: initial;
grid: revert;
grid: revert-layer;
grid: unset;
```

### Valeurs

- `<'grid-template'>`
  - : Définit {{CSSxRef("grid-template")}}, ce qui inclut {{CSSxRef("grid-template-columns")}}, {{CSSxRef("grid-template-rows")}} et {{CSSxRef("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Configure un flux automatique en définissant explicitement les pistes de lignes avec la propriété {{CSSxRef("grid-template-rows")}} (et la propriété {{CSSxRef("grid-template-columns")}} à `none`) et en définissant comment répéter automatiquement les pistes de colonnes avec {{CSSxRef("grid-auto-columns")}} (et {{CSSxRef("grid-auto-rows")}} à `auto`). {{CSSxRef("grid-auto-flow")}} est également définie sur `column`, avec `dense` si elle est incluse.

    Toutes les autres sous-propriétés de `grid` sont réinitialisées à leur valeur initiale.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Configure un flux automatique en définissant explicitement les pistes de colonnes avec la propriété {{CSSxRef("grid-template-columns")}} (et la propriété {{CSSxRef("grid-template-rows")}} à `none`) et en définissant comment répéter automatiquement les pistes de lignes avec {{CSSxRef("grid-auto-rows")}} (et {{CSSxRef("grid-auto-columns")}} à `auto`). {{CSSxRef("grid-auto-flow")}} est également définie sur `row`, avec `dense` si elle est incluse.

    Toutes les autres sous-propriétés de `grid` sont réinitialisées à leur valeur initiale.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une mise en page en grille

#### HTML

```html
<div id="container">
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

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

#### Résultat

{{EmbedLiveSample("Créer une mise en page en grille", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("grid-template")}}
- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-columns")}}
- La propriété {{CSSxRef("grid-template-areas")}}
- La propriété {{CSSxRef("grid-auto-columns")}}
- La propriété {{CSSxRef("grid-auto-rows")}}
- La propriété {{CSSxRef("grid-auto-flow")}}
- [Placer les éléments d'une grille sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Les zones de grilles et les propriétés raccourcies](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#les_propriétés_raccourcies_pour_les_grilles_css)
