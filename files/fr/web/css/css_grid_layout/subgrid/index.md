---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
---

{{CSSRef}}

La valeur **`subgrid`** a été ajoutée par le module de spécification _CSS Grid Layout_ de niveau 2 pour les propriétés {{cssxref("grid-template-columns")}} et {{cssxref("grid-template-rows")}}. Dans ce guide, nous verrons comment utiliser cette valeur ainsi que les cas d'utilisation ou patrons de conception qui peuvent en bénéficier.

> **Attention :** Cette fonctionnalité est uniquement disponible dans Firefox Nightly à des fins de tests. Vous pouvez télécharger [Firefox Nightly](https://www.mozilla.org/firefox/channel/desktop/#nightly) afin de tester les exemples ci-après.

## Une introduction à `subgrid`

Lorsqu'on ajoute `display: grid` à un conteneur, seuls les descendants directs deviennent des éléments de grille et peuvent être placés sur la grille ainsi créée. Les enfants de ces descendants seront disposés selon le flux habituel.

On peut imbriquer des grilles en utilisant `display: grid` sur un descendant direct du conteneur de grille mais les grilles créées seront indépendantes. On ne pourra pas récupérer le dimensionnement des pistes de la grille parente pour l'utiliser dans la grille fille. Il est donc difficile d'aligner des objets de la grille fille sur la grille parente.

Si on utilise la valeur `subgrid` pour `grid-template-columns` et/ou `grid-template-rows`, on pourra utiliser les pistes de la grille parente à l'intérieur plutôt que de créer des pistes indépendantes.

Ainsi, si on utilise `grid-template-columns: subgrid` et que la grille imbriquée s'inscrit dans trois colonnes du parent, la grille imbriquée possèdera trois pistes, dimensionnées comme celles du parent. Les gouttières (_gaps_) sont également héritées mais il est possible de les surcharger avec une valeur {{cssxref("gap")}} différente. Les noms des lignes peuvent être passés du parent à la grille fille et la grille fille peut aussi déclarer ses propres noms de ligne.

## Les sous-grilles pour les colonnes

Dans l'exemple qui suit, on a une grille décomposée en neufs colonnes de `1fr` chacune et avec quatre lignes qui mesurent au moins `100px`.

On place un objet `.item` entre les colonnes 2 et 7 et entre les lignes 2 à 4. On indique que cet objet est lui-même une grille et on définit les pistes de colonnes comme sous-grille et on utilise des lignes normales. L'objet ainsi paramétré s'étalant sur 5 colonnes de la grille parente, cela signifie que la sous-grille possède cinq pistes pour les colonnes. On place alors un objet `.subitem` sur cette deuxième grille.

Les lignes horizontales de cet exemple ne sont pas une sous-grille et se comportent comme pour une grille imbriquée « classique ». La zone de la grille parente s'étend donc afin de pouvoir stocker le contenu de cette grille imbriquée.

{{EmbedGHLiveSample("css-examples/grid/subgrid/columns.html", '100%', 1200)}}

On notera que la numérotation recommence à l'intérieur de la grille imbriquée. La colonne n°1 de la sous-grille correspond donc ici à la colonne n°2 de la grille parente. Autrement dit, les numéros des colonnes et des lignes de la grille parente ne sont pas héritées via la sous-grille. Cela permet une disposition modulaire et indépendante de la position quant à la grille parente.

## Les sous-grilles pour les lignes

Dans l'exemple ci-après, on a la même disposition mais on utilise cette fois `subgrid` pour la propriété `grid-template-rows` et on définit explicitement des pistes pour les colonnes. Les colonnes se comportent donc comme pour une grille imbriquée mais les lignes de la sous-grille sont liées à celles de la grille parente.

{{EmbedGHLiveSample("css-examples/grid/subgrid/rows.html", '100%', 1200)}}

## Les sous-grilles sur deux dimensions

Bien entendu, on peut définir une sous-grille pour les lignes et pour les colonnes en même temps. Cela signifie que la sous-grille sera couplée à la grille parente pour les deux axes.

{{EmbedGHLiveSample("css-examples/grid/subgrid/both.html", '100%', 1200)}}

### Absence de grille implicite pour une sous-grille

S'il vous faut placer automatiquement des objets et que vous ne connaissez pas leur quantité, faites attention à l'utilisation des sous-grilles : celles-ci empêcheront la création de lignes supplémentaires pour afficher le contenu.

Pour mieux illustrer ce point, voyons le prochain exemple (on utilise le même parent et la même sous-grille qu'avant) où on essaie d'afficher 12 éléments automatiquement dans une grille qui contient uniquement 10 cellules. La sous-grille étant couplée sur les deux axes (lignes et colonnes), il n'y a aucune place restante pour les deux éléments restants et ils sont donc placés sur la dernière piste de la grille, comme indiqué dans la spécification.

{{EmbedGHLiveSample("css-examples/grid/subgrid/no-implicit.html", '100%', 1200)}}

Si on retire la valeur sur `grid-template-rows`, on permet alors la création de pistes implicites. Ainsi, même si on n'aura pas l'alignement avec les pistes de la grille parente, on pourra avoir autant de lignes que nécessaire pour afficher l'ensemble du contenu.

{{EmbedGHLiveSample("css-examples/grid/subgrid/implicit.html", '100%', 1200)}}

## Utilisation des gouttières et des sous-grilles

Si vous utilisez {{cssxref("gap")}}, {{cssxref("column-gap")}} ou {{cssxref("row-gap")}} sur la grille parente, celles-ci seront héritées par la sous-grille et vous aurez donc le même espacement entre les pistes dans la sous-grille et dans la grille parente. Dans certains cas, on peut cependant vouloir d'avoir des espacements différents ou aucun espacement. Pourcela, on pourra utiliser les propriétés `gap-*` sur le conteneur de grille de la sous-grille.

Dans l'exempel qui suit, la grille parente définit des gouttières de 20 pixels pour les lignes et les colonnes et pour la sous-grille, on fixe la propriété `row-gap` à `0`.

{{EmbedGHLiveSample("css-examples/grid/subgrid/gap.html", '100%', 1200)}}

Si on inspecte le résultat avec l'inspecteur de grille de Firefox, on pourra voir que l'espace auparavant occupé par la gouttière est partagé entre les cellules et permet d'agrandir la zone pour le contenu.

![The smaller item displays in the gap as row-gap is set to 0 on the subgrid.](gap.png)

## Les lignes nommées

Lorsqu'on utilise les grilles CSS, on peut fournir des noms aux lignes et positionner des objets sur la grille par rapport à ces noms plutôt qu'en utilisant les numéros de lignes. Les noms des lignes de la grille parente sont passés à la sous-grille et on peut donc placer des objets relativement à ces noms. Dans l'exempel qui suit, on a des lignes intitulées `col-start` et `col-end` sur la grille parente et on utilise ces noms pour placer un objet à l'intérieur de la sous-grille.

{{EmbedGHLiveSample("css-examples/grid/subgrid/line-names.html", '100%', 1200)}}

Il est aussi possible d'utiliser de nouveaux noms dans la sous-grille. Pour cela, on ajoutera une liste de noms entre crochets après le mot-clé `subgrid`. Si on disposait de 4 lignes sur la sous-grille, on pourrait alors écrire `grid-template-columns: subgrid [line1] [line2] [line3] [line4]`.

Les noms indiquées sur la sous-grille sont ajoutés à ceux déjà portés par la grille parente et on peut donc utiliser les uns ou les autres. Dans l'exemple suivant, on illustre ce point en positionnant un objet en utilisant deux noms : l'un provenant de la grille parente et l'autre provenant de la grille fille.

{{EmbedGHLiveSample("css-examples/grid/subgrid/adding-line-names.html", '100%', 1200)}}

## Utilisation des sous-grilles

Exception faite qu'il faille veiller au contenu qui ne pourrait pas être affiché dans une sous-grille, cette dernière se comporte généralement comme une grille imbriquée. La différence principale réside dans le dimensionnement des pistes qui peut provenir de la grille parente. Toutefois (et comme avec une simple grille imbriquée), la taille du contenu placé sur la sous-grille peut modifier le dimensionnement des pistes (lorsqu'on utilise un dimensionnement qui s'adapte au contenu). Ainsi, les pistes dimensionnées automatiquement s'agrandiront pour contenir les objets de la grille parente et aussi ceux de la sous-grille.

Une telle ressemblance entre `subgrid` et les grilles imbriquées peut faciliter le passage d'une méthode à l'autre. Ainsi, si on réalise qu'il faut une grille implicite sur les lignes, il suffit de retirer `subgrid` pour la propriété `grid-template-rows` (et éventuellement fournir une valeur à `grid-auto-rows` afin de contrôler le dimensionnement implicite).

## Spécifications

{{Specifications}}

## Voir aussi

- [Les concepts de bases des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#sous-grille)
