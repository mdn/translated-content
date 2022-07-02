---
title: <feOffset>
slug: Web/SVG/Element/feOffset
tags:
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feOffset
---
{{SVGRef}}

La primitive de filtre **`<feOffset>`** permet de décaler l'image qu'elle a en entrée selon les attributs {{SVGAttr("dx")}} et {{SVGAttr("dy")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de primitives de filtres](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Attributs spécifiques

- {{SVGAttr("in")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEOffsetElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offset" width="180" height="180">
      <feOffset in="SourceGraphic" dx="60" dy="60" />
    </filter>
  </defs>

  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green"/>
  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green" filter="url(#offset)"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('Filters 1.0', '#feOffsetElement', '&lt;feOffset&gt;')}}             | {{Spec2('Filters 1.0')}} | Aucun changement    |
| {{SpecName('SVG1.1', 'filters.html#feOffsetElement', '&lt;feOffset&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feOffset")}}

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
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Effets de filtre](/fr/docs/Web/SVG/Tutoriel/filtres)
