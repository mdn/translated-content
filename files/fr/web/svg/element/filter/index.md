---
title: <filter>
slug: Web/SVG/Element/filter
---

{{SVGRef}}

L'élément [SVG](/fr/docs/Web/SVG) **`<filter>`** sert de conteneur pour définir des opérations de filtre. Il n'est jamais affiché par lui-même, il est référencé en utilisant l'attribut {{SVGAttr("filter")}} sur un élément SVG ou via la propriété {{Glossary("CSS")}} {{cssxref("filter")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs XLink](/fr/docs/Web/SVG/Attribute#Attributs_XLink)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Attributs spécifiques

- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("filterRes")}}
- {{SVGAttr("filterUnits")}}
- {{SVGAttr("primitiveUnits")}}
- {{SVGAttr("xlink:href")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFilterElement")}}.

## Exemple

#### SVG

```html
<svg
  width="230"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" />

  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)" />
</svg>
```

#### Résultat

{{EmbedLiveSample("Exemple",232,124,"/files/4227/feGaussianBlur.png")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)
