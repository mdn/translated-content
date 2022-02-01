---
title: <feDropShadow>
slug: Web/SVG/Element/feDropShadow
tags:
  - Element
  - SVG
  - SVG Filter
translation_of: Web/SVG/Element/feDropShadow
---
{{SVGRef}}

La primitive de filtre **`<feDropShadow>`** crée une ombre portée pour l'image en entrée. Il s'agit d'un raccourci, le résultat du filtre `<feDropShadow>` revient à appliquer les primitives suivantes:

```xml
<feGaussianBlur in="alpha-channel-of-feDropShadow-in"
    stdDeviation="stdDeviation-of-feDropShadow"/>
<feOffset dx="dx-of-feDropShadow" dy="dy-of-feDropShadow"
    result="offsetblur"/>
<feFlood flood-color="flood-color-of-feDropShadow"
    flood-opacity="flood-opacity-of-feDropShadow"/>
<feComposite in2="offsetblur" operator="in"/>
<feMerge>
  <feMergeNode/>
  <feMergeNode in="in-of-feDropShadow"/>
</feMerge>
```

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- [Attributs de primitive de filtre](/fr/docs/Web/SVG/Attribute#Attributs_de_primitives_de_filtre)

### Attributs spécifiques

- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("in")}}
- {{SVGAttr("stdDeviation")}}
- {{SVGAttr("dx")}}
- {{SVGAttr("dy")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGFEDropShadowElement")}}.

## Exemple

### SVG

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="4" dy="8" stdDeviation="4"/>
    </filter>
  </defs>

  <circle cx="50%" cy="50%" r="80"
      style="fill:blue; filter:url(#shadow);"/>
</svg>
```

### Résultat

{{EmbedLiveSample("Exemple", 200, 200)}}

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Filters 1.0", "#feDropShadow", "&lt;feDistantLight&gt;")}} | {{Spec2("Filters 1.0")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.feDropShadow")}}

## Voir aussi

- {{SVGElement("filter")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feMerge")}}
- [Tutoriel SVG: Filtres](/fr/docs/Web/SVG/Tutoriel/filtres)
