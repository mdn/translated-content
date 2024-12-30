---
title: <svg>
slug: Web/SVG/Element/svg
---

{{SVGRef}}

L'élément `svg` peut être utilisé pour intégrer des fragments de code SVG à l'intérieur d'un document (par exemple, un document HTML). Ce fragment de code SVG dispose de ses propres [viewport](/fr/docs/Web) et système de coordonnée.

## Contexte d'utilisation

{{svginfo}}

## Exemple

Prenons le fichier SVG suivant (représentant le drapeau nationnal de l'Italie) :

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     width="150" height="100" viewBox="0 0 3 2">

  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>
```

Ce fichier peut être inclus dans un document HTML5 de cette façon :

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Exemple mêlant HTML & SVG</title>
  </head>

  <body>
    <svg width="150" height="100" viewBox="0 0 3 2">
      <rect width="1" height="2" x="0" fill="#008d46" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#d2232c" />
    </svg>
  </body>
</html>
```

## Attributs

### Attributs globaux

- [Conditional processing attributes](/fr/docs/Web/SVG/Attribute#conditionalproccessing) »
- [Core attributes](/fr/docs/Web/SVG/Attribute#core) »
- [Document event attributes](/fr/docs/Web/SVG/Attribute#documentevent) »
- [Graphical event attributes](/fr/docs/Web/SVG/Attribute#graphicalevent) »
- [Presentation attributes](/fr/docs/Web/SVG/Attribute#presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("version")}}
- {{SVGAttr("baseProfile")}}
- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("contentScriptType")}}
- {{SVGAttr("contentStyleType")}}
- {{SVGAttr("viewBox")}}

## Interface DOM

Cette élément implémente l'interface [`SVGSVGElement`](/fr/docs/Web/API/SVGSVGElement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
