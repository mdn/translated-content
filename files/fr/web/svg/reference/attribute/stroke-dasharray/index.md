---
title: stroke-dasharray
slug: Web/SVG/Reference/Attribute/stroke-dasharray
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

L'attribut **`stroke-dasharray`** est un attribut de présentation qui définit le motif de traits et d'espaces utilisé pour dessiner le contour d'une forme.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-dasharray` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-dasharray")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 12" xmlns="http://www.w3.org/2000/svg">
  <style>
    line {
      stroke: black;
    }
  </style>
  <!-- Ni traits ni espaces -->
  <line x1="0" y1="1" x2="30" y2="1" />

  <!-- Traits et espaces de même taille -->
  <line x1="0" y1="3" x2="30" y2="3" stroke-dasharray="4" />

  <!-- Traits et espaces de tailles différentes -->
  <line x1="0" y1="5" x2="30" y2="5" stroke-dasharray="4 1" />

  <!-- Traits et espaces de tailles variées, avec un nombre impair de valeurs -->
  <line x1="0" y1="7" x2="30" y2="7" stroke-dasharray="4 1 2" />

  <!-- Traits et espaces de tailles variées, avec un nombre pair de valeurs -->
  <line x1="0" y1="9" x2="30" y2="9" stroke-dasharray="4 1 2 3" />

  <!-- Traits commençant par un espace -->
  <line x1="0" y1="11" x2="30" y2="11" stroke-dasharray="0 4 0" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 150)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>none</code> | <code>&lt;dasharray&gt;</code></td>
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

- `<dasharray>`
  - : Une liste de valeurs [`<length>`](/fr/docs/Web/SVG/Guides/Content_type#longueur) et [`<percentage>`](/fr/docs/Web/SVG/Guides/Content_type#pourcentage), séparées par des espaces et/ou des virgules, qui indiquent les longueurs alternées des traits et des espaces.

    Si un nombre impair de valeurs est fourni, la liste est répétée afin d'obtenir un nombre pair de valeurs. Ainsi, `5,3,2` est équivalent à `5,3,2,5,3,2`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke-dasharray")}}
