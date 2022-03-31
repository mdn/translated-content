---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/fill-rule
---
{{SVGRef}}

L'attribut **`fill-rule`** définit l'algorithme à utiliser pour déterminer les parties qui sont considérées _à l'intérieur_ de la forme.

> **Note :** `fill-rule` est un attribut de présentation et peut donc être utilisé comme propriété CSS.

Cet attribut peut être appliqué à n'importe quel élément mais n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, et {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Valeur par défaut pour fill-rule -->
  <polygon fill-rule="nonzero" stroke="red"
   points="50,0 21,90 98,35 2,35 79,90"/>

  <!--
  Les points au centre de la forme ont 2
  segments (matérialisés par le trait rouge)
  Avec la règle evenodd, ils sont considérés en
  dehors de la forme, et l'intérieur de l'étoile
  est donc vide.
  -->
  <polygon fill-rule="evenodd" stroke="red"
   points="150,0 121,90 198,35 102,35 179,90"/>
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>nonzero</code> | <code>evenodd</code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>nonzero</code></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

L'attribut `fill-rule` peut prendre deux valeurs:

### nonzero

La valeur `nonzero` détermine si un point est à l'intérieur d'une forme en dessinant un rayon à partir de ce point vers l'infini dans toutes les directions, puis examine les endroits où un segment de la forme traverse le rayon.

À chaque fois qu'un segment traverse le rayon de gauche à droite, on ajoute un. À chaque fois qu'un segment traverse le rayon de droite à gauche, on soustrait un. Si au final, le compte est égal à zéro, le point est l'extérieur. Dans le cas contraire, il est à l'intérieur.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la règle de remplissage sur les segments qui se croisent -->
  <polygon fill-rule="nonzero" stroke="red"
           points="50,0 21,90 98,35 2,35 79,90"/>

  <!--
  Effet sur une forme dans une forme
  lorsque le segment va dans la même direction
  (vers la droite)
  -->
  <path fill-rule="nonzero" stroke="red"
        d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z"/>

  <!--
  Effet sur une forme dans une forme
  lorsque le segment va dans la direction opposée
  (vers la gauche contre vers la droite)
  -->
  <path fill-rule="nonzero" stroke="red"
        d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z"/>
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

La valeur `evenodd` détermine si un point est à l'intérieur d'une forme en dessinant un rayon de à partir de ce point vers l'infini dans toutes les directions, et compte le nombre de segments de la forme qui traversent ce rayon. Si ce nombre est impair (_odd_ en anglais), alors le point est à l'intérieur. Si le nombre est pair (_even_ en anglais), alors le point est à l'extérieur.

#### Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effet de la règle de remplissage sur les segments qui se croisent -->
  <polygon fill-rule="evenodd" stroke="red"
           points="50,0 21,90 98,35 2,35 79,90"/>

  <!--
  Effet sur une forme dans une forme
  lorsque le segment va dans la même direction
  (vers la droite)
  -->
  <path fill-rule="evenodd" stroke="red"
        d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z"/>

  <!--
  Effet sur une forme dans une forme
  lorsque le segment va dans la direction opposée
  (vers la gauche contre vers la droite)
  -->
  <path fill-rule="evenodd" stroke="red"
        d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z"/>
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.fill-rule")}}

## Spécification

| Spécification                                                                                | Statut                   | Commentaire                                     |
| -------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------- |
| {{SpecName("SVG2", "painting.html#FillRuleProperty", "fill-rule")}}     | {{Spec2("SVG2")}} | Définition pour les formes et le texte          |
| {{SpecName("SVG1.1", "painting.html#FillRuleProperty", "fill-rule")}} | {{Spec2("SVG1.1")}} | Définition initiale pour les formes et le texte |
