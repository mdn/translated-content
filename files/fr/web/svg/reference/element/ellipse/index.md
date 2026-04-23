---
title: ellipse
slug: Web/SVG/Reference/Element/ellipse
original_slug: Web/SVG/Element/ellipse
---

{{SVGRef}}

L'élément `ellipse` est une forme basique SVG,utilisé pour créer des ellipses basées sur un centre, et ses deux rayons x et y.

> [!NOTE]
> Il est impossible de spécifier l'orientation exacte d'une ellipse (par exemple, si vous souhaitez dessiner une ellipse à un angle de 45°), mais l'ellipse peut avoir une rotation avec l'attribut {{ SVGAttr("transform") }}.

```xml
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

## Attributs

### Attributs spécifiques

- {{ SVGAttr("cx") }}
  - : La position x de l'ellipse.
    Type de valeur : [**`<longueur>`**](/fr/docs/Web/SVG/Guides/Content_type#Length)|[**`<pourcentage>`**](/fr/docs/Web/SVG/Guides/Content_type#Percentage); Valeur par défaut : `0`; Animable : **oui**.
- {{ SVGAttr("cy") }}
  - : La position y de l'ellipse.
    Type de valeur : [**`<longueur>`**](/fr/docs/Web/SVG/Guides/Content_type#Length)|[**`<pourcentage>`**](/fr/docs/Web/SVG/Guides/Content_type#Percentage); Valeur par défaut : `0`; Animable :**oui**.
- {{ SVGAttr("rx") }}
  - : Le rayon de l'ellipse sur l'axe x.
    Type de valeur : `auto`|[**`<longueur>`**](/fr/docs/Web/SVG/Guides/Content_type#Length)|[**`<pourcentage>`**](/fr/docs/Web/SVG/Guides/Content_type#Percentage); Valeur par défaut : `auto`; Animable : **oui**.
- {{ SVGAttr("ry") }}
  - : Le rayon de l'ellipse sur l'axe y.
    Type de valeur : `auto`|[**`<longueur>`**](/fr/docs/Web/SVG/Guides/Content_type#Length)|[**`<pourcentage>`**](/fr/docs/Web/SVG/Guides/Content_type#Percentage); Valeur par défaut : `auto`; Animable : **oui**.
- {{ SVGAttr("pathLength") }}
  - : Cet attribut permet de spécifier la longueur totale du tracé, en unités de l'utilisateur.
    Type de valeur : **[\<number>](/fr/docs/Web/SVG/Guides/Content_type#Number)**; Valeur par défaut : `auto`; Animable : **oui**.

> [!NOTE]
> À partir de SVG2, cx, cy, rx, et ry sont des _Propriétés Géomatriques_, ce qui signifie que ces attributs peuvent aussi être utilisés comme propriétés CSS pour cet élément.

### Attributs Globaux

- [Attributs centraux](/fr/docs/Web/SVG/Reference/Attribute)
  - : Plus notamment : {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Attributs de style](/fr/docs/Web/SVG/Reference/Attribute)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Reference/Attribute)
  - : Plus notamment : {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Attributs d'événements
  - : [Attributs d'évènement globaux](/fr/docs/Web/SVG/Reference/Attribute#global_event_attributes), [Attributs d'évènement graphiques](/fr/docs/Web/SVG/Reference/Attribute#graphical_event_attributes)
- [Attributs de présentation](/fr/docs/Web/SVG/Reference/Attribute)
  - : Plus notamment : {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Attributs ARIA
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage

{{svginfo}}

## Interface DOM

Cet élément implémente l'interface [`SVGEllipseElement`](/fr/docs/DOM/SVGEllipseElement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres formes de base SVG : **{{SVGElement('circle')}}**, {{SVGElement('line')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}
