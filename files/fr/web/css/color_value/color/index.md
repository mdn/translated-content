---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`color()`** permet d'exprimer une couleur dans un espace de couleur donné, plutôt que dans l'espace de couleur implicite sRGB, utilisé par la plupart des fonctions manipulant des couleurs.

La prise en charge d'un espace de couleur donné peut être détectée grâce à la caractéristique média [`color-gamut`](/fr/docs/Web/CSS/@media/color-gamut).

La [règle @](/fr/docs/Web/CSS/CSS_syntax/At-rule) [`@color-profile`](/fr/docs/Web/CSS/@color-profile) peut être utilisée afin de définir et de nommer un profil de couleur à utiliser dans la fonction `color()`.

## Syntaxe

```css
color(display-p3 1 0.5 0)
color(display-p3 1 0.5 0 / .5)
```

### Valeurs

- `color( <identifiant>? [ <number-percentage>+ | <string> ] [ / <alpha> ]?)`
  - : `[<ident> | <dashed-ident>]` est un identifiant (type [`<ident>`](/fr/docs/Web/CSS/ident) ou [`<dashed-ident>`](/fr/docs/Web/CSS/dashed-ident)) indiquant l'espace de couleur. S'il s'agit d'une valeur de type `<ident>`, elle indique un des espaces de couleur prédéfini (par exemple `display-p3`). S'il s'agit d'une valeur de type `<dashed-ident>`, elle indique un espace de couleur personnalisé, défini via une règle [`@color-profile`](/fr/docs/Web/CSS/@color-profile).

    `[ <number-percentage>+ | <string> ]` indique un ou plusieurs nombres (type [`<number>`](/fr/docs/Web/CSS/number)) ou pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) fournissant les valeurs que prend l'espace de couleur en entrée, ou une chaîne de caractères (type [`<string>`](/fr/docs/Web/CSS/string)) indiquant le nom d'une couleur définie dans l'espace de couleur.

    `/ <alpha>` peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Larges gamuts en CSS avec Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
