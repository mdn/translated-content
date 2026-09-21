---
title: mask
slug: Web/SVG/Reference/Attribute/mask
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`mask`** est un attribut de présentation principalement utilisé pour associer un élément {{SVGElement("mask")}} donné à l'élément qui porte cet attribut.

> [!NOTE]
> En tant qu'attribut de présentation, `mask` possède une propriété CSS équivalente&nbsp;: {{cssxref("mask")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('use')}}

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
  <mask id="myMask" maskContentUnits="objectBoundingBox">
    <rect fill="white" x="0" y="0" width="100%" height="100%" />
    <polygon
      fill="black"
      points="0.5,0.2 0.68,0.74 0.21,0.41 0.79,0.41 0.32,0.74" />
  </mask>

  <!--
  Perce un trou en forme d'étoile dans le cercle rouge,
  ce qui laisse apparaître le cercle jaune situé en dessous
  -->
  <circle cx="50" cy="50" r="20" fill="yellow" />
  <circle cx="50" cy="50" r="45" fill="red" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 150)}}

Depuis SVG2, l'attribut {{cssxref('mask')}} est défini comme une propriété CSS, et comme une propriété raccourcie pour de nombreuses autres propriétés&nbsp;: {{cssxref('mask-image')}}, {{cssxref('mask-mode')}}, {{cssxref('mask-repeat')}}, {{cssxref('mask-position')}}, {{cssxref('mask-clip')}}, {{cssxref('mask-origin')}}, {{cssxref('mask-size')}} et {{cssxref('mask-composite')}}.

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>Voir la propriété CSS {{cssxref("mask")}}</td>
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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("mask")}}
