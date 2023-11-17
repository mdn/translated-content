---
title: <time>
slug: Web/CSS/time
---

{{CSSRef}}

Le type de donnée **`<time>`** indique des durées exprimées en secondes ou en millisecondes. Il est par exemple utilisé dans les propriétés {{cssxref("animation")}}, {{cssxref("transition")}}.

## Syntaxe

Une valeur temporelle consiste en une valeur de type {{cssxref("&lt;number&gt;")}} immédiatement suivie d'une unité. Comme avec les autres unités CSS, il n'y a pas d'espace entre l'unité et le nombre. La valeur peut éventuellement être précédée d'un signe `+` ou `-`.

Même si toutes les unités représentent le même temps pour la valeur `0`, l'unité ne doit pas être omises, car il ne s'agit pas d'une {{cssxref("&lt;length&gt;")}} : `0` n'est pas valide et ne représente pas `0s`, `0ms`.

### Unités

- `s`
  - : Cette unité permet d'exprimer le temps en secondes. Par exemple : `0s`, `1.5s`, `-60s`.
- `ms`
  - : Cette unité permet d'exprimer le temps en millisecondes. Par exemple : `0ms`, `1500ms`, `-6000ms`.

La conversion entre `s` et `ms` suit la logique suivante : `1s = 1000ms`.

## Exemples

### Valeurs valides

```css example-good
12s         Nombre entier positif
-456ms      Nombre entier négatif
4.3ms       Nombre décimal
14mS        L'unité n'est pas sensible à la casse, cependant les majuscules sont déconseillées pour s et ms.
+0s         Zero, précédé d'un + et suivi de son unité.
-0ms        Zero, précédé d'un - et suivi de son unité (bien qu'étrange, ceci est autorisé).
```

### Valeurs invalides

```css example-bad
0           Bien qu'un zéro sans unité soit autorisé pour les longueurs, ceci n'est pas valide avec les autres dimensions.
12.0        Il s'agit d'un nombre, pas d'un temps, l'unité est obligatoire.
7 ms        Aucun espace n'est autorisé entre le nombre et l'unité.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
