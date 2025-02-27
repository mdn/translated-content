---
title: <style>
slug: Web/SVG/Element/style
---

{{SVGRef}}

L'élément `style` permet d'intégrer directement des feuilles de style dans un contenu SVG. L'élément style de SVG possède les mêmes attributs que l'élément correspondant au format HTML (voir l'élément HTML {{HTMLElement("style")}}).

## Contexte d'utilisation

{{svginfo}}

## Exemple

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
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

- [Core attributes](/fr/docs/Web/SVG/Attribute#core)&nbsp;»

### Attributs Specifiques

- {{SVGAttr("type")}}
- {{SVGAttr("media")}}
- {{SVGAttr("title")}}

## Interface DOM

Cet élément implemente l'interface [`SVGStyleElement`](/fr/docs/DOM/SVGStyleElement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [\<style> element in HTML](/fr/docs/Web/HTML/Element/style)
