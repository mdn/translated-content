---
title: Carte
slug: Web/CSS/Layout_cookbook/Card
---

{{CSSRef}}

Dans ce guide, nous verrons comment créer des cartes (_cards_ en anglais), disposant éventuellement d'un pied de page, qui peuvent être organisée en listes.

![Three card components in a row](cards.png)

## Spécifications sommaires

Une carte peut contenir différents éléments tels qu'un titre, une image, un contenu texte et un pied de page.

Chaque carte devrait avoir la même hauteur et les pied de page devrait être placés en bas de la carte.

Lorsqu'on ajoute des cartes à un ensemble de cartes, celles-ci devraient s'organiser sur deux dimensions.

## Recette

{{EmbedGHLiveSample("css-examples/css-cookbook/card.html", '100%', 1720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/card--download.html).

## Choix effectués

Chaque carte est organisée en utilisant [une grille CSS](/fr/docs/Web/CSS/CSS_Grid_Layout) bien qu'elle ne soit que sur une seule dimension. Cela permet en effet d'utiliser le dimensionnement du contenu pour les pistes de la grille. Pour avoir une grille avec une seule colonne, on utilise ce fragment de CSS :

```css
.card {
  display: grid;
  grid-template-rows: max-content 200px 1fr;
}
```

La piste pour le titre est définie avec {{cssxref("max-content")}} ce qui empêche de l'étirer. On décide ensuite que l'image puisse occuper la piste au maximum sur 200 pixels. On définit ensuite la prochaine piste (où le contenu texte se trouve) avec une dimension de `1fr`. Autrement dit, la piste dédiée au contenu occupera tout l'espace restant.

Si la carte possède un pied de page, celui-ci sera dimensionné automatiquement car les lignes ajoutées sur la grille implicite sont dimensionnés automatiquement. Aussi, le pied de page sera suffisamment grand pour contenir l'ensemble de son texte.

> **Note :** Les éléments de différentes cartes ne seront pas alignés les uns avec les autres car chaque carte est une grille indépendante. La fonctionnalité de sous-grille (_subgrid_), proposée pour la version de niveau 2 du module de spécification CSS Grid, pourrait apporter une solution à ce problème.

## Méthodes alternatives

On pourrait également utiliser [les boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout) pour organiser le contenu d'une carte. Dans cette configuration, il faut laisser la zone dédiée au contenu s'étendre et ne pas rendre les autres éléments flexibles. On pourrait ainsi obtenir simplement cette disposition. Les grilles permettent de dimensionner les pistes au niveau du conteneur, pour les boîtes flexibles, il faut dimensionner chaque élément séparément.

Pour l'organisation de l'ensemble des cartes (et pas des cartes individuelles), on pourrait également utiliser les boîtes flexibles mais on aurait alors la dernière carte qui occuperait tout le reste d'une ligne et qui serait potentiellement plus larges que les autres cartes. Une autre méthode consisterait à utiliser [une disposition multi-colonnes](/fr/docs/Web/CSS/CSS_Columns) où les cartes s'empileraient sur les différentes colonnes (un point qui peut être souhaitable ou indésirable selon l'effet désiré).

Voir [la recette sur les colonnes](/fr/docs/Web/CSS/Layout_cookbook/Column_layouts) pour observer ces méthodes en action.

## Accessibilité

Selon le contenu des cartes, il est possible voire souhaitable d'appliquer quelques traitements pour améliorer l'accessibilité. Voir l'article [_Inclusive Components: Card_ (en anglais)](https://inclusive-components.design/cards/), écrit par Heydon Pickering, pour des explications détaillées à ce propos.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref("grid-template-columns")}}, {{Cssxref("grid-template-rows")}}, {{Cssxref("gap")}}
- [_Inclusive Components: Card_ (en anglais)](https://inclusive-components.design/cards/)
