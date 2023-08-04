---
title: Propriétés logiques pour les marges, les bordures et les remplissages
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
---

{{CSSRef}}

La spécification [sur les propriétés et valeurs logiques](https://drafts.csswg.org/css-logical/) définit des correspondances pour les propriétés servant à définir les marges, les bordures et les remplissages (_padding_) et les propriétés raccourcies associées. Dans ce guide, nous verrons comment utiliser ces propriétés logiques.

Si vous avez consulté la page principale sur [les propriétés et valeurs logiques](/fr/docs/Web/CSS/CSS_Logical_Properties), vous avez pu voir une grande quantité de propriétés. Cela est principalement du au fait que pour chaque marge, bordure et remplissage, il y a quatre propriétés détaillées et une propriété raccourcie.

## Correspondances pour les marges, les bordures et les remplissages (_padding_)

La spécification détaille les correspondances entre les valeurs logiques et les valeurs physiques. Dans le tableau qui suit,on liste les correspondances lorsque le mode d'écriture utilisé est `horizontal-tb` et où la direction du texte va de gauche à droite. L'axe en ligne est donc horizontal, dirigé de gauche à droite et {{cssxref("margin-inline-start")}} est équivalent à {{cssxref("margin-left")}}.

Si on avait utilisé un mode d'écriture `horizontal-tb` orienté de droite à gauche, {{cssxref("margin-inline-start")}} aurait correspondu à {{cssxref("margin-right")}}. Pour un mode d'écriture vertical, elle aurait correspondu à {{cssxref("margin-top")}}.

| Propriété logique                        | Propriété physique                        |
| ---------------------------------------- | ----------------------------------------- |
| {{cssxref("border-block-end")}}          | {{cssxref("border-bottom")}}              |
| {{cssxref("border-block-end-color")}}    | {{cssxref("border-bottom-color")}}        |
| {{cssxref("border-block-end-style")}}    | {{cssxref("border-bottom-style")}}        |
| {{cssxref("border-block-end-width")}}    | {{cssxref("border-bottom-width")}}        |
| {{cssxref("border-block-start")}}        | {{cssxref("border-top")}}                 |
| {{cssxref("border-block-start-color")}}  | {{cssxref("border-top-color")}}           |
| {{cssxref("border-block-start-style")}}  | {{cssxref("border-top-style")}}           |
| {{cssxref("border-block-start-width")}}  | {{cssxref("border-top-width")}}           |
| {{cssxref("border-inline-end")}}         | {{cssxref("border-right")}}               |
| {{cssxref("border-inline-end-color")}}   | {{cssxref("border-right-color")}}         |
| {{cssxref("border-inline-end-style")}}   | {{cssxref("border-right-style")}}         |
| {{cssxref("border-inline-end-width")}}   | {{cssxref("border-right-width")}}         |
| {{cssxref("border-inline-start")}}       | {{cssxref("border-left")}}                |
| {{cssxref("border-inline-start-color")}} | {{cssxref("border-left-color")}}          |
| {{cssxref("border-inline-start-style")}} | {{cssxref("border-left-style")}}          |
| {{cssxref("border-inline-start-width")}} | {{cssxref("border-left-width")}}          |
| {{cssxref("border-start-start-radius")}} | {{cssxref("border-top-left-radius")}}     |
| {{cssxref("border-start-end-radius")}}   | {{cssxref("border-bottom-left-radius")}}  |
| {{cssxref("border-end-start-radius")}}   | {{cssxref("border-top-right-radius")}}    |
| {{cssxref("border-end-end-radius")}}     | {{cssxref("border-bottom-right-radius")}} |
| {{cssxref("margin-block-end")}}          | {{cssxref("margin-bottom")}}              |
| {{cssxref("margin-block-start")}}        | {{cssxref("margin-top")}}                 |
| {{cssxref("margin-inline-end")}}         | {{cssxref("margin-right")}}               |
| {{cssxref("margin-inline-start")}}       | {{cssxref("margin-left")}}                |
| {{cssxref("padding-block-end")}}         | {{cssxref("padding-bottom")}}             |
| {{cssxref("padding-block-start")}}       | {{cssxref("padding-top")}}                |
| {{cssxref("padding-inline-end")}}        | {{cssxref("padding-right")}}              |
| {{cssxref("padding-inline-start")}}      | {{cssxref("padding-left")}}               |

De nouvelles propriétés raccourcies sont également apparues et permettent de manipuler les deux extrêmités d'un même axe. Ces propriétés raccourcies n'ont pas de propriété physique équivalente.

| Propriété                          | Objectif                                                                                                                                  |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}        | Définit {{cssxref("border-color")}}, {{cssxref("border-style")}} et {{cssxref("border-width")}} pour les deux bordures sur l'axe de bloc. |
| {{cssxref("border-block-color")}}  | Définit `border-color` pour les deux bordures sur l'axe de bloc.                                                                          |
| {{cssxref("border-block-style")}}  | Définit `border-style` pour les deux bordures sur l'axe de bloc.                                                                          |
| {{cssxref("border-block-width")}}  | Définit `border-width` pour les deux bordures sur l'axe de bloc.                                                                          |
| {{cssxref("border-inline")}}       | Définit `border-color`, `-style` et `-width` pour les deux bordures sur l'axe en ligne.                                                   |
| {{cssxref("border-inline-color")}} | Définit `border-color` pour les deux bordures sur l'axe en ligne.                                                                         |
| {{cssxref("border-inline-style")}} | Définit `border-style` pour les deux bordures sur l'axe en ligne.                                                                         |
| {{cssxref("border-inline-width")}} | Définit `border-width` pour les deux bordures sur l'axe en ligne.                                                                         |
| {{cssxref("margin-block")}}        | Défnit les deux marges sur l'axe de bloc.                                                                                                 |
| {{cssxref("margin-inline")}}       | Défnit les deux marges sur l'axe en ligne.                                                                                                |
| {{cssxref("padding-block")}}       | Définit le remplissage (_padding_) sur l'axe de bloc.                                                                                     |
| {{cssxref("padding-inline")}}      | Définit le remplissage (_padding_) sur l'axe en ligne.                                                                                    |

