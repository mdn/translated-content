---
title: <dimension>
slug: Web/CSS/Reference/Values/dimension
original_slug: Web/CSS/dimension
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<dimension>`** représente une valeur de type {{CSSxRef("&lt;number&gt;")}} directement suivie d'une unité&nbsp;: par exemple `10px`.

CSS utilise des dimensions pour définir des distances (type {{CSSxRef("&lt;length&gt;")}}), des durées (type {{CSSxRef("&lt;time&gt;")}}), des fréquences (type {{CSSxRef("&lt;frequency&gt;")}}), des résolutions (type {{CSSxRef("&lt;resolution&gt;")}}) ainsi que d'autres quantités.

## Syntaxe

La syntaxe d'une valeur de type `<dimension>` est un nombre (valeur de type {{CSSxRef("&lt;number&gt;")}}) immédiatement suivi d'une unité représentée par son identifiant. Les identifiants utilisés pour les unités sont insensibles à la casse.

## Exemples

### Dimensions valides

```css example-good
12px      12 pixels
1rem      1 rem
1.2pt     1.2 points
2200ms    2200 millisecondes
5s        5 secondes
200hz     200 Hertz
200Hz     200 Hertz (les unités sont insensibles à la casse)
```

### Dimensions invalides

```css example-bad
12 px       L'unité doit immédiatement être indiquée après le nombre.
12"px"      Les unités sont des identifiants et ne doivent pas être entourées de quotes.
3sec        L'unité des secondes est abrégée en "s" et non "sec".
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Types de données CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- [Apprendre&nbsp;: Mettre en forme HTML avec CSS](/fr/docs/Learn_web_development/Core/Styling_basics)
- Les distances ({{CSSxRef("&lt;length&gt;")}}), durées ({{CSSxRef("&lt;time&gt;")}}), fréquences ({{CSSxRef("&lt;frequency&gt;")}}) et résolutions ({{CSSxRef("&lt;resolution&gt;")}}) CSS
