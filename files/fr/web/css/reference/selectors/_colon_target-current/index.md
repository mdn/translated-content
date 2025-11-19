---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
original_slug: Web/CSS/:target-current
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:target-current`** sélectionne le **marqueur de défilement actif** — le pseudo-élément {{cssxref("::scroll-marker")}} d'un {{cssxref("scroll-marker-group")}} qui est actuellement défilé. Ce [sélecteur](/fr/docs/Web/CSS/Guides/Selectors) peut être utilisé pour styliser la position de navigation active au sein d'un [groupe de marqueurs de défilement](/fr/docs/Web/CSS/Reference/Selectors/::scroll-marker-group#description).

> [!NOTE]
> La pseudo-classe `:target-current` n'est valide que sur les pseudo-éléments `::scroll-marker`.

## Syntaxe

```css-nolint
:target-current {
  /* ... */
}
```

## Exemples

Voir [Créer des carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels) et {{cssxref("::scroll-marker")}} pour des exemples complets qui utilisent la pseudo-classe `:target-current`.

### Utilisation de base

```css
::scroll-marker {
  background-color: white;
}

::scroll-marker:target-current {
  background-color: black;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker")}}
- {{cssxref("::scroll-marker-group")}}
- [Créer des carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Le module [CSS overflow](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) sur chrome.dev (2025)
