---
title: Concepts de base des propriétés et valeurs logiques
slug: Web/CSS/CSS_Logical_Properties/Basic_concepts
tags:
  - CSS
  - Guide
  - Propriété logique
translation_of: Web/CSS/CSS_Logical_Properties/Basic_concepts
original_slug: Web/CSS/CSS_Logical_Properties/Concepts_de_base
---
{{CSSRef}}

La spécification relative aux propriétés et valeurs logiques introduit une correspondance relative au flux pour de nombreuses propriétés et valeurs CSS. Dans cet article, nous verrons une introduction de cette spécification et expliquerons les propriétés et valeurs relatives au flux.

## Quel intérêt pour les propriétés logiques ?

Historiquement, CSS permettait de dimensionner des objets selon les dimensions physiques de l'écran. On pouvait alors décrire des boîtes avec une certaine largeur ({{CSSxRef("width")}}) et une certaine hauteur ({{CSSxRef("height")}}), positionner les éléments à partir du haut (`top`) et de la gauche (`left`), faire flotter les objets, créer des bordures, des marges, du remplissage (_padding_) en haut, à droite, en bas et à gauche (resp. `top`, `right`, `bottom`, `left`, etc.). La spécification [sur les propriétés et valeurs logiques](https://drafts.csswg.org/css-logical/) définit des correspondances entres ces valeurs physiques et des valeurs logiques, relatives au flux : `start` et `end` plutôt que `left` et `right` ou `top` et `bottom`.

Prenons un exemple pour comprendre la nécessité de telles propriétés et valeurs logiques. On dispose d'une grille CSS et le conteneur de la grille possède une certaine largeur. On y utilise {{CSSxRef("align-self")}} et {{CSSxRef("justify-self")}} afin d'aligner les éléments à l'intérieur de la grille. Ces propriétés sont relatives au flux : `justify-self: start` aligne l'élément au début de l'axe en ligne et `align-self: start` aligne l'élément au début de l'axe de bloc.

![A grid in a horizontal writing mode](grid-horizontal-width-sm.png)

Si on change le mode d'écriture de ce composant grâce à la propriété {{CSSxRef("writing-mode")}} et avec la valeur `vertical-rl`, l'alignement continue de fonctionner de la même façon : l'axe en ligne est désormais l'axe vertical et l'axe de bloc court horizontalement. La grille n'a cependant pas la même allure car la largeur est nécessairement définie pour l'axe horizontal : de façon physique et pas relativement au flux de texte.

![A grid in vertical writing mode.](grid-vertical-width-sm.png)

Si on avait utilisé la propriété logique {{CSSxRef("inline-size")}} plutôt que `width`, le composant aurait gardé les mêmes proportions, quel que soit le mode d'écriture utilisé.

![A grid layout in vertical writing mode](grid-vertical-inline-size-small.png)

Vous pouvez essayer ces différentes valeurs dans l'exemple qui suit et notamment modifier la propriété `writing-mode` pour la passer de `vertical-rl` à `horizontal-tb` sur le sélecteur `.box` afin d'observer la façon dont les différentes propriétés modifient la disposition.

{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}

Lorsqu'on travaille sur un site où on utilise un mode d'écriture qui n'est pas horizontal et progressant du haut vers le bas ou qu'on travaille sur un concept créatif, pouvoir utiliser des concepts relatifs au flux plutôt que des valeurs géométriques absolues.

## Axe de bloc et axe en ligne

Lorsqu'on travaille avec les propriétés et les valeurs logiques, il y a deux concepts majeurs : l'axe de bloc et l'axe en ligne qui sont les deux dimensions de l'espace. Comme nous l'avons vu avant, les nouvelles méthodes de disposition CSS (comme les boîtes flexibles et les grilles CSS) utilisent les concepts de `block` et `inline` plutôt que `right` et `left`/`top` et `bottom` pour l'alignement des objets.

La dimension en ligne (_inline_) correspond à l'axe selon lequel les lignes de texte sont écrites pour ce mode d'écriture. Ainsi, pour un document français, le texte sera écrit horizontalement de gauche à droite et pour un document arabe écrit de droite à gauche, la dimension en ligne est l'axe horizontal. Si on utilise un mode d'écriture vertical (le japonais par exempl), la dimension en ligne sera verticale car les lignes de texte de ce mode sont écrites verticalement.

La dimension de bloc correspond à l'axe orthogonal et généralement à la direction selon laquelle les blocs de texte (les paragraphes) sont agencés. En français ou en arabe, cet axe est vertical, pour les modes d'écritures écrits verticalement, cet axe est horizontal.

Le diagramme ci-après illustre l'organisation des axes en ligne et des axes de bloc pour un mode d'écriture horizontal :

![diagram showing the inline axis running horizontally, block axis vertically.](mdn-horizontal.png)

Le diagramme suivant illustre l'axe en ligne et l'axe de bloc pour un mode d'écriture vertical :

![Diagram showing the block axis running horizontally the inline axis vertically.](mdn-vertical.png)

## Prise en charge des navigateurs

Les propriétés et valeurs logiques peuvent être catégorisées selon différents groupes, notamment pour la compatibilité des navigateurs. Certaines des propriétés logiques sont essentiellement des correspondances de propriétés physiques équivalentes ({{CSSxRef("inline-size")}} sera la propriété logique pouvant correspondre à la propriété physique {{CSSxRef("width")}} et {{CSSxRef("margin-inline-start")}} la propriété physique correspondant à {{CSSxRef("margin-left")}}). La prise en charge de ces propriétés logiques correspondant à des propriétés physiques est plutôt correcte pour les navigateurs récents, vous pouvez consulter les pages [de référence pour ces propriétés sur MDN](/en-US/docs/Web/CSS/CSS_Logical_Properties#reference), seul Edge ne prend pas en charge ces propriétés à date (décembre 2018).

On a également un groupe de propriétés qui ne possèdent pas de correspondances directes avec les propriétés physiques. Ces propriétés sont des propriétés raccourcies qui font référence aux deux extrêmités d'un axe. Ainsi {{CSSxRef("margin-block")}} sera une propriété raccourcie pour {{CSSxRef("margin-block-start")}} et {{CSSxRef("margin-block-end")}}. Ce deuxième groupe n'est actuellement pas pris en charge par les navigateurs.

> **Note :** Le groupe de travail CSS est actuellement en réflexion pour les propriétés raccourcies avec quatre valeurs pour les propriétés logiques. Autrement dit, comment définir les marges logiques de la façon dont on utilise la propriété {{CSSxRef("margin")}}. Il faudrait en effet une sorte de modificateur si on continue d'utiliser le nom `margin` pour les propriétés relatives au flux. Pour en savoir plus sur les suggestions et commentaires, vous pouvez consulter l'_issue_ GitHub [n°1282](https://github.com/w3c/csswg-drafts/issues/1282).

### Tester la compatibilité des navigateurs

Il est possible de tester la prise en charge des propriétés et valeurs logiques en utilisant une requête de fonctionnalité (`@supports`). Ainsi, on pourrait définit une propriété {{CSSxRef("width")}}, tester si {{CSSxRef("inline-size")}} est prise en charge et, le cas échéant, définir `width` avec `auto` et `inline-size` avec la valeur initialement utilisée pour `width`.

{{EmbedGHLiveSample("css-examples/logical/intro-feature-queries.html", "100%", 700)}}

## Voir aussi

- [L'alignement des boîtes pour une disposition en grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [L'alignement des boîtes pour une disposition flexible](/fr/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Comprendre les propriétés et les valeurs logiques](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/)
- [Les modes d'écriture](/fr/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
