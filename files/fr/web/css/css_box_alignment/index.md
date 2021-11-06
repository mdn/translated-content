---
title: CSS Box Alignment
slug: Web/CSS/CSS_Box_Alignment
tags:
  - Alignement
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Box_Alignment
---
{{CSSRef}}

Le module de spécification _CSS Box Alignment_ (alignement des boîtes en CSS) décrit les fonctionnalités relatives à l'alignement des boîtes pour les différents modes de disposition CSS : disposition en bloc, en tableau, disposition flexible et disposition en grille. L'objectif de ce module est d'obtenir des méthodes d'alignement cohérentes pour tout CSS. Dans ce guide, nous verrons les différents concepts utilisés par cette spécification.

> **Note :** La documentation relative à chaque méthode de disposition explicitera comment le module d'alignement est appliqué pour cette méthode.

## Anciennes méthodes d'alignement

Par le passé, CSS disposait de peu d'outils pour l'alignement. Le texte pouvait être aligné grâce à {{cssxref("text-align")}}, les blocs pouvaient être centrés avec des marges ({{cssxref("margin")}}) automatique et les tableaux ou éléments en affichage _inline-block_ pouvaient tirer parti de {{cssxref("vertical-align")}}. Désormais, l'alignement du texte est couvert par les modules [Inline Layout](https://www.w3.org/TR/css-inline-3/) et [CSS Text](https://www.w3.org/TR/css-text-3/) et, pour la première fois, avec le module _Box Alignment_, on dispose d'outils complets pour l'alignement vertical et horizontal.

Si vous connaissez déjà [les boîtes flexibles (_flexbox_)](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout), vous reconnaitrez certaines propriétés faisant partie de la spécification de niveau 1 pour Flexbox. Toutefois, la spécification indique que la spécification _Box Alignment_ est prioritaire car elle peut décrire certaines fonctionnalités supplémentaires.

## Exemples simples

Dans les exemples suivants, nous allons voir comment certaines des propriétés d'alignement peuvent être appliquées sur des dispositions [en grille](/fr/docs/Web/CSS/CSS_Grid_Layout) ou utilisant [les boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout).

### Alignement pour une disposition en grille

Dans cet exemple avec une grille, on dispose d'un espace restant dans le conteneur après avoir placé les pistes de largeur fixe le long de l'axe en ligne (l'axe principal). L'espace est réparti grâce à la propriété {{cssxref("justify-content")}}. Sur l'axe de bloc (l'axe secondaire), l'alignement des éléments sur la grille est dicté par {{cssxref("align-items")}}. Le premier objet surcharge la règle fournie par `align-items` en utilisant {{cssxref("align-self")}} avec la valeur `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

### Alignement pour une disposition flexible (_flexbox_)

