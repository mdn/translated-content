---
title: Zone de grille
slug: Glossary/Grid_Areas
tags:
  - CSS
  - Glossaire
  - Grilles
translation_of: Glossary/Grid_Areas
original_slug: Glossaire/Zones_de_grille
---
Une **zone de grille** est une {{glossary("grid cell","cellule de grille")}}  ou plus, qui constitue une zone rectangulaire sur la grille. Les zones de grille sont créées lorsque vous placez un élément en utilisant le  [placement de la ligne de base](/fr/docs/Web/CSS/CSS_Grid_Layout/Placer_les_%C3%A9l%C3%A9ments_sur_les_lignes_d_une_grille_CSS) ou lors de la définition des zones par l'utilisation de [zones de grille nommées](/fr/docs/Web/CSS/CSS_Grid_Layout/D%C3%A9finir_des_zones_sur_une_grille).

![Image showing a highlighted grid area](1_grid_area.png)

Les zones de grille doivent être de nature rectangulaire ; il n'est pas possible de créer, par exemple, une zone de grille en forme de T ou de L.

Dans l'exemple ci-dessous, nous avons un conteneur de grille avec deux éléments de grille nommés à l'aide de la propriété {{cssxref("grid-area")}}  et mis sur la grille en utilisant {{cssxref("grid-template-areas")}}. Cela crée deux zones de grille, l'une couvrant quatre cellules de la grille, et deux autres d'une seule cellule.

## Exemple

```css hidden
* {box-sizing: border-box;}

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
  grid-template-columns: repeat(3,1fr);
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
   <div class="item1">Item</div>
   <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('Exemple', '300', '280') }}

## En apprendre plus

### Références de propriété

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### En lire plus

- Guide des grilles CSS : _[Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base)_
- Guide des grilles CSS : _[Définir des zones sur une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/D%C3%A9finir_des_zones_sur_une_grille)_
- [Définition des zones de grille dans la spécification dans les grilles CSS](https://drafts.csswg.org/css-grid/#grid-area-concept) (en)
