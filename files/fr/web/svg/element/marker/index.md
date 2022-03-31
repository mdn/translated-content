---
title: <marker>
slug: Web/SVG/Element/marker
tags:
  - SVG
  - SVG Element
translation_of: Web/SVG/Element/marker
---
{{SVGRef}}

L'élément **`<marker>`** définit un élément graphique qui pourra être utilisé pour dessiner des pointes de flèches ou des polymarqueurs sur un élément {{SVGElement("path")}}, {{SVGElement("line")}}, {{SVGElement("polyline")}} ou {{SVGElement("polygon")}}.

Les marqueurs sont attachés aux formes à l'aide des propriétés {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, et {{SVGAttr("marker-end")}}.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Définit une pointe de flèche -->
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        tart-reverse">
                         <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- Définit un simple point -->
    <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- Dessine les axes des coordonnées avec des pointes de flèche à chaque bout -->
  <polyline points="10,10 10,90 90,90" fill="none" stroke="black"
   marker-start="url(#arrow)" marker-end="url(#arrow)"  />

  <!-- Dessine une ligne avec un simple point entre chaque segment -->
  <polyline points="15,80 29,50 43,60 57,30 71,40 85,15" fill="none" stroke="grey"
   marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)" />
</svg>
```

{{EmbedLiveSample('Exemple', 200, 200)}}

## Attributs

- {{SVGAttr("markerHeight")}}
  - : Définit la hauteur du viewport du marqueur.
    _Valeur_: **[\<length>](/docs/Web/SVG/Content_type#Length)** ; _Valeur par défaut_: `3`; _Animation_: **oui**
- {{SVGAttr("markerUnits")}}
  - : Définit le système de coordnnées pour les attributs `markerWidth`, `markerHeight` et le contenu du `<marker>`.
    _Valeur_: `userSpaceOnUse`|`strokeWidth` ; _Valeur par défaut_: `strokeWidth`; _Animation_: **oui**
- {{SVGAttr("markerWidth")}}
  - : Définit la largeur du viewport du marqueur.
    _Valeur_: **[\<length>](/docs/Web/SVG/Content_type#Length)** ; _Valeur par défaut_: `3`; _Animation_: **oui**
- {{SVGAttr("orient")}}
  - : Définit l'orientation du marqueur relativement à la forme à laquelle il est attaché.
    _Valeur_: `auto`|`auto-start-reverse`|**[\<angle>](/docs/Web/SVG/Content_type#Angle)** ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("preserveAspectRatio")}}
  - : Définit comment le fragment svg doit être déformé s'il est incorporé dans un conteneur avec un rapport hauteur:largeur différent de celui du marqueur.
    _Valeur_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Valeur par défaut_: `xMidYMid meet`; _Animation_: **oui**
- {{SVGAttr("refX")}}
  - : Définit la coordonnées x du point de référence du marqueur.
    _Valeur_: `left`|`center`|`right`|**[\<coordinate>](/docs/Web/SVG/Content_type#Coordinate)** ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("refY")}}
  - : Définit la coordonnées y du point de référence du marqueur.
    _Valeur_: `top`|`center`|`bottom`|**[\<coordinate>](/docs/Web/SVG/Content_type#Coordinate)** ; _Valeur par défaut_: `0`; _Animation_: **oui**
- {{SVGAttr("viewBox")}}
  - : Définit la limite de la zone de dessin pour le fragment SVG.
    _Valeur_: **[\<list-of-numbers>](/docs/Web/SVG/Content_type#List-of-Ts)** ; _Valeur par défaut_: none; _Animation_: **oui**

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute/Core)
  - : Notamment: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Attributs de style](/fr/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Notamment: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute/Presentation)
  - : Notamment: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Attributs ARIA
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Notes d'usage

{{svginfo}}

## Spécifications

| Sp"cification                                                                                    | Statut                           | Commentaire         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("SVG Markers", "#MarkerElement", "&lt;marker&gt;")}}             | {{Spec2("SVG Markers")}} |                     |
| {{SpecName("SVG2", "painting.html#MarkerElement", "&lt;marker&gt;")}}     | {{Spec2("SVG2")}}         |                     |
| {{SpecName("SVG1.1", "painting.html#MarkerElement", "&lt;marker&gt;")}} | {{Spec2("SVG1.1")}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.marker")}}

## Voir aussi

- Propriétés liées aux marqueurs: {{SVGAttr("marker-start")}}, {{SVGAttr("marker-mid")}}, et {{SVGAttr("marker-end")}}
