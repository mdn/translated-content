---
title: La disposition en flux et le dépassement
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow
original_slug: Web/CSS/CSS_Flow_Layout/Disposition_flux_et_dépassement
---
{{QuickLinksWithSubpages("/fr/docs/Web/CSS/CSS_Flow_Layout/")}}

Lorsque le conteneur est trop petit pour son contenu, on obtient une situation de dépassement. Le comportement du dépassement est importante dès qu'on manipule des objets CSS dont la taille est contrainte. Dans ce guide, nous verrons le fonctionnement du dépassement avec le flux normal.

## Qu'est-ce que le dépassement ?

Pour créer un exemple de dépassement, prenons un élément avec une hauteur et une largeur fixés puis ajoutons un contenu trop important dans la boîte :

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

Le contenu « arrive » dans la boîte puis remplit celle-ci et ensuite, il dépasse en affichant du contenu en dehors de la boîte éventuellement en dessous du contenu environnant. Pour contrôler le comportement du dépassement, on pourra utiliser la propriété [`overflow`](/fr/docs/Web/CSS/overflow). La valeur initiale de cette propriété est `visible` et c'est pour cela qu'on voit le contenu dépasser.

## Contrôler le dépassement

La propriété `overflow` possède d'autres valeurs qui permettent de contrôler le dépassement. Afin de masquer le contenu qui dépasse, on peut utiliser la valeur `hidden`. Avec cette valeur, une partie du contenu peut ne pas être visible.

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Avec la valeur `scroll`, le contenu est dans la boîte et des barres de défilement sont ajoutées à la boîte afin de pouvoir défiler et voir le contenu. Les barres de défilement seront ajoutées, même si le contenu « tient » dans la boîte.

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Avec la valeur `auto`, le contenu sera affiché sans barre de défilement s'il tient dans la boîte. S'il dépasse, des barres de défilement sont ajoutées. En comparant l'exemple précédent avec celui qui suit, on peut voir que `overflow: scroll` ajoute des barres de défilement verticales et horizontales (même s'il y a uniquement besoin du défilement vertical). Avec la valeur `auto`, seules les barres de défilement nécessaires sont ajoutées.

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

Comme nous l'avons vu plus tôt, toute valeur qui est différente de `visible` créera un nouveau contexte de formatage de bloc.

> **Note :** Dans [le brouillon du module de spécification _Overflow_ de niveau 3](https://www.w3.org/TR/css-overflow-3/), une valeur est ajoutée : `overflow: clip`. Cette valeur agira comme `overflow: hidden` mais ne permettra de faire défiler le contenu à l'aide de code. La boîte ne pourra pas défiler. De plus, cette valeur ne crée pas de contexte de formatage de bloc.

Pour être tout à fait précis, la propriété `overflow` est une [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) pour les propriétés [`overflow-x`](/fr/docs/Web/CSS/overflow-x) et [`overflow-y`](/fr/docs/Web/CSS/overflow-y). Si on fournit une valeur, celle-ci sera utilisée pour les deux axes. On peut aussi fournir deux valeurs, auquel cas la première sera utilisée pour `overflow-x` et la seconde pour `overflow-y`. Dans l'exemple qui suit, seule `overflow-y: scroll` est utilisée et la barre de défilement horizontale superflue n'est pas ajoutée.

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Les propriétés relatives

Dans le guide sur [les modes d'écriture et la disposition en flux](/fr/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes), nous avons étudié des propriétés plus récentes `block-size` et `inline-size` qui permettent de raisonner avec les modes d'écriture plutôt qu'avec les dimensions physiques de l'écran. La spécification de niveau 3 Overflow inclut également les propriétés correspondantes pour le dépassement : [`overflow-block`](/fr/docs/Web/CSS/@media/overflow-block) et [`overflow-inline`](/fr/docs/Web/CSS/@media/overflow-inline). Ces propriétés « logiques » correspondent aux propriétés « physiques » `overflow-x` et `overflow-y` où la correspondance varie en fonction du mode d'écriture du document.

À l'heure où nous écrivons ces lignes, ces deux propriétés ne sont pas implémentées par les navigateurs et il faut donc s'en tenir aux propriétés physiques et ajuster selon le mode d'écriture.

## Gérer le dépassement

Dans la spécification de niveau 3 sur le dépassement, certaines propriétés aident à améliorer l'apparence du contenu lors d'un dépassement.

### Dépassement sur l'axe en ligne

La propriété [`text-overflow`](/fr/docs/Web/CSS/text-overflow) indique comment afficher le texte qui dépasse sur l'axe en ligne. La valeur `clip` qui coupe le contenu qui dépasse, c'est la valeur initiale et le comportement par défaut. La valeur `ellipsis` permet d'afficher une ellipse qui peut être adaptée en fonction de la langue ou du mode d'écriture utilisé.

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Dépassement sur l'axe de bloc

Il existe également une proposition pour une propriété `block-overflow`. Toutefois, celle-ci (ainsi que son nom) est toujours en discussion. La proposition consisterait à pouvoir afficher une ellipse lorsque le contenu dépasse sur l'axe de bloc.

Cette propriété serait par exemple utile lorsqu'on a une liste d'article avec une boîte pour chaque article dont la hauteur est fixée. Si le texte qui dépasse est masqué, ce n'est pas nécessairement évident qu'il y a du contenu supplémentaire et qu'il faut cliquer pour le lire. Ajouter une ellipse rendrait ce dépassement plus perceptible.

## Résumé

Qu'on manipule un média « continu » sur le Web ou un format paginé (impression ou EPUB), il est utile de comprendre la façon dont le dépassement agit, quelle que soit la méthode de dépassement. En comprenant comment le dépassement fonctionne avec le flux normal, ce devrait être plus simple de comprendre le fonctionnement du dépassement pour les autres méthodes comme les grilles ou les boîtes flexibles.
