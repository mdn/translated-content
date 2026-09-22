---
title: Disposition des lignes de grille
slug: Web/CSS/Guides/Grid_layout/Grid_lanes
l10n:
  sourceCommit: b02c4fe0f8c485fa3fd0af10005310aaecef64ca
---

{{SeeCompatTable}}

Le niveau 3 de la spécification [disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) définit la **disposition des lignes de grille**, accessible à l'aide des valeurs {{CSSxRef("display")}} `grid-lanes` et `inline-grid-lanes`. Ce guide explique le fonctionnement de la disposition des lignes de grille et son utilisation.

La disposition des lignes de grille est une méthode de disposition dans laquelle un axe utilise une disposition en grille stricte classique, le plus souvent les colonnes, tandis que l'autre utilise un algorithme d'empilement. Sur l'axe d'empilement, plutôt que de conserver une grille stricte qui laisse des espaces après les éléments les plus courts, les éléments de la ligne suivante remontent pour remplir les espaces.

## Créer une disposition des lignes de grille

Pour créer la disposition des lignes de grille la plus courante, dans laquelle les colonnes sont organisées en grille et les lignes sont regroupées à l'aide de l'algorithme de disposition des lignes de grille, utilisez **`display: grid-lanes`** avec {{CSSxRef("grid-template-columns")}}.

Les éléments enfants de ce conteneur sont organisés élément par élément sur l'axe d'empilement conformément à l'algorithme de disposition des lignes de grille&nbsp;: chaque ligne d'éléments se place dans la colonne qui dispose du plus grand espace, ce qui produit une disposition compacte sans pistes de ligne strictes.

```css hidden live-sample___block-axis live-sample___inline-axis live-sample___spanners live-sample___positioned
* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.grille {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.element {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___block-axis
.grille {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

```html live-sample___block-axis live-sample___inline-axis
<div class="grille">
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
</div>
```

```js live-sample___block-axis live-sample___spanners live-sample___positioned
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "3.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const elements = document.querySelectorAll(".element");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.blockSize = itemSizes[i];
}
```

{{EmbedLiveSample("block-axis", "", 250)}}

Il est également possible de créer une disposition des lignes de grille avec des éléments qui se placent dans les lignes.

```js live-sample___inline-axis
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "2.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const elements = document.querySelectorAll(".element");
for (let i = 0; i < elements.length; i++) {
  elements[i].style.inlineSize = itemSizes[i];
}
```

```css live-sample___inline-axis
.grille {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", 450)}}

## Contrôler l'axe de la grille

Sur l'axe de la grille, le comportement est identique à celui d'une grille classique. Vous pouvez faire en sorte que des éléments s'étendent sur plusieurs pistes tout en restant en placement automatique, en utilisant le mot-clé `span`. Les éléments peuvent aussi être positionnés à l'aide du positionnement basé sur les lignes.

### Créer une disposition des lignes de grille avec des éléments étendus

Dans cet exemple, deux des éléments s'étendent sur deux pistes et les autres éléments sont regroupés autour d'eux par l'algorithme de disposition des lignes de grille.

```html live-sample___spanners
<div class="grille">
  <div class="element"></div>
  <div class="element etendue-2"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element etendue-2"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
</div>
```

```css live-sample___spanners
.grille {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.etendue-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", 270)}}

Cet exemple comprend un élément dont le positionnement est défini pour les colonnes. Les éléments dont le placement est défini sont placés avant l'exécution de l'algorithme de disposition des lignes de grille.

```html live-sample___positioned
<div class="grille">
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element positionne">positionné.</div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
  <div class="element"></div>
</div>
```

```css live-sample___positioned
.grille {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.positionne {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", 290)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-auto-flow")}} pour contrôler le placement automatique des éléments dans la grille
