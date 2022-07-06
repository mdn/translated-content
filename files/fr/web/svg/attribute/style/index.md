---
title: style
slug: Web/SVG/Attribute/style
tags:
  - Reference
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/style
---
{{SVGRef}}

L'attribut **`style`** définit les [informations de style](/fr/docs/Web/CSS) pour son élément. Il fonctionne de manière identique à [l'attribut `style` en HTML](/fr/docs/Web/HTML/Attributs_universels/style).

## Context d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Catégories</th>
      <td>Attribut de présentation</td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td>&#x3C;style></td>
    </tr>
    <tr>
      <th scope="row">Animation</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Document normatif</th>
      <td>
        <a href="http://www.w3.org/TR/SVG/styling.html#StyleAttribute"
          >SVG 1.1 (2ème Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

- \<style>

  - : La syntaxe des données de style dépend du langage de la feuille de style. Par défaut, le langage est [CSS](/fr/docs/Web/CSS).

    > **Note :** En théorie, l'attribut {{SVGAttr("contentStyleType")}} pourrait être utilisé pour spécifier un language de style autre que CSS, comme [XSL(T)](/fr/docs/Web/XSLT). Cependant, cela n'a jamais été implémenté de manière satisfaisante dans les navigateurs, donc ne vous y fiez pas.

## Exemple

L'exemple suivant stylise le rectangle en utilisant l'attribut `style`, avec CSS comme langage de feuille de style.

```html
<svg viewbox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <rect height="300" width="600" x="200" y="100"
     style="fill: red; stroke: blue; stroke-width: 3"/>
</svg>
```

## Éléments

Les éléments suivants peuvent utiliser l'attribut `style`:

- [Éléments conteneur](/fr/docs/Web/SVG/Element#Éléments_conteneurs) »
- [Éléments primitives de filtre](/fr/docs/Web/SVG/Element#Éléments_primitives_de_filtre) »
- [Éléments de dégradés](/fr/docs/Web/SVG/Element#Éléments_de_dégradés) »
- [Éléments graphiques](/fr/docs/Web/SVG/Element#Éléments_graphiques) »
- [Éléments structurels](/fr/docs/Web/SVG/Element#Éléments_structurels) »
- [Éléments de contenu textuel](/fr/docs/Web/SVG/Element#Éléments_de_contenu_textuel) »
- {{ SVGElement("clipPath") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("font") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("stop") }}
- {{ SVGElement("glyph") }}

## Voir aussi

- {{ SVGElement("style") }}

## Compatibilité des navigateurs

{{Compat("svg.attributes.style.style")}}
