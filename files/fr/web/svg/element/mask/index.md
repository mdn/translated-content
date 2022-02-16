---
title: <mask>
slug: Web/SVG/Element/mask
tags:
  - Element
  - Masque
  - NeedsCompatTable
  - SVG
  - SVG Container
translation_of: Web/SVG/Element/mask
---
{{SVGRef}}

L'élément **`<mask>`** définit un masque alpha. Ce masque peut par la suite être appliqué sur une forme en utilisant la propriété {{SVGAttr("mask")}}.

Le masque permet de rendre des zones de l'élément sur lequel est appliqué (semi-)transparentes. On peut par exemple créer un effet de fondu en utilisant un dégradé, ce que le détourage ({{SVGElement('clipPath')}}) ne permet pas.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 120 120">
  <mask id="myMask">
    <!-- Tous les pixels blancs sont visibles -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- Tous les pixels noirs sont invisibles -->
    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="black" />
  </mask>

  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- Avec ce masque, on "perfore" un trou en forme de coeur à l'intérieur du cercle -->
  <circle cx="50" cy="50" r="50" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

## Attributs

- {{SVGAttr("height")}}
  - : Définit la hauteur du masque.
    _Valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length) ; Valeur par défaut: `120%`; _Animation_: **oui**
- {{SVGAttr("maskContentUnits")}}
  - : Définit le système de coordonnées pour le contenu du `<mask>`.
    _Valeur_: `userSpaceOnUse`|`objectBoundingBox` ; _Valeur par défaut_: `userSpaceOnUse`; _Animation_: **oui**
- {{SVGAttr("maskUnits")}}
  - : Définit le système de coordonnées pour les attributs {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} et {{SVGAttr("height")}} du `<mask>`.
    _Valeur_: `userSpaceOnUse`|`objectBoundingBox` ; _Valeur par défaut_: `objectBoundingBox`; _Animation_: **oui**
- {{SVGAttr("x")}}
  - : Définit la coordonnée de l'axe x du coin supérieur gauche du masque.
    _Valeur_: [**\<coordinate>**](/docs/Web/SVG/Content_type#Coordinate) ; _Valeur par défaut_: `-10%`; _Animation_: **oui**
- {{SVGAttr("y")}}
  - : Définit la coordonnée de l'axe y du coin supérieur gauche du masque.
    _Valeur_: [**\<coordinate>**](/docs/Web/SVG/Content_type#Coordinate) ; _Valeur par défaut_: `-10%`; _Animation_: **oui**
- {{SVGAttr("width")}}
  - : Définit la largeur du masque.
    _Valeur_: [**\<length>**](/docs/Web/SVG/Content_type#Length) ; Valeur par défaut: `120%`; _Animation_: **oui**

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute/Core)
  - : Notamment: {{SVGAttr('id')}}
- [Attributs de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Notamment: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Notamment: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}

## Notes d'usage

{{svginfo}}

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire         |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('CSS Masks', '#MaskElement', '&lt;mask&gt;')}}         | {{Spec2('CSS Masks')}} |                     |
| {{SpecName('SVG1.1', 'masking.html#Masking', '&lt;mask&gt;')}} | {{Spec2('SVG1.1')}}     | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.mask")}}

## Voir aussi

- Élément de détourage: {{SVGElement("clipPath")}}
- Propriétés CSS de masque: {{cssxref("mask")}}, {{cssxref("mask-image")}},{{cssxref("mask-mode")}}, {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}}, {{cssxref("mask-composite")}}, {{cssxref("mask-size")}}, {{cssxref("pointer-events")}}
