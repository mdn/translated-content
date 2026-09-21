---
title: stroke-linecap
slug: Web/SVG/Reference/Attribute/stroke-linecap
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

L'attribut **`stroke-linecap`** est un attribut de présentation qui définit la forme utilisée à l'extrémité des sous-chemins ouverts lorsque ceux-ci sont tracés.

> [!NOTE]
> En tant qu'attribut de présentation, `stroke-linecap` possède une propriété CSS équivalente&nbsp;: {{cssxref("stroke-linecap")}}. Lorsque les deux sont définies, c'est la propriété CSS qui l'emporte.

Cet attribut peut être utilisé avec les éléments SVG suivants&nbsp;:

- {{SVGElement('path')}}
- {{SVGElement('polyline')}}
- {{SVGElement('line')}}
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
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "butt" (valeur par défaut) -->
  <line x1="1" y1="1" x2="5" y2="1" stroke="black" stroke-linecap="butt" />

  <!-- Effet de la valeur "round" -->
  <line x1="1" y1="3" x2="5" y2="3" stroke="black" stroke-linecap="round" />

  <!-- Effet de la valeur "square" -->
  <line x1="1" y1="5" x2="5" y2="5" stroke="black" stroke-linecap="square" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <path d="M1,1 h4 M1,3 h4 M1,5 h4" stroke="pink" stroke-width="0.025" />
</svg>
```

{{EmbedLiveSample("Exemple", '100%', 200)}}

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>butt</code> | <code>round</code> | <code>square</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>butt</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>discrète</td>
    </tr>
  </tbody>
</table>

### butt

La valeur `butt` indique que le trait de chaque sous-chemin ne s'étend pas au-delà de ses deux extrémités. Sur un sous-chemin de longueur nulle, le chemin n'est pas dessiné du tout.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "butt" -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="butt" />

  <!-- Effet de la valeur "butt" sur un chemin de longueur nulle -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="butt" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('butt', '100%', 200)}}

### round

La valeur `round` indique qu'à l'extrémité de chaque sous-chemin, le trait est prolongé par un demi-cercle dont le diamètre est égal à l'épaisseur du trait. Sur un sous-chemin de longueur nulle, le trait consiste en un cercle complet centré sur le point du sous-chemin.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "round" -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="round" />

  <!-- Effet de la valeur "round" sur un chemin de longueur nulle -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="round" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

### square

La valeur `square` indique qu'à l'extrémité de chaque sous-chemin, le trait est prolongé par un rectangle dont la largeur vaut la moitié de l'épaisseur du trait et dont la hauteur est égale à l'épaisseur du trait. Sur un sous-chemin de longueur nulle, le trait consiste en un carré dont le côté est égal à l'épaisseur du trait, centré sur le point du sous-chemin.

#### Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "square" -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="square" />

  <!-- Effet de la valeur "square" sur un chemin de longueur nulle -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="square" />

  <!--
  Les lignes roses suivantes mettent en évidence
  la position du chemin pour chaque trait
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('square', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{cssxref("stroke-linecap")}}
