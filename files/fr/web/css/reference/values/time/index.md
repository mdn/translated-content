---
title: <time>
slug: Web/CSS/Reference/Values/time
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<time>`** représente une valeur temporelle exprimée en secondes ou en millisecondes. Il est utilisé dans {{CSSxRef("animation")}}, {{CSSxRef("transition")}} et les propriétés associées.

## Syntaxe

Le type de donnée `<time>` consiste en un nombre ({{CSSxRef("&lt;number&gt;")}}) suivi de l'une des unités listées ci-dessous. Il peut éventuellement être précédé d'un seul signe `+` ou `-`. Comme pour toutes les dimensions, il n'y a pas d'espace entre le littéral d'unité et le nombre.

> [!NOTE]
> Bien que le nombre `0` soit toujours le même quelle que soit l'unité, l'unité ne peut pas être omise. Autrement dit, `0` est invalide et ne représente pas `0s` ou `0ms`.

### Unités

- `s`
  - : Représente un temps en secondes. Exemples&nbsp;: `0s`, `1.5s`, `-60s`.
- `ms`
  - : Représente un temps en millisecondes. Exemples&nbsp;: `0ms`, `150.25ms`, `-60000ms`.

> [!NOTE]
> La conversion entre `s` et `ms` suit la logique `1s` = `1000ms`.

## Exemples

### Temps valides

```plain example-good
12s         Entier positif
-456ms      Entier négatif
4.3ms       N'est pas entier
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

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;time-percentage&gt;")}}
- Module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