Dans cet exemple, trois objets flexibles sont alignés le long de l'axe principal avec `justify-content` et selon l'axe secondaire avec `align-items`. Le premier objet surcharge la règle indiquée avec `align-items` grâce à la propriété `align-self` qui vaut ici `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## Concepts majeurs et terminologie

Ce module de spécification définit des termes relatifs à l'alignement afin de pouvoir se référer à ces concepts sans qu'ils soient particulièrement liés à l'implémentation particulière d'un mode de disposition. Ces concepts sont communs à l'ensemble des méthodes de disposition.

### Liens avec les modes d'écriture

L'alignement est lié aux modes d'écriture et, lorsqu'on aligne un élément, on ne l'aligne pas selon des axes « physiques » (haut, droit, bas, gauche) mais selon le début ou la fin des dimensions utilisées par ce mode d'écriture. Cela permet de s'assurer que l'alignement fonctionne de la même façon, quel que soit le mode d'écriture utilisé par le document.

### Deux dimensions pour l'alignement

Lorsqu'on utilise les propriétés d'alignement, on aligne le contenu selon deux axes : l'axe en ligne (_inline axis_) et l'axe de bloc (_block axis_). L'axe en ligne correspond à l'axe selon lequel les mots sont écrits pour ce mode d'écriture. En français, par exemple, l'axe en ligne est un axe horizontal dirigé de la gauche vers la droite. L'axe de bloc est orthogonal à l'axe en ligne et suit la direction selon laquelle les blocs de texte sont disposés les uns à la suite des autres.

![](two-axes.png)

Lorsqu'on aligne des objets le long de l'axe en ligne, on utilisera les propriétés qui commencent par `justify-`:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Lorsqu'on aligne des objets le long de l'axe de bloc, on utilisera les propriétés qui commencent par `align-`:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox ajoute un niveau de complexité car si {{cssxref("flex-direction")}} vaut `row`, ces règles sont vraies mais si `flex-direction` vaut `column`, elles sont inversées. Toutefois, lorsqu'on travaille avec les boîtes flexibles, il est préférable de penser en termes d'axe principal et d'axe secondaire plutôt qu'en termes d'axe en ligne et d'axe de bloc. Les propriétés `justify-` permettent toujours d'aligner selon l'axe principal et les propriétés `align-` d'aligner selon l'axe secondaire.

### Le sujet de l'alignement (_alignment subject_)

Le **sujet de l'alignement** est l'objet qu'on aligne. Pour `justify-self` ou `align-self`, ou lorsqu'on paramètre ces valeurs pour un group avec `justify-items` ou `align-items`, cela correspondra à la boîte de marge de l'élément sur lequel la propriété est appliqué. Les propriétés `justify-content` et `align-content` varient selon la méthode de disposition utilisée.

### Le conteneur d'alignement (_alignment container_)

Le **conteneur d'alignement** est la boîte au sein de laquelle le sujet est aligné. Il s'agit généralement du bloc englobant du sujet de l'alignement. Un conteneur d'alignement peut contenir un ou plusieurs sujets.

Dans l'image qui suit, on voit un conteneur d'alignement qui contient deux sujets.

![](align-container-subjects.png)

### L'alignement de recours (_fallback_)

Si l'alignement défini ne peut pas être respecté, on utilisera un alignement de recours (_fallback alignment_) qui déterminera comment gérer l'espace disponible. L'alignement de recours est défini spécifiquement pour chaque méthode de disposition.

## Types d'alignement

Il existe trois types d'alignement définis par la spécification et qui fonctionnent avec des mots-clés.

- **Alignement en position** : la position du sujet est définie relativement à celle du conteneur.
- **Alignement selon la ligne de base** : ces mots-clés définissent l'alignement comme une relation entre les lignes de base des sujets au sein d'un contexte d'alignement.
- **Alignement distribué** : ces mots-clés définissent l'alignement comme une distribution de l'espace entre les sujets.

### Alignement en position avec des mots-clés

Les valeurs suivantes permettent de réaliser un alignement en position et peuvent être utilisées comme valeurs pour `justify-content`, `align-content` ainsi que pour `justify-self` et `align-self`.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` (uniquement pour les boîtes flexibles)
- `flex-end` (uniquement pour les boîtes flexibles)
- `left`
- `right`

En dehors des valeurs _physiques_ `left` et `right` qui sont relatives à la disposition physique de l'écran, les autres valeurs sont des valeurs _logiques_ qui font référence au mode d'écriture du contenu.

Si on prendre l'exemple d'une disposition en grille : en français, utiliser `justify-content` avec `start` déplacera les éléments sur l'axe en ligne au début, ce qui correspondra, dans ce cas, à la gauche. Si on utilise cette même règle avec un document écrit en arabe, qui s'écrit de droite à gauche, la valeur `start` regroupera les éléments sur le côté droit de la page.

On voit ici que ces deux exemples utilisent `justify-content: start` mais que l'emplacement des sujets varie selon le mode d'écriture.

![](writing-mode-start.png)

### Alignement selon la ligne de base

Les mots-clés pour l'alignement sur les lignes de bases permettent d'aligner les lignes de bases des boîtes parmi un groupe de sujets. Ces valeurs peuvent être utilisées avec `justify-content`, `align-content` ou avec `justify-self` et `align-self`.

- `baseline`
- `first baseline`
- `last baseline`

L'alignement du contenu selon la ligne de base (c'est-à-dire avec `justify-content` ou `align-content`) fonctionne pour les méthodes de disposition qui organisent les objets en lignes. Les sujets sont alignés sur une ligne de base commune en ajoutant du remplissage (_padding_) à l'intérieur de chaque boîte si nécessaire.

L'alignement des éléments (_self alignment_) (c'est-à-dire avec `justify-self` ou `align-self` pour des sujets distincts ou avec `justify-items` et `align-items` pour des groupes) décale les boîtes afin de les aligner sur une ligne de base en ajoutant une marge à l'extérieur des boîtes.

### Alignement distribué

