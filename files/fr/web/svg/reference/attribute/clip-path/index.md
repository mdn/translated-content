---
title: clip-path
slug: Web/SVG/Reference/Attribute/clip-path
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'attribut de présentation **`clip-path`** définit un chemin de détourage, ou associe un chemin de détourage existant, à l'élément auquel il se rapporte.

> [!NOTE]
> En tant qu'attribut de présentation, `clip-path` possède une propriété CSS équivalente&nbsp;: {{cssxref("clip-path")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

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
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="myClip" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".5" />
  </clipPath>

  <!-- En haut à gauche : applique un chemin de détourage personnalisé -->
  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="url(#myClip)" />

  <!-- En haut à droite : applique une forme CSS de base sur une géométrie
       fill-box. Cela revient au même qu'un chemin de détourage personnalisé
       dont clipPathUnits vaut objectBoundingBox -->
  <rect
    x="11"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() fill-box" />

  <!-- En bas à gauche -->
  <rect
    x="1"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() stroke-box" />

  <!-- En bas à droite : applique une forme CSS de base sur une géométrie
       view-box. Cela revient au même qu'un chemin de détourage personnalisé
       dont clipPathUnits vaut userSpaceOnUse -->
  <rect
    x="11"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() view-box" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 200)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        {{CSSXref("url_value", "&lt;url&gt;")}} | [ {{cssxref('basic-shape')}} ||
        <code>&#x3C;geometry-box></code> ] | <code>none</code>
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
  - : Une information supplémentaire qui indique comment une {{cssxref('basic-shape')}} est appliquée à un élément&nbsp;: `fill-box` indique d'utiliser la boîte englobante de l'objet&nbsp;; `stroke-box` indique d'utiliser la boîte englobante de l'objet étendue au contour&nbsp;; `view-box` indique d'utiliser la zone d'affichage SVG la plus proche comme boîte de référence.

> [!NOTE]
> Pour plus de détails sur la syntaxe de `clip-path`, voir la page de référence de la propriété CSS {{cssxref('clip-path')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("clip-path")}}
- [Introduction au détourage en CSS](/fr/docs/Web/CSS/Guides/Masking/Clipping)
