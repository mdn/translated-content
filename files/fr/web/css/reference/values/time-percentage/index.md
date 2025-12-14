---
title: <time-percentage>
slug: Web/CSS/Reference/Values/time-percentage
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<time-percentage>`** représente une valeur qui peut être soit un {{CSSxRef("time")}}, soit un {{CSSxRef("percentage")}}.

## Syntaxe

Consultez la documentation de {{CSSxRef("time")}} et {{CSSxRef("percentage")}} pour les détails des syntaxes individuelles autorisées par ce type.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation dans `calc()`

Lorsqu'un `<time-percentage>` est spécifié comme type autorisé, cela signifie que le pourcentage est résolu en un temps et peut donc être utilisé dans une expression {{CSSxRef("calc")}}.

### Pourcentages valides

```plain example-good
50%
+50%        Signe plus optionnel
-50%        Les pourcentages négatifs ne sont pas valides pour toutes les propriétés qui acceptent les pourcentages
```

### Pourcentages invalides

```plain example-bad
50 %        Aucun espace n'est autorisé entre le nombre et le signe de pourcentage
```

### Temps valides

```plain example-good
12s         Entier positif
-456ms      Entier négatif
4.3ms       Pas un entier
14mS        L'unité n'est pas sensible à la casse, bien que les majuscules ne soient pas recommandées.
+0s         Zéro avec un + devant et une unité
-0ms        Zéro avec un - devant et une unité
```

### Temps invalides

```plain example-bad
0           Bien que le zéro sans unité soit autorisé pour les <length>, il est invalide pour les <time>.
12.0        Ceci est un <number>, pas un <time>, car il manque une unité.
7 ms        Aucun espace n'est autorisé entre le nombre et l'unité.
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;percentage&gt;")}}
- Le type de donnée {{CSSxRef("&lt;time&gt;")}}
- Module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
