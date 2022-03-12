---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
tags:
  - Element
  - SVG
  - SVG Dégradé
translation_of: Web/SVG/Element/radialGradient
---
{{SVGRef}}

L'élément [SVG](/fr/docs/Web/SVG) **`<radialGradient>`** permet de définir un dégradé radial afin de dessiner un contour, ou de remplir des éléments SVG.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base) »
- [Références des attributs SVG](/fr/docs/Web/SVG/Attribute#Attributs_de_pr%C3%A9sentation) »
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#Attributs_XLink) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("gradientUnits")}}
- {{SVGAttr("gradientTransform")}}
- {{SVGAttr("cx")}}
- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
- {{SVGAttr("fx")}}
- {{SVGAttr("fy")}}
- {{SVGAttr("fr")}}
- {{SVGAttr("spreadMethod")}}
- {{SVGAttr("xlink:href")}}

## DOM Interface

Cet élément implémente l'interface {{domxref("SVGRadialGradientElement")}}.

## Exemple

### SVG

```html
<svg width="120" height="120" viewBox="0 0 120 120"
   xmlns="http://www.w3.org/2000/svg">

  <defs>
    <radialGradient id="exampleGradient">
      <stop offset="10%" stop-color="gold"/>
      <stop offset="95%" stop-color="green"/>
    </radialGradient>
  </defs>

  <circle fill="url(#exampleGradient)" cx="60" cy="60" r="50"/>
</svg>
```

### Résultat

{{ EmbedLiveSample('Exemple', 120, 120, '', 'Web/SVG/Element/radialGradient') }}

## Spécifications

| Spécification                                                                                                | Statut                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName('SVG2', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}}     | {{Spec2('SVG2')}} | Added `fr` attribute |
| {{SpecName('SVG1.1', 'pservers.html#RadialGradients', '&lt;radialGradient&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition   |

## Compatibilité des navigateurs

{{Compat("svg.elements.radialGradient")}}

## Voir aussi

- {{SVGElement("linearGradient")}}
