---
title: <path>
slug: Web/SVG/Reference/Element/path
original_slug: Web/SVG/Element/path
---

{{SVGRef}}

L'élément `path` est l'élément générique pour définir une forme. Toutes les formes basiques peuvent aussi être faites à partir de `path`.

## Usage

{{svginfo}}

## Exemple

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 400 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">

  <path d="M 100 100 L 300 100 L 200 300 z"
        fill="red" stroke-width="3" />
</svg>
```

## Attributs

### Attributs Globaux

- [Attributs conditionnels](/fr/docs/Web/SVG/Reference/Attribute#conditionalproccessing) »
- [Attributs centraux](/fr/docs/Web/SVG/Reference/Attribute#core) »
- [Attributs d'événements graphiques](/fr/docs/Web/SVG/Reference/Attribute#graphicalevent) »
- [Attributs de présentation](/fr/docs/Web/SVG/Reference/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Attributs spécifiques

- {{ SVGAttr("d") }}
- {{ SVGAttr("pathLength") }}

## Interface DOM

Cet élément implémente l'interface [`SVGPathElement`](/fr/docs/DOM/SVGPathElement).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ SVGElement("circle") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("line") }}
- {{ SVGElement("polygon") }}
- {{ SVGElement("polyline") }}
- {{ SVGElement("rect") }}
- [The MDN SVG "Getting Started" tutorial : Path](/fr/docs/SVG/Tutorial/Paths)
