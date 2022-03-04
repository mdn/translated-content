---
title: <line>
slug: Web/SVG/Element/line
tags:
  - Element
  - Graphisme
  - Reference
  - Référence(2)
  - SVG
  - Élément(2)
translation_of: Web/SVG/Element/line
---
{{SVGRef}}

L'élément `line` est un élément de la catégorie des formes simples SVG, utilisé pour créer une ligne connectant deux points.

## Contexte d'utilisation

{{svginfo}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- Si on n'indique pas stroke, la ligne de couleur
       ne sera pas visible -->
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

## Attributs

### Attributs globaux

- [Attributs conditionnels](/fr/docs/Web/SVG/Attribute#Attributs_de_traitement_conditionnel "en/SVG/Attribute#ConditionalProccessing") ;
- [Attributs centraux](/fr/docs/Web/SVG/Attribute#Attributs_de_base "en/SVG/Attribute#Core") ;
- [Attributs d'événements graphiques](/fr/docs/Web/SVG/Attribute#Attributs_d'.C3.A9v.C3.A9nement_graphique "en/SVG/Attribute#GraphicalEvent") ;
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_pr.C3.A9sentation "en/SVG/Attribute#Presentation")&nbsp;;
- {{ SVGAttr("class") }} ;
- {{ SVGAttr("style") }} ;
- {{ SVGAttr("externalResourcesRequired") }} ;
- {{ SVGAttr("transform") }}.

### Attributs spécifiques

- {{ SVGAttr("x1") }}
- {{ SVGAttr("x2") }}
- {{ SVGAttr("y1") }}
- {{ SVGAttr("y2") }}

## Interface DOM

Cet élément implémente l'interface [`SVGLineElement`](/fr/DOM/SVGLineElement "en/DOM/SVGLineElement").

## Compatibilité des navigateurs

{{Compat("svg.elements.line")}}

## Voir aussi

- {{ SVGElement("polygon") }} ;
- {{ SVGElement("path") }}.