## Exemples de marges

Les quatre propriétés logiques {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}} et {{cssxref("margin-inline-end")}} peuvent être utilisées à la place des propriétés physiques habituelles afin de définir une marge.

Dans l'exemple qui suit, on a créé deux boîtes et définit une marge différente pour chaque côté. On a aussi ajouté un conteneur supplémentaire avec une bordure afin de mieux visualiser la bordure.

Une boîte utilise les propriétés physiques et la seconde les propriétés logiques. Vous pouvez modifier la valeur de la propriété {{cssxref("direction")}} (la changer en `rtl` par exemple) : la première boîte conservera les mêmes marges tandis que la seconde verra ses marges en ligne échangées.

Vous pouvez également modifier la propriété `writing-mode` pour la passer de `horizontal-tb` à `vertical-rl`. Là aussi, vous pourrez voir les marges rester les mêmes pour la première boîte et passer d'un côté à l'autre pour la seconde.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### Propriétés raccourcies pour les marges

Avec les propriétés logiques, on peut définir les deux côtés en ligne et les deux côtés en bloc à l'aide d'une propriété et on a donc de nouvelles propriétés raccourcies : {{cssxref("margin-inline")}} et {{cssxref("margin-block")}}. Ces deux propriétés s'utilisent avec deux valeurs : la première sera appliquée au côté du début pour l'axe et la deuxième au côté de fin. Si une seule valeur est utilisée, elle sera appliquée aux deux côtés.

Avec un mode d'écriture horizontal, cette déclaration CSS appliquerait une marge de 5 pixels sur le côté haut de la boîte et une marge de 10 pixels sur le bas de la boîte.

```css
.box {
  margin-block: 5px 10px;
}
```

> **Note :** Ces propriétés raccourcies, `margin-inline` et `margin-block`, ont été implémentées avec Firefox 66. Elles restent relativement nouvelles et mieux vaut donc vérifier la compatibilité navigateur avant de les utiliser.

## Exemples pour le remplissage

Pour le remplissage, ce sont les propriétés logiques {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}} et {{cssxref("padding-inline-end")}} qui ont été ajoutées et qui peuvent être utilisées en lieu et place de leur équivalent physique.

