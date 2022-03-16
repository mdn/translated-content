---
title: Gérer la rupture du contenu entre les colonnes
slug: Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol
original_slug: Web/CSS/CSS_Columns/Gérer_rupture_contenu_entre_colonnes
---
{{CSSRef}}

Le contenu est coupé entre les colonnes d'une disposition multi-colonnes de la même façon qu'il est coupé entre chaque page d'un média paginé. Dans ces deux contextes, la façon dont on contrôle l'emplacement et la coupure se paramètre grâce aux propriétés décrites dans le module de spécification _CSS Fragmentation_. Dans ce guide, nous verrons comment fonctionne la fragmentation en multi-colonnes.

## Quelques notions de bases sur la fragmentation

[Le module de spécification CSS Fragmentation](https://www.w3.org/TR/css-break-3/) détaille la façon dont le contenu peut être coupé entre les conteneur de fragmentation. Pour une disposition multi-colonnes, le conteneur de fragmentation correspond à la boîte de colonne.

Le contenu d'une boîte de colonne peut être varié et une coupure peut être malvenue à certains endroits. On préfèrerait par exemple qu'une légende ne soit pas séparée de l'image entre une colonne et la suivante. Les propriétés relatives à la fragmentation permettent de contrôler certains aspects de ces coupures.

Voici plusieurs emplacements où on peut souhaiter contrôler les ruptures :

- Les ruptures à l'intérieur des boîtes, par exemple à l'intérieur d'un élément `<figure>`
- Les ruptures avant et après les boîtes
- Les ruptures entre les lignes

## Les ruptures à l'intérieur des boîtes

Pour contrôler la façon dont le contenu est coupé à l'intérieur d'une boîte, on pourra utiliser la propriété {{cssxref("break-inside")}}. Cette propriété peut prendre les valeurs suivantes :

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Dans l'exemple qui suit, on a appliqué `break-inside` sur l'élément `figure` afin d'éviter que la légende soit séparée de l'image.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-inside.html", '100%', 800)}}

## Les ruptures avant et après les boîtes

Les propriétés {{cssxref("break-before")}} et {{cssxref("break-after")}} contrôlent respectivement les ruptures avant et après les éléments. Dans une disposition multi-colonnes, ces propriétés peuvent être utilisées avec les valeurs suivantes :

- `auto`
- `avoid`
- `avoid-column`
- `column`

Avec l'exemple suivant, on force une rupture avant chaque élément de titre `h2`.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-before.html", '100%', 800)}}

## Les ruptures entre les lignes

On peut aussi utiliser les propriétés {{cssxref("orphans")}} et {{cssxref("widows")}}. La propriété  `orphans` contrôle le nombre de lignes qui restent à la fin d'un fragment et la propriété `widows` contrôle le nombre de lignes qui restent au début d'un fragment.

Les propriétés `orphans` et `widows` prennent un entier comme valeur et qui indique le nombre de lignes à avoir à la fin ou au début d'un fragment. On notera que ces propriétés ne fonctionnent qu'à l'intérieur d'un conteneur de bloc (un paragraphe par exemple). Si le bloc contient un nombre de lignes inférieur au nombre précisé pour la propriété, toutes les lignes resteront groupées ensemble.

Dans l'exemple ci-après, on utilise la propriété `orphans` pour contrôler le nombre de lignes conservées à la fin d'une colonne. Vous pouvez modifier la valeur afin de voir l'impact sur la rupture du contenu.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/orphans.html", '100%', 800)}}

## Résultat non garanti

Si on souhaite prévenir la rupture à de nombreux endroits, le navigateur sera quand même obligé de couper le contenu entre les colonnes. D'une certaine façon, ces propriétés agissent plutôt comme des suggestions envers le moteur que comme des ordres.

De plus, la prise en charge de ces propriétés n'est pas la plus homogène possible entre les navigateurs. Vous pouvez vous référer aux tableaux de compatibilité des pages de chaque propriété pour en savoir plus. Dans la plupart des cas, mieux vaudra encore laisser gérer le système plutôt que d'avoir trop de ruptures aux endroits indésirables.
