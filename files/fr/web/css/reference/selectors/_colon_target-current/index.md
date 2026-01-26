---
title: :target-current
slug: Web/CSS/Reference/Selectors/:target-current
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:target-current`** sélectionne le **marqueur de défilement actif** — le pseudo-élément {{CSSxRef("::scroll-marker")}} d'un {{CSSxRef("scroll-marker-group")}} qui est actuellement défilé. Ce [sélecteur](/fr/docs/Web/CSS/Guides/Selectors) peut être utilisé pour styliser la position de navigation active au sein d'un [groupe de marqueurs de défilement](/fr/docs/Web/CSS/Reference/Selectors/::scroll-marker-group#description).

> [!NOTE]
> La pseudo-classe `:target-current` n'est valide que sur les pseudo-éléments `::scroll-marker`.

## Syntaxe

```css-nolint
:target-current {
  /* ... */
}
```

## Exemples

Voir [Créer des carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels) et {{CSSxRef("::scroll-marker")}} pour des exemples complets qui utilisent la pseudo-classe `:target-current`.

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

- La pseudo-classe {{CSSxRef("scroll-marker-group")}}
- La pseudo-classe {{CSSxRef("::scroll-marker")}}
- La pseudo-classe {{CSSxRef("::scroll-marker-group")}}
- [Créer des carrousels CSS](/fr/docs/Web/CSS/CSS_overflow/CSS_carousels)
- Le module [CSS overflow](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) sur chrome.dev (2025)