Dans l'exemple suivant, on dispose de deux boîtes, la première possède des remplissages définis avec des propriétés physiques et la seconde avec des propriétés logiques. En utilisant un mode d'écriture `horizontal-tb`, les deux boîtes auront la même apparence.

En modifiant la propriété `direction` avec la valeur `rtl`, les boîtes seront affichées de droite à gauche. Le remplissage de la première boîte restera à la même place et celui de la deuxième boîte changera de côté.

Vous pouvez aussi modifier la valeur de la propriété `writing-mode` pour la passer de `horizontal-tb` à `vertical-rl`. Là encore, rien ne change pour la première boîte mais pour la seconde, les remplissages se trouvent échangés.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### Propriétés raccourcies pour le remplissage

À l'instar des marges, deux propriétés raccourcies ont été ajoutées {{cssxref("padding-inline")}} et {{cssxref("padding-block")}}. Elles permettent, respectivement, de définir le remplissage pour les deux côtés sur l'axe en ligne et sur l'axe en bloc.

Avec un mode d'écriture horizontal, cette déclaration CSS appliquera un remplissage de `5px` sur le haut de la boîte et un remplissage de 10 pixels en bas de la boîte :

```css
.box {
  padding-block: 5px 10px;
}
```

> **Note :** Ces propriétés raccourcies, `padding-inline` et `padding-block`, ont été implémentées avec Firefox 66. Elles restent relativement nouvelles et mieux vaut donc vérifier la compatibilité navigateur avant de les utiliser.

## Exemples pour les bordures

Les propriétés relatives aux bordures fournissent une grande quantité de propriétés tant logiques que physiques (pour la couleur, la largeur, le style, pour chaque côté, pour les propriétés raccourcies). De la même façon qu'on a des équivalences avec les propriétés physiques pour les marges et les remplissages, on a également des propriétés logiques pour les bordures.

L'exemple ci-après utilise certaines propriétés détaillées et propriétés raccourcies. Comme précédemment, vous pouvez modifier les valeurs des propriétés `direction` et `writing-mode` pour observer les impacts.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### Propriétés raccourcies pour les bordures

Il y a des propriétés raccourcies avec deux valeurs pour paramétrer la largeur, le style et la couleur de la bordure pour les côtés sur l'axe en ligne ou pour les côtés sur l'axe de bloc. Le fragment de code qui suit, si on l'utilise avec un mode d'écriture horizontal, fournira une bordure verte de 2 pixels sur un trait plein en haut et en bas de la boîte et une bordure pointillée violette de 4 pixels sur les côtés gauche et droit.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

> **Note :** Ces propriétés raccourcies, `border-inline` et `border-block`, ont été implémentées avec Firefox 66. Elles restent relativement nouvelles et mieux vaut donc vérifier la compatibilité navigateur avant de les utiliser.

### Propriétés pour les courbures des bordures relatives au flux

La spécification a également ajouté des propriétés relatives au flux pour les propriétés détaillées associées à {{cssxref("border-radius")}}. Ces propriétés n'ont pas encore (décembre 2018) été implémentées par les différents navigateurs. L'exemple qui suit, avec un mode d'écriture horizontal, fournira une bordure en haut à droite avec un rayon de courbure de 1em, une bordure en bas à droite sans rayon de courbure, une bordure en bas à gauche avec un rayon de courbure de 20 pixels et une bordure courbée avec un rayon de 40 pixels pour le coin supérieur gauche.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Utiliser les valeurs logiques avec les propriétés raccourcies classiques

La spécification définit une suggestion qui pourrait être utilisée afin de manipuler les propriétés raccourcies (`margin` par exemple) avec des valeurs logiques. Toutefois, le consensus n'a pas encore été atteint sur la résolution de ce point et est discuté au travers de [cette _issue_](https://github.com/w3c/csswg-drafts/issues/1282).

À l'heure actuelle (décembre 2018), les propriétés raccourcies `margin`, `padding` et `border` ne fonctionent qu'avec les valeurs physiques. Aussi, si respecter le flux du document est primordial et que vous devez utiliser les valeurs logiques, vous devrez recourir aux propriétés détaillées afin d'utiliser les valeurs logiques.
