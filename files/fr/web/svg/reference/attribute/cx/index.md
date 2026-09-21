---
title: cx
slug: Web/SVG/Reference/Attribute/cx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

L'attribut **`cx`** définit la coordonnée sur l'axe x du point central d'un élément.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("radialGradient")}}

> [!NOTE]
> En tant que _propriété de géométrie_, {{cssxref("cx")}} peut aussi être utilisée comme propriété CSS pour `<circle>` et `<ellipse>`.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Exemple", 100, 100)}}

## circle

Pour un élément {{SVGElement('circle')}}, `cx` définit la coordonnée x de son centre.

<table class="properties">
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
> La coordonnée x du centre de l'élément `<circle>` peut aussi être définie avec la _propriété de géométrie_ {{cssxref("cx")}}. Si elle est définie en CSS, la valeur de la propriété `cx` l'emporte sur la valeur de l'attribut `cx`.

## ellipse

Pour un élément {{SVGElement('ellipse')}}, `cx` définit la coordonnée x de son centre.

<table class="properties">
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
> La coordonnée x du centre de l'élément `<ellipse>` peut aussi être définie avec la _propriété de géométrie_ {{cssxref("cx")}}. Si elle est définie en CSS, la valeur de la propriété `cx` l'emporte sur la valeur de l'attribut `cx`.

## radialGradient

Pour un élément {{SVGElement('radialGradient')}}, `cx` définit la coordonnée x du cercle final du dégradé radial.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong><a href="/fr/docs/Web/SVG/Guides/Content_type#longueur">&#x3C;length></a></strong>
      </td>
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
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
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

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
- {{SVGAttr("rx")}}
- {{SVGAttr("ry")}}
- Les propriétés de géométrie&nbsp;: {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}} et {{cssxref("height")}}
