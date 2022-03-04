---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
tags:
  - Attribut SVG
  - SVG
translation_of: Web/SVG/Attribute/stroke-dasharray
---
L'attribut `stroke-dasharray` contrôle le motif et l'espacement entre les segments utilisés pour tracer le contour d'un élément via l'attribut stroke. L'attribut définit ainsi un motif constitué d'une suite de segments et de vides dont la forme se rapprochera d'une ligne de pointillés.

> **Note :** Comme il s'agit d'un attribut de présentation, `stroke-dasharray` peut aussi être utilisé directement dans une feuille de style CSS.

Les éléments suivants peuvent utiliser l'attribut `stroke-dasharray`: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 30 10" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <line                                  x1="0" y1="1" x2="30" y2="1" stroke="black" />
    <line stroke-dasharray="4"             x1="0" y1="3" x2="30" y2="3" stroke="black" />
    <line stroke-dasharray="4, 1"          x1="0" y1="5" x2="30" y2="5" stroke="black" />
    <line stroke-dasharray="4, 1, 2"       x1="0" y1="7" x2="30" y2="7" stroke="black" />
    <line stroke-dasharray="4, 1, 2, 3"    x1="0" y1="9" x2="30" y2="9" stroke="black" />
</svg>
```

{{ EmbedLiveSample('Exemple', '220', '150', '', 'Web/SVG/Attribute/stroke-dasharray') }}

## Contexte d'usage

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Catégories</th>
      <td>Attribut de présentation</td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td>none | &#x3C;dasharray> | inherit</td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Document normatif</th>
      <td>
        <a href="http://www.w3.org/TR/SVG/painting.html#StrokeDasharrayProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

- \<dasharray>
  - : Il s'agit d'une liste de mesures [\<length>](/fr/SVG/Content_type#Length "en/SVG/Content_type#Length") et [\<percentage>](/fr/SVG/Content_type#Percentage "en/SVG/Content_type#Percentage") séparées par des virgules ou des espaces blancs. Ils permettent de spécifier la longeur de l'alternance entre segments et vides. Si un nombre impair de valeurs est entré, alors la liste sera répartie afin de créer un nombre pair de valeurs par répétition. Ainsi, **5,3,2** sera rendu comme **5,3,2,5,3,2**.

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.stroke-dasharray")}}

## Spécification

| Spécification                                                                                                    | Statut                   | Commentaire                                   |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------- |
| {{SpecName("SVG2", "painting.html#StrokeDasharrayProperty", "stroke-dasharray")}}     | {{Spec2("SVG2")}} | Définition pour les formes et textes          |
| {{SpecName("SVG1.1", "painting.html#StrokeDasharrayProperty", "stroke-dasharray")}} | {{Spec2("SVG1.1")}} | Définition initiale pour les formes et textes |
