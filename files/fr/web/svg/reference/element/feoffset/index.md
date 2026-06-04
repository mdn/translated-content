---
title: <feOffset>
slug: Web/SVG/Reference/Element/feOffset
l10n:
  sourceCommit: 0cc1adcc7df8f3f7072ef5454036f449e0f923cd
---

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feOffset>`** permet de décaler une image en entrée par rapport à sa position courante. L'image en entrée est décalée globalement selon les valeurs définies par les attributs {{SVGAttr("dx")}} et {{SVGAttr("dy")}}.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("in")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}
- [Attributs des primitives de filtres](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_les_primitives_de_filtre)&nbsp;: {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGFEOffsetElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offset" width="180" height="180" filterUnits="userSpaceOnUse">
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

{{EmbedLiveSample("Exemple", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{SVGElement("filter")}}
- L'élément {{SVGElement("animate")}}
- L'élément {{SVGElement("set")}}
- L'élément {{SVGElement("feBlend")}}
- L'élément {{SVGElement("feColorMatrix")}}
- L'élément {{SVGElement("feComponentTransfer")}}
- L'élément {{SVGElement("feComposite")}}
- L'élément {{SVGElement("feConvolveMatrix")}}
- L'élément {{SVGElement("feDiffuseLighting")}}
- L'élément {{SVGElement("feDisplacementMap")}}
- L'élément {{SVGElement("feFlood")}}
- L'élément {{SVGElement("feGaussianBlur")}}
- L'élément {{SVGElement("feImage")}}
- L'élément {{SVGElement("feMerge")}}
- L'élément {{SVGElement("feMorphology")}}
- L'élément {{SVGElement("feSpecularLighting")}}
- L'élément {{SVGElement("feTile")}}
- L'élément {{SVGElement("feTurbulence")}}
- [Tutoriel SVG&nbsp;: Effets de filtre](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
