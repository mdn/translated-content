---
title: color
slug: Web/SVG/Attribute/color
tags:
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/color
---
{{SVGRef}}

L'attribut `color` est utilisé pour définir indirectement une valeur potentielle (`currentColor`) pour les attributs {{ SVGAttr("fill") }}, {{ SVGAttr("stroke") }}, {{ SvgAttr("stop-color") }}, {{ SVGAttr("flood-color") }} et {{ SVGAttr("lighting-color") }}.

> **Note :** `color` étant un attribut de présentation, il peut être utilisé comme propriété CSS. Voir {{ cssxref("color","CSS color") }} pour plus d'informations.

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Catégories</th>
      <td>Attribut de présentation</td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <a href="/fr/SVG/Content_type#Color"
          >&#x3C;color></a
        >
        | inherit
      </td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Document normatif</th>
      <td>
        <a href="http://www.w3.org/TR/SVG11/color.html#ColorProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemple

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <g color="green">
    <rect width="50" height="50" fill="currentColor" />
    <circle r="25" cx="70" cy="70" stroke="currentColor" fill="none" stroke-width="5" />
  </g>
</svg>
```

{{ EmbedLiveSample('Exemple', '100%', '110') }}

## Éléments

Les éléments suivants peuvent utiliser l'attribut `color`:

- [Éléments de contenu textuel](/fr/docs/Web/SVG/Element#Éléments_de_contenu_textuel "en/SVG/Element#Text_content_elements") »
- [Éléments de formes](/fr/docs/Web/SVG/Element#Éléments_de_formes "en/SVG/Element#Shape_elements")  »
- {{ SVGElement("stop") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feSpecularLighting") }}

## Compatibilité des navigateurs

{{Compat("svg.attributes.presentation.color")}}
