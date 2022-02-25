---
title: <tspan>
slug: Web/SVG/Element/tspan
tags:
  - Contenu texte SVG
  - Elément(3)
  - Référence(2)
  - SVG
translation_of: Web/SVG/Element/tspan
---
{{SVGRef}}

A l'intérieur d'un élément {{SVGElement("text")}}, les propriétés du texte et des polices, ainsi que la position actuelle du texte, peuvent être ajustées de façon absolue ou relative à partir des coodonnées précisées dans un élément `tspan`.

## Contexte d'utilisation

{{svginfo}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    text  { font: italic 12px serif; }
    tspan { font: bold 10px sans-serif; fill: red; }
  </style>

  <text x="10" y="30" class="small">
    Vous êtes
    <tspan>not</tspan>
    une banane !
  </text>
</svg>
```

{{EmbedLiveSample('Exemple', 100, '100%')}}

## Attributs

### Attributs globaux

- [Attributs de traitement conditionnel](/fr/docs/SVG/Attribute#ConditionalProccessing "SVG/Attribute#ConditionalProccessing") »
- [Attributs de base](/fr/docs/SVG/Attribute#Core "SVG/Attribute#Core") »
- [Attributs d'évènements graphiques](/fr/docs/SVG/Attribute#GraphicalEvent "SVG/Attribute#GraphicalEvent") »
- [Attributs de présentation](/fr/docs/SVG/Attribute#Presentation "SVG/Attribute#Presentation") »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Specific attributes

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}
- {{SVGAttr("rotate")}}
- {{SVGAttr("textLength")}}
- {{SVGAttr("lengthAdjust")}}

## Interface DOM

Cet élément implémente l'interface [`SVGTSpanElement`](/fr/docs/Web/API/SVGTSpanElement).

## Spécifications

| Spécification                                                                            | Statut                   | Commentaire          |
| ---------------------------------------------------------------------------------------- | ------------------------ | -------------------- |
| {{SpecName('SVG2', 'text.html#TextElement', '&lt;tspan&gt;')}}     | {{Spec2('SVG2')}} |                      |
| {{SpecName('SVG1.1', 'text.html#TSpanElement', '&lt;tspan&gt;')}} | {{Spec2('SVG1.1')}} | Définition originale |

## Compatibilité des navigateurs

{{Compat("svg.elements.tspan")}}

## Voir aussi

- {{SVGElement("text")}}
