---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/stroke-dashoffset
---
{{SVGRef}}

L'attribut **`stroke-dashoffset`** décale la position de départ des pointillés sur les lignes SVG.

> **Note :** `stroke-dashoffset` étant un attribut de présentation, il peut être utilisé comme propriété CSS.

Cet attribut peut être appliqué sur tous les éléments, en revanche il n'aura d'effet que sur les éléments suivants: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Pas de tiret -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Pas de décalage -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black"
        stroke-dasharray="3 1" />

  <!--
  Le début des tirets est décalé
  de 3 unités vers la gauche
  -->
  <line x1="0" y1="5" x2="30" y2="5" stroke="black"
        stroke-dasharray="3 1"
        stroke-dashoffset="3" />

  <!--
  Le début des tirets est décalé
  de 3 unités vers la droite (-3)
  -->
  <line x1="0" y1="7" x2="30" y2="7" stroke="black"
        stroke-dasharray="3 1"
        stroke-dashoffset="-3" />

  <!--
  Le début des tirets est décalé
  de 1 unité vers la gauche
  ce qui affiche la même chose que l'exemple précédent
  -->
  <line x1="0" y1="9" x2="30" y2="9" stroke="black"
        stroke-dasharray="3 1"
        stroke-dashoffset="1" />

  <!--
  Lignes rouges pour indiquer la position
  de départ des tirets
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgba(255,0,0,.5)" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Notes d'usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a
            href="/fr/SVG/Content_type#Percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a
            href="/fr/SVG/Content_type#Length"
            >&#x3C;length></a
          ></strong
        >
      </td>
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

Le décalage est généralement exprimé en unités résolues par {{SVGAttr('pathLength')}} mais si un [\<percentage>](/fr/SVG/Content_type#Percentage "en/SVG/Content_type#Percentage") est utilisé, alors la valeur est résolue en pourcentage du viewport.

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.stroke-dashoffset")}}

## Spécification

| Spécification                                                                                                    | Statut                   | Commentaire                                     |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------- |
| {{SpecName("SVG2", "painting.html#StrokeDashoffsetProperty", "stroke-dashoffset")}} | {{Spec2("SVG2")}} | Définition pour les formes et le texte          |
| {{SpecName("SVG1.1", "painting.html#StrokeDashoffsetProperty", "stroke-dashoffset")}} | {{Spec2("SVG1.1")}} | Définition initiale pour les formes et le texte |
