---
title: 'L''alignement des boîtes pour les dispositions : en bloc, absolue, en tableau'
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
original_slug: Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_bloc_absolue_tableau
---
{{CSSRef}}

Le module de spécification _[Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)_ détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes dans une disposition en bloc, y compris pour les éléments flottants, les éléments positionnés et les tableaux. Cette page détaille les aspects spécifiques relatifs à l'alignement et à la disposition en bloc. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/CSS_Box_Alignment).

> **Note :** À l'heure où cet article est écrit (juin 2018), il n'y a pas de réelle prise en charge des propriétés d'alignement pour la disposition en bloc. Ce document détaille les intentions de la spécification dans un souci d'exhaustivité mais il est probable que des modifications soient apportées au fur et à mesure de l'évolution de la spécification et de l'implémentation par les navigateurs.

## `align-content` et `justify-content`

La propriété {{cssxref("justify-content")}} ne s'applique pas aux conteneurs en bloc ou aux cellules de tableau.

La propriété {{cssxref("align-content")}} s'applique sur l'axe de bloc afin d'aligne les contenus de la boîte dans le conteneur. Si une méthode de distribution telle que `space-between`, `space-around` ou `space-evenly` est utilisée, c'est la méthode de recours qui sera utilisée car tout le contenu est considéré comme [un seul sujet d'alignement](</fr/docs/Web/CSS/CSS_Box_Alignment#Le_sujet_de_l'alignement_(alignment_subject)>).

## `justify-self`

La propriété {{cssxref("justify-self")}} est utilisée afin d'aligner un objet au sein de son bloc englobant selon l'axe en ligne.

Cette propriété ne s'applique pas aux éléments flottants ou aux cellules de tableau.

### Éléments positionnés de façon absolue

Le conteneur d'alignement correspond au bloc positionné en prenant en compte les valeurs de décalage `top`, `left`, `bottom` et `right`. Le mot-clé `normal` est considéré équivalent à `stretch` sauf si l'élément positionné est un élément remplacé, auquel cas il est équivalent à `start`.

## `align-self`

La propriété {{cssxref("align-self")}} ne s'applique pas aux boîtes de bloc (y compris pour les éléments flottants) car il y a plus d'un objet sur l'axe de bloc. Elle ne s'applique pas non plus aux cellules des tableaux.

### Éléments positionnés de façon absolue

Le conteneur d'alignement correspond au bloc positionné en prenant en compte les valeurs de décalage `top`, `left`, `bottom` et `right`. Le mot-clé `normal` est considéré équivalent à `stretch` sauf si l'élément positionné est un élément remplacé, auquel cas il est équivalent à `start`.

## Utilisation actuelle de l'alignement pour ces dispositions

À l'heure actuelle, les navigateurs n'implémentent pas l'alignement des boîtes pour la disposition en bloc. Il faut donc, pour le moment, utiliser les méthodes existantes ou placer un élément dans un conteneur flexible afin de tirer parti des fonctionnalités d'alignement des boîtes flexibles.

Avant l'apparition des boîtes flexibles (_flexbox_), l'alignement horizontal était généralement obtenu avec des marges automatiques. En effet, {{cssxref("margin")}} avec `auto` absorbera tout l'espace disponible sur la dimension souhaité et avec une marge droite et une marge gauche automatiques, le bloc sera placé au centre :

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Dans une disposition en tableau, il faut accéder à la propriété {{cssxref("vertical-align")}} afin d'aligner le contenu d'une cellule dans celle-ci.

Pour de nombreux scénarios, transformer le conteneur de bloc en élément flexible fournira les options d'alignement souhaitées. Dans l'exemple qui suit, on dispose d'un conteneur avec un seul élément et ce conteneur a été transformé en élément flexible afin d'utiliser les propriétés d'alignement.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Référence

### Propriétés CSS

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### Termes du glossaire

- [Sujet d'alignement](/fr/docs/Glossary/Alignment_Subject)
- [Conteneur d'alignement](/fr/docs/Glossary/Alignment_Container)
- [Alignement de recours](/fr/docs/Glossary/Fallback_Alignment)
