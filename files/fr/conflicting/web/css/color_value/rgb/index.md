---
title: rgba()
slug: conflicting/Web/CSS/color_value/rgb
original_slug: Web/CSS/color_value/rgba
---

{{CSSRef}}

La notation fonctionnelle **`rgba()`** exprime une couleur selon ses composantes rouge, verte et bleue. Une composante alpha optionnelle indique l'opacité de la couleur.

{{EmbedInteractiveExample("pages/css/function-rgba.html")}}

> **Note :** Le module de spécification <i lang="en">CSS Color</i> de niveau 4 permet d'utiliser des valeurs séparées par des espaces en complément des valeurs séparées par des virgules.

## Syntaxe

```css
rgba(255, 255, 255) /* blanc */
rgba(255, 255, 255, .5) /* blanc avec une opacité à 50% */
rgba(255 255 255 / 0.5) /* séparation des paramètres avec des espaces (CSS Color 4) */
```

### Valeurs

- `rgba(R, G, B[, A])`
  - : `R` (rouge), `G` (vert, G correspondant à <i lang="en">green</i> en anglais), et `B` (bleu) peuvent être ou des nombres (type [`<number>`](/fr/docs/Web/CSS/number)) ou des pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où le nombre `255` correspond à `100%`. `A` (alpha) peut être un nombre ([`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)), où le nombre `1` correspond à `100%` (opacité complète).
- `rgba(R G B[ / A])`
  - : Cette forme de la notation fonctionnelle, avec la séparation des paramètres par des espaces, est ajoutée avec le module de spécification <i lang="en">CSS Color</i> de niveau 4.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
