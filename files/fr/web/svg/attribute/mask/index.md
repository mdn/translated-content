---
title: mask
slug: Web/SVG/Attribute/mask
---

{{SVGRef}}

L'attribut `mask` est un attribut de présentation principalement utilisé pour appliquer un trou (défini par un élément {{ SVGElement("mask") }}) sur l'élément qui possède cet attribut.

> **Note :** On peut aussi utiliser l'attribut {{cssxref('mask')}} en CSS.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <mask id="monMask" maskContentUnits="objectBoundingBox">
    <rect fill="white" x="0" y="0" width="100%" height="100%" />
    <polygon
      fill="black"
      points="0.5,0.2 0.68,0.74 0.21,0.41 0.79,0.41 0.32,0.74" />
  </mask>

  <!-- Fait un trou de la forme d'une étoile sur le cercle rouge,
  ce qui laisse apparaître le cercle jaune situé dessous. -->
  <circle cx="50" cy="50" r="20" fill="yellow" />
  <circle cx="50" cy="50" r="45" fill="red" mask="url(#monMask)" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 150)}}

Depuis SVG2, l'attribut {{cssxref('mask')}} est défini comme une propriété CSS et comme une propriété raccourcie pour beaucoup d'autres propriétés: {{cssxref('mask-image')}}, {{cssxref('mask-mode')}}, {{cssxref('mask-repeat')}}, {{cssxref('mask-position')}}, {{cssxref('mask-clip')}}, {{cssxref('mask-origin')}}, {{cssxref('mask-size')}} et {{cssxref('mask-composite')}}.

Étant un attribut de présentation, il peut être appliqué sur n'importe quel élément, mais il a un effet visible surtout sur les éléments suivants: {{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('ellipse')}}, {{SVGElement('g')}}, {{SVGElement('glyph')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('marker')}}, {{SVGElement('mask')}}, {{SVGElement('path')}}, {{SVGElement('pattern')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('svg')}}, {{SVGElement('symbol')}}, {{SVGElement('text')}} et {{SVGElement('use')}}.

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>Voir la propriété CSS {{cssxref('mask')}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
