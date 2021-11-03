---
title: <number>
slug: Web/CSS/number
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/number
---
{{CSSRef}}

Le type de donnée CSS **`<number>`** permet de représenter des nombres entiers ou décimaux. C'est donc un type qui englobe le type de données {{cssxref("&lt;integer&gt;")}} (permettant de représenter des entiers).

## Syntaxe

Pour représenter des nombres décimaux, on utilisera le point (.) comme séparateur. Comme pour {{cssxref("&lt;integer&gt;")}}, il n'y a aucune unité associée aux valeurs de type `<number>` (ce n'est donc pas une dimension).

## Interpolation

Les valeurs de type `<number>` peuvent être interpolées afin d'être utilisées dans les animations. Les valeurs de ce type seront interpolées comme des nombres réels à virgule flottante. La vitesse de l'interpolation sera définie grâce [à la fonction de temporisation](/fr/docs/Web/CSS/easing-function) associée à l'animation.

## Exemples

Voici des exemples de valeurs `<number>` valides :

```css example-good
12          Un entier (<integer>) est également un <number>
4.01        Un nombre (décimal) positif
-456.8      Un nombre décimal négatif
0.0         Zéro
+0.0        Zéro, avec un +
-0.0        Zero, avec un -
.60         Les chiffres avant le point sont facultatifs
10e3        On peut utiliser la notation scientifique
-3.4e-2     Un cas d'utilisation de notation scientifique plus complexe
```

Voici des exemples de valeurs invalides :

```css example-bad
12.         Le point doit être suivi par des chiffres
+-12.2      Seul un +/- est autorisé.
12.1.1      Seul un point est autorisé.
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires                                                                                   |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Values", "#numbers", "&lt;number&gt;")}}         | {{Spec2("CSS4 Values")}} | Aucune modification significative.                                                             |
| {{SpecName('CSS3 Values', '#numbers', '&lt;number&gt;')}}         | {{Spec2('CSS3 Values')}} | Aucune modification significative depuis la spécification CSS de niveau 2 (première révision). |
| {{SpecName('CSS2.1', 'syndata.html#numbers', '&lt;number&gt;')}} | {{Spec2('CSS2.1')}}         | Définition explicite du type de données.                                                       |
| {{SpecName('CSS1', '', '&lt;number&gt;')}}                             | {{Spec2('CSS1')}}         | Définition implicite du type de données.                                                       |

## Compatibilité des navigateurs

{{Compat("css.types.number")}}

## Voir aussi

- {{cssxref("&lt;integer&gt;")}}
