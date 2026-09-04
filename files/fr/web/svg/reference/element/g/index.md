---
title: <g>
slug: Web/SVG/Reference/Element/g
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

L'élément [SVG](/fr/docs/Web/SVG) **`<g>`** est un conteneur utilisé pour regrouper d'autres éléments SVG.

Les transformations appliquées à l'élément `g` sont reportées à tous ses éléments enfants. Les attributs appliqués sont également reportés aux éléments enfants. De plus, il peut être utilisé pour définir des objets complexes qui seront référencés ultérieurement avec l'élément {{SVGElement("use")}}.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

Cet élément inclus uniquement les attributs universels.

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGGElement")}}.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Les enfants de g héritent de ses attributs de présentation -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Exemple', 100, '100%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
