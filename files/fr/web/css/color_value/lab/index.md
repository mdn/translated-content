---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`lab()`** exprime une couleur donnée dans l'espace de couleur CIE L\*a\*b\*, qui représente l'intégralité des couleurs perceptibles par l'œil humain.

## Syntaxe

```css
lab(29.2345% 39.3825 20.0664)
lab(52.2345% 40.1645 59.9971)
lab(52.2345% 40.1645 59.9971 / .5)
```

### Valeurs

- `lab(L a b [/ A])`

  - : `L` indique la luminosité [CIE](https://fr.wikipedia.org/wiki/Commission_internationale_de_l%27éclairage) sous la forme d'un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) compris entre `0%`, pour le noir, et `100%`, pour le blanc.

    Le deuxième argument, `a`, indique la distance sur l'axe `a` de l'espace de couleur Lab.

    Le troisième argument, `b`, indique la distance sur l'axe `b` de l'espace de couleur Lab.

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les couleurs LCH en CSS&nbsp;: qu'est-ce que c'est, pourquoi et comment&nbsp;?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Notes de version pour Safari Technology Preview 122](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/) mentionnant `lab()` et [`lch()`](/fr/docs/Web/CSS/color_value/lch)
