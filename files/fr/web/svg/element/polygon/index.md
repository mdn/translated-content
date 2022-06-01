---
title: <polygon>
slug: Web/SVG/Element/polygon
tags:
  - Element
  - Reference
  - SVG
  - SVG Graphique
translation_of: Web/SVG/Element/polygon
browser-compat: svg.elements.polygon
---
{{SVGRef}}

L'élément **`<polygon>`** délimite une forme close composée d'un groupe de plusieurs segments de droites. Le dernier point est relié au premier afin de fermer la forme et de relier les traits entre deux. Pour créer une forme ouverte, voir l'élément {{SVGElement("polyline")}}.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Exemple d'un polygone avec le remplissage par défaut -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- Le même polygone sans remplissage et avec un contour -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Exemple', '100', '100')}}

## Attributs

- {{SVGAttr('points')}}
  - : Cette attribut défini une liste de point (paire de coordonnées absolue x et y ) nécessaire pour dessiner le polygone.
    _Type de valeur_: [**\<number>**](/fr/docs/Web/SVG/Content_type#Number)+ ; _Valeur par défaut_: `""`; _Peut être animé_: **oui**
- {{SVGAttr("pathLength")}}
  - : Cet attribut spécifie la taille totale pour le chemin dans l'unité de l'utilisateur.
    _Type de valeur_: [**\<number>**](/fr/docs/Web/SVG/Content_type#Number); _Valeur par défaut_: _aucune_; _Peut être animé_: **oui**

### Attributs Globaux

- [Attribut de base](/fr/docs/Web/SVG/Attribute/Core)
  - : Principalement: {{SVGAttr('id')}} et {{SVGAttr('tabindex')}}
- [Attribut de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}} et {{SVGAttr('style')}}
- [Attributs conditionnels](/fr/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Principalement: {{SVGAttr('requiredExtensions')}} et {{SVGAttr('systemLanguage')}}
- Attributs d'évènements
  - : [Attribut d'évènement global](/fr/docs/Web/SVG/Attribute/Events#global_event_attributes), [Attribut d'évènement graphique](/fr/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [Attributs de présentation](h/fr/docs/Web/SVG/Attribute/Presentation)
  - : Principalement: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}} et {{SVGAttr('visibility')}}
- Attributs ARIA
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Contexte d'usage

{{svginfo}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGPolygonElement")}}.

## Spécifications

{{Specifications}}

## Compatibilité avec les navigateurs

{{Compat}}

## Voir également

- Autres formes élémentaires en SVG: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polyline') }}** et **{{ SVGElement('rect') }}.**
