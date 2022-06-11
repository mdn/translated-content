---
title: <feMergeNode>
slug: Web/SVG/Element/feMergeNode
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feMergeNode
---
{{SVGRef}}

L'élément SVG `feMergeNode` se place à l'intérieur d'un élément {{ SVGElement("feMerge") }}. Il prend en entrée le résultat d'un filtre afin qu'il soit traité par son parent.

## Contexte d'utilisation

{{svginfo}}

## Exemple

```html
<svg width="200" height="200"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink">

    <filter id="feOffset" x="-40" y="-20" width="100" height="200">
        <feOffset in="SourceGraphic" dx="60" dy="60" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur2" />
        <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
    </filter>

    <rect x="40" y="40" width="100" height="100"
       style="stroke: #000000; fill: green; filter: url(#feOffset);" />
    <rect x="40" y="40" width="100" height="100"
        style="stroke: #000000; fill: green;" />
</svg>
```

### Résultat

{{EmbedLiveSample('Exemple', 200, 200)}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base "en/SVG/Attribute#Core")

### Attributs spécifiques

- {{ SVGAttr("in") }}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEMergeNodeElement")}}.

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Filters 1.0', '#elementdef-femergenode', '&lt;feMergeNode&gt;')}}     | {{Spec2('Filters 1.0')}} |                     |
| {{SpecName('SVG1.1', 'filters.html#feMergeNodeElement', '&lt;feMergeNode&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feMergeNode")}}

## Voir aussi

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feMerge") }}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres "en/SVG/Tutorial/Filter_effects")
