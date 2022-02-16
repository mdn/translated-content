---
title: Contexte de formatage en ligne (inline/incise)
slug: Web/CSS/Inline_formatting_context
tags:
  - CSS
  - Guide
translation_of: Web/CSS/Inline_formatting_context
original_slug: Web/CSS/Contexte_de_formatage_en_ligne
---
{{CSSRef}}

Dans cet article, nous allons voir ce qu'est le contexte de formatage en ligne (_inline formatting context_).

## Concepts-clés

Le contexte de formatage en ligne est une des méthodes permettant de créer le rendu visuel d'une page web. Les boîtes en ligne sont disposées les unes après les autres selon le mode d'écriture utilisé :

- Pour un mode d'écriture horizontal, les boîtes en ligne sont disposées horizontalement de la gauche vers la droite.
- Pour une mode d'écriture vertical, les boîtes en lignes sont disposées verticalement du haut vers le bas.

Dans l'exemple qui suit, on a deux éléments ({{HTMLElement("div")}}) avec une bordure noire qui forment chacuns [un contexte de formatage de bloc](/fr/docs/Web/CSS/Block_formatting_context) au sein duquel chaque mot contribue à un contexte de formatage en ligne. Les boîtes utilisées dans le mode d'écriture horizontal sont organisées horizontalement tandis que celles dans l'élément avec un mode d'écriture vertical sont disposées verticalement.

{{EmbedGHLiveSample("css-examples/inline-formatting/inline.html", '100%', 720)}}

Les boîtes qui forment une ligne sont contenues dans une zone rectangulaire qu'on appelle boîte de ligne (_line box_). Cette boîte sera assez grande pour contenir l'ensemble des boîtes en ligne de cette ligne. Lorsqu'il n'y a plus de place disponible sur l'axe en ligne, une autre ligne est créée. Ainsi, un paragraphe est formé par un ensemble de boîtes de ligne, empilées le long de l'axe de bloc.

Lorsqu'une boîte en ligne est découpée en deux, les marges, bordures et le remplissage (_padding_) n'ont pas d'impact visuel à l'emplacement de la séparation. Dans le prochain exemple, on peut voir un élément ({{HTMLElement("span")}}) enveloppant un ensemble de mots s'étirant sur deux lignes. On voit que la bordure sur `<span>` est coupée au passage à la ligne.

{{EmbedGHLiveSample("css-examples/inline-formatting/break.html", '100%', 720)}}

Les marges, les bordures et le remplissage (_padding_) le long de la direction en ligne sont respectés. Dans l'exemple suivant, on peut voir comment sont ajoutés les marges, bordures et le remplissage à l'élément en ligne `<span>` qui a été ajouté.

{{EmbedGHLiveSample("css-examples/inline-formatting/mbp.html", '100%', 920)}}

> **Note :** Dans ces exemples, on utilise les propriétés logiques (relatives à la direction du flux avec le mode d'écriture et la directionnalité) (ex. {{cssxref("padding-inline-start")}} plutôt que {{cssxref("padding-left")}}) afin qu'elles s'appliquent le long de la direction en ligne, que le texte soit horizontal ou vertical. Pour en savoir plus sur ces propriétés, voir [les propriétés et les valeurs logiques en CSS](/fr/docs/Web/CSS/CSS_Logical_Properties).

## Alignement sur la direction de bloc (_block_)

Les boîtes en ligne peuvent être alignées sur la direction de bloc de différentes façons avec la propriété {{cssxref("vertical-align")}}. Celle-ci permettra d'aligner le contenu sur l'axe de bloc (lorsque le mode d'écriture est vertical, `vertical-align` ne permet pas d'aligner sur l'axe vertical !). Dans l'exemple qui suit, une portion de texte plus grande rend la boîte de ligne plus grande pour la première phrase. On peut alors utiliser `vertical-align` afin d'aligner les boîtes en ligne. L'exemple utilise initialement la valeur `top` mais vous pouvez le modifier en utilisant `middle`, `bottom` ou encore `baseline`.

{{EmbedGHLiveSample("css-examples/inline-formatting/align.html", '100%', 920)}}

## Alignement le long de la direction en ligne (_inline_)

S'il reste de l'espace le long de la direction en ligne, la propriété {{cssxref("text-align")}} permetra d'aligner le contenu des boîtes en lignes au sein des boîtes de ligne. Dans l'exemple qui suit, vous pouvez notamment changer la valeur de `text-align` afin d'utiliser `end`.

{{EmbedGHLiveSample("css-examples/inline-formatting/text-align.html", '100%', 920)}}

## Effets du flottement (`float`)

Les boîtes de ligne ont généralement la même taille sur l'axe en ligne (c'est-à-dire la même largeur quand on utilise un mode d'écriture horizontal ou la même hauteur si on utilise un mode d'écriture vertical). S'il existe un élément flottant ({{cssxref("float")}}) au sein du même contexte de formatage de bloc, cet élément entraînera la diminution de la taille des boîtes de ligne pour celles qui entourent l'élément flottant.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

## Voir aussi

- [Le contexte de formatage en bloc](/fr/docs/Web/CSS/Block_formatting_context)
- [Le modèle de formatage visuel](/fr/docs/Web/CSS/Modèle_de_mise_en_forme_visuelle)
