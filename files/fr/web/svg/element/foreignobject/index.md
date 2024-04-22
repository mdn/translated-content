---
title: <foreignObject>
slug: Web/SVG/Element/foreignObject
---

{{SVGRef}}

L'élément **`<foreignObject>`** permet d'inclure des éléments d'un espace de noms XML différent à l'intérieur du [SVG](/fr/docs/Web/SVG). Dans le contexte d'un navigateur, il s'agit généralement d'inclure du XHTML/HTML.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    polygon {
      fill: black;
    }

    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- Cas d'utilisation courant: inclure du texte HTML dans le SVG -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
      Dans le cas d'un SVG intégré dans du HTML, le namespace XHTML peut
      être omis, mais il est obligatoire dans le contexte d'un document SVG
    -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
      mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
      imperdiet eros. Aliquam erat volutpat.
    </div>
  </foreignObject>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Attributs

- {{SVGAttr("height")}}
  - : Cet attribut détermine la hauteur du rectangle.
    _Type de valeur_: [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `auto`; _Animation_: **oui**
- {{SVGAttr("width")}}
  - : Cet attribut détermine la largeur du rectangle.
    _Type de valeur_: [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `auto`; _Animation_: **oui**
- {{SVGAttr("x")}}
  - : Cet attribut détermine la coordonnée x du rectangle.
    _Type de valeur_: [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("y")}}
  - : Cet attribut détermine la coordonnée y du rectangle.
    _Type de valeur_: [**\<length>**](/fr/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/fr/docs/Web/SVG/Content_type#Percentage) ; _Valeur par défaut_: `0`; _Animation_: **oui**

> **Note :** À partir de SVG2 `x`, `y`, `width`, et `height` sont des _Propriétés Géometriques_, ce qui signifie que ces attributs peuvent également être utilisés comme des propriétés CSS pour cet élément.

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute/Core)
  - : Notamment: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Attributs de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Notamment: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Attributs d'événement
  - : [Attributs d'événements globaux](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_globaux), [Attributs d'événement graphiques](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_graphiques), [Attributs d'événement du document](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_du_document), [Attributs d'événement des éléments du document](/fr/docs/Web/SVG/Attribute/Events#Attributs_d'événement_des_éléments_du_document)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Notamment: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Attributs Aria
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Notes d'usage

{{svginfo}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
