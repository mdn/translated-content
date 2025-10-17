---
title: <line>
slug: Web/SVG/Reference/Element/line
original_slug: Web/SVG/Element/line
---

{{SVGRef}}

L'élément `line` est un élément de la catégorie des formes simples SVG, utilisé pour créer une ligne connectant deux points.

## Contexte d'utilisation

{{svginfo}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- Si on n'indique pas stroke, la ligne de couleur
       ne sera pas visible -->
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

## Attributs

### Attributs globaux

- [Attributs conditionnels](/fr/docs/Web/SVG/Reference/Attribute#attributs_de_traitement_conditionnel)&nbsp;;
- [Attributs centraux](/fr/docs/Web/SVG/Reference/Attribute#attributs_de_base)&nbsp;;
- [Attributs d'événements graphiques](/fr/docs/Web/SVG/Attribute#attributs_d'.c3.a9v.c3.a9nement_graphique)&nbsp;;
- [Attributs de présentation](/fr/docs/Web/SVG/Reference/Attribute#attributs_de_pr.c3.a9sentation)&nbsp;;
- {{ SVGAttr("class") }}&nbsp;;
- {{ SVGAttr("style") }}&nbsp;;
- {{ SVGAttr("externalResourcesRequired") }}&nbsp;;
- {{ SVGAttr("transform") }}.

### Attributs spécifiques

- {{ SVGAttr("x1") }}
- {{ SVGAttr("x2") }}
- {{ SVGAttr("y1") }}
- {{ SVGAttr("y2") }}

## Interface DOM

Cet élément implémente l'interface [`SVGLineElement`](/fr/docs/DOM/SVGLineElement).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ SVGElement("polygon") }}&nbsp;;
- {{ SVGElement("path") }}.
