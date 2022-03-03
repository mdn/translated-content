---
title: <dimension>
slug: Web/CSS/dimension
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/dimension
---
{{CSSRef}}

Le type de donnée **`<dimension>`** représente une valeur de type {{CSSxRef("&lt;number&gt;")}} directement suivie d'une unité : par exemple `10px`.

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
200hz     200 Hertz
200Hz     200 Hertz (les unités sont insensibles à la casse)
```

### Dimensions invalides

```css example-bad
12 px       L'unité doit immédiatement être indiquée après le nombre
12"px"      Les unités sont des identifiants et ne doivent pas être entourées de quotes
```

## Spécifications

| Spécification                                                                            | État                             | Commentaires                                      |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------- |
| {{SpecName("CSS4 Values", "#dimensions", "&lt;dimension&gt;")}}     | {{Spec2("CSS4 Values")}} | Adds `cap`, `ic`, `lh`, `rlh`, `vi`, `vb`         |
| {{SpecName("CSS3 Values", "#dimensions", "&lt;dimension&gt;")}}     | {{Spec2("CSS3 Values")}} | Adds `ch`, `rem`, `vw`, `vw`, `vmin`, `vmax`, `Q` |
| {{SpecName("CSS2.1", "syndata.html#numbers", "&lt;dimension&gt;")}} | {{Spec2("CSS2.1")}}         | Defined under Numbers and Length                  |
| {{SpecName("CSS1", "", "&lt;dimension&gt;")}}                             | {{Spec2("CSS1")}}         | Initial definition under "length units"           |

## Compatibilité des navigateurs

{{Compat("css.types.dimension")}}
