---
title: <feBlend>
slug: Web/SVG/Reference/Element/feBlend
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feBlend>`** permet de composer deux objets ensemble selon un mode de fusion donné, à la manière de ce que proposent les logiciels de retouche d'image pour fusionner deux calques. Le mode utilisé est défini par l'attribut {{SVGAttr("mode")}}.

Comme les autres primitives de filtres, elle traite les composantes colorimétriques dans {{Glossary("color space", "l'espace colorimétrique")}} `linearRGB` par défaut. L'attribut {{SVGAttr("color-interpolation-filters")}} permet d'utiliser `sRGB` à la place.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("in")}}
- {{SVGAttr("in2")}}
- {{SVGAttr("mode")}}
- [Attributs des primitives de filtres](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_les_primitives_de_filtre)&nbsp;: {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGFEBlendElement")}}.

## Exemples

### SVG

```html
<svg
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feFlood
        result="floodFill"
        x="0"
        y="0"
        width="100%"
        height="100%"
        flood-color="green"
        flood-opacity="1" />
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
    </filter>
  </defs>

  <image
    href="mdn_logo_only_color.png"
    x="10%"
    y="10%"
    width="80%"
    height="80%"
    filter="url(#spotlight)" />
</svg>
```

### Résultat

{{EmbedLiveSample("Exemples", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Attributs des primitives de filtres SVG](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_les_primitives_de_filtre)
- L'élément {{SVGElement("filter")}}
- L'élément {{SVGElement("animate")}}
- L'élément {{SVGElement("set")}}
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
- L'élément {{SVGElement("feOffset")}}
- L'élément {{SVGElement("feSpecularLighting")}}
- L'élément {{SVGElement("feTile")}}
- L'élément {{SVGElement("feTurbulence")}}
- [Tutoriel SVG&nbsp;: Effets de filtre](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
