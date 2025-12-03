---
title: Zone de grille
slug: Glossary/Grid_Areas
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

Une **zone de grille** se compose d'une ou plusieurs {{Glossary("grid cell", "cellules de grille")}} formant une zone rectangulaire sur la grille. Les zones de grille sont créées lors du placement d'un élément en utilisant [le placement basé sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) ou lors de la définition de zones avec [les zones de grille nommées](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas).

![Un schéma illustrant une zone de grille en vert turquoise sur une grille quadrillée.](1_grid_area.png)

Les zones de grille sont _obligatoirement_ rectangulaires. Il n'est pas possible de créer des zones de grille en forme de T ou de L par exemple.

## Exemple

Dans l'exemple qui suit, on a un conteneur de grille avec deux éléments de grille. Ces éléments sont nommés à l'aide de la propriété {{CSSxRef("grid-area")}} et placés sur la grille à l'aide de {{CSSxRef("grid-template-areas")}}. On obtient ainsi deux zones de grille, la première couvrant quatre cellules de grille et la seconde couvrant deux cellules.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
  <div class="item1">Élément</div>
  <div class="item2">Élément</div>
</div>
```

{{EmbedLiveSample('Exemple', '300', '280')}}

## Voir aussi

### Référence des propriétés

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-area")}}

### Pour aller plus loin

- Guide de mise en page en grille CSS&nbsp;:
  - [Les concepts de base des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - [Définir des zones sur une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [La définition des zones de grille dans le module de spécification sur les grilles CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-grid/#grid-area-concept)
