---
title: <image>
slug: Web/SVG/Element/image
---

{{SVGRef}}

L'élément Image SVG (\<image>) permet d'inclure une image matricielle dans un document SVG.

## Contexte d'Utilisation

{{svginfo}}

## Exemple

Rendu basique d'une image PNG dans un objet SVG :

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <image
    xlink:href="/files/2917/fxlogo.png"
    x="0"
    y="0"
    height="100"
    width="100" />
</svg>
```

{{EmbedLiveSample("Exemple",250,260)}}

## Attributs

### Attributs globaux

- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Attributs noyau](/fr/docs/Web/SVG/Attribute#core) »
- [Attributs d'événement graphique](/fr/docs/Web/SVG/Attribute#graphicalevent) »
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#xlink) »
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
- {{ SVGAttr("xlink:href") }}
- {{ SVGAttr("preserveAspectRatio") }}

## Interface DOM

Cet élément implémente l'interface [`SVGImageElement`](/fr/docs/DOM/SVGImageElement).

## Compatibilité des navigateurs

{{Compat}}
