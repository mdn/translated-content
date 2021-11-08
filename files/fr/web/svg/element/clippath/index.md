---
title: <clipPath>
slug: Web/SVG/Element/clipPath
tags:
  - Element
  - SVG
translation_of: Web/SVG/Element/clipPath
---
{{SVGRef}}

L'élément [SVG](/fr/docs/Web/SVG) **`<clipPath>`** définit un détourage. Ce détourage peut par la suite être appliqué sur une forme en utilisant la propriété {{SVGAttr("clip-path")}}.

Le détourage limite la zone dans laquelle l'élément sur lequel il est appliqué sera dessiné. Autrement dit, les parties de l'élément en dehors de la forme créée par le détourage ne seront pas affichées.

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!-- La forme créée par le détourage est un simple cercle. -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- Le coeur sans détourage, pour référence -->
  <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    Le coeur avec détourage.
    Seule la partie à l'intérieur du cercle est visible.
  -->
  <use clip-path="url(#myClip)" xlink:href="#heart" fill="red" />
</svg>
```

```css
/* Animation CSS pour les navigateurs *
 * qui implémentent la propriété de géométrie r. */

@keyframes openYourHeart {from {r: 0} to {r: 60px}}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('Exemple', 100, 100)}}

Sur le plan conceptuel, un détourage est un peu comme une zone d'affichage personnalisée pour l'élément sur lequel il est appliqué. Cela va limiter la zone dans laquelle l'élément est affiché, sans affecter sa géométrie (position, taille, etc).

La zone de sélection d'un élément détouré (c'est à dire un élément qui référence un `<clipPath>` via la propriété {{SVGAttr("clip-path")}}, ou un de ses enfant) reste la même, comme s'il n'était pas tronqué.

Par défaut, les événements de pointeur ne sont pas déclenchés sur les régions détourées (non visibles) d'une forme. Par exemple, un cercle avec un rayon de 10 qui est détouré à un cercle de rayon 5, ne recevra pas d'événement "click" en dehors de ce rayon de 5. Ce comportement peut être modifié avec la propriété {{cssxref("pointer-events")}}.

## Attributs

- {{SVGAttr("clipPathUnits")}}
  - : Cet attribut définit le système de coordonnées pour le contenu de l'élément `<clipPath>`.
    _Valeur_: `userSpaceOnUse`|`objectBoundingBox` ; _Valeur par défaut_: `userSpaceOnUse`; _Animation_: **oui**

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

| Spécification                                                                                                        | Statut                       | Commentaire         |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("CSS Masks", "#ClipPathElement", "&lt;clipPath&gt;")}}                             | {{Spec2("CSS Masks")}} |                     |
| {{SpecName("SVG1.1", "masking.html#EstablishingANewClippingPath", "&lt;clipPath&gt;")}} | {{Spec2("SVG1.1")}}     | Définition initiale |

## Compatibilité des navigateurs

{{Compat("svg.elements.clipPath")}}

## Voir aussi

- Élément de masquage: {{SVGElement("mask")}}
- Quelques propriétés CSS: {{cssxref("clip-path")}}, {{cssxref("pointer-events")}}
