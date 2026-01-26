---
title: <number>
slug: Web/CSS/Reference/Values/number
original_slug: Web/CSS/number
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<number>`** représente un nombre, qu'il s'agisse d'un entier, d'un nombre avec une partie fractionnaire ou d'un exposant en base dix en notation scientifique.

## Syntaxe

La syntaxe de `<number>` étend celle de {{CSSxRef("&lt;integer&gt;")}}. Une valeur fractionnaire est représentée par un `.` suivi d'un ou plusieurs chiffres décimaux, et peut être ajoutée à un entier. Un `<number>` peut aussi se terminer par la lettre `e` ou `E` suivie d'un entier, ce qui indique un exposant en base dix en notation scientifique. Aucun nombre n'est associé à une unité.

Comme pour les entiers, le premier caractère du nombre peut être immédiatement précédé d'un signe - ou + pour indiquer la positivité ou la négativité du nombre.

## Interpolation

Les valeurs de type `<number>` peuvent être interpolées afin d'être utilisées dans les animations. Les valeurs de ce type seront interpolées comme des nombres réels à virgule flottante. La vitesse de l'interpolation sera définie grâce [à la fonction de temporisation](/fr/docs/Web/CSS/Reference/Values/easing-function) associée à l'animation.

## Exemples

### Nombres valides

```plain example-good
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

### Nombres invalides

```plain example-bad
12.         Le point doit être suivi par des chiffres
+-12.2      Seul un +/- est autorisé.
12.1.1      Seul un point est autorisé.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;integer&gt;")}}
- Le type de donnée {{CSSxRef("&lt;ratio&gt;")}}
- Le module des [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
