---
title: Centrer un élément
slug: Web/CSS/Layout_cookbook/Center_an_element
---

{{CSSRef}}

Comment centrer une boîte dans une autre boîte ? Centrer à la fois horizontalement et verticalement était difficile avant l'arrivée des boîtes flexibles (_flexbox_), mais c'est désormais beaucoup plus simple grâce aux propriétés du module de spécification _Box Alignment_.

![an element centered inside a larger box](cookbook-center.png)

## Spécifications sommaires

Centrer un élément à la fois horizontalement et verticalement dans un autre élément.

## Recette

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/center--download.html)

## Choix effectués

Pour centrer une boîte dans une autre, on a donné au contenant une propriété `display: flex`.

Ensuite, on a paramétré {{cssxref("align-items")}} avec la valeur `center` pour centrer la boîte verticalement, et {{cssxref("justify-content")}} avec la valeur `center` pour centrer horizontalement.

À l'avenir, nous pourrons peut-être centrer les éléments sans avoir à transformer le parent en contenant flexible, puisque les propriétés de Box Alignment utilisées ici sont aussi faites pour s'appliquer à une disposition en bloc classique.
Cependant, sa prise en charge dans ce cas (disposition en bloc) est actuellement limitée ; l'utilisation de Flexbox pour centrer est donc, pour le moment, la technique la plus robuste.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'alignement des boîtes avec Flexbox](/fr/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS Box alignment guide](/fr/docs/Web/CSS/CSS_box_alignment)
