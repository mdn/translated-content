---
title: hsla()
slug: conflicting/Web/CSS/color_value/hsl
original_slug: Web/CSS/color_value/hsla
---

{{CSSRef}}

La notation fonctionnelle **`hsla()`** exprime une couleur donnée selon ses composantes de teinte (<i lang="en">hue</i> en anglais), saturation, et luminosité. Une composante alpha optionnelle permet de représenter l'opacité de la couleur.

{{EmbedInteractiveExample("pages/css/function-hsla.html")}}

> **Note :** Le module de spécification <i lang="en">CSS Color</i> de niveau 4 permet d'utiliser des valeurs séparées par des espaces en complément des valeurs séparées par des virgules.

## Syntaxe

```css
hsla(100, 100%, 50%, 1) /* #5f0 */
hsla(235, 100%, 50%, .5) /* #0015ff avec 50% d'opacité */
hsla(235 100% 50% / 1) /* valeurs séparées par des espaces (CSS Color 4) */
```

### Valeurs

- `hsla(H, S, L[, A])`

  - : `H` (teinte, <i lang="en">hue</i> en anglais) est un angle (type [`<angle>`](/fr/docs/Web/CSS/angle)) sur le cercle des couleurs. Lorsqu'il est écrit sans unité, il est interprété comme étant exprimé en degré. Par définition, on a `red=0deg=360deg`, et les autres couleurs distribuées sur le cercle avec `green=120deg`, `blue=240deg`, etc. Sa valeur étant un `<angle>`, elle boucle sur elle-même et on a donc `-120deg=240deg`, `480deg=120deg`, `-1turn=1turn`, etc.

    `S` (saturation) et `L` (luminosité, <i lang="en">lightness</i> en anglais) sont des pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)). Une **saturation** à `100%` indique une couleur complètement saturée, tandis qu'une saturation à `0%` fournira un niveau de gris (une couleur complètement désaturée). Une **luminosité** à `100%` fournira du blanc, tandis qu'une luminosité à `0%` fournira du noir.

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

- `hsla(H S L[ / A])`
  - : Cette forme de la notation fonctionnelle, avec la séparation des paramètres par des espaces, est ajoutée avec le module de spécification <i lang="en">CSS Color</i> de niveau 4.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
