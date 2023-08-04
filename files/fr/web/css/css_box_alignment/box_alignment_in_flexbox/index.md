---
title: L'alignement des boîtes avec Flexbox
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox
---

{{CSSRef}}

Le module de spécification _[Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)_ détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes avec les boîtes flexibles (_flexbox_). Cette page détaille les aspects spécifiques relatifs à l'alignement et aux boîtes flexibles. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/CSS_Box_Alignment).

## Exemple simple

Dans cet exemple, trois objets flexibles sont alignés sur l'axe principal avec {{cssxref("justify-content")}} et sur l'axe secondaire grâce à {{cssxref("align-items")}}. Le premier objet surcharge l'alignement fourni par `align-items` en utilisant `center` comme valeur pour la propriété {{cssxref("align-self")}}.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}

## Liens entre les axes et `flex-direction`

Les boîtes flexibles respectent le mode d'écriture du document. Aussi, si on travaille sur un document en français et qu'on utilise {{cssxref("justify-content")}} avec `flex-end`, les éléments seront alignés à la fin du conteneur flexible. Si on utilise {{cssxref("flex-direction")}} avec la valeur `row`, cet alignement suivra la direction en ligne (celle selon laquelle le texte est écrit).

Toutefois, _Flexbox_ permet de modifier l'axe principal en utilisant `flex-direction` avec la valeur `column`. Dans ce cas, `justify-content` alignera les objets selon la direction de bloc. Aussi, mieux vaut penser en termes d'axes principal (_main axis_) et d'axe secondaire (_cross axis_) lorsqu'on travaille sur des boîtes flexibles :

- L'axe principal correspond à la direction fournie par `flex-direction` et l'alignement sur cet axe s'effectue avec `justify-content`
- L'axe secondaire est orthogonal à l'axe principal et l'alignement s'effectue avec `align-content`, `align-self`/`align-items`

### Alignement sur l'axe principal

- {{cssxref("justify-content")}}

### Alignement sur l'axe secondaire

- {{cssxref("align-self")}}
- {{cssxref("align-items")}}
- {{cssxref("align-content")}}

### Absence de `justify-self` pour _Flexbox_

Sur l'axe principal et avec les boîtes flexibles, le contenu est considéré comme un seul groupe. La quantité d'espace nécessaire est calculée pour disposer les différents éléments et l'espace restant peut être réparti. La propriété `justify-content` contrôle la répartition de cet espace. Avec `justify-content: flex-end`, l'espace supplémentaire sera ajouté avant les éléments et avec `justify-content: space-around`, il sera placé de chaque côté.

Autrement dit, `justify-self` n'a pas de sens pour les boîtes flexibles car le contenu est considéré comme un seul « tenant » qui est déplacé.

Pour l'axe secondaire, `align-self` peut être pertinent car il peut y avoir un espace supplémentaire sur cet axe et selon lequel on peut déplacer un seul des éléments.

## Alignement et marges automatiques

`justify-self` pourrait être utile lorsqu'on souhaite séparer un ensemble d'éléments flexibles pour créer un menu de navigation. Dans ce cas, on peut utiliser des marges automatiques avec `auto`. En effet, une marge avec cette valeur consommera tout l'espace disponible sur cette dimension. En définissant les marges gauche et droite avec `auto`, les deux côtés du bloc occuperont tout l'espace disponible et la boîte sera alors placée au centre.

En utilisant {{cssxref("margin")}} avec `auto` sur un élément d'un ensemble d'éléments flexibles alignés vers le début, on peut créer un tel effet. Dès qu'il n'y a plus d'espace disponible pour les marges automatiques, l'objet se comporte comme les autres objets flexibles et se réduit pour s'inscrire dans l'espace disponible.

{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}

## Les propriétés `gap`

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Créer des gouttières fixes entre chaque objet

Sur l'axe principal, la propriété `column-gap` permettra de créer des gouttières de taille fixe de chaque côté de l'objet.

Sur l'axe secondaire, `row-gap` permettra d'espace les lignes adjacentes. Aussi, il faut que `flex-wrap` vaille `wrap` afin que `row-gap` ait un effet.

> **Note :** À l'heure où ces lignes sont écrites, seul Firefox 63 prend en charge les propriétés `gap` pour les boîtes flexibles. En effet, le comportement de ces propriétés pour les dispositions flexibles est un ajout récent à la spécification.

## Référence

### Propriétés CSS

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}t
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("align-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Termes du glossaire

- [Axe secondaire](/fr/docs/Glossaire/Axe_transversal)
- [Axe principal](/fr/docs/Glossaire/Axe_principal)

## Guides

- [L'alignement avec _Flexbox_](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible)

## Ressources externes

- [Anti-sèche pour l'alignement des boîtes (en anglais)](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
- [Alignement pour les grilles, les boîtes flexibles et les boîtes (en anglais)](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Quelques pensées sur les implémentations partielles de _Box Alignment_ (en anglais)](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
