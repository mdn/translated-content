---
title: Être ou ne pas être dans le flux
slug: Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow
original_slug: Web/CSS/CSS_Flow_Layout/Dans_le_flux_ou_en_dehors
---
{{CSSRef}}

Dans [le précédent guide](/fr/docs/Web/CSS/CSS_Flow_Layout/Disposition_de_bloc_en_ligne_avec_flux_normal), nous avons vu le fonctionnement de la disposition en ligne et en bloc dans le flux normal. Tous les éléments qui sont « dans » le flux seront disposés grâce à cette méthode.

Dans l'exemple qui suit, on a un titre, un paragraphe, une liste puis un paragraphe final qui contient un élément `strong`. Le titre et les paragraphes sont des éléments de blocs et l'élément `strong` est un élément en ligne. La liste est affichée en utilisant les boîtes flexibles afin d'avoir les éléments de la liste sur une même ligne mais cette liste contribue bien à la disposition en ligne et en bloc car le conteneur a un type `display` externe qui vaut `block`.

{{EmbedGHLiveSample("css-examples/flow/in-flow/in-flow.html", '100%', 800)}}

Dans ce cas, on peut dire que tous les éléments sont « dans le flux » et ils apparaissent sur la page selon le même ordre que le document source.

## Retirer un élément du flux

Tous les éléments d'un document sont dans le flux à l'exception :

- des éléments flottants
- des éléments avec `position: absolute` ou avec `position: fixed`
- de l'élément racine (`html`)

Les éléments qui ne sont pas dans le flux créent un nouveau contexte de formatage de bloc (ou _Block Formatting Context_ (BFC) en anglais) et tout ce qui est dans ce contexte peut être vu comme une disposition imbriquée, séparée et indépendante du reste de la page. L'élément racine est ainsi en dehors du flux car c'est le conteneur qui contient l'intégralité du document et qui fournit le contexte de formatage de bloc pour l'ensemble du document.

### Les éléments flottants

Dans cet exemple, on a un élément `div` puis deux paragraphes. On a ajouté une couleur d'arrière-plan sur les paragraphes puis on a appliqué un flottement à gauche pour l'élément `div`. L'élément `div` est désormais en dehors du flux.

Un élément flottant est d'abord disposé à l'endroit où il aurait été dans le flux normal puis il est retiré du flux et déplacé. Ici, il est déplacé le plus à gauche possible.

{{EmbedGHLiveSample("css-examples/flow/in-flow/float.html", '100%', 800)}}

On peut voir que la couleur du paragraphe suivant s'étend en dessous. Seules les boîtes de ligne du paragraphe ont été raccourcies et causent le passage à la ligne du contenu autour de l'élément flottant. La boîte du paragraphe s'affiche toujours selon les règles du flux normal. C'est pour cela qu''il faut ajouter une marge autour de l'élément flottant si on veut créer un espace autour. Avec une marge, on repoussera les boîtes de lignes adjacentes. Il n'est pas possible d'appliquer quoi que ce soit au contenu dans le flux pour obtenir le même effet.

### Le positionnement absolu

En utilisant `position: absolute` ou `position: fixed` sur un élément, celui-ci est retiré du flux et tout l'espace qu'il aurait occupé est retiré. Dans l'exemple ci-après, on a trois paragraphes et le deuxième est ciblé avec `position` `absolute` et décalé avec les valeurs `top: 30px` et `right: 30px`. Cet élément est retiré du flux du document.

{{EmbedGHLiveSample("css-examples/flow/in-flow/abspos.html", '100%', 700)}}

Utiliser `position: fixed` retire également un objet de flux. Dans ce cas, les décalages seront calculés relativement à la zone d'affichage (_viewport_) plutôt que par rapport au bloc englobant.

Lorsqu'on retire un élément du flux grâce au positionnement, il faut également gérer les cas où le contenu peut se superposer. Lorsqu'un élément est en dehors du flux, les autres éléments ne « sauront » plus qu'il est là et ne seront pas déplacés pour lui laisser la place.

### Le positionnement relatif et le flux

Si on fournit un positionnement relatif en appliquant `position: relative` à un élément, celui-ci reste dans le flux mais on peut alors utiliser des décalages pour le déplacer. Toutefois, l'espace initialement occupé par l'élément est toujours réservé, comme on peut le voir dans l'exemple qui suit.

{{EmbedGHLiveSample("css-examples/flow/in-flow/relative.html", '100%', 800)}}

Dès qu'on retire ou qu'on décale un élément de son emplacement dans le flux normal, il faut s'attendre à devoir gérer le contenu environnant pour éviter les chevauchements. On pourra par exemple utiliser les flottements ou s'assurer que l'élément utilisant `position: absolute` n'est pas sur un autre contenu. C'est pour ces raisons que les méthodes qui retirent les éléments du flux doivent être utilisées avec circonspection.

## Résumé

Dans ce guide, nous avons vu les différentes façons qui permettent de retirer un élément du flux afin d'obtenir certains positionnements spécifiques. Dans le prochain guide, nous verrons un concept similaire, celui de [contexte de formatage de bloc](/fr/docs/Web/CSS/Block_formatting_context) dans [Explications relatives aux contextes de formatage](/fr/docs/Web/CSS/CSS_Flow_Layout/Explications_contextes_formatage).

## Voir aussi

- [En apprendre plus sur le positionnement](/fr/docs/Apprendre/CSS/CSS_layout/Le_positionnement)
