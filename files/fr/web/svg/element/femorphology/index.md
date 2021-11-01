---
title: <feMorphology>
slug: Web/SVG/Element/feMorphology
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feMorphology
---
{{SVGRef}}

La primitive de filtre [SVG](/fr/docs/Web/SVG) **`<feMorphology>`** est utilisée pour éroder ou dilater l'image en entrée. Cela permet d'appliquer des effets de mise en gras ou d'amincissement.

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
- {{SVGAttr("operator")}}
- {{SVGAttr("radius")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEMorphologyElement")}}.

## Exemples

### Sur du contenu SVG

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180">
  <filter id="erode">
    <feMorphology operator="erode" radius="1"/>
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2"/>
  </filter>
  <text y="1em">Texte normal</text>
  <text id="thin" y="2em">Texte mince</text>
  <text id="thick" y="3em">Text gras</text>
</svg>
```

#### CSS

```css
text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}
```

{{EmbedLiveSample("Sur_du_contenu_SVG", 340, 180)}}

### Sur du contenu HTML

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <filter id="erode">
    <feMorphology operator="erode" radius="1"/>
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2"/>
  </filter>
</svg>

<p>Texte normal</p>
<p id="thin">Texte mince</p>
<p id="thick">Text gras</p>
```

#### CSS

```css
p {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
}

#thin {
  filter: url(#erode);
}

#thick {
  filter: url(#dilate);
}
```

{{EmbedLiveSample("Sur_du_contenu_HTML", 340, 180)}}

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Filters 1.0", "#feMorphologyElement", "&lt;feMorphology&gt;")}}         | {{Spec2("Filters 1.0")}} | Aucun changement    |
| {{SpecName("SVG1.1", "filters.html#feMorphologyElement", "&lt;feMorphology&gt;")}} | {{Spec2("SVG1.1")}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feMorphology")}}

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
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)
