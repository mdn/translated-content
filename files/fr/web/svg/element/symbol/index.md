---
title: <symbol>
slug: Web/SVG/Element/symbol
tags:
  - SVG
  - SVG Conteneur
translation_of: Web/SVG/Element/symbol
---
{{SVGRef}}

L'élément **`<symbol>`** est utilisé pour définir un template de graphique pouvant être instancié par un élément {{SVGElement("use")}}.

L'utilisation d'éléments `symbol` pour les graphiques qui sont utilisés de multiples fois dans le même document permet d'améliorer la structure et la sémantique du document. Les documents fortement structurés peuvent plus facilement être rendus sous forme graphique, vocale, ou Braille, et ainsi favoriser leur accessibilité.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Notre symbol a son propre système de coordonnées -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

   <!-- Une grille pour matérialiser le positionnement du symbole -->
  <path d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20" fill="none" stroke="pink" />

  <!-- Multiples instances de notre symbole -->
  <use xlink:href="#myDot" x="5"  y="5" style="opacity:1.0" />
  <use xlink:href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use xlink:href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use xlink:href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use xlink:href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Attributs

- {{SVGAttr("height")}}
  - : Cet attribut détermine la hauteur du symbole.
    _Type de valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `auto`; _Animation_: **oui**
- {{SVGAttr("preserveAspectRatio")}}
  - : Cet attribut définit comment le fragment svg doit être déformé s'il est inclus dans un conteneur ayant un ratio d'affichage (largeur:hauteur) différent.
    _Type de valeur_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Valeur par défaut_: `xMidYMid meet`; _Animation_: **oui**
- {{SVGAttr("refX")}}
  - : Cet attribut détermine la coordonnée x du point de référence du symbole.
    _Type de valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage)|`left`|`center`|`right` ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("refY")}}
  - : Cet attribut détermine la coordonnée y du point de référence du symbole.
    _Type de valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage)|`top`|`center`|`bottom` ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("viewBox")}}
  - : Cet attribut définit les limites de la zone d'affichage du symbole.
    _Type de valeur_: **[\<list-of-numbers>](/docs/Web/SVG/Content_type#List-of-Ts)** ; _Valeur par défaut_: aucune; _Animation_: **oui**
- {{SVGAttr("width")}}
  - : Cet attribut définit la largeur du symbole.
    _Type de valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `auto`; _Animation_: **oui**
- {{SVGAttr("x")}}
  - : Cet attribut détermine la coordonnée x du symbole.
    _Type de valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("y")}}
  - : Cet attribut détermine la coordonnée y du symbole.
    _Type de valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `0`; _Animation_: **oui**

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute/Core)
  - : Notamment: {{SVGAttr('id')}}
- [Attributs de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- Attributs d'événement
  - : [Attributs d'événement globaux](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_globaux), [Attributs d'événement des éléments du document](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_des_éléments_du_document), [Attributs d'événement graphiques](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_graphiques)
- [Atttributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Notamment: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Attributs Aria
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Notes d'utilisation

{{svginfo}}

> **Note :** Un élément `<symbol>` n'est pas destiné à être affiché par lui-même. Seules les instances d'un élément `<symbol>` (c'est à dire une référence vers un `<symbol>` par un élément {{SVGElement("use")}}) sont affichées. Cela signifie que certains navigateurs peuvent refuser d'afficher directement un élément `<symbol>` quand bien même la propriété CSS {{cssxref('display')}} indique le contraire.

## Spécifications

| Spécification                                                                                | Statut                   | Commentaire                                                         |
| -------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------- |
| {{SpecName('SVG2', 'struct.html#SymbolElement', '&lt;symbol&gt;')}}     | {{Spec2('SVG2')}} | Permet aux propriétés de géométrie d'être spécifiées sur un symbole |
| {{SpecName('SVG1.1', 'struct.html#SymbolElement', '&lt;symbol&gt;')}} | {{Spec2('SVG1.1')}} | Définition initiale                                                 |

## Compatibilité des navigateurs

{{Compat("svg.elements.symbol")}}
