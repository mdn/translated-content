---
title: Propriétés logiques pour le dimensionnement
slug: Web/CSS/CSS_Logical_Properties/Sizing
tags:
  - CSS
  - Guide
  - Propriété logique
translation_of: Web/CSS/CSS_Logical_Properties/Sizing
original_slug: Web/CSS/CSS_Logical_Properties/Dimensionnement
---
{{CSSRef}}

Dans ce guide, nous verrons les correspondances entre les propriétés physiques et les propriétés logiques qui peuvent être utilisées afin de dimensionner des éléments au sein d'un document.

Lorsqu'on définit la taille d'un objet, [la spécification sur les propriétés et les valeurs logiques](https://drafts.csswg.org/css-logical/) permet de définir le dimensionnement en fonction du flux du texte (le mode d'écriture et son orientation) plutôt que relativement aux dimensions physiques du support (haut / bas / gauche / droite). Bien que ce premier fonctionnement, utilisant des propriétés et des valeurs _logiques_, puisse devenir la méthode par défaut à l'avenir, on peut tout à fait avoir besoin d'utiliser des propriétés et des valeurs _physiques_ en combinaison avec ces propriétés et ces valeurs logiques.

## Correspondances pour les dimensions

Le tableau qui suit fournit les correspondances entre les propriétés logiques et les propriétés physiques lorsqu'on utilise un mode d'écriture horizontal progressant de haut en bas (`horizontal-tb`) comme c'est le cas avec le français ou l'arabe. Dans ce cas, la propriété physique {{CSSxRef("width")}} serait équivalente à la propriété logique {{CSSxRef("inline-size")}}.

Si on utilisait un mode d'écriture vertical, {{CSSxRef("inline-size")}} aurait correspondu à {{CSSxRef("height")}}.

| Propriété logique                        | Propriété physique               |
| ---------------------------------------- | -------------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}     |
| {{CSSxRef("block-size")}}         | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}} |
| {{CSSxRef("min-block-size")}} | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}} |
| {{CSSxRef("max-block-size")}} | {{CSSxRef("max-height")}} |

## Exemple pour `width` et `height`

Les propriétés logiques correspondant à {{CSSxRef("width")}} et {{CSSxRef("height")}} sont : {{CSSxRef("inline-size")}} pour la taille sur la dimension en ligne et {{CSSxRef("block-size")}}, pour la taille selon la dimension de bloc. Si on travaille sur un document en français, on pourra remplacer `width` par `inline-size` et `height` par `block-size` et on obtiendra le même résultat.

Dans l'exemple interactif suivant, le mode d'écriture est explicitement définit avec `horizontal-tb`. En modifiant cette valeur pour la passer à `vertical-rl`, on verra que le premier exemple, qui utilise `width` et `height`, conserve le même dimensionnement, même si le texte s'affiche verticalement. Pour le second exemple qui utilise `inline-size` et `block-size`, on voit que le texte et le dimensionnement suivent l'orientation du flux et que le bloc est ainsi tourné dans son intégralité.

{{EmbedGHLiveSample("css-examples/logical/size-inline-block.html", '100%', 500)}}

## Exemple pour `min-width` et `min-height`

Il existe également des propriétés logiques correspondantes pour {{CSSxRef("min-width")}} et {{CSSxRef("min-height")}} : {{CSSxRef("min-inline-size")}} et {{CSSxRef("min-block-size")}}. Celles-ci fonctionnent de la même façon que `inline-size` et `block-size` mais paramètrent une taille minimale plutôt qu'une taille fixe.

Dans l'exemple suivant, vous pouvez passer le mode d'écriture en `vertical-rl` et observer l'effet obtenu. Là encore, on utilise la propriété physique (`min-height`) sur le premier exemple et la propriété logique (`min-block-size`) sur le second.

{{EmbedGHLiveSample("css-examples/logical/size-min.html", "100%", 500)}}

## Exemple pour `max-width` et `max-height`

Enfin, on peut utiliser {{CSSxRef("max-inline-size")}} et {{CSSxRef("max-block-size")}} afin de remplacer les propriétés physiques {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}. Là encore, vous pouvez modifier l'exemple qui suit pour observer les conséquences de ce changement.

{{EmbedGHLiveSample("css-examples/logical/size-max.html", "100%", 500)}}

## Mots-clés logiques pour `resize`

La propriété {{CSSxRef("resize")}} définit si un objet peut être redimensionné. Cette propriété s'utilise avec les valeurs physiques `horizontal` et `vertical`. La propriété `resize` peut désormais s'utiliser également avec des valeurs logiques : `resize: inline` permettra de redimensionner un objet sur l'axe en ligne et `resize: block` permettra de le redimensionner sur l'axe en bloc.

La valeur `both` peut être utilisée dans un contexte physique ou dans un contexte logique : elle permet le redimensionnement sur les deux axes. Vous pouvez manipuler cette propriété et ces valeurs dans l'exemple interactif suivant.

{{EmbedGHLiveSample("css-examples/logical/size-resize.html", "100%", 700)}}

> **Attention :** À l'heure actuelle (décembre 2018), seul Firefox prend en charge les valeurs logiques pour `resize`.
