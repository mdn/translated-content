---
title: Disposition de flux et modes d'écriture
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
tags:
  - CSS
  - Guide
  - Mode d'écriture
translation_of: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes
original_slug: Web/CSS/CSS_Flow_Layout/Disposition_flux_et_modes_écriture
---
La spécification CSS 2.1, qui décrit le comportement classique du flux normal, prend l'hypothèse d'un mode d'écriture horizontal. [Les propriétés liées à la disposition](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_de_bloc_en_ligne_avec_flux_normal) devraient fonctionner de façon identique pour les modes d'écritures verticaux. Dans ce guide, nous verrons comment le flux normal se comporte selon les différents modes d'écriture.

Ce guide n'est pas un guide exhaustif sur l'utilisation des modes d'écriture en CSS. Son objectif est de documenter les interactions, éventuellement inattendues, entre le flux et les modes d'écriture. Pour plus de ressources à ce sujet, vous pouvez vour référer aux [ressources externes](#Ressources_externes) ainsi qu'à la section [Voir aussi](#Voir_aussi) en fin de page.

## La spécification des modes d'écriture

Le module de spécification _CSS Writing Modes_ de niveau 3 définit l'impact du mode d'écriture sur le flux. Voici l'introduction [de la spécification](https://drafts.csswg.org/css-writing-modes-3/#text-flow) quant aux modes d'écriture :

> « En CSS, un mode d'écriture est défini par les propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}. Ce mode est principalement défini selon sa direction en ligne (_inline_) et selon sa direction de bloc. »

La spécification définit la direction en ligne comme la direction selon laquelle le contenu est ordonné sur une ligne. Cela définit le début et la fin de la direction en ligne. Le début correspond à l'emplacement du début d'une phrase sur la ligne et la fin correspond à l'emplacement où la ligne de texte se coupe pour passer sur une nouvelle ligne.

La direction de bloc correspond à la direction selon laquelle les boîtes (ex. les paragraphes) s'empilent pour ce mode d'écriture. La propriété `writing-mode` contrôle la direction de bloc. Si on souhaite changer la page ou une partie de la page afin d'utiliser la direction `vertical-lr`, on pourra utiliser `writing-mode: vertical-lr` sur un élément. Cela aura pour effet de modifier la direction de bloc et, par conséquent, de modifier la direction en ligne.

Les modes d'écritures peuvent être utilisés pour respecter la façon d'écrire de certaines langues. Ils peuvent également être utilisés à des fins stylistiques (pour avoir un titre vertical par exemple).

{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}

## La propriété `writing-mode` et le flux de bloc

La propriété {{cssxref("writing-mode")}} s'utilise avec les valeurs `horizontal-tb`, `vertical-rl` et `vertical-lr`. Ces valeurs contrôlent la direction selon laquelle les blocs se suivent sur la page. La valeur initiale de cette propriété est `horizontal-tb` ce qui signifie que l'axe de bloc est dirigé de haut en bas (`tb` pour _top to bottom_ qui signifie de haut en bas) et que l'axe en ligne est horizontal. Les langues qui s'écrivent de gauche à droite telles que le français ou les langues qui s'écrivent de droite à gauche telles que l'arabe utilisent toutes `horizontal-tb`.

Voici un exemple avec `horizontal-tb`.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}

La valeur `vertical-rl` permet d'avoir une direction de bloc de droite à gauche et une direction en ligne verticale, comme on peut le voir dans l'exemple qui suit.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}

Dans cet autre exemple, on voit comment se comporte la troisième valeur possible pour `writing-mode` : `vertical-lr`. On a une direction de bloc horizontal de la gauche vers la droite et une direction en ligne verticale.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}

## Les boîtes utilisant un mode d'écriture différent de leur parent

Lorsqu'une boîte imbriquée se voit affecter un mode d'écriture différent de son parent, une boîte en ligne s'affichera comme si elle avait `display: inline-block`.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}

Une boîte de bloc créera un nouveau contexte de formatage. Ainsi, si son type d'affichage intérieur vaut `flow`, le type d'affichage calculé sera `flow-root`. On peut voir ce comportement dans l'exemple qui suit où la boîte affichée avec `horizontal-tb` contient un élément flottant contenu car son élément parent crée un nouveau contexte de formatage.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}

## Les éléments remplacés

Les éléments remplacés tels que les images ne changeront pas d'oritentation selon la valeur de la propriété `writing-mode`. Toutefois, les éléments remplacés tels que les éléments de formulaires qui incluent du texte devraient utiliser le mode d'écriture courant.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}

## Les propriétés et valeurs logiques

Lorsqu'on travaille avec des modes d'écriture autres que `horizontal-tb`, la plupart des propriétés et des valeurs correspondant aux dimensions physiques de l'écran semblent étranges. Ainsi, si on a une boîte qui fait 100 pixels de large, avec `horizontal-tb` cette largeur sera selon la direction en ligne. Mais avec le mode `vertical-lr` cela contrôlera la direction de bloc car elle ne tourne pas avec le texte.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}

C'est pour cela que des propriétés _logiques_ ont fait leur apparition comme {{cssxref("block-size")}} et {{cssxref("inline-size")}}. Si on fournit `inline-size: 100px` sur un bloc, peu importe qu'on ait un mode d'écriture horizontal ou vertical, `inline-size` correspondra à la direction en ligne quoi qu'il arrive.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}

Le module de spécification [CSS sur les propriétés et valeurs logiques](/en-US/docs/Web/CSS/CSS_Logical_Properties) contient des versions logiques des propriétés contrôlant les marges, le remplissage (_padding_) et les bordures et d'autres correspondances pour les concepts qu'on manipulait habituellement avec des directions _physiques_.

## Résumé

Dans la plupart des cas, la disposition de flux fonctionne comme on s'y attend lorsqu'on change le mode d'écriture du document ou d'une de ses parties. Les modes d'écritures peuvent être utilisés pour écrire correctement une langue ou pour des aspects créatifs. CSS facilite cette utilisation en introduisant des propriétés et des valeurs logiques qui fonctionnent de façon homogène quel que soit le mode d'écriture. On peut alors créer des composants qui fonctionneront avec différents modes d'écriture.

## Voir aussi

- [Les modes d'écritures](/fr/docs/Web/CSS/CSS_Writing_Modes)

## Ressources externes

- _[CSS Writing Modes (en anglais)](https://24ways.org/2016/css-writing-modes/)_ par Jen Simmons sur _24 Ways_

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/CSS_Flow_Layout/")}}
