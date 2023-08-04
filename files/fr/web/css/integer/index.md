---
title: <integer>
slug: Web/CSS/integer
---

{{CSSRef}}

Le type de donnée CSS **`<integer>`** permet de représenter des nombres entiers positifs ou négatifs. Aucune unité n'est liée à la valeur. Les entiers sont utilisés dans de nombreuses propriétés CSS comme {{cssxref("z-index")}}, {{cssxref("line-height")}}, {{cssxref("counter-increment")}}, {{cssxref("column-count")}}, {{cssxref("grid-row")}}, {{cssxref("repeat()")}}. Ce type est un sous-type de {{cssxref("number")}}.

## Syntaxe

Un entier se compose d'un ou de plusieurs chiffres, de 0 à 9, éventuellement précédés par un seul signe `+` ou `-`. Il n'y a pas d'unité pour ce type de donnée.

Toutes les valeurs de type `<integer>` sont également des valeurs de type {{cssxref("&lt;number&gt;")}}, bien que l'inverse ne soit pas vrai.

> **Note :** Il n'y a pas de bornes à l'ensemble des valeurs de type `<entier>` valides. Opera supporte des valeurs jusqu'à 2^15-1, IE jusqu'à 2^20-1 et d'autres navigateurs des valeurs encore plus hautes. Durant le cycle CSS3 Values, il y a eu de nombreuses discussions pour définir une valeur minimale à supporter : la dernière décision, en date d'avril 2012 pendant la phase LC, était \[-2^27-1; 2^27-1] [#](https://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html) mais d'autres valeurs comme 2^24-1 et 2^30-1 ont aussi été proposées [#](https://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html) [#](https://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html). Le dernier brouillon ne fait plus apparaître de limite.

## Interpolation

Les valeurs du type `<entier>` peuvent être interpolées de manière à rendre les animations possibles. Dans ce cas l'interpolation se fait par incrémentation discrète. Le calcul est réalisé comme si les valeurs étaient des nombres réels, en virgule flottante et la valeur discrète est obtenue en utilisant la fonction [partie entière](https://fr.wikipedia.org/wiki/Partie_entière_et_partie_fractionnaire#Fonction_partie_enti.C3.A8re). La rapidité de l'interpolation est déterminée par la {{cssxref("easing-function","fonction de temporisation")}} associée à l'animation.

## Exemples

Ces valeurs sont des entiers valides :

```css
12          Entier positif (sans le signe + à l'avant)
+123        Entier positif (avec le signe + à l'avant)
-456        Entier négatif
0           Zéro
+0          Zéro, avec un signe + à l'avant
-0          Zéro, avec un signe - à l'avant (bien qu'étrange, cette valeur est acceptée)
```

Ces valeurs sont des entiers non valides :

```css example-bad
12.0        Ceci est un {{cssxref("&lt;number&gt;")}}, pas un <entier>, bien qu'il représente un entier
12.         Le point ne peut pas faire partie d'un <entier>
+---12      Un seul +/- à l'avant est accepté
ten         Les lettres ne sont pas acceptées
_5          Les caractères spéciaux ne sont pas acceptés
\35         Les caractères Unicode échappés ne sont pas acceptés, même s'ils sont un entier (ici : 5)
\4E94       Les chiffres non-arabes ne sont pas acceptés, même échappés (ici : le 5 japonais, 五)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("&lt;number&gt;")}}
