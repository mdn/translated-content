---
title: box-lines
slug: Web/CSS/box-lines
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-lines
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (_flexbox_) et sera remplacée dans une prochaine version.

Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations.

La propriété **`box-lines`** détermine si la boîte se compose d'une ou plusieurs rangées (des lignes pour les boîtes orientées horizontalement et des colonnes pour les boîtes orientées verticalement). Pour plus de détails, se référer à la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) qui décrit les différentes propriétés des boîtes flexibles.

```css
/* Valeurs avec un mot-clé */
box-lines: single;
box-lines: multiple;

/* Valeurs globales */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

Par défaut, une boîte horizontale organisera ses éléments sur une seule ligne et une boîte verticale les organisera sur une seule colonne. On peut modifier ce comportement en utilisant **`box-lines`**. La valeur par défaut est **`single`** (ce qui correspond au cas expliqué avant) et les éléments qui ne peuvent être contenus dans cette ligne ou cette colonne dépasseront.

Si, au contraire, on utilise la valeur **`multiple`**, la boîte pourra s'étendre sur plusieurs rangées (des lignes ou des colonnes) afin de contenir ses différents éléments fils. La boîte utilisera alors le moins de lignes ou de colonnes possibles et réduira les éléments à leur taille minimale si nécessaire.

Si les éléments fils d'une boîte horizontale ne rentrent pas dans une ligne après avoir été réduits à leur taille minimale, ils sont déplacés sur une nouvelle ligne jusqu'à ce que rien ne dépasse de la ligne précédente. Le procédé est répété autant de fois que nécessaire. Si une ligne contient un seul élément et que celui-ci est trop grand, ce dernier restera sur cette ligne et dépassera en dehors de la boîte. Les nouvelles lignes sont créées en dessous des premières lorsque la direction de la boîte est `normal`, dans le sens inverse (`reverse`) elles seront empilées les unes au dessus des autres. La hauteur d'une ligne sera égale à la plus grande hauteur des éléments portés sur cette ligne. Aucun espace ne sera ajouté entre les lignes en dehors des marges décrites par les plus grands éléments. Lors du calcul de la hauteur, les éléments avec une marge dont la valeur calculée est `auto` seront traités comme si la marge était nulle (`0`).

On aura un fonctionnement analogue avec une disposition verticale.

Une fois que le nombre de rangées a été calculé, les éléments pour lesquels {{cssxref("box-flex")}} a une valeur calculée différentes de `0` seront étirés afin de remplir les espaces restants sur les lignes. Ces étirements sont calculés de façon indépendante selon chaque ligne (notamment pour {{cssxref("box-flex")}} et {{cssxref("box-flex-group")}}). Il en va de même pour le regroupement des éléments sur une ligne avec la propriété {{cssxref("box-pack")}}.

## Syntaxe

Cette propriété est définie grâce à l'un des mots-clés suivants.

### Valeurs

- `single`
  - : Les éléments d'une boîte sont disposés sur une seule ligne ou sur une seule colonne.
- `multiple`
  - : Les éléments de la boîte sont disposés sur plusieurs lignes ou colonnes si nécessaire.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

- [Brouillon de travail pour le module des boîtes flexibles (W3C)](https://www.w3.org/TR/css3-flexbox/) {{Note("L'état actuel de cette spécification ne reflète pas l'implémentation de Gecko ou WebKit.")}}
- [Ancienne version de la spécification.](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) {{Note("Les implémentations de WebKit et Gecko reflètent cette version de la spécification.")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-lines")}}

## Voir aussi

- {{cssxref("box-flex")}},
- {{cssxref("box-flex-groups")}},
- {{cssxref("box-pack")}}
