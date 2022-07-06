---
title: Mettre en forme les colonnes
slug: Web/CSS/CSS_Columns/Styling_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
translation_of: Web/CSS/CSS_Columns/Styling_Columns
original_slug: Web/CSS/CSS_Columns/Mettre_en_forme_les_colonnes
---
{{CSSRef}}

Les boîtes de colonne créées au sein des conteneurs multi-colonnes sont des boîtes anonymes et leur mise en forme est donc limitée. Elle n'est toutefois pas inexistante. Dans ce guide nous verrons comment modifier l'espace entre les colonnes et comment mettre en forme une ligne entre les colonnes.

## Peut-on mettre en forme les boîtes des colonnes ?

Malheureusement, ce n'est pas possible actuellement. Il est impossible de cibler les boîtes anonymes des colonnes de quelque façon que ce soit. On ne peut donc pas changer la couleur d'arrière-plan d'une colonne donnée ou agrandir une colonne plus qu'une autre. De futures versions du module de spécification permettront peut-être de réaliser cela un jour mais nous devons pour le moment nous cantonner à paramétrer l'espacement entre les colonnes et à mettre en forme les lignes séparatrices entre les colonnes.

## L'espaceement : la propriété `column-gap`

L'espacement entre les colonnes est contrôlé par la propriété `column-gap`. Cette propriété était initialement définie dans le module de spécification _Multi-column Layout_ mais est désormais définie dans le module de spécification _[Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)_ (dont le but est d'unifier la gestion des espacements entre les boîtes, que ce soit pour les colonnes ou pour d'autres types de disposition telles que [les grilles CSS](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)).

Dans une disposition multi-colonne, la valeur initiale de la propriété `column-gap` est `1em`. Cela signifie que les colonnes ne se touchent pas les unes les autres. Pour les autres méthodes de disposition, la valeur initiale de `column-gap` est 0. Le mot-clé `normal` est une valeur qui permet d'obtenir un écart de 1em.

Il est possible de modifier l'espacement en utilisant n'importe quelle unité de longueur pour `column-gap`. Dans l'exemple qui suit, on a ainsi paramétré `column-gap` avec la valeur 40px.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

Les valeurs autorisées pour `column-gap` sont de type `<length-percentage>`, cela signifie que les pourcentages sont également autorisés. Lorsque de telles valeurs sont utilisées, elles sont calculées relativement à la largeur du conteneur multi-colonnes.

## Créer un délimiteur entre les colonnes : `column-rule`

La spécification définit les propriétés `column-rule-width`, `column-rule-style` and `column-rule-color` et fournit une propriété raccourcie `column-rule`. Ces propriétés fonctionnent de la même façon que les propriétés relatives à la bordure. Toute valeur valide pour `border-style` pourra être utilisée pour `column-rule-style`.

Ces propriétés sont appliquées à l'élément qui est le conteneur multi-colonnes. Aussi, toutes les colonnes disposeront du même délimiteur. Les lignes sont uniquement dessinées entre les colonnes et pas sur les bords extérieurs. Les lignes sont également uniquement dessinées entre les colonnes qui ont du contenu.

Dans le prochain exemple, on a ajouté une ligne en pointillée, épaisse de 5 pixels et dont la couleur est `rebeccapurple`, sans utiliser la propriété raccourcie.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

On notera que la ligne n'occupe pas d'espace supplémentaire. Autrement dit, une ligne plus épaisse ne « repoussera » pas les colonnes de part et d'autre. La ligne est superposée sur l'espace occupé par l'espacement entre les colonnes.

Dans le prochain exemple, on utilise une ligne très large de 40 pixels et un espacement qui mesure uniquement 10 pixels. On peut alors voir que la ligne est dessinée sous le contenu des colonnes. Pour avoir un espace de chaque côté de la ligne, il faut avoir un espacement supérieur à 40 pixels.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## Résumé

Voici comment mettre en forme les colonnes avec les contraintes actuelles. Dans le prochain guide, nous verrons comment [propager les éléments du conteneur sur l'ensemble des colonnes](/fr/docs/Web/CSS/CSS_Columns/Spanning_Columns).
