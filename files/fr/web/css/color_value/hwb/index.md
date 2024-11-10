---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}

La notation fonctionnelle **`hwb()`** exprime une couleur donnée selon sa teinte, sa blancheur et sa noirceur. Une composante alpha optionnelle représente l'opacité de la couleur.

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## Syntaxe

```css
hwb(194 0% 0%) /* #00c3ff */
hwb(194 0% 0% / .5) /* #00c3ff avec 50% d'opacité */
```

### Valeurs

> [!NOTE]
> La fonction `hwb()` **n'utilise pas** de virgule pour séparer les valeurs des arguments, et la valeur alpha optionnelle doit être précédée d'une barre oblique (`/`) si elle est fournie.

- `hwb(H W B[ / A])`

  - : `H` (teinte, <i lang="en">hue</i> en anglais) est un angle (type [`<angle>`](/fr/docs/Web/CSS/angle)) sur le cercle des couleurs. Lorsqu'il est écrit sans unité, il est interprété comme étant exprimé en degré. Par définition, on a `red=0deg=360deg`, et les autres couleurs distribuées sur le cercle avec `green=120deg`, `blue=240deg`, etc. Sa valeur étant un `<angle>`, elle boucle sur elle-même et on a donc `-120deg=240deg`, `480deg=120deg`, `-1turn=1turn`, etc.

    `W` (blancheur, <i lang="en">whiteness</i> en anglais) indique la quantité de blanc dans la couleur, indiquée comme un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `0%` indique aucune blancheur et où `100%` indique une blancheur complète.

    `B` (noirceur, <i lang="en">blackness</i>) indique la quantité de noir dans la couleur, indiquée comme un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `0%` indique aucune noirceur et où `100%` indique une noirceur complète.

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
