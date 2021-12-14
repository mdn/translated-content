---
title: Height
slug: Web/SVG/Attribute/height
tags:
  - Attribut SVG
  - SVG
translation_of: Web/SVG/Attribute/height
---
« [SVG Attribute reference home](/fr/SVG/Attribute "en/SVG/Attribute")

Cet attribut indique une dimension verticale `<length>` dans le système de coordonnées. La donnée (ou coordonnée) définie par cet attribut dépend de l'élément sur lequel il est appliqué. La plupart du temps, il représente la hauteur de la région rectangulaire composant l'élément (voir les exceptions dans la documentation pour chaque type d'élément).

Cet attribut doit être spécifié, hormis pour les éléments {{ SVGElement("svg") }} dont la valeur par défaut est de 100% et {{ SVGElement("mask") }} dont la valeur par défaut est de 120%.

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Catégories</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <a
          href="/fr/SVG/Content_type#Length"
          title="https://developer.mozilla.org/en/SVG/Content_type#Length"
          >&#x3C;length></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Documents normatif</th>
      <td>
        <a
          href="http://www.w3.org/TR/SVG/extend.html#ForeignObjectElementHeightAttribute"
          >SVG 1.1 (2nd Edition): foreignObject element</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/struct.html#ImageElementHeightAttribute"
          >SVG 1.1 (2nd Edition): image element</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/pservers.html#PatternElementHeightAttribute"
          >SVG 1.1 (2nd Edition): pattern element</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/shapes.html#RectElementHeightAttribute"
          >SVG 1.1 (2nd Edition): rect element</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/struct.html#SVGElementHeightAttribute"
          >SVG 1.1 (2nd Edition): svg element</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/struct.html#UseElementHeightAttribute"
          >SVG 1.1 (2nd Edition): use element</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/filters.html#FilterPrimitiveHeightAttribute"
          >SVG 1.1 (2nd Edition): Filter primitive</a
        ><br /><a
          href="http://www.w3.org/TR/SVG/masking.html#MaskElementHeightAttribute"
          >SVG 1.1 (2nd Edition): mask element</a
        >
      </td>
    </tr>
  </tbody>
</table>

{{ page("fr/docs/Web/SVG/Content_type","Length") }}

## Exemple

```xml
<?xml version="1.0"?>
<svg width="120" height="120"
     viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="100" height="100"/>
</svg>
```

## Eléments

Les éléments suivants peuvent utiliser l'attribut `height` :

- [Filter primitive elements](/fr/SVG/Element#FilterPrimitive "en/SVG/Element#FilterPrimitive") »
- {{ SVGElement("filter") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("image") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("use") }}
- {{ SVGElement("mask") }}
