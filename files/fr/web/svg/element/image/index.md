---
title: <image>
slug: Web/SVG/Element/image
translation_of: Web/SVG/Element/image
---
{{SVGRef}}

L'élément Image SVG (\<image>) permet d'inclure une image matricielle dans un document SVG.

## Contexte d'Utilisation

{{svginfo}}

## Exemple

Rendu basique d'une image PNG dans un objet SVG :

```html
<svg width="100%" height="100%" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <image xlink:href="/files/2917/fxlogo.png" x="0" y="0" height="100" width="100" />
</svg>
```

{{EmbedLiveSample("Exemple",250,260)}}

## Attributs

### Attributs globaux

- [Attributs de traitement conditionnel](/fr/SVG/Attribute#ConditionalProccessing "en/SVG/Attribute#ConditionalProccessing") »
- [Attributs noyau](/fr/SVG/Attribute#Core "en/SVG/Attribute#Core") »
- [Attributs d'événement graphique](/fr/SVG/Attribute#GraphicalEvent "en/SVG/Attribute#GraphicalEvent") »
- [Attributs Xlink](/fr/SVG/Attribute#XLink "en/SVG/Attribute#XLink") »
- [Attributs de présentation](/fr/SVG/Attribute#Presentation "en/SVG/Attribute#Presentation") »
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

Cet élément implémente l'interface [`SVGImageElement`](/fr/DOM/SVGImageElement "en/DOM/SVGImageElement").

## Compatibilité des navigateurs

{{Compat("svg.elements.image")}}
