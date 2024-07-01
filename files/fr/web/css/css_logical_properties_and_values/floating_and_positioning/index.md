---
title: Propriétés logiques pour les flottements et le positionnement
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
---

{{CSSRef}}

[La spécification sur les propriétés et valeurs logiques](https://drafts.csswg.org/css-logical/) définit des valeurs logiques qui correspondent aux valeurs physiques utilisées pour {{cssxref("float")}} et {{cssxref("clear")}}. Elle définit aussi des propriétés logiques pour le positionnement lorsqu'on utilise une [disposition positionnée](/fr/docs/Web/CSS/CSS_Positioning). Dans ce guide, nous verrons comment utiliser ces valeurs et ces propriétés logiques.

## Correspondance entre les propriétés et les valeurs

Le tableau ci-après définit les propriétés et les valeurs que nous verrons dans ce guide et la correspondance avec les propriétés et valeurs physiques si on utilisait un mode d'écriture horizontal allant de gauche à droite.

| Propriété ou valeur logique          | Propriété ou valeur physique       |
| ------------------------------------ | ---------------------------------- |
| {{cssxref("float")}}`: inline-start` | {{cssxref("float")}}`: left`       |
| {{cssxref("float")}}`: inline-end`   | {{cssxref("float")}}`: right`      |
| {{cssxref("clear")}}`: inline-start` | {{cssxref("clear")}}`: left`       |
| {{cssxref("clear")}}`: inline-end`   | {{cssxref("clear")}}`: right`      |
| {{cssxref("inset-inline-start")}}    | {{cssxref("left")}}                |
| {{cssxref("inset-inline-end")}}      | {{cssxref("right")}}               |
| {{cssxref("inset-block-start")}}     | {{cssxref("top")}}                 |
| {{cssxref("inset-block-end")}}       | {{cssxref("bottom")}}              |
| {{cssxref("text-align")}}`: start`   | {{cssxref("text-align")}}`: left`  |
| {{cssxref("text-align")}}`: end`     | {{cssxref("text-align")}}`: right` |

En plus de ces correspondances, certaines propriétés logiques raccourcies ont été ajoutées. Pour celles-ci, qui ciblent les extrêmités des axes en ligne ou de bloc, il n'y a pas de correspondance avec des propriétés physiques existantes à l'exception de {{cssxref("inset")}}.

| Propriété logique           | Objectif                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Cette propriété définit simultanément les décalages pour les deux côtés situés sur l'axe en ligne. |
| {{cssxref("inset-block")}}  | Cette propriété définit simultanément les décalages pour les deux côtés situés sur l'axe de bloc.  |
| {{cssxref("inset")}}        | Cette propriété définit les valeurs des quatre décalages.                                          |

## Exemple d'un flottement et d'un dégagement

Les valeurs physiques utilisées avec les propriétés {{cssxref("float")}} et {{cssxref("clear")}} sont `left`, `right` et `both`. Les valeurs logiques définies par la spécification sont `inline-start` et `inline-end` et qui peuvent correspondre à `left` et `right` selon le mode d'écriture.

Dans l'exemple ci-après, on a deux boîtes : la première flotte avec `float: left` et la deuxième avec `float: inline-start`. Si on modifie la propriété `writing-mode` pour la passer en `vertical-rl` ou si on modifie `direction` en `rtl`, on pourra voir que la première boîte flotte toujours à gauche tandis que la boîte ciblée avec `inline-start` suit la direction et le mode d'écriture.

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## Exemple des propriétés `inset` pour les dispositions positionnées

Le positionnement permet généralement de position un élément de façon relative à son bloc englobant. La plupart du temps, on décale l'objet relativement à la position qu'il aurait occupé sur le flux normal. Par le passé, on utilisait les propriétés physiques {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} et {{cssxref("left")}}.

Ces propriétés s'utilisent avec une longueur ou avec une pourcentage relatif aux dimensions de l'écran de l'utilisateur.

De nouvelles propriétés ont été définies dans la spécifications des propriétés logiques et permettent de positionner un élément relativement au flux du texte, quel que soit le mode d'écriture. Ces propriétés logiques sont :

- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}.

Dans l'exemple qui suit, on utilise les propriétés `inset-block-start` et `inset-inline-end` afin de positionner la boîte bleue de façon absolue dans la zone définie par la bordure grise pointillée et qui a `position: relative`. En modifiant la propriété `writing-mode` afin d'utiliser la valeur `vertical-rl` ou en ajoutant `direction: rtl`, on pourra voir comment la boîte relative reste dans la direction du texte.

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## Nouvelles propriétés raccourcies

Cette spécification définit également de nouvelles propriétés logiques qui permettent de définir deux voire quatre valeurs avec une seule déclaration. Pour ces propriétés raccourcies, il n'existe pas d'équivalence avec des propriétés physiques.

- {{cssxref("inset")}} — elle permet de définir les quatre décalages avec une correspondance physique.
- {{cssxref("inset-inline")}} — elle permet de définir les décalages sur l'axe en ligne
- {{cssxref("inset-block")}} — elle permet de définir les décalage sur l'axe de bloc

> **Note :** Les navigateurs n'ont, pour l'instant, pas implémenté ces nouvelles propriétés (décembre 2018). Pour plus d'informations sur la compatibilité des navigateurs, vous pouvez vous référer aux tableaux de compatibilité présents à la fin des pages de référence pour ces propriétés.

## Exemple de valeurs logiques pour `text-align`

La propriété {{cssxref("text-align")}} peut s'utiliser avec quatre valeurs logiques qui sont relatives à la direction du texte. Plutôt que d'utiliser `left` et `right`, on pourra utiliser `start` et `end`. Dans l'exemple suivant, on définit `text-align: right` pour le premier bloc et `text-align: end` pour le second.

Si on modifie la valeur de `direction` pour la passer à `rtl`, on verra que le premier bloc restera aligné à droite tandis que le texte du second s'alignera sur la fin logique.

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

Le comportement d'ensemble est plus cohérent lorsqu'on utilise des alignements de boîtes logiques (`start` et `end`) plutôt que des alignements basés sur les directions physiques.
