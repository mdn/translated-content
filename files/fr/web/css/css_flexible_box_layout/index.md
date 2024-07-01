---
title: Disposition des boîtes flexibles CSS
slug: Web/CSS/CSS_flexible_box_layout
---

{{CSSRef}}

**Le module de disposition des boîtes flexibles CSS** (_CSS Flexible Box Layout_) est un module de CSS qui définit un modèle de boîtes optimisé pour la conception des interfaces utilisateurs. En utilisant le modèle des boîtes flexibles, les éléments d'une conteneur flexible peuvent être disposés dans n'importe quelle direction et étendre leurs dimensions (pour remplir un espace vide) ou se réduire pour éviter de dépasser en dehors de l'élément parent. On peut facilement manipuler les alignements horizontal et vertical des éléments fils. On peut aussi imbriquer plusieurs niveaux de boîtes flexibles afin de construire des dispositions en deux dimensions..

## Exemple

Dans l'exemple qui suit, on utilise `display: flex` pour un conteneur. Cela signifie que les trois éléments fils deviennent des éléments flexibles. La propriété `justify-content` a été paramétrée avec la valeur `space-between` afin d'espacer les éléments de façon égale le long de l'axe principal. Ainsi, on a le même espace à droite et à gauche de chaque élément et, aux extrêmités du conteneur, les bords des éléments fils qui sont alignés avec les bords du conteneur. On peut également voir que les éléments sont étirés le long de l'axe orthogonal (_cross axis_) car la valeur par défaut de la propriété `align-items` est `stretch`. Ainsi, les éléments flexibles s'étirent pour occuper toute la hauteur du conteneur flexible, ils sont donc aussi grands que le plus grand des éléments.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}

## Référence

### Propriétés CSS

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### Propriétés relatives à l'alignement

Les propriétés `align-content`, `align-self`, `align-items` et `justify-content` étaient initialement définies dans la spécification Flexbox mais sont désormais définies dans la spécification sur l'alignement des boîtes et la spécification Flexbox fait référence à cette nouvelle spécification pour les définitions à jour. Des propriétés d'alignement additionnelles ont également été définies dans le module de spécification _Box Alignment_.

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-content")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Termes du glossaire

- [Flexbox / boîte flexible](/fr/docs/Glossary/Flexbox)
- [Conteneur flexible](/fr/docs/Glossary/Flex_Container)
- [Objet flexible](/fr/docs/Glossary/Flex_Item)
- [Axe principal](/fr/docs/Glossary/Main_Axis)
- [Axe secondaire](/fr/docs/Glossary/Cross_Axis)

## Guides

- [Les concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)
  - : Un aperçu des différentes fonctionnalités offertes par les boîtes flexibles.
- [Les liens entre _flexbox_ et les autres méthodes de disposition](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Liens_entre_flexbox_et_les_autres_dispositions)
  - : Comment _flexbox_ s'articule avec les autres méthodes de disposition et les différents modules de spécification CSS.
- [L'alignement des éléments au sein d'un conteneur flexible](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible)
  - : Le fonctionnement des propriétés d'alignement des boîtes dans le contexte des boîtes flexibles.
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Ordonner_éléments_flexibles)
  - : Ce guide explique les différentes méthodes qui permettent de modifier l'ordre et la direction des éléments dans le conteneur flexible et aborde également les problèmes que cela peut causer.
- [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Contrôler_les_proportions_des_boîtes_flexibles_le_long_de_l_axe_principal)
  - : Cet article explique le fonctionnement des propriétés `flex-grow`, `flex-shrink` et `flex-basis`.
- [Maîtriser le passage à la ligne des éléments flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Maîtriser_passage_à_la_ligne_des_éléments_flexibles)
  - : Comment créer des conteneur flexibles qui s'étendent sur plusieurs lignes et contrôler l'affichage des éléments sur ces lignes.
- [Les cas d'utilisation classiques des boîtes flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Cas_utilisation_flexbox)
  - : Des _design patterns_ pouvant être résolus avec les boîtes flexibles.
- [La rétrocompatibilité de _flexbox_](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Rétrocompatibilite_de_flexbox)
  - : L'état de la compatibilité des navigateurs pour les boîtes flexibles, les différents problème d'interopérabilité, la gestion des anciens navigateurs et l'évolution de la spécification.

## Spécifications

{{Specifications}}

## Voir aussi

- [Flexbugs : une liste, maintenue par la communauté, des différents bugs des navigateurs relatifs aux boîtes flexibles et les éventuelles méthodes de contournements associées](https://github.com/philipwalton/flexbugs)
- [Mixins multi-navigateurs pour flexbox](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Mixins) : cet article fournit un ensemble de mixins pour obtenir l'effet des flexbox de façon homogène sur les différents navigateurs qui ne supportent pas la syntaxe moderne pour les boîtes flexibles