Les mots-clés permettant de décrire un **alignement distribué** sont utilisés avec les propriétés `align-content` et `justify-content`. Ces mots-clés définissent ce qui se produit lorsqu'il reste de l'espace après que les sujets aient été affichés. Les valeurs correspondantes sont :

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Ainsi, si des objets flexibles sont alignés avec `flex-start` et qu'on travaille dans un mode d'écriture horizontal de gauche à droite et de haut en bas (comme le français) avec `flex-direction` qui vaut `row`, les sujets commenceront à gauche et l'espace disponible sera affiché à droite après que les sujets aient été placés.

![](justify-content-start.png)

Si on utilise `justify-content: space-between` sur le conteneur flexible, l'espace disponible sera alors réparti entre les objets.

![](justify-content-space-between.png)

Pour que ces mots-clés aient un effet, il est nécessaire qu'il reste de l'espace supplémentaire. S'il n'y a plus d'espace, aucune distribution ne pourra être effectuée.

## Gestion du dépassement

Les mots-clés `safe` et `unsafe` permettent de définir le comportement obtenu lorsque le sujet d'alignement est plus grand que le conteneur. Le mot-clé `safe` alignera selon `start` si l'alignement indiqué provoque un dépassement, afin de réduire la « perte de données » visible en dehors du conteneur et sur laquelle l'utilisateur ne pourra pas avoir accès.

La valeur `unsafe` permet de respecter l'alignement indiqué, même si celui-ci provoque un dépassement entraînant une telle perte de données.

## Espaces entre les boîtes

La spécification pour l'alignement des boîtes inclut également les propriétés `gap`, `row-gap` et `column-gap`. Ces propriétés permettent d'obtenir un espacement cohérents entre les objets d'une ligne ou d'une colonne pour tout mode de disposition organisant les objets de cette façon.

La propriété `gap` est une propriété raccourcie pour `row-gap` et `column-gap` et qui permet de définir ces deux propriétés en une seule règle.

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Dans l'exemple suivant, on a une disposition en grille et on utilise la propriété raccourcie `gap` afin de définir un espace de `10px` entre chaque piste de ligne et un espace de `2em` entre chaque piste de colonne.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 500)}}

Dans cet exemple, on utilise la propriété {{cssxref("gap")}} en plus de la propriété {{cssxref("gap")}}. Les propriétés d'espacement, initialement définies pour la disposition en grille, étaient préfixées par `grid-` et certains navigateurs ne prennent encore en charge que ces versions préfixées :

- {{cssxref("row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("gap")}}

Ces versions préfixées seront maintenues comme des alias des propriétés non-préfixées. Toutefois, il est toujours possible de les dédoubler comme on le fait avec les propriétés préfixées des différents éditeurs : déclarer la propriété `grid-gap` puis `gap` avec la même valeur.

Attention, d'autres éléments peuvent rentrer en jeu et ajouter de l'espace (les mots-clés de distribution ou les marges sur les éléments par exemple).

## Pages associées à chaque propriété d'alignement

Les propriétés d'alignement des boîtes CSS sont implémentées différemment selon le mode de disposition utilisé. Vous pouvez vous référer aux pages suivantes afin de connaître les détails de ces différences :

- [L'alignement des boîtes avec Flexbox](/fr/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [L'alignement des boîtes avec les grilles CSS](/fr/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
- [L'alignement des boîtes avec une disposition en colonne](/fr/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout)
- [L'alignement des boîtes pour les dispositions en bloc, les dispositions absolues et en tableau](/fr/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables)

## Référence

### Propriétés CSS

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Termes du glossaire

- [Axe secondaire](/fr/docs/Glossary/Cross_Axis)
- [Axe principal](/fr/docs/Glossary/Main_Axis)
- [Conteneur d'alignement](/fr/docs/Glossary/Alignment_Container)
- [Sujet d'alignement](/fr/docs/Glossary/Alignment_Subject)
- [Alignement de recours](/fr/docs/Glossary/Fallback_Alignment)

## Guides

- Guide CSS sur Flexbox : _[Les concepts de base de Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guide CSS sur Flexbox : _[Aligner les éléments d'un conteneur flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- Guide CSS sur les grilles : _[Aligner les boîtes dans une disposition en grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_

## Ressources externes

- [Anti-sèche pour l'alignement des boîtes (en anglais)](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
- [Alignement pour les grilles, les boîtes flexibles et les boîtes (en anglais)](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Quelques pensées sur les implémentations partielles de _Box Alignment_ (en anglais)](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
