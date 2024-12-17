---
title: <rect>
slug: Web/SVG/Element/rect
---

{{SVGRef}}

L'élément `rect` est un élément de Formes basiques, utilisé pour dessiner des rectangles à partir de la position d'un angle, de largeur et de la hauteur. Il peut aussi être utilisé avec des arrondis.

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
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rect element -->
  <rect x="0" y="0" width="100" height="100" />

  <!-- Rounded corner rect element -->
  <rect x="120" y="0" width="100" height="100" rx="15" ry="15" />
</svg>
```

{{EmbedLiveSample('Exemple', 100, '100%')}}

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

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## Interface DOM

Cet élément implémente l'interface [`SVGRectElement`](/fr/docs/DOM/SVGRectElement) .

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ SVGElement("path") }}
