---
title: <feGaussianBlur>
slug: Web/SVG/Reference/Element/feGaussianBlur
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feGaussianBlur>`** applique un effet de flou à l'image en entrée. La quantité de flou est définie par l'attribut {{SVGAttr("stdDeviation")}}, qui décrit la courbe en cloche du flou gaussien.

Comme les autres primitives de filtres, elle traite les composantes colorimétriques dans {{Glossary("color space", "l'espace colorimétrique")}} `linearRGB` par défaut. L'attribut {{SVGAttr("color-interpolation-filters")}} permet d'utiliser `sRGB` à la place.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("edgeMode")}}
- [Attributs des primitives de filtres](/fr/docs/Web/SVG/Reference/Attribute#attributs_pour_les_primitives_de_filtre)&nbsp;: {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGFEGaussianBlurElement")}}.

## Exemple

### Exemple simple

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

{{EmbedLiveSample("Exemple simple", "", 130)}}

### Exemple avec une ombre portée

#### SVG

```html
<svg
  width="120"
  height="120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <filter id="dropShadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
    <feOffset dx="2" dy="4" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <circle cx="60" cy="60" r="50" fill="green" filter="url(#dropShadow)" />
</svg>
```

#### Résultat

{{EmbedLiveSample("Exemple avec une ombre portée", "", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Attributs SVG pour les primitives de filtres](/fr/docs/Web/SVG/Reference/Attribute#attributs_de_filtre)
- L'élément {{SVGElement("filter")}}
- L'élément {{SVGElement("feBlend")}}
- L'élément {{SVGElement("feColorMatrix")}}
- L'élément {{SVGElement("feComponentTransfer")}}
- L'élément {{SVGElement("feComposite")}}
- L'élément {{SVGElement("feConvolveMatrix")}}
- L'élément {{SVGElement("feDiffuseLighting")}}
- L'élément {{SVGElement("feDisplacementMap")}}
- L'élément {{SVGElement("feFlood")}}
- L'élément {{SVGElement("feImage")}}
- L'élément {{SVGElement("feMerge")}}
- L'élément {{SVGElement("feMorphology")}}
- L'élément {{SVGElement("feOffset")}}
- L'élément {{SVGElement("feSpecularLighting")}}
- L'élément {{SVGElement("feTile")}}
- L'élément {{SVGElement("feTurbulence")}}
- [Tutoriel SVG&nbsp;: Filtres](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
