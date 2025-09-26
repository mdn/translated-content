---
title: "L'alignement des boîtes pour les dispositions : en bloc, absolue, en tableau"
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
l10n:
  sourceCommit: 3a22bb59de072d368ad47cf36f8c385f1f3494fe
---

{{CSSRef}}

Le [module de spécification CSS sur l'alignement des boîtes (<i lang="en">Box Alignment</i> en anglais)](/fr/docs/Web/CSS/CSS_box_alignment) détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes dans une disposition en bloc, y compris pour les éléments flottants, les éléments positionnés et les tableaux. Cette page détaille les aspects spécifiques relatifs à l'alignement et à la disposition en bloc. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/CSS_box_alignment).

> [!NOTE]
> À l'heure où cet article est écrit (juin 2018), il n'y a pas de réelle prise en charge des propriétés d'alignement pour la disposition en bloc. Ce document détaille les intentions de la spécification dans un souci d'exhaustivité mais il est probable que des modifications soient apportées au fur et à mesure de l'évolution de la spécification et de l'implémentation par les navigateurs.

## `align-content` et `justify-content`

La propriété [`justify-content`](/fr/docs/Web/CSS/justify-content) ne s'applique pas aux conteneurs en bloc ou aux cellules de tableau.

La propriété [`align-content`](/fr/docs/Web/CSS/align-content) s'applique sur l'axe de bloc afin d'aligner le contenu de la boîte dans le conteneur. Si une méthode de distribution telle que `space-between`, `space-around` ou `space-evenly` est utilisée, c'est la méthode de recours qui sera utilisée, car tout le contenu est considéré comme [un seul sujet d'alignement](/fr/docs/Glossary/Alignment_Subject).

## `justify-self`

La propriété [`justify-self`](/fr/docs/Web/CSS/justify-self) est utilisée afin d'aligner un objet au sein de son bloc englobant selon l'axe en ligne.

Cette propriété ne s'applique pas aux éléments flottants ou aux cellules de tableau.

## `align-self`

La propriété [`align-self`](/fr/docs/Web/CSS/align-self) ne s'applique pas aux boîtes de bloc (y compris pour les éléments flottants), car il y a plus d'un objet sur l'axe de bloc. Elle ne s'applique pas non plus aux cellules des tableaux.

### Éléments positionnés de façon absolue

Le conteneur d'alignement correspond au bloc positionné en prenant en compte les valeurs de décalage `top`, `left`, `bottom` et `right`. Le mot-clé `normal` est considéré équivalent à `stretch`, sauf si l'élément positionné est un élément remplacé, auquel cas il est équivalent à `start`.

## Utilisation actuelle de l'alignement pour ces dispositions

À l'heure actuelle, les navigateurs n'implémentent pas l'alignement des boîtes pour la disposition en bloc. Il faut donc, pour le moment, utiliser les méthodes existantes ou placer un élément dans un conteneur flexible afin de tirer parti des fonctionnalités d'alignement des boîtes flexibles.

Avant l'apparition des boîtes flexibles (<i lang="en">flexbox</i>), l'alignement horizontal était généralement obtenu avec des marges automatiques. En effet, [`margin`](/fr/docs/Web/CSS/margin) avec `auto` absorbera tout l'espace disponible sur la dimension souhaitée et avec une marge droite et une marge gauche automatiques, le bloc sera placé au centre&nbsp;:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

Dans une disposition en tableau, il faut accéder à la propriété [`vertical-align`](/fr/docs/Web/CSS/vertical-align) afin d'aligner le contenu d'une cellule dans celle-ci.

Pour de nombreux scénarios, transformer le conteneur de bloc en élément flexible fournira les options d'alignement souhaitées. Dans l'exemple qui suit, on dispose d'un conteneur avec un seul élément et ce conteneur a été transformé en élément flexible afin d'utiliser les propriétés d'alignement.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Référence

### Propriétés CSS

- [`justify-content`](/fr/docs/Web/CSS/justify-content)
- [`align-content`](/fr/docs/Web/CSS/align-content)
- [`justify-self`](/fr/docs/Web/CSS/justify-self)
- [`align-self`](/fr/docs/Web/CSS/align-self)

### Termes du glossaire

- [Sujet d'alignement](/fr/docs/Glossary/Alignment_Subject)
- [Conteneur d'alignement](/fr/docs/Glossary/Alignment_Container)
- [Alignement de recours](/fr/docs/Glossary/Fallback_Alignment)
