---
title: <position-area>
slug: Web/CSS/Reference/Values/position-area_value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<position-area>`** définit la cellule ou les cellules étendues d'une **grille de zones de position** (<i lang="en">position-area grid</i>), une grille 3×3 dont la cellule centrale est un élément ancre.

Les valeurs du mot-clé `<position-area>` peuvent être définies comme valeur de la propriété {{CSSxRef("position-area")}} pour placer un élément positionné par ancre à un emplacement spécifique par rapport à son élément d'ancrage associé.

## Syntaxe

```plain
<position-area> = [
  [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | self-x-start | self-x-end | span-self-x-start | span-self-x-end | span-all ]
||
  [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | self-y-start | self-y-end | span-self-y-start | span-self-y-end | span-all ]
|
  [ block-start | center | block-end | span-block-start | span-block-end | span-all ]
||
  [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ]
|
  [ self-block-start | self-block-end | span-self-block-start | span-self-block-end | span-all ]
||
  [ self-inline-start | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ]
|
  [ start | center | end | span-start | span-end | span-all ]{1,2}
|
  [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2}
]
```

## Description

Les zones de position fonctionnent sur le concept d'une **grille de zones de position** (<i lang="en">position-area grid</i>), une grille 3×3 de tuiles composée de quatre lignes de grille, deux sur chaque axe, l'élément ancre occupant la tuile centrale&nbsp;:

![La grille de zones de position, comme décrite ci-dessous](position-area.png)

Lorsqu'elle est utilisée comme valeur de la propriété `position-area` d'un élément positionné, les dimensions de la tuile centrale sont définies par le [bloc conteneur](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément d'ancrage par défaut. Les dimensions du bord externe de la grille sont définies par le bloc conteneur de l'élément positionné. Les termes logiques sont généralement basés sur le mode d'écriture et la direction du bloc conteneur, sauf pour les mots-clés `self-*`, qui sont calculés à partir du mode d'écriture de l'élément positionné par ancre.

Les tuiles de la grille sont réparties en lignes et colonnes&nbsp;:

- Les trois lignes sont représentées par les valeurs physiques `top`, `center` et `bottom`. Elles ont aussi des équivalents logiques tels que `block-start`, `center` et `block-end`, et des équivalents de coordonnées&nbsp;: `y-start`, `center` et `y-end`.
- Les trois colonnes sont représentées par les valeurs physiques `left`, `center` et `right`. Elles ont aussi des équivalents logiques tels que `inline-start`, `center` et `inline-end`, et des équivalents de coordonnées&nbsp;: `x-start`, `center` et `x-end`.

Les valeurs `<position-area>` contiennent un ou deux mots-clés définissant une zone spécifique de la grille de zones de position. Définir une valeur `position-area` sur un élément positionné place son bloc conteneur dans la zone de grille définie&nbsp;:

```css
/* Exemples : Deux mots-clés pour placer l'élément dans une tuile spécifique */
position-area: top left;
position-area: bottom right;
position-area: start end;
position-area: center end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center self-y-end;

/* Exemples : Deux mots-clés pour étendre l'élément sur deux tuiles */
position-area: top span-left;
position-area: span-bottom right;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Exemples : Deux mots-clés pour étendre l'élément sur trois tuiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: self-x-start span-all;

