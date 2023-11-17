---
title: points
slug: Web/SVG/Attribute/points
---

{{SVGRef}}

L'attribut **`point`** défini une liste de points. Chaque point est défini par deux nombres représentant les coordonnées X et Y dans le système de coordonnées de l'utilisateur. Si une coordonnées est dépareillée elle sera ignorée.

Les éléments {{SVGElement("polyline")}} et {{SVGElement("polygon")}} utilisent cet attribut.

## Exemple

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline est une forme ouverte -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />

  <!-- polygon est une forme fermée -->
  <polygon
    stroke="black"
    fill="none"
    transform="translate(100,0)"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Il est généralement recommendé de séparer les valeurs X et Y
  avec une virgule et les coordonées avec des espaces.
  Cela est plus lisible.
  -->
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## polyline

Pour un élément {{SVGElement('polyline')}}, `points` défini une liste de point, chaqu'un représente le vecteur pour tracer la ligne. Chaque point est défini par X et Y dans le système de coordonées de l'utilisateur.

> **Note :** Un polygone est une forme ouverte, ce qui implique que le dernier point n'est pas connecté au premier point.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
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
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline est une forme ouverte -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## polygon

Pour un élément {{SVGElement('polyline')}}, `points` défini une liste de point, chaqu'un représente le vecteur pour tracer la ligne. Chaque point est défini par X et Y dans le système de coordonées de l'utilisateur.

> **Note :** Un polygone est une forme fermée, ce qui implique que le dernier point est connecté au premier.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polygon est une forme fermée -->
  <polygon stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polygon', '100%', 200)}}

## Spécifications

{{Specifications}}
