---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de donnée](/fr/docs/Web/CSS/CSS_values_and_units/CSS_data_types) [CSS](/fr/docs/Web/CSS) **`<frequency-percentage>`** représente une valeur qui peut être une valeur de type {{Cssxref("frequency")}} ou une valeur de type {{Cssxref("percentage")}}. Les valeurs de fréquence, par exemple, la hauteur d'une voix parlante, ne sont actuellement utilisées dans aucune propriété CSS.

## Syntaxe

La valeur d'un `<frequency-percentage>` est soit une {{Cssxref("frequency")}}, soit un {{Cssxref("percentage")}}. Consultez leurs pages de référence respectives pour plus de détails sur leur syntaxe.

## Description

### Utilisation avec `calc()`

Lorsqu'une valeur de type `<frequency-percentage>` peut être utilisée dans une déclaration, cela signifie que le pourcentage sera résolu comme une fréquence et qu'il peut alors être utilisé dans une expression [`calc()`](/fr/docs/Web/CSS/calc).

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Valeurs de pourcentage valides

```plain example-good
90% Pourcentage positif
+90% Pourcentage positif avec signe +
-90% Pourcentage négatif — non valide pour toutes les propriétés utilisant des pourcentages
```

### Valeurs de pourcentage invalides

```plain example-bad
90 % Il ne doit pas y avoir d'espace entre le nombre et l'unité
```

### Valeurs de fréquence valides

```plain example-good
12Hz     Entier positif
4.3Hz    Nombre non entier
14KhZ    L'unité n'est pas sensible à la casse, mais il est déconseillé d'utiliser une majuscule non conforme au SI.
+0Hz     Zéro, avec un signe + et une unité
-0kHz    Zéro, avec un signe - et une unité
```

### Valeurs de fréquence invalides

```plain example-bad
12.0     Ceci est un <number>, pas une <frequency>, car il manque une unité.
7 Hz     Il ne doit pas y avoir d'espace entre le nombre et l'unité.
0        Bien que le zéro sans unité soit autorisé pour <length>, il est invalide pour <frequency>.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- Les [types de données CSS](/fr/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- Les [valeurs et unités CSS](/fr/docs/Web/CSS/CSS_values_and_units) module
- Types de données CSS associés&nbsp;:
  - {{cssxref("frequency", "&lt;frequency&gt;")}}
  - {{cssxref("percentage", "&lt;percentage&gt;")}}
