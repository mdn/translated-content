---
title: <feOffset>
slug: Web/SVG/Element/feOffset
---

{{SVGRef}}

La primitive de filtre **`<feOffset>`** permet de décaler l'image qu'elle a en entrée selon les attributs {{SVGAttr("dx")}} et {{SVGAttr("dy")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#attributs_de_présentation)
- [Attributs de primitives de filtres](/fr/docs/Web/SVG/Attribute#attributs_de_primitives_de_filtre)
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

  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    stroke="black"
    fill="green"
    filter="url(#offset)" />
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

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
- [Tutoriel SVG: Effets de filtre](/fr/docs/Web/SVG/Tutorial/Filter_effects)
