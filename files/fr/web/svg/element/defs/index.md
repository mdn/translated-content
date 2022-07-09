---
title: <defs>
slug: Web/SVG/Element/defs
translation_of: Web/SVG/Element/defs
---
{{SVGRef}}

SVG permet de définir des objets graphiques (génériques) pour une utilisation ultérieure. Autant qu'il est possible, cet usage est recommandé grâce aux propriétés offertes par l'élément `defs`.
Ainsi définir ces éléments au sein de l'élément `defs` promeut une meilleure compréhension du contenu SVG par l'homme et donc son accessibilité.

Les éléments définis grâce à `defs` ne sont jamais directement générés (_au sens du rendu graphique : ils ne sont pas affichés_). Vous devez utiliser l'élément {{SVGElement("use")}} pour leur-s utilisation-s lorsque vous le souhaitez au sein du `viewport`.

## Contexte d'usage

{{svginfo}}

## Exemple

```xml
<svg width="80px" height="30px" viewBox="0 0 80 30"
     xmlns="http://www.w3.org/2000/svg">

  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="10" width="60" height="10"
        fill="url(#Gradient01)"  />
</svg>
```

## Attributs

### Attributs globaux

- [Conditional processing attributes](/fr/docs/Web/SVG/Attribute#ConditionalProccessing)&nbsp;»
- [Core attributes](/fr/docs/Web/SVG/Attribute#Core)&nbsp;»
- [Graphical event attributes](/fr/docs/Web/SVG/Attribute#GraphicalEvent)&nbsp;»
- [Presentation attributes](/fr/docs/Web/SVG/Attribute#Presentation)&nbsp;»
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Attributs spécifiques

_Il ne dispoe pas d'attributs spécifiques._

## Interface avec DOM

Cet élément est implémenté par l'interface [`SVGDefsElement`](/fr/docs/Web/API/SVGDefsElement).

## Spécifications

| Spécification                                                                | Status                   | Commentaire        |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('SVG2', 'struct.html#Head', '&lt;defs&gt;')}} | {{Spec2('SVG2')}} |                    |
| {{SpecName('SVG1.1', 'struct.html#Head', '&lt;defs&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("svg.elements.defs")}}