/* Exemples : Un mot-clé avec un second mot-clé implicite */
position-area: top; /* identique à top span-all */
position-area: inline-start; /* identique à inline-start span-all */
position-area: center; /* identique à center center */
position-area: span-all; /* identique à center center */
position-area: start; /* identique à start start */
position-area: end; /* identique à end end */
```

Les différents types de mots-clés utilisables incluent&nbsp;:

- [Mots-clés de la grille physique](#mots-clés_de_la_grille_physique)
- [Mots-clés génériques logiques de ligne et de colonne](#mots-clés_génériques_logiques_de_ligne_et_de_colonne)
- [Mots-clés logiques explicites en ligne et bloc](#mots-clés_logiques_explicites_en_ligne_et_bloc)
- [Mots-clés de la grille par coordonnées](#mots-clés_de_la_grille_par_coordonnées)

> [!NOTE]
> En règle générale, vous ne pouvez pas mélanger différents types dans une même valeur, par exemple physique et logique. Le faire rend la valeur invalide. Par exemple, `position-area: bottom inline-end` n'est pas une valeur valide parce qu'elle mélange mots-clés physiques et logiques.

## Mots-clés de la grille physique

Les mots-clés de grille physique définissent une cellule ou une section de la grille `position-area` en utilisant des valeurs physiques. Ces valeurs ne sont pas affectées par les paramètres {{CSSxRef("writing-mode")}} ou {{CSSxRef("direction")}}.

Avec les mots-clés physiques de ligne et de colonne, vous pouvez définir un mot-clé dans chacune des deux listes ci-dessous pour sélectionner une tuile de grille unique&nbsp;:

- `top`, `center` ou `bottom`&nbsp;: la ligne supérieure, centrale ou inférieure de la grille.
- `left`, `center` ou `right`&nbsp;: la colonne de gauche, centrale ou de droite de la grille.

Par exemple, `top left` sélectionne la tuile en haut à gauche, tandis que `center right` sélectionne la tuile centrale de la colonne de droite.

### Mots-clés de la grille physique d'étendue

Les mots-clés d'étendue physiques — lorsqu'ils sont combinés avec un mot-clé de ligne ou de colonne physique — définissent une seconde tuile de grille dans laquelle la zone de position s'étend. Lorsqu'une telle combinaison est définie comme valeur de la propriété `position-area`, l'élément sélectionné est initialement placé au centre de la ligne ou de la colonne définie&nbsp;; il s'étend ensuite dans la direction indiquée par le mot-clé d'étendue, couvrant deux tuiles de la grille&nbsp;:

- `span-left`
  - : Étend la colonne centrale et la colonne de gauche de la grille.

- `span-right`
  - : Étend la colonne centrale et la colonne de droite de la grille.

- `span-top`
  - : Étend la ligne centrale et la ligne supérieure de la grille.

- `span-bottom`
  - : Étend la ligne centrale et la ligne inférieure de la grille.

- `span-all`
  - : Valide avec tous les types de mots-clés, étend la cellule indiquée ainsi que les cellules adjacentes dans la même ligne ou colonne. Voir [`span-all`](#span-all_2) ci-dessous.

Par exemple, `top span-left` étend les tuiles centre-haut et gauche-haut de la grille.

> [!NOTE]
> Essayer d'associer un mot-clé de ligne ou de colonne avec un mot-clé d'étendue inapproprié rendra la valeur invalide. Par exemple, `right span-right` est invalide — vous ne pouvez pas sélectionner la tuile center-right puis essayer de vous étendre davantage vers la droite.

### Valeurs par défaut des mots-clés de la grille physique

Si un seul mot-clé physique est défini dans la valeur `position-area`, l'autre valeur est implicite comme suit&nbsp;:

- `left`, `right`, `top` ou `bottom`
  - : L'autre valeur par défaut est [`span-all`](#span-all_2), ce qui fait que l'élément s'étend sur les trois tuiles de la colonne ou ligne initiale. Par exemple, `left` équivaut à `left span-all`.

- `center`, `span-left`, `span-right`, `span-top` ou `span-bottom`
  - : L'autre valeur par défaut est `center`. Par exemple, `span-left` équivaut à `center span-left` et `center` équivaut à `center center`.

## Mots-clés logiques

Les mots-clés de grille logique définissent une zone de la grille de zones de position en utilisant des valeurs logiques. Avec ces valeurs, la position et la direction sont affectées par les paramètres {{CSSxRef("writing-mode")}} et {{CSSxRef("direction")}} sur le [bloc conteneur](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément ou, dans le cas des mots-clés `self`, sur l'élément positionné lui-même. Il existe deux types de mots-clés logiques&nbsp;; génériques et explicites.

### Mots-clés logiques génériques de ligne et de colonne

Les mots-clés logiques génériques utilisent les mêmes termes pour les directions en ligne et bloc, la direction étant déterminée par la position du mot-clé dans une paire de valeurs `<position-area>`. La première valeur définit la position dans la direction bloc et la seconde valeur définit la valeur dans la direction en ligne. Vous pouvez définir un ou deux mots-clés dans la liste suivante. La définition de deux mots-clés dans cette liste définit une tuile de grille définie. La position ou la direction du mot-clé est&nbsp;:

- `start`
  - : Le début de la direction bloc ou en ligne de la grille, calculé à partir du mode d'écriture du bloc conteneur.

- `end`
  - : La fin de la direction bloc ou en ligne de la grille, calculé à partir du mode d'écriture du bloc conteneur.

- `self-start`
  - : Le début de la direction bloc ou en ligne de la grille, calculé à partir du mode d'écriture propre à l'élément.

- `self-end`
  - : La fin de la direction bloc ou en ligne de la grille, calculé à partir du mode d'écriture propre à l'élément.

- `center`
  - : Le centre de la direction bloc de la grille (si ce mot-clé est défini en premier) ou de la direction en ligne de la grille (si ce mot-clé est défini en second).

Par exemple, `start end` et `self-start self-end` décrivent tous deux la position au début de la direction bloc et à la fin de la direction en ligne. Avec `writing-mode: horizontal-tb` défini, c'est le coin supérieur droit de l'élément d'ancrage, tandis qu'avec `writing-mode: vertical-rl`, c'est le coin inférieur droit de l'ancre.

#### Mots-clés génériques d'étendue logiques de ligne et de colonne

Les mots-clés génériques d'étendue logiques — lorsqu'ils sont combinés avec un mot-clé de logique de ligne ou de colonne — définissent une seconde tuile de grille dans laquelle la zone de position s'étend. Lorsqu'une telle combinaison est définie comme valeur de la propriété `position-area`, l'élément sélectionné est initialement placé au centre de la ligne ou de la colonne définie&nbsp;; il s'étend ensuite dans la direction indiquée par le mot-clé d'étendue, couvrant deux tuiles de la grille&nbsp;:

- `span-start`
  - : Étend la tuile centrale et la tuile de début de la ligne/colonne de la grille, la direction se référant au mode d'écriture du bloc conteneur de l'élément.

- `span-end`
  - : Étend la tuile centrale et la tuile de fin de la ligne/colonne de la grille, la direction se référant au mode d'écriture du bloc conteneur de l'élément.

- `span-self-start`
  - : Étend la tuile centrale et la tuile de début de la ligne/colonne de la grille pour le mode d'écriture propre à l'élément positionné.

- `span-self-end`
  - : Étend la tuile centrale et la tuile de fin de la ligne/colonne de la grille, calculé à partir du mode d'écriture propre à l'élément.

Par exemple, `start span-end` et `self-start span-self-end` définissent tous deux une zone de position de grille qui commence au centre de la ligne de début bloc et s'étend sur les tuiles de cette ligne qui se trouvent dans les colonnes de centre et de fin en ligne. Avec `writing-mode: horizontal-tb` défini, cela s'étendrait sur le centre supérieur et le coin supérieur droit de l'ancre, tandis qu'avec `writing-mode: vertical-rl` défini, cela s'étendrait sur le centre droit et le coin inférieur droit.

### Mots-clés logiques explicites en ligne et bloc

Les mots-clés logiques explicites de ligne et de colonne font référence explicitement à une position bloc (ligne) ou en ligne (colonne). Vous pouvez définir un mot-clé pour la direction bloc et un pour la direction en ligne pour sélectionner une tuile de grille spécifique. Contrairement aux mots-clés logiques génériques, l'ordre des mots-clés n'a pas d'importance. Cependant, la déclaration de deux mots-clés sur le même axe invalide la valeur.

- `block-start`
  - : Le début de la direction block de la grille calculé à partir du mode d'écriture du bloc conteneur.

- `block-end`
  - : La fin de la direction block de la grille calculé à partir du mode d'écriture du bloc conteneur.

- `inline-start`
  - : Le début de la direction inline de la grille calculé à partir du mode d'écriture du bloc conteneur.

- `inline-end`
  - : La fin de la direction inline de la grille calculé à partir du mode d'écriture du bloc conteneur.

Par exemple, `block-start inline-end` définit la tuile au début de la direction bloc et à la fin de la direction en ligne. Avec `writing-mode: horizontal-tb` défini, cela serait la tuile en haut à droite de l'ancre, tandis qu'avec `writing-mode: vertical-rl` défini, cela serait la tuile en bas à droite.

> [!NOTE]
> La spécification définit des équivalents `self` de ces mots-clés — `block-self-start`, `block-self-end`, `inline-self-start` et `inline-self-end`. Cependant, ceux-ci ne sont actuellement pris en charge par aucun navigateur.

#### Mots-clés d'étendue logiques explicites en ligne et bloc

Les mots-clés d'étendue logiques explicites — lorsqu'ils sont combinés avec un mot-clé de logique de ligne ou de colonne — définissent une seconde tuile de grille dans laquelle la zone de position s'étend. Lorsqu'une telle combinaison est définie comme valeur de la propriété `position-area`, un élément sélectionné est initialement placé au centre de la ligne ou de la colonne définie, en fonction du mode d'écriture du bloc contenant, et il s'étend ensuite dans la direction indiquée par le mot-clé d'étendue, couvrant deux tuiles de la grille&nbsp;:

- `span-block-start`
  - : Étend la tuile centrale et la tuile de début du bloc de la colonne définie en ligne.

- `span-block-end`
  - : Étend la tuile centrale et la tuile de fin du bloc de la colonne définie en ligne.

- `span-inline-start`
  - : Étend la tuile centrale et la tuile de début en ligne de la ligne définie en bloc.

- `span-inline-end`
  - : Étend la tuile centrale et la tuile de fin en ligne de la ligne définie en bloc.

Par exemple, `block-end span-inline-start` sélectionne la tuile centrale de la ligne définie en bloc et s'étend sur les tuiles de cette ligne qui se trouvent dans les colonnes de centre et de début en ligne. Avec `writing-mode: horizontal-tb` défini, cela s'étendrait sur les tuiles en bas-centre et en bas à gauche, tandis qu'avec `writing-mode: vertical-rl` défini, cela s'étendrait sur les tuiles à gauche-centre et en haut à gauche.

> [!NOTE]
> La spécification définit des équivalents `self` de ces mots-clés, par exemple — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, et `span-self-inline-end`. Cependant, ceux-ci ne sont pas actuellement pris en charge par navigateur.

> [!NOTE]
> Essayer d'associer un mot-clé de ligne ou de colonne avec un mot-clé d'étendue inapproprié rendra la valeur invalide. Par exemple, `block-end span-block-end` est invalide — vous ne pouvez pas sélectionner la ligne de fin block centrale puis essayer de vous étendre d'un cran supplémentaire dans la direction de fin du bloc.

### Valeurs par défaut des mots-clés logiques

Si un seul mot-clé logique `<position-area>` est défini, l'autre valeur est implicite comme suit&nbsp;:

- `start`, `end`, `self-start` ou `self-end`
  - : L'autre valeur par défaut est la même que la première valeur, sélectionnant la cellule de grille au début de la ligne et de la colonne, ou à la fin de la ligne et de la colonne.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`
  - : L'autre valeur par défaut est `center`. Par exemple, `span-start` équivaut à `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`
  - : L'autre valeur par défaut est [`span-all`](#span-all_2), s'étendant sur les trois tuiles de la colonne ou de la ligne définie. Par exemple, `block-start` équivaut à `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`
  - : L'autre valeur par défaut est `center`. Par exemple, `span-inline-start` équivaut à `span-inline-start center`.

