---
title: <linearGradient>
slug: Web/SVG/Element/linearGradient
tags:
  - Element
  - Reference
  - SVG
  - SVG Gradient
translation_of: Web/SVG/Element/linearGradient
---
{{SVGRef}}

L'élément **`<linearGradient>`** permet de définir des dégradés linéaires, qui pourront être utilisés comme remplissage ou contour des éléments SVG.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#Attributs_XLink)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("gradientUnits")}}
- {{SVGAttr("gradientTransform")}}
- {{SVGAttr("x1")}}
- {{SVGAttr("y1")}}
- {{SVGAttr("x2")}}
- {{SVGAttr("y2")}}
- {{SVGAttr("spreadMethod")}}
- {{SVGAttr("xlink:href")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGLinearGradientElement")}}.

## Exemple

```html
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="MyGradient">
            <stop offset="5%"  stop-color="green"/>
            <stop offset="95%" stop-color="gold"/>
        </linearGradient>
    </defs>

    <rect fill="url(#MyGradient)"
          x="10" y="10" width="100" height="100"/>
</svg>
```

{{EmbedLiveSample("Exemple", 120, 120)}}

## Spécifications

| Spécification                                                                                                    | Statut                   | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('SVG2', 'pservers.html#LinearGradientElement', '&lt;linearGradient&gt;')}} | {{Spec2('SVG2')}} |                     |
| {{SpecName('SVG1.1', 'pservers.html#LinearGradients', '&lt;linearGradient&gt;')}}     | {{Spec2('SVG1.1')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.linearGradient")}}

## Voir aussi

- {{SVGElement("radialGradient")}}
- {{SVGElement("stop")}}
