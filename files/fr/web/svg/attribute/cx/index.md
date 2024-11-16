---
title: cx
slug: Web/SVG/Attribute/cx
---

{{SVGRef}}

L'attribut **`cx`** définit la coordonnée de l'axe x pour le point central d'un élément.

Trois éléments utilisent cet attribut: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, et {{SVGElement("radialGradient")}}

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

{{EmbedLiveSample('Exemple', 100, 100)}}

## circle

Pour un élément {{SVGElement('circle')}}, `cx` définit la coordonnée x de son centre.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><a href="/fr/docs/Web/CSS/length-percentage">
        <code>&lt;length-percentage&gt;</code>
      </a></td>
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
> À partir de SVG2, `cx` est une _propriété de géométrie_, ce qui signifie que cet attribut peut être utilisé comme propriété CSS pour les cercles.

## ellipse

Pour un élément {{SVGElement('ellipse')}}, `cx` définit la coordonnées x de son centre.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><a href="/fr/docs/Web/CSS/length-percentage">
        <code>&lt;length-percentage&gt;</code>
      </a></td>
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
> À partir de SVG2, `cx` est une _propriété de géométrie_, ce qui signifie que cet attribut peut être utilisé comme propriété CSS pour les ellipses.

## radialGradient

Pour un élément {{SVGElement('radialGradient')}}, `cx` définit la coordonnées x du plus grand cercle pour le dégradé radial (c'est-à-dire du plus externe). Le dégradé sera dessiné de telle façon que la [limite du dégradé](/fr/docs/SVG/Element/stop) à **100%** corresponde au périmètre de ce plus grand cercle.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><a href="/fr/docs/Web/CSS/length-percentage">
        <code>&lt;length-percentage&gt;</code>
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

#### Autre exemple

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

## Voir aussi

- [`cy`](/fr/docs/Web/SVG/Attribute/cy)
- [`r`](/fr/docs/Web/SVG/Attribute/r)