## Mots-clés de la grille par coordonnées

Ces mots-clés définissent les cellules de la grille `position-area` en utilisant des valeurs de coordonnées x et y. Sa position/direction sera affectée par les paramètres {{CSSxRef("writing-mode")}} et/ou {{CSSxRef("direction")}} sur le [bloc conteneur](/fr/docs/Web/CSS/Guides/Display/Containing_block) d'un élément ou, dans le cas des mots-clés `self`, sur l'élément lui-même.

Cependant, les cellules de la grille sont définies selon des axes physiques plutôt qu'en fonction des directions bloc/en ligne&nbsp;:

- Pour `writing-mode: horizontal-tb` et `vertical-lr`, l'axe des x s'étend de gauche à droite et l'axe des y de haut en bas.
- Pour `writing-mode: horizontal-tb; direction: rtl` et `writing-mode: vertical-rl`, l'axe des x s'étend de droite à gauche et l'axe des y de haut en bas.

Avec les mots-clés de coordonnées de ligne et de colonne, vous pouvez définir un mot-clé de l'axe des x et un de l'axe des y pour définir une tuile de grille définie.

Les mots-clés de l'axe des x incluent&nbsp;:

- `x-start`
  - : La tuile de début le long de l'axe des x de la grille, calculée à partir du mode d'écriture du bloc conteneur.

