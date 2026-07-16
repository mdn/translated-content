---
title: Mise en page en maçonnerie (masonry)
slug: Web/CSS/Guides/Grid_layout/Masonry_layout
original_slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

{{SeeCompatTable}}

Le niveau&nbsp;3 de la spécification [CSS Grid Layout](/fr/docs/Web/CSS/Guides/Grid_layout) introduit la valeur `masonry` pour les propriétés {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}}. Ce guide explique ce qu'est la mise en page en maçonnerie et comment l'utiliser.

La mise en page en maçonnerie est une méthode d'agencement où un axe utilise une grille stricte classique, généralement les colonnes, et l'autre axe adopte une disposition en maçonnerie. Sur cet axe, au lieu de laisser des espaces après les éléments plus courts, les éléments suivants remontent pour combler les vides.

## Création d'une mise en page en maçonnerie

Pour créer la mise en page en maçonnerie la plus courante, les colonnes servent d'axe de grille et les lignes d'axe de maçonnerie, définis avec `grid-template-columns` et `grid-template-rows`.
Les éléments enfants du conteneur sont alors placés ligne par ligne, comme avec le placement automatique classique de la grille.

Lorsque les éléments passent sur de nouvelles lignes, ils sont positionnés selon l'algorithme de maçonnerie. Chaque élément est placé dans la colonne où il y a le plus d'espace, ce qui permet d'obtenir une disposition compacte sans alignement strict des lignes.

```css hidden live-sample___block-axis live-sample___inline-axis live-sample___spanners live-sample___positioned
* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___block-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

```html live-sample___block-axis live-sample___inline-axis
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```js live-sample___block-axis live-sample___spanners live-sample___positioned
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "3.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.blockSize = itemSizes[i];
}
```

{{EmbedLiveSample("block-axis", "", "250px")}}

Il est également possible de créer une mise en page en maçonnerie où les éléments sont répartis le long des colonnes.

```js live-sample___inline-axis
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "2.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.inlineSize = itemSizes[i];
}
```

```css live-sample___inline-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## Contrôle de l'axe de la grille

Sur l'axe de la grille, le comportement est identique à celui d'une grille classique. Vous pouvez faire en sorte que des éléments s'étendent sur plusieurs pistes tout en restant en placement automatique, en utilisant le mot-clé `span`. Les éléments peuvent aussi être positionnés à l'aide du positionnement basé sur les lignes.

### Mise en page en maçonnerie avec des éléments étendus

Dans cet exemple, deux éléments s'étendent sur deux colonnes, et les autres éléments s'organisent autour d'eux selon la logique de maçonnerie.

```html live-sample___spanners
<div class="grid">
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___spanners
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

Cet exemple inclut un élément positionné explicitement sur certaines colonnes. Les éléments avec un placement défini sont placés avant l'application de la disposition en maçonnerie.

```html live-sample___positioned
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item positioned">positionné.</div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___positioned
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## Solutions de repli pour la mise en page en maçonnerie

Dans les navigateurs [qui ne prennent pas en charge la disposition en maçonnerie](#compatibilité_des_navigateurs), le placement automatique classique de la grille sera appliqué à la place.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-auto-flow")}} pour contrôler le placement automatique des éléments dans la grille
- [Mise en page en maçonnerie native avec CSS grid <sup>(angl.)</sup>](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) sur Smashing Magazine (2020)
