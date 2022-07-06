---
title: <style>
slug: Web/SVG/Element/style
tags:
  - Element
  - Reference
  - SVG
translation_of: Web/SVG/Element/style
---
{{SVGRef}}

L'élément `style` permet d'intégrer directement des feuilles de style dans un contenu SVG. L'élément style de SVG possède les mêmes attributs que l'élément correspondant au format HTML (voir l'élément HTML {{HTMLElement("style")}}).

## Contexte d'utilisation

{{svginfo}}

## Exemple

```html
<svg width="100%" height="100%" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
  <style>
    /* <![CDATA[ */
    circle {
      fill: orange;
      stroke: black;
      stroke-width: 10px; // Note that the value of a pixel depend on the viewBox
    }
    /* ]]> */
  </style>

  <circle cx="50" cy="50" r="40" />
</svg>
```

Résultat en direct:

{{EmbedLiveSample("Exemple",150,165)}}

## Attributs

### Attributs Globaux

- [Core attributes](/fr/SVG/Attribute#Core)&nbsp;»

### Attributs Specifiques

- {{SVGAttr("type")}}
- {{SVGAttr("media")}}
- {{SVGAttr("title")}}

## Interface DOM

Cet élément implemente l'interface [`SVGStyleElement`](/fr/DOM/SVGStyleElement).

## Specifications

| Specification                                                                                | Status                   | Commentaire        |
| -------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('SVG2', 'styling.html#StyleElement', '&lt;style&gt;')}}     | {{Spec2('SVG2')}} |                    |
| {{SpecName('SVG1.1', 'styling.html#StyleElement', '&lt;style&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("svg.elements.style")}}

## Voir aussi

- [\<style> element in HTML](/fr/HTML/Element/style)