- `x-end`
  - : La tuile de fin le long de l'axe des x de la grille, calculée à partir du mode d'écriture du bloc conteneur.

- `self-x-start`
  - : La tuile de début le long de l'axe des x de la grille, calculée à partir du mode d'écriture propre à l'élément.

- `self-x-end`
  - : La tuile de fin le long de l'axe des x de la grille, calculée à partir du mode d'écriture propre à l'élément.

- `center`
  - : Le centre de l'axe des x de la grille, calculé à partir du mode d'écriture propre à l'élément.

Les mots-clés de l'axe des y incluent&nbsp;:

- `y-start`
  - : La tuile de début le long de l'axe des y de la grille, calculée à partir du mode d'écriture du bloc conteneur.

- `y-end`
  - : La tuile de fin le long de l'axe des y de la grille, calculée à partir du mode d'écriture du bloc conteneur.

- `self-y-start`
  - : La tuile de début le long de l'axe des y de la grille, calculée à partir du mode d'écriture propre à l'élément.

- `self-y-end`
  - : La tuile de fin le long de l'axe des y de la grille, calculée à partir du mode d'écriture propre à l'élément.

- `center`
  - : Le centre de l'axe des y de la grille, calculé à partir du mode d'écriture propre à l'élément.

Par exemple, `x-end y-start` et `self-x-end self-y-start` sélectionnent tous deux la cellule de grille à la fin de l'axe des x et au début de l'axe des y. Avec `writing-mode: horizontal-tb` défini, cela serait la cellule en haut à droite de l'ancre, tandis qu'avec `writing-mode: vertical-rl`, cela serait en haut à gauche.

