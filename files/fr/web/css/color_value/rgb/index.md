---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}

La notation fonctionnelle **`rgb()`** exprime une couleur selon ses composantes rouge, verte et bleue. Une composante alpha optionnelle représente l'opacité de la couleur.

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

> [!NOTE]
> Le niveau 4 du module de spécification <i lang="en">CSS Color</i> a apporté certaines modifications à `rgb()`. Pour les navigateurs qui prennent en charge la notation standard [`rgba()`](/fr/docs/Web/CSS/color_value/rgb), `rgb()` est désormais un synonyme de `rgba()`, les deux acceptent les mêmes paramètres et se comportent de la même façon.
>
> Le niveau 4 de la spécification permet également de séparer les paramètres par des espaces en complément de la séparation avec des virgules.

## Syntaxe

```css
rgb(255, 255, 255) /* blanc */
rgb(255, 255, 255, .5) /* blanc avec 50% d'opacité */
rgb(255 255 255) /* forme CSS Color 4 avec une séparation par des espaces des valeurs */
rgb(255 255 255 / .5) /* blanc avec 50% d'opacité, en utilisant la séparation par des espaces */
```

### Valeurs

- `rgb(R, G, B[, A])`
  - : `R` (rouge), `G` (vert, G correspondant à <i lang="en">green</i> en anglais), et `B` (bleu) peuvent être ou des nombres (type [`<number>`](/fr/docs/Web/CSS/number)) ou des pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où le nombre `255` correspond à `100%`. `A` (alpha) peut être un nombre ([`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/percentage)), où le nombre `1` correspond à `100%` (opacité complète).
- `rgb(R G B[ / A])`
  - : Cette forme de la notation fonctionnelle, avec la séparation des paramètres par des espaces, est ajoutée avec le module de spécification <i lang="en">CSS Color</i> de niveau 4.

## Compatibilité des navigateurs

{{Compat}}
