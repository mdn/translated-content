---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`oklab()`** exprime une couleur donnée dans l'espace de couleur OKLab, qui essaie de se rapprocher de la perception de la couleur par l'œil humain.

## Syntaxe

```css
oklab(40.1% 0.1143 0.045)
oklab(59.69% 0.1007 0.1191)
oklab(59.69% 0.1007 0.1191 / .5)
```

### Valeurs

- `oklab(L a b [/ A])`

  - : `L` indique la luminosité perçue et est exprimée comme un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) compris entre `0%`, pour le noir, et `100%`, pour le blanc.

    Le deuxième argument, `a`, indique la distance sur l'axe `a` de l'espace de couleur OKLab.

    Le troisième argument, `b`, indique la distance sur l'axe `b` de l'espace de couleur OKLab.

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Un espace de couleur perceptif pour le traitement des images](https://bottosson.github.io/posts/oklab/)
- [Notes de version pour Safari Technology Preview 137](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/) mentionnant `oklab()` et [`oklch()`](/fr/docs/Web/CSS/color_value/oklch)
