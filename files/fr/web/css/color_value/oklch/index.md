---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`oklch()`** exprime une couleur donnée dans l'espace de couleur OKLCH. Cet espace utilise le même axe L (luminosité) que [`oklab()`](/fr/docs/Web/CSS/color_value/oklab), mais utilise des coordonnées polaires C (chroma) et H (pour la teinte, <i lang="en">hue</i> en anglais).

## Syntaxe

```css
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)
```

### Valeurs

- `oklch(L C H [/ A])`

  - : `L` indique la luminosité perçue et est exprimée comme un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) compris entre `0%`, pour le noir, et `100%`, pour le blanc.

    Le deuxième argument, `C`, indique la [chroma](https://fr.wikipedia.org/wiki/Chrominance) (indiquant en quelque sorte la quantité de couleur). Sa valeur minimale est 0 et sa valeur maximale est théoriquement infinie, bien qu'elle n'excède pas `0.4` en pratique.

    Le troisième argument, `H` correspond à l'angle pour la teinte (<i lang="en">hue</i> en anglais). `0deg` pointe selon l'axe positif "a" (un rouge pourpre), `90deg` pointe selon l'axe positif "b" (jaune moutarde), `180deg` pointe selon l'axe négatif "a" (un cyan vert), et `270deg` pointe selon l'axe négatif "b" (bleu ciel).

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Un espace de couleur perceptif pour le traitement des images](https://bottosson.github.io/posts/oklab/)
- [Notes de version pour Safari Technology Preview 137](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/) mentionnant `oklch()` et [`oklab()`](/fr/docs/Web/CSS/color_value/oklab)
