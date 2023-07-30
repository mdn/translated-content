---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`lch()`** exprime une couleur donnée dans l'espace de couleur LCH, qui utilise le même axe L (luminosité) que [`lab()`](/fr/docs/Web/CSS/color_value/lab), mais utilise des coordonnées polaires C (chroma) et H (pour la teinte, <i lang="en">hue</i> en anglais).

## Syntaxe

```css
lch(29.2345% 44.2 27)
lch(52.2345% 72.2 56.2)
lch(52.2345% 72.2 56.2 / .5)
```

### Valeurs

- `lch(L C H [/ A])`

  - : `L` indique la luminosité [CIE](https://fr.wikipedia.org/wiki/Commission_internationale_de_l%27éclairage) sous la forme d'un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) compris entre `0%`, pour le noir, et `100%`, pour le blanc.

    Le deuxième argument, `C`, indique la [chroma](https://fr.wikipedia.org/wiki/Chrominance) (indiquant en quelque sorte la quantité de couleur). Sa valeur minimale est 0 et sa valeur maximale est théoriquement infinie, bien qu'elle n'excède pas `0.4` en pratique.

    Le troisième argument, `H` correspond à l'angle pour la teinte (<i lang="en">hue</i> en anglais). `0deg` pointe selon l'axe positif "a" (un rouge pourpre), `90deg` pointe selon l'axe positif "b" (jaune moutarde), `180deg` pointe selon l'axe négatif "a" (un cyan vert), et `270deg` pointe selon l'axe négatif "b" (bleu ciel).

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les couleurs LCH en CSS&nbsp;: qu'est-ce que c'est, pourquoi et comment&nbsp;?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Notes de version pour Safari Technology Preview 122](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/) mentionnant `lch()` et [`lab()`](/fr/docs/Web/CSS/color_value/lab)
