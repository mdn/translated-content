---
title: <feTurbulence>
slug: Web/SVG/Element/feTurbulence
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feTurbulence
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feTurbulence>`** crée une image en utilisant la [fonction de turbulence de Perlin](https://fr.wikipedia.org/wiki/Bruit_de_Perlin). Cela permet de créer des textures artificielles comme des nuages, du marbre, etc.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de primitive de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Attributs spécifiques

- {{SVGAttr("baseFrequency")}}
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("seed")}}
- {{SVGAttr("stitchTiles")}}
- {{SVGAttr("type")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFETurbulenceElement")}}.

## Exemple

```html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
```

{{EmbedLiveSample('Exemple', 220, 220)}}

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Filters 1.0', '#feTurbulenceElement', '&lt;feTurbulence&gt;')}}         | {{Spec2('Filters 1.0')}} | Aucun changement    |
| {{SpecName('SVG1.1', 'filters.html#feTurbulenceElement', '&lt;feTurbulence&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feTurbulence")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)
