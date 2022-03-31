---
title: Concepts de bases pour CSS Scroll Snap
slug: Web/CSS/CSS_Scroll_Snap/Basic_concepts
tags:
  - CSS
  - CSS Scroll Snap
  - Guide
translation_of: Web/CSS/CSS_Scroll_Snap/Basic_concepts
original_slug: Web/CSS/CSS_Scroll_Snap/Concepts_de_base
---
{{CSSRef}}

[Le module de spécification CSS _Scroll Snap_](https://drafts.csswg.org/css-scroll-snap-1/) fournit des outils pour «&nbsp;accrocher&nbsp;» sur certains points lors du défilement dans un document. Un tel comportement peut s'avérer utile pour obtenir un résultat analogue à certaines applications (qu'elles soient mobiles ou non).

## Principes fondamentaux

Les propriétés principales définies par la spécification _Scroll Snap_ sont {{CSSxRef("scroll-snap-type")}} et {{CSSxRef("scroll-snap-align")}}. La propriété `scroll-snap-type` s'utilise sur [le conteneur de défilement (_scroll container_)](/fr/docs/Glossary/Scroll_container) et établit le type et la direction du défilement.

La propriété `scroll-snap-align` doit être utilisée sur les éléments fils afin de définir la position de défilement sur laquelle ils s'accrocheront. L'exemple qui suit illustre des positions d'accroche sur l'axe vertical et `scroll-snap-align` est utilisée sur l'élément {{HTMLElement("section")}} afin de définir le point où devrait s'arrêter le défilement.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Utiliser `scroll-snap-type`

La propriété {{CSSxRef("scroll-snap-type")}} doit connaître la direction selon laquelle s'effectue le défilement et l'accroche. Cette direction peut s'exprimer avec des valeurs physiques : `x` ou `y` ou avec des valeurs logiques : `block` ou `inline`. On peut également utiliser le mot-clé `both` afin d'avoir un défilement et des accroches selon les deux axes.

Cette propriété s'utilise également avec les mots-clés `mandatory` ou `proximity`. Le mot-clé `mandatory` indique au navigateur que le contenu _doit_ s'accrocher à un point donné, quelle que soit la position du défilement. Le mot-clé `proximity` indique que le contenu _peut_ s'accrocher sur un point mais que ce n'est pas obligatoire.

La valeur `mandatory` permettra d'obtenir une expérience cohérente au sens où l'utilisateur saura que le navigateur accrochera le contenu à chaque point. Cela signifie qu'on peut être certain que quelque chose sera en haut de l'écran à la fin du défilement. Toutefois, cela peut entraîner des problèmes lorsqu'un portion du contenu est trop grande et qu'on obtient un scénario où il est impossible de défiler afin de voir une portion donnée du contenu. Ainsi, on utilisera `mandatory` dans des situations maîtrisées où la taille du contenu sur un écran est connue.

La valeur `proximity` déclenchera une accroche lorsque la position du défilement est proche du point d'accroche. C'est le navigateur qui décidera de la distance seuil exacte pour laquelle déclencher l'accroche ou non. Dans l'exemple qui suit, vous pouvez passer de `mandatory` à `proximity` afin d'observer l'effet obtenu.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

## Utiliser `scroll-snap-align`

La propriété {{CSSxRef("scroll-snap-align")}} peut être utilisée avec les valeurs `start`, `end` ou `center`. Ces valeurs indiquent l'emplacement où le contenu doit s'accrocher sur le conteneur de défilement. Vous pouvez modifier la valeur `scroll-snap-align` dans l'exemple interactif qui suit pour voir le résultat obtenu.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

## Ajuster la position de défilement avec un remplissage

Si on ne souhaite pas que le contenu s'accroche exactement sur le bord du conteneur de défilement, on pourra utiliser la propriété {{CSSxRef("scroll-padding")}} (ou les propriétés détaillées équivalentes) afin de définir un remplissage (_padding_) pour décaler la position du contenu.

Dans l'exemple qui suit, on paramètre `scroll-padding` à 40 pixels. Lorsqu'on accroche au début de la deuxième et de la troisième section, le défilement s'arrête à 40 pixels du début de la section. Vous pouvez adapter la valeur de `scroll-padding` afin de voir l'impact sur le décalage obtenu.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

Cette propriété s'avère particulièrement utile lorsqu'on a un élément fixe (une barre de navigation par exemple) qui pourrait être chevauchée par du contenu qui défile. En utilisant `scroll-padding`, on peut réserver un espace pour cet élément fixe. Dans l'exemple suivant, on peut voir le titre `<h1>` qui reste à l'écran et le contenu qui défile en dessous de ce titre. Sans le remplissage, le titre aurait été chevauché par une partie du contenu lors de l'accroche.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Ajouter des marges sur les éléments fils du défilement

Une autre méthode permettant d'obtenir un espace entre le bord du conteneur et les éléments fils est d'utiliser la propriété {{CSSxRef("scroll-margin")}} sur l'élément fils. `scroll-margin` définit principalement le décalage par rapport à la boîte définie. Vous pouvez manipuler cette propriété dans l'exemple interactif suivant :

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## La propriété `scroll-snap-stop`

La propriété {{CSSxRef("scroll-snap-stop")}} indique au navigateur qu'il devrait arrêter le défilement pour chaque point d'accroche. Pour nos exemples précédents, cela signifie qu'on s'arrêtera nécessairement au début de chaque section. Cette propriété dispose de moins d'implémentations dans les navigateurs.

Cela peut être utile pour s'assurer que les utilisateurs consultent chaque section sans louper du contenu par inadvertence. En revanche, cela peut rendre le défilement plus lent et ralentir considérablement un utilisateur qui chercherait une section donnée.

> **Note :** La propriété `scroll-snap-stop` est actuellement mise en question dans la version _Candidate Recommendation_ de la spécification et pourrait être retirée.

## Compatibilité des navigateurs

Les pages de chaque propriété détaillent la compatibilité des différents navigateurs. On notera qu'avant Firefox 68, une ancienne version de la spécification était implémentée. Vous pouvez [poursuivre avec le guide suivant](/fr/docs/Web/CSS/CSS_Scroll_Snap/Browser_compat) pour en savoir plus sur l'écriture de code compatible entre les différents navigateurs qui implémentent différentes versions de la spécification.
