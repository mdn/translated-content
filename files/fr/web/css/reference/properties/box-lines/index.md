---
title: Propriété CSS `box-lines`
short-title: box-lines
slug: Web/CSS/Reference/Properties/box-lines
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette propriété fait partie de la première version du standard pour les boîtes flexibles (<i lang="en">flexbox</i>) et a été remplacée dans une version plus récente de la spécification. Voir la page [Flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) pour plus d'informations.

La propriété [CSS](/fr/docs/Web/CSS) **`box-lines`** détermine si la boîte se compose d'une ou plusieurs rangées (des lignes pour les boîtes orientées horizontalement et des colonnes pour les boîtes orientées verticalement).

Par défaut, une boîte horizontale organise ses éléments sur une seule ligne et une boîte verticale les organise sur une seule colonne. On peut modifier ce comportement en utilisant **`box-lines`**. La valeur par défaut est **`single`** (ce qui correspond au cas expliqué avant) et les éléments qui ne peuvent être contenus dans cette ligne ou cette colonne dépassent.

Si, au contraire, on utilise la valeur **`multiple`**, la boîte peut s'étendre sur plusieurs rangées (des lignes ou des colonnes) afin de contenir ses différents éléments fils. La boîte utilise alors le moins de lignes ou de colonnes possibles et réduit les éléments à leur taille minimale si nécessaire.

Si les éléments fils d'une boîte horizontale ne rentrent pas dans une ligne après avoir été réduits à leur taille minimale, ils sont déplacés sur une nouvelle ligne jusqu'à ce que rien ne dépasse de la ligne précédente. Le procédé est répété autant de fois que nécessaire. Si une ligne contient un seul élément et que celui-ci est trop grand, ce dernier reste sur cette ligne et dépasse en dehors de la boîte. Les nouvelles lignes sont créées en dessous des premières lorsque la direction de la boîte est `normal`, dans le sens inverse (`reverse`) elles sont empilées les unes au-dessus des autres. La hauteur d'une ligne est égale à la plus grande hauteur des éléments portés sur cette ligne. Aucun espace ne est ajouté entre les lignes en dehors des marges décrites par les plus grands éléments. Lors du calcul de la hauteur, les éléments avec une marge dont la valeur calculée est `auto` sont traités comme si la marge était nulle (`0`).

On a un fonctionnement analogue avec une disposition verticale.

Une fois que le nombre de rangées a été calculé, les éléments pour lesquels {{CSSxRef("box-flex")}} a une valeur calculée différentes de `0` sont étirés afin de remplir les espaces restants sur les lignes. Ces étirements sont calculés de façon indépendante selon chaque ligne (notamment pour {{CSSxRef("box-flex")}} et {{CSSxRef("box-flex-group")}}). Il en va de même pour le regroupement des éléments sur une ligne avec la propriété {{CSSxRef("box-pack")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
box-lines: single;
box-lines: multiple;

/* Valeurs globales */
box-lines: inherit;
box-lines: initial;
box-lines: unset;
```

### Valeurs

Cette propriété est définie par l'un des mots-clés suivants&nbsp;:

- `single`
  - : Les éléments d'une boîte sont disposés sur une seule ligne ou sur une seule colonne.
- `multiple`
  - : Les éléments de la boîte sont disposés sur plusieurs lignes ou colonnes si nécessaire.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`box-lines = single | multiple`)}}

## Exemples

### Utilisation simple

Dans la version originale de la spécification, `box-lines` permettait d'indiquer que les enfants du conteneur flexible doivent passer à la ligne. Cette propriété était uniquement implémentée par les navigateurs WebKit et avec un préfixe.

```css
div {
  display: box;
  box-orient: horizontal;
  box-lines: multiple;
}
```

La propriété équivalente qui la remplace est {{CSSxRef("flex-wrap")}}.

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flex")}}
- La propriété {{CSSxRef("flex-basis")}}
- La propriété {{CSSxRef("flex-grow")}}
- La propriété {{CSSxRef("flex-shrink")}}
