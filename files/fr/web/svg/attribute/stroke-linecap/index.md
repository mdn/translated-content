---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/stroke-linecap
---
{{SVGRef}}

L'attribut **`stroke-linecap`** définit la forme de la fin des lignes SVG.

> **Note :** `stroke-linecap` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué à tous les éléments, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('path')}}, {{SVGElement('polyline')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">

  <!-- Effet de la valeur "butt" (valeur par défaut) -->
  <line x1="1" y1="1" x2="5" y2="1" stroke="black"
        stroke-linecap="butt" />

  <!-- Effet de la valeur "round" -->
  <line x1="1" y1="3" x2="5" y2="3" stroke="black"
        stroke-linecap="round" />

  <!-- Effet de la valeur "square" -->
  <line x1="1" y1="5" x2="5" y2="5" stroke="black"
        stroke-linecap="square" />

  <!--
  Les lignes roses indiquent la position
  du chemin pour chaque trait
  -->
  <path d="M1,1 h4 M1,3 h4 M1,5 h4" stroke="pink" stroke-width="0.025" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Notes d'usage

<table class="standard-table">
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
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### butt

La valeur `butt` indique que le trait de chaque chemin ne s'étend pas au-delà de ses extremités. Un chemin de longueur zéro ne s'affichera pas du tout.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">

  <!-- Effet de la valeur "butt" -->
  <path d="M1,1 h4" stroke="black"
        stroke-linecap="butt" />

  <!-- Effet de la valeur "butt" sur un chemin de longueur zéro -->
  <path d="M3,3 h0" stroke="black"
        stroke-linecap="butt" />


  <!--
  Lignes roses pour indiquer la position
  du chemin pour chaque trait
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('butt', '100%', 200)}}

### round

La valeur `round` indique que la fin de chaque trait sera prolongé d'un demi-cerlce de diamètre égal à la la largeur du trait. Pour un chemin de longueur zéro, un cercle complet est affiché.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">

  <!-- Effet de la valeur "round" -->
  <path d="M1,1 h4" stroke="black"
        stroke-linecap="round" />

  <!-- Effet de la valeur "round" sur un chemin de longueur zéro -->
  <path d="M3,3 h0" stroke="black"
        stroke-linecap="round" />


  <!--
  Lignes roses pour indiquer la position
  du chemin pour chaque trait
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

### square

La valeur `square` indique que la fin de chaque trait sera prolongé par un rectangle d'une taille égale à la moitié de l'épaisseur du contour. Pour un chemin de longueur zéro, seul un rectangle est affiché, de la longueur de l'épaisseur du contour, et centré autour de la position du chemin.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">

  <!-- Effet de la valeur "square" -->
  <path d="M1,1 h4" stroke="black"
        stroke-linecap="square" />

  <!-- Effet de la valeur "square" sur un chemin de longueur zéro -->
  <path d="M3,3 h0" stroke="black"
        stroke-linecap="square" />

  <!--
  Les lignes roses indiquent la position
  du chemin pour chaque trait
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('square', '100%', 200)}}

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.stroke-linecap")}}

## Spécification

| Spécification                                                                                            | Statut                   | Commentaire                                     |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------- |
| {{SpecName("SVG2", "painting.html#StrokeLinecapProperty", "stroke-linecap")}} | {{Spec2("SVG2")}} | Définition pour les formes et le texte          |
| {{SpecName("SVG1.1", "painting.html#StrokeLinecapProperty", "stroke-linecap")}} | {{Spec2("SVG1.1")}} | Définition initiale pour les formes et le texte |
