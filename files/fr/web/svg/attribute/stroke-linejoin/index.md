---
title: stroke-linejoin
slug: Web/SVG/Attribute/stroke-linejoin
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/stroke-linejoin
---
{{SVGRef}}

L'attribut **`stroke-linejoin`** définit la manière de dessiner la liaison entre deux segments de ligne.

> **Note :** `stroke-linejoin` étant un attribut de présentation, il peut être utililsé comme propriété CSS.

Cet attribut peut être appliqué sur tous les éléments, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  Chemin en haut à gauche:
  Effet de la valeur "miter"
  -->
  <path d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" stroke="black" fill="none"
        stroke-linejoin="miter" />

  <!--
  Chemin en haut au milieu:
  Effet de la valeur "round"
  -->
  <path d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" stroke="black" fill="none"
        stroke-linejoin="round" />

  <!--
  Chemin en haut à droite:
  Effet de la valeur "bevel"
  -->
  <path d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" stroke="black" fill="none"
        stroke-linejoin="bevel" />

  <!--
  Chemin en bas à gauche:
  Effet de la valeur "miter-clip"
  se replit sur la valeur par défaut (miter) si non pris en charge
  -->
  <path d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" stroke="black" fill="none"
        stroke-linejoin="miter-clip" />

  <!--
  Chemin en bas à droite:
  Effet de la valeur "arcs"
  se replit sur la valeur par défaut (miter) si non pris en charge
  -->
  <path d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5" stroke="black" fill="none"
        stroke-linejoin="arcs" />

  <!--
  Lignes roses qui indiquent la position
  du chemin pour chaque trait
  -->
  <g id="highlight">
    <path d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
          stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5"   r="0.05" fill="pink" />
    <circle cx="3" cy="2"   r="0.05" fill="pink" />
    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
  </g>
  <use xlink:href="#highlight" x="6" />
  <use xlink:href="#highlight" x="12" />
  <use xlink:href="#highlight" x="2" y="6" />
  <use xlink:href="#highlight" x="8" y="6" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 400)}}

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code>arcs</code> | <code>bevel</code> |<code>miter</code> |
        <code>miter-clip</code> | <code>round</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>miter</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

### arcs

> **Note :** La valeur `arcs` a été introduite en SVG2 et n'est pas souvent pris en charge pour le moment, voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous pour plus de détails.

La valeur `arcs` indique qu'un arc est utilisé pour joindre les segments du chemin. L'arc est formé en prolongeant les bords extérieurs du trait au point de liaison, avec la même courbe que ce bord.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "arcs" -->
  <path d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3" stroke="black" fill="none"
        stroke-linejoin="arcs" />

  <!--
  Lignes roses qui indiquent la position
  du chemin pour chaque trait
  -->
  <g id="p">
    <path d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
          stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('arcs', '100%', 200)}}

### bevel

La valeur `bevel` indique qu'un coin biseauté est utilisé pour joindre les segments du chemin.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "bevel" -->
  <path d="M1,5 l2,-3 l2,3" stroke="black" fill="none"
        stroke-linejoin="bevel" />

  <!--
  Lignes roses qui indiquent la position
  du chemin pour chaque trait
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3"
          stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('bevel', '100%', 200)}}

### miter

La valeur `miter` indique qu'un angle droit est utilisé pour joindre les segments du chemin. Le coin est formé en prolongeant les bords extérieurs du trait jusqu'à ce qu'ils se joignent.

> **Note :** Si la longueur du coin dépasse {{SVGAttr('stroke-miterlimit')}}, un coin de type `bevel` est utilisé à la place.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "miter" -->
  <path d="M1,5 l2,-3 l2,3" stroke="black" fill="none"
        stroke-linejoin="miter" />

  <!-- Effet de la valeur "miter" sur un angle aigu
       où la limite stroke-miterlimit est dépassée -->
  <path d="M7,5 l0.75,-3 l0.75,3" stroke="black" fill="none"
        stroke-linejoin="miter" />

  <!-- Ligne rouge pointillé qui indique la limite
       à partir de laquelle une liaison miter devient bevel -->
  <path d="M0,0 h10" stroke="red" stroke-dasharray="0.05"  stroke-width="0.025"/>

  <!--
  Lignes roses qui indiquent la position
  du chemin pour chaque trait
  -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path d="M7,5 l0.75,-3 l0.75,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="7"    cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5"  cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter', '100%', 200)}}

### miter-clip

> **Note :** La valeur `miter-clip` a été introduite en SVG2 et n'est pas souvent pris en charge pour le moment, voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs) ci-dessous pour plus de détails.

La valeur `miter-clip` indique qu'un angle droit est utilisé pour joindre les segments du chemin. Le coin est formé en prolongeant les bords extérieurs du trait jusqu'à ce qu'ils se joignent.

Si la longueur du coin dépasse {{SVGAttr('stroke-miterlimit')}}, le coin tronqué à une distance égale à la moitié de la valeur de {{SVGAttr('stroke-miterlimit')}} multiplié par l'épaisseur du trait. Cela fournit un meilleur rendu que `miter` sur les angles très aigus et dans le cas d'une animation.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "miter-clip" -->
  <path d="M1,5 l2,-3 l2,3" stroke="black" fill="none"
        stroke-linejoin="miter-clip" />

  <!-- Effet de la valeur "miter-clip" sur un angle aigu
       où la limite stroke-miterlimit est dépassée -->
  <path d="M7,5 l0.75,-3 l0.75,3" stroke="black" fill="none"
        stroke-linejoin="miter-clip" />

  <!-- Ligne rouge pointillé qui indique la limite
       à partir de laquelle le coin sera tronqué -->
  <path d="M0,0 h10" stroke="red" stroke-dasharray="0.05"  stroke-width="0.025"/>

  <!--
  Lignes roses qui indiquent la position
  du chemin pour chaque trait
  -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path d="M7,5 l0.75,-3 l0.75,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="7"    cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5"  cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter-clip', '100%', 200)}}

### round

La valeur `round` indique qu'un coin arrondi est utilisé pour joindre les segments du chemin.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la valeur "round" -->
  <path d="M1,5 l2,-3 l2,3" stroke="black" fill="none"
        stroke-linejoin="round" />

  <!--
  Lignes roses qui indiquent la position
  du chemin pour chaque trait
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3"
          stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

## Spécifications

| Spécification                                                                                                | Statut                   | Commentaire                                     |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ----------------------------------------------- |
| {{SpecName("SVG2", "painting.html#StrokeLinejoinProperty", "stroke-linejoin")}}     | {{Spec2("SVG2")}} | Définition pour les formes et le texte          |
| {{SpecName("SVG1.1", "painting.html#StrokeLinejoinProperty", "stroke-linejoin")}} | {{Spec2("SVG1.1")}} | Définition initiale pour les formes et le texte |

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.stroke-linejoin")}}
