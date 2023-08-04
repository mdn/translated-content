---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
---

{{SVGRef}}

L'attribut **`stroke-dasharray`** est un attribut de présentation qui définit le motif des traits et des espaces utilisés pour dessiner le contour de la forme.

> **Note :** Étant un attribut de présentation, `stroke-dasharray` peut être utilisé comme propriété CSS.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- [`<altGlyph>`](/fr/docs/Web/SVG/Element/altGlyph)
- [`<circle>`](/fr/docs/Web/SVG/Element/circle)
- [`<ellipse>`](/fr/docs/Web/SVG/Element/ellipse)
- [`<path>`](/fr/docs/Web/SVG/Element/path)
- [`<line>`](/fr/docs/Web/SVG/Element/line)
- [`<polygon>`](/fr/docs/Web/SVG/Element/polygon)
- [`<polyline>`](/fr/docs/Web/SVG/Element/polyline)
- [`<rect>`](/fr/docs/Web/SVG/Element/rect)
- [`<text>`](/fr/docs/Web/SVG/Element/text)
- [`<textPath>`](/fr/docs/Web/SVG/Element/textPath)
- [`<tref>`](/fr/docs/Web/SVG/Element/tref)
- [`<tspan>`](/fr/docs/Web/SVG/Element/tspan)

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
  <!-- Pas de tirets ou d'espaces -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Traits et espaces de même taille -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="4" />

  <!-- Traits et espaces de tailles différentes -->
  <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-dasharray="4 1" />

  <!-- Traits et espaces de tailles différentes avec un nombre impair de valeurs -->
  <line x1="0" y1="7" x2="30" y2="7" stroke="black" stroke-dasharray="4 1 2" />

  <!-- Traits et espaces de tailles différentes avec un nombre pair de valeurs -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="4 1 2 3" />

  <!-- Traits commençant par un espace -->
  <line
    x1="0"
    y1="11"
    x2="30"
    y2="11"
    stroke="black"
    stroke-dasharray="0 4 0" />
</svg>
```

{{EmbedLiveSample("", '100%', 150)}}

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
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

- `<dasharray>`

  - : Une liste de valeurs [`<length>`](/fr/docs/Web/SVG/Content_type#length) et [`<percentage>`](/fr/docs/Web/SVG/Content_type#percentage), séparées par des espaces ou des virgules, qui indiquent les longueurs alternées des traits et des espaces.

    Si un nombre impair de valeurs est fourni, la liste est répétée afin d'obtenir un nombre pair de valeur. Ainsi, `5,3,2` sera équivalent à `5,3,2,5,3,2`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
