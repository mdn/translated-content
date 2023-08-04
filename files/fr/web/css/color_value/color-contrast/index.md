---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`color-contrast()`** prend une couleur et la compare à une liste d'autres couleurs (voir [`<color>`](/fr/docs/Web/CSS/color_value) pour les valeurs possibles) afin de sélectionner la valeur de la liste qui offre le contraste le plus important avec la première couleur.

## Syntaxe

```css
color-contrast(wheat vs tan, sienna, #d2691e)
color-contrast(#008080 vs olive, var(--myColor), #d2691e)
```

### Valeurs

- `color-contrast( <couleur> vs <couleur>#{2,} )`

  - : `<couleur>` est une valeur de type [`<color>`](/fr/docs/Web/CSS/color_value).

    `<couleur>#{2,}` est une liste de couleurs (type [`<color>`](/fr/docs/Web/CSS/color_value)) séparées par des virgules, à comparer à la première.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
