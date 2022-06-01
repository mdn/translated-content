---
title: <feTile>
slug: Web/SVG/Element/feTile
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feTile
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feTile>`** permet de remplir un rectangle cible avec un motif en mosaïque qui répète une image en entrée. L'effet est similaire à ce que l'on obtient avec {{SVGElement("pattern")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de primitives de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### Attributs spécifiques

- {{SVGAttr("in")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFETileElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <feTile in="SourceGraphic" x="50" y="50"
          width="100" height="100" />
      <feTile/>
    </filter>
  </defs>

  <image xlink:href="/files/6457/mdn_logo_only_color.png"
      x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#tile);"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('Filters 1.0', '#feTileElement', '&lt;feTile&gt;')}}         | {{Spec2('Filters 1.0')}} | Aucun changement    |
| {{SpecName('SVG1.1', 'filters.html#feTileElement', '&lt;feTile&gt;')}} | {{Spec2('SVG1.1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feTile")}}

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
- {{SVGElement("feTurbulence")}}
- [SVG tutorial: Filter effects](/fr/docs/Web/SVG/Tutorial/Filter_effects)
