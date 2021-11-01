---
title: text
slug: Web/SVG/Element/text
tags:
  - Element
  - Reference
  - SVG
  - SVG contenu de texte
translation_of: Web/SVG/Element/text
---
{{SVGRef}}{{Draft("Cette version n'est pas à jour relativement à la version anglaise de référence, merci d'en tenir compte.")}}

L'élément SVG `text` définit un élément graphique contenant du texte. Notez  qu'il est possible d'y appliquer un dégradé, un motif, un tracé spécifique (clipping path), un masque ou un filtre.

Si du texte est écrit dans le SVG sans être intégré dans un balise \<text>, il ne sera pas affiché. Le texte n'est pas _caché_ par défaut, la propriété display ne le montre simplement pas.

## Contexte d'utilisation

{{svginfo}}

## Exemple

```xml
<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="100px" height="30px" viewBox="0 0 1000 300">

  <text x="250" y="150"
        font-family="Verdana"
        font-size="55">
    Bonjour tout le monde!
  </text>

  <!-- Dessine le contour de l'image -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

L'élément \<text> est utilisé pour dessiner des caractères de texte. L'exemple de code suivant écrit un text svg à l'aide de coordonnées x/y.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10" y="20">SVG Text Example</text>
</svg>
```

Le texte en SVG peut être pivoté. L'exemple de code suivant démontre la rotation de texte à l'aide de l'attribut transform.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        transform="rotate(30 20,40)">
    SVG Text Rotation example
  </text>
</svg>
```

Le texte SVG peut également être stylisé avec du CSS contenant les propriétés SVG.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="50px">
  <text x="10"  y="20"
        style="font-family: Times New Roman;
               font-size  : 24;
               stroke     : #00ff00;
               fill       : #0000ff;">
    SVG text styling
  </text>
</svg>
```

## Attributs

### Attributs globaux

- [Conditional processing attributes](/fr/SVG/Attribute#ConditionalProccessing "en/SVG/Attribute#ConditionalProccessing") »
- [Core attributes](/fr/SVG/Attribute#Core "en/SVG/Attribute#Core") »
- [Graphical event attributes](/fr/SVG/Attribute#GraphicalEvent "en/SVG/Attribute#GraphicalEvent") »
- [Presentation attributes](/fr/SVG/Attribute#Presentation "en/SVG/Attribute#Presentation") »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Attributs spécifiques

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("dx") }}
- {{ SVGAttr("dy") }}
- {{ SVGAttr("text-anchor") }}
- {{ SVGAttr("rotate") }}
- {{ SVGAttr("textLength") }}
- {{ SVGAttr("lengthAdjust") }}

## Interface DOM

Cet élément implémente l'interface [`SVGTextElement`](/fr/DOM/SVGTextElement "en/DOM/SVGTextElement").

## Compatibilité des navigateurs

{{Compat("svg.elements.text")}}

## Articles liés

- {{ SVGElement("tspan") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("altGlyph") }}
