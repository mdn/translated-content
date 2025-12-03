---
title: Piste de grille
slug: Glossary/Grid_Tracks
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **piste de grille** est l'espace entre deux {{Glossary("grid lines", "lignes de grille")}}. Elle est définie dans la _grille explicite_ avec les propriétés {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}} ou les propriétés raccourcies {{CSSxRef("grid")}} ou {{CSSxRef("grid-template")}}. Les pistes sont aussi créées dans une _grille implicite_ en positionnant un élément de grille en dehors des pistes créées dans la grille explicite.

L'image ci-dessous montre la première piste de ligne de la grille.

![Diagram showing a grid track.](1_grid_track.png)

## Taille de piste sur une grille explicite

Lors de la définition de pistes de grille avec {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}}, vous pouvez utiliser n'importe quelle unité de longueur, ainsi que l'unité flexible, qui indique une partie de l'espace disponible dans le conteneur de la grille. L'exemple ci-dessous montre une grille avec trois pistes de colonnes, l'une de 200 pixels, la seconde de 1fr, la troisième de 3fr. Une fois que les 200 pixels ont été soustraits de l'espace disponible dans le conteneur de la grille, l'espace restant est divisé en 4. Une partie est donnée à la colonne 2, 3 parties à la colonne 3.

## Exemple

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
  grid-template-columns: 200px 1fr 3fr;
}
```

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
</div>
```

{{EmbedLiveSample("Exemple", 500, 230)}}

## Taille de piste dans la grille implicite

Les pistes créées dans la grille implicite ont une taille définie automatiquement par défaut, cependant, vous pouvez définir la taille de ces pistes en utilisant les propriétés {{CSSxRef("grid-auto-rows")}} et {{CSSxRef("grid-auto-columns")}}.

## Voir aussi

- [Concepts de base des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Définition des pistes de grille dans la spécification CSS Grid Layout <sup>(angl.)</sup>](https://drafts.csswg.org/css-grid/#grid-track-concept)
- Références de propriété
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-template")}}
