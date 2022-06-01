---
title: <feBlend>
slug: Web/SVG/Element/feBlend
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feBlend
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feBlend>`** permet de combiner deux objets en utilisant un mode de fusion définit, un peu de la même manière que les logiciels de retouche d'image permettent de fusionner deux calques. Le mode à utiliser est définit par l'attribut {{SVGAttr("mode")}}.

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
- {{SVGAttr("in2")}}
- {{SVGAttr("mode")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEBlendElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
          flood-color="green" flood-opacity="1"/>
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>
    </filter>
  </defs>

  <image xlink:href="/files/6457/mdn_logo_only_color.png"
      x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#spotlight);"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire                                                                                    |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{SpecName("Filters 1.0", "#feBlendElement", "&lt;feBlend&gt;")}}         | {{Spec2("Filters 1.0")}} | Modes de fusion externalisés vers {{SpecName("Compositing", "#ltblendmodegt")}} |
| {{SpecName("SVG1.1", "filters.html#feBlendElement", "&lt;feBlend&gt;")}} | {{Spec2("SVG1.1")}}         | Définition initiale                                                                            |

## Compatibilité des navigateurs

{{Compat("svg.elements.feBlend")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
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
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)
