---
title: cy
slug: Web/SVG/Reference/Attribute/cy
original_slug: Web/SVG/Attribute/cy
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`cy`** définit la coordonnée de l'axe y pour le point central d'un élément.

Trois éléments utilisent cet attribut&nbsp;:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("radialGradient")}}

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cy="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cy="50" cx="50" r="45" />
  <ellipse cy="150" cx="50" rx="45" ry="25" />
  <rect x="5" y="205" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample('exemple', '100%', 300)}}

## circle

Pour un élément {{SVGElement('circle')}}, `cy` définit la coordonnée y de son centre.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> La coordonnée y du centre de l'élément `<circle>` peut aussi être définie avec la _propriété de géométrie_ {{cssxref("cy")}}. Si elle est définie en CSS, la valeur de la propriété `cy` l'emporte sur la valeur de l'attribut `cy`.

## ellipse

Pour un élément {{SVGElement('ellipse')}}, `cy` définit la coordonnée y de son centre.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> La coordonnée y du centre de l'élément `<ellipse>` peut aussi être définie avec la _propriété de géométrie_ {{cssxref("cy")}}. Si elle est définie en CSS, la valeur de la propriété `cy` l'emporte sur la valeur de l'attribut `cy`.

## radialGradient

Pour un élément {{SVGElement('radialGradient')}}, `cy` définit la coordonnées y du plus grand cercle pour le dégradé radial (c'est-à-dire du plus externe).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><a href="/fr/docs/Web/SVG/Guides/Content_type#length">
        <code>&lt;length&gt;</code>
      </a></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cy="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cy="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cy="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('exemple', 150, '100%')}}

## Spécifications

{{Specifications}}

## Voir aussi

- {{SVGAttr("cx")}}
- {{SVGAttr("r")}}
- {{SVGAttr("rx")}}
- {{SVGAttr("ry")}}
- Les propriétés de géométrie&nbsp;: {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}} et {{cssxref("height")}}
