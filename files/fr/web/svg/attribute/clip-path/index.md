---
title: clip-path
slug: Web/SVG/Attribute/clip-path
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/clip-path
---
{{SVGRef}}

L'attribut **`clip-path`** permet d'appliquer un détourage à un élément.

> **Note :** `clip-path` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué sur tous les éléments, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('ellipse')}}, {{SVGElement('g')}}, {{SVGElement('glyph')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('marker')}}, {{SVGElement('mask')}}, {{SVGElement('path')}}, {{SVGElement('pattern')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('svg')}}, {{SVGElement('symbol')}}, {{SVGElement('text')}}, {{SVGElement('use')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="myClip" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".5" />
  </clipPath>

  <!-- En haut à gauche: Applique un détourage précédemment crée -->
  <rect x="1" y="1" width="8" height="8" stroke="green"
        clip-path="url(#myClip)" />

  <!-- En haut à droite: Applique un détourage sur fill-box via une forme CSS.
       Revient à créer un détourage avec clipPathUnits="objectBoundingBox" -->
  <rect x="11" y="1" width="8" height="8" stroke="green"
        clip-path="circle() fill-box" />

  <!-- En bas à gauche: Applique un détourage sur stroke-box via une forme CSS. -->
  <rect x="1" y="11" width="8" height="8" stroke="green"
        clip-path="circle() stroke-box" />

  <!-- En bas à droite: Applique un détourage sur view-box via une forme CSS.
       Revient à créer un détourage avec clipPathUnits="userSpaceOnUse" -->
  <rect x="11" y="11" width="8" height="8" stroke="green"
        clip-path="circle() view-box" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Notes d'usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        {{cssxref('url')}} | [ {{cssxref('basic-shape')}} ||
        &#x3C;geometry-box> ] | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

- \<geometry-box>
  - : une information supplémentaire pour dire comment une {{cssxref('basic-shape', 'forme CSS')}} est appliquée à un élément: `fill-box` indique d'utiliser la zone de sélection de l'objet ; `stroke-box` d'utiliser la zone de sélection de l'objet en prenant en plus le contour de l'élément; `view-box` d'utiliser le  document SVG parent.

> **Note :** Pour plus d'informations sur la syntaxe de clip-path, voir la propriété CSS {{cssxref('clip-path')}}.

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.clip-path")}}

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire                                                                                                                 |
| -------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS Masks", "#the-clip-path", 'clip-path')}}                 | {{Spec2('CSS Masks')}} | Étend son application aux éléments HTML. La propriété `clip-path` remplace la propriété {{cssxref("clip")}} dépréciée. |
| {{SpecName('SVG1.1', 'masking.html#ClipPathProperty', 'clip-path')}} | {{Spec2('SVG1.1')}}     | Définition initiale (s'applique sur les éléments SVG uniquement).                                                           |
