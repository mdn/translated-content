---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}

La notation fonctionnelle **`device-cmyk()`** permet d'exprimer des couleurs dans l'espace de couleurs CMJN (CMYK en anglais), en indiquant les composantes de cyan, de magenta, de jaune et de noir.

Cette approche colorimétrique peut s'avérer utile afin de créer des supports destinés à être imprimés sur une imprimante particulière, lorsque la sortie pour des combinaisons d'encres données est connue. Le moteur CSS peut tenter une approximation de la couleur, mais le résultat sera probablement différent de ce qui sera imprimé.

## Syntaxe

```css
device-cmyk(0 81% 81% 30%)
device-cmyk(0 81% 81% 30% / .5)
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34))
```

### Valeurs

- `device-cmyk( <composante-cmjn>{4} [ / <alpha> ]? , <couleur>? )`

  - : `<composante-cmjn>` est une liste de 4 valeurs numériques (type [`<number>`](/fr/docs/Web/CSS/number)) ou pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) qui indiquent respectivement les composantes cyan, magenta, jaune et noire de la couleur.

    `/ <alpha>` peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

    `<couleur>` est une couleur alternative (type [`<color>`](/fr/docs/Web/CSS/color_value)) à utiliser si l'agent utilisateur ne sait pas comment passer de la couleur CMJN à la couleur RGB.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
