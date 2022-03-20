---
title: <feSpecularLighting>
slug: Web/SVG/Element/feSpecularLighting
tags:
  - Element
  - SVG
  - SVG Filter
  - SVG Light Source
translation_of: Web/SVG/Element/feSpecularLighting
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feSpecularLighting>`** éclaire une image en utilisant son canal alpha en tant que relief. L'image résultante est une image RGBA qui dépend de la couleur de la lumière, de sa position et du relief de l'image en entrée. Le calcul de l'éclairage se fait suivant le [modèle d'illumination de Phong](https://fr.wikipedia.org/wiki/Ombrage_de_Phong).

La lumière crée par cette primitive de filtre peut être combinée avec une image de texture à l'aide de l'opérateur `arithmetic` de la primitive de filtre {{SVGElement("feComposite")}}. De multiples sources lumineuses peuvent être simulées en ajoutant plusieurs éléments à la texture.

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

- {{SVGAttr("in")}}
- {{SVGAttr("surfaceScale")}}
- {{SVGAttr("specularConstant")}}
- {{SVGAttr("specularExponent")}}
- {{SVGAttr("kernelUnitLength")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFESpecularLightingElement")}}.

## Exemple

```html
<svg height="200" width="200" viewBox="0 0 220 220"
    xmlns="http://www.w3.org/2000/svg">
  <filter id = "filter">
    <feSpecularLighting result="specOut"
          specularExponent=
    <fePointLight x="50
       </feSpecularLighting>
    <feComposite in="SourceGraphic" in2="specOut"
        operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
  </filter>
  <circle cx="110" cy="110" r="100" style="filter:url(#filter)"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 220, 220)}}

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire                                                     |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| {{SpecName('Filters 1.0', '#feSpecularLightingElement', '&lt;feSpecularLighting&gt;')}}         | {{Spec2('Filters 1.0')}} | Suppression de la limitation sur l'attribut `specularExponent`. |
| {{SpecName('SVG1.1', 'filters.html#feSpecularLightingElement', '&lt;feSpecularLighting&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale                                             |

## Compatibilité des navigateurs

{{Compat("svg.elements.feSpecularLighting")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDistantLight")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("fePointLight")}}
- {{SVGElement("feSpotLight")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)
