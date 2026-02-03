---
title: color-interpolation
slug: Web/CSS/Reference/Properties/color-interpolation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété CSS `color-interpolation` est utilisée dans SVG pour définir l'espace colorimétrique à utiliser pour les éléments SVG {{SVGElement("linearGradient")}} et {{SVGElement("radialGradient")}} de SVG.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
color-interpolation: auto;
color-interpolation: sRGB;
color-interpolation: linearRGB;
```

### Valeurs

- `auto`
  - : Indique que l'agent utilisateur peut choisir l'espace colorimétrique `sRGB` ou `linearRGB` pour l'interpolation des couleurs. Cette option signifie que l'auteur·ice ne demande pas que l'interpolation des couleurs se fasse dans un espace colorimétrique particulier.
- `sRGB`
  - : Indique que l'interpolation des couleurs doit se faire dans l'espace colorimétrique sRGB. C'est la valeur initiale par défaut si aucune propriété `color-interpolation` n'est définie.
- `linearRGB`
  - : Indique que l'interpolation des couleurs doit se faire dans l'espace colorimétrique RGB linéarisé tel que décrit dans [la spécification sRGB <sup>(angl.)</sup>](https://webstore.iec.ch/en/publication/6169).

## Définition formelle

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Applicabilité</th>
      <td>{{SVGElement("linearGradient")}} et {{SVGElement("radialGradient")}}</td>
    </tr>
    <tr>
      <th scope="row">Valeur initiale</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Type d'animation</th>
      <td>discrète</td>
    </tr>
  </tbody>
</table>

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans le premier SVG, la propriété `color-interpolation` n'est pas incluse sur l'élément `<linearGradient>` et l'interpolation des couleurs utilise par défaut `sRGB`.
Le second exemple montre l'interpolation des couleurs avec la valeur `linearRGB`.

```html
<svg width="450" height="70">
  <title>Exemple d'utilisation de la propriété CSS color-interpolation</title>
  <defs>
    <linearGradient id="sRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="400" height="40" fill="url(#sRGB)" stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    pas de color-interpolation (propriété CSS)
  </text>
</svg>
```

```html
<svg width="450" height="70">
  <title>Exemple d'utilisation de la propriété CSS color-interpolation</title>
  <defs>
    <linearGradient id="linearRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#linearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation: linearRGB; (propriété CSS)
  </text>
</svg>
```

```css
svg {
  display: block;
}

#linearRGB {
  color-interpolation: linearRGB;
}
```

{{EmbedLiveSample("Exemples", "100%", 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément SVG {{SVGElement("linearGradient")}}
- L'élément SVG {{SVGElement("radialGradient")}}
- L'attribut SVG {{SVGAttr("color-interpolation")}}