### Mots-clés d'étendue par coordonnées

Lorsqu'ils sont combinés avec un mot-clé de coordonnées de ligne ou de colonne, les mots-clés d'étendue par coordonnées définissent une seconde tuile de grille dans laquelle la zone de position s'étend. Lorsqu'une telle combinaison est définie comme valeur de la propriété `position-area`, un élément sélectionné est initialement placé au centre de la ligne ou de la colonne définie, et il s'étend ensuite dans la direction indiquée par le mot-clé d'étendue, couvrant deux tuiles de la grille&nbsp;:

- `span-x-start`
  - : Étend la tuile centrale et la tuile de début x de la ligne définie de l'axe des y.

- `span-x-end`
  - : Étend la tuile centrale et la tuile de fin x de la ligne définie de l'axe des y.

- `span-y-start`
  - : Étend la tuile centrale et la tuile de début y de la colonne définie de l'axe des x.

- `span-y-end`
  - : Étend la tuile centrale et la tuile de fin y de la colonne définie de l'axe des x.

Par exemple, `y-end span-x-end` sélectionne la tuile au centre de la ligne de fin y, et s'étend sur les tuiles de cette ligne qui se trouvent dans les colonnes de centre et de fin x. Avec `writing-mode: horizontal-tb` défini, la zone de la grille de position s'étendrait sur les tuiles de la grille en bas-centre et en bas à droite, tandis qu'avec `writing-mode: vertical-rl` défini, cela s'étendrait sur les tuiles en bas-centre et en haut à droite.

> [!NOTE]
> La spécification ne définit pas de mots-clés d'étendue `self` séparés pour les coordonnées, mais ceux-ci ne sont pas nécessaires — les mots-clés d'étendue peuvent être utilisés avec les mots-clés de ligne et de colonne de coordonnées.

### Valeurs par défaut des mots-clés de la grille par coordonnées

Si un seul mot-clé de grille par coordonnées `<position-area>` est défini, l'autre valeur est implicite comme suit&nbsp;:

- `x-start`, `self-x-start`, `x-end`, `self-x-end`, `y-start`, `self-y-start`, `y-end` ou `self-y-end`
  - : L'autre valeur par défaut est [`span-all`](#span-all_2), sélectionnant les tuiles de grille s'étendant sur les trois tuiles de la colonne ou de la ligne dans laquelle elle a été initialement placée. Par exemple, `x-start` équivaut à `x-start span-all`.
- `span-x-start`, `span-x-end`, `span-y-start`, `span-y-end`, `span-self-x-start`, `span-self-x-end`, `span-self-y-end` ou `span-self-y-start`
  - : L'autre valeur par défaut est `center`. Par exemple, `span-start` équivaut à `span-start center`.

## `span-all`

`span-all` est un mot-clé spécial utilisable avec tous les mots-clés de ligne et de colonne énumérés dans les sections ci-dessus. Lorsque vous définissez deux valeurs — un mot-clé de ligne/colonne et `span-all`, l'élément est placé dans la ligne ou la colonne définie, puis s'étend sur toutes les tuiles de cette ligne ou colonne.

## Exemples

Voir la page de la propriété {{CSSxRef("position-area")}}.

Pour des informations détaillées sur les fonctionnalités et l'utilisation des ancres, voir la page d'atterrissage du module [Positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utiliser le positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-area")}}
- La propriété {{CSSxRef("anchor-name")}}
- La propriété {{CSSxRef("position-anchor")}}
- La fonction {{CSSxRef("anchor()")}}
- Guide pour [utiliser le positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Guide des [options de secours et masquage conditionnel pour le débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Module de [positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
