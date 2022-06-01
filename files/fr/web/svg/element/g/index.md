---
title: <g>
slug: Web/SVG/Element/g
tags:
  - Element
  - Reference
  - SVG
  - SVG Conteneur
translation_of: Web/SVG/Element/g
---
{{SVGRef}}

L'élément `g` est un conteneur utilisé pour grouper des objets.

Les transformations appliquées à l'élément `g` sont reportées à tous ses éléments enfants. Les attributs appliqués sont également reportés aux éléments enfants. De plus, il peut être utilisé pour définir des objets complexes qui seront référencés ultérieurement avec l'élément {{SVGElement("use")}}.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Les enfants de g héritent de ses attributs de présentation -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Exemple', 100, '100%')}}

## Attributs

Cet élément n'a que des attributs globaux

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute/Core)
  - : Notamment: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Attributs de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Notamment: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Attributs d'événement
  - : [Attributs d'événement globaux](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_globaux), [Attributs d'événement graphiques](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_graphiques)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Notamment: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Attributs Aria
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Contexte d'utilisation

{{svginfo}}

## Spécifications

| Spécification                                                                | Statut                   | Commentaire        |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName("SVG2", "struct.html#GElement", "&lt;g&gt;")}} | {{Spec2("SVG2")}} |                    |
| {{SpecName("SVG1.1", "struct.html#Groups", "&lt;g&gt;")}} | {{Spec2("SVG1.1")}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("svg.elements.g")}}
