---
title: stroke
slug: Web/SVG/Attribute/stroke
---

{{SVGRef}}

L'attribut **`stroke`** définit la couleur (ou n'importe quelle méthode de remplissage, comme un gradient ou motif) a utiliser pour dessiner le contour d'une forme SVG.

> **Note :** `stroke` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué à tout élément, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple trait de couleur -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- Utiliser un degradé comme contour -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Notes d'usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
        >
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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :** Pour plus d'informations sur les valeurs de `context-stroke` (et `context-fill`) à partir de documents HTML, voir la documentation pour la propriété non-standard {{cssxref("-moz-context-properties")}}.
