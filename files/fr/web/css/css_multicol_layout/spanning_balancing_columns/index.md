---
title: Répartir et équilibrer le contenu entre les colonnes
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
---

{{CSSRef}}

Dans ce guide, nous verrons comment répartir les éléments sur plusieurs colonnes et comment contrôler le remplissage des colonnes.

> **Note :** Les fonctionnalités décrites dans cet article ne sont pas aussi bien prises en charge que celles décrites dans les deux articles précédents. Pour plus d'informations, nous vous invitons à vous référer aux tableaux de compatibilité à la fin des pages décrivant chacune des propriétés.

## Étendre sur plusieurs colonnes

Afin qu'un élément s'étende sur plusieurs colonnes, on peut utiliser la propriété {{cssxref("column-span")}} avec la valeur `all`. Ainsi, l'élément concerné s'étendra sur l'ensemble des colonnes.

N'importe quel élément descendant du conteneur multi-colonnes peut être étendu de cette façon, que ce soit un titre qui est un élément fils direct ou un titre contenu dans une section contenue dans le conteneur.

Dans l'exemple qui suit, on a `column-span: all` appliqué sur l'élément `h2` qui s'étend ainsi sur toutes les colonnes.

{{EmbedGHLiveSample("css-examples/multicol/spanning/h2-span.html", '100%', 800)}}

Dans ce deuxième exemple, le titre est à l'intérieur de l'élément {{HTMLElement("article")}} mais le contenu est bien réparti comme voulu.

{{EmbedGHLiveSample("css-examples/multicol/spanning/nested-h2-span.html", '100%', 800)}}

Lorsqu'un élément est étendu, il brise le flux des colonnes et un nouvel ensemble de boîtes de colonnes sont créées. Ce n'est pas le contenu qui « reprend » sous l'élément étendu.

### Les limites de `column-span`

Avec la spécification de niveau 1, seules deux valeurs sont autorisées pour `column-span` : `none` qui est la valeur initiale et qui indique que l'élément ne s'étendra pas (il restera sur une colonne) et `all` qui indiquera que l'élément s'étendra sur l'ensemble des colonnes. Ainsi, on ne pourra pas étendre spécifiquement un élément sur deux ou trois colonnes.

### Quelques points d'attention

Si l'élément qui s'étend est à l'intérieur d'un élément qui possède des marges, du remplissage et une bordure ou une couleur d'arrière-plan, on pourra avoir l'élément qui s'étend et qui recouvre le reste. Aussi, attention à bien gérer ce cas lorsqu'on étend un élément sur plusieurs colonnes.

{{EmbedGHLiveSample("css-examples/multicol/spanning/mpb-span.html", '100%', 800)}}

De plus, si un élément qui s'étend sur les colonnes se retrouve plus loin dans le contenu, on peut avoir un comportement hasardeux s'il n'y a pas assez de contenu après l'élément étendu pour créer d'autres colonnes. Aussi, mieux vaudra utiliser `column-span` avec précaution pour éviter ces effets indésirables.

## Équilibrer et remplir les colonnes

Lorsque toutes les colonnes possèdent environ la même quantité de contenu, on parle d'un ensemble équilibré. On pourra jouer sur le remplissage et l'équilibrage des colonnes lorsque la quantité de contenu est inférieure à la quantité d'espace fournie, notamment lorsque le conteneur a une hauteur donnée.

La valeur initiale de la propriété {{cssxref("column-fill")}}, dans une disposition multi-colonnes, est `balance`. Cette valeur signifie que les colonnes doivent être aussi équilibrées que possible. Pour les contextes fragmentés tels que [les médias paginés](/fr/docs/Web/CSS/CSS_Pages), seul le dernier fragment est équilibré. Cela signifie que c'est sur la dernière page du document que l'ensemble des colonnes sera équilibré.

La valeur `balance-all` permet quant à elle d'avoir des colonnes équilibrées sur l'ensemble des fragments (et pas uniquement sur le dernier).

Dans cet exemple, on a des colonnes qui contiennent une image et du texte qui sont équilibrées. L'image ne peut pas être divisée et est placée dans la première colonne puis les colonnes suivantes contiennent du texte sur la même hauteur que l'image.

{{EmbedGHLiveSample("css-examples/multicol/balancing/balance.html", '100%', 550)}}

`auto` est une autre valeur qui peut être utilisée avec `column-fill`. Avec cette valeur, plutôt que d'équilibrer les colonnes, celles-ci sont remplies les unes après les autres. Dans ce dernier exemple, on a modifié `column-fill` pour utiliser `auto` et les colonnes sont désormais remplies dans l'ordre en suivant la hauteur du conteneur multi-colonnes. On a ainsi quelques colonnes vides à la fin.

{{EmbedGHLiveSample("css-examples/multicol/balancing/auto.html", '100%', 550)}}

On notera que l'équilibrage des colonnes n'est pas pris en charge de façon homogène par les navigateurs. Aussi, si vous l'utilisez, vérifiez vos résultats dans les différents navigateurs pour contrôler l'effet obtenu. Vous pouvez aussi consulter les tableaux de compatibilité des navigateurs à la fin des pages de chacune des propriétés.

Dans le prochain guide, nous verrons [comment gérer le dépassement au sein d'un conteneur multi-colonnes](/fr/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol), à l'intérieur des colonnes et lorsqu'il y a plus de contenu que le conteneur peut en avoir.
