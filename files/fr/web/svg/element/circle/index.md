---
title: circle
slug: Web/SVG/Element/circle
---

{{SVGRef}}

L'élément `circle` est un élément de la catégorie des Formes simples, utilisé pour créer des cercles, en se basant sur un centre et un rayon.

## Usage

{{svginfo}}

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
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

## Attributs

### Attributs Globaux

- [Attributs conditionnels](/fr/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Attributs centraux](/fr/docs/Web/SVG/Attribute#core) »
- [Attributs d'événements graphiques](/fr/docs/Web/SVG/Attribute#graphicalevent) »
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Attributs spécifiques

- {{ SVGAttr("cx") }}
- {{ SVGAttr("cy") }}
- {{ SVGAttr("r") }}

## Interface DOM

Cet élément implémente l'interface {{ domxref("SVGCircleElement") }}.

## Compatibilité des navigateurs

{{Compat}}

## Corrélat

- {{ SVGElement("ellipse") }}
- {{ SVGElement("rect") }}
