---
title: SVGRect
slug: Web/API/SVGRect
---

## Interface SVG rect

`SVGRect` représente la géométrie rectangulaire. Les rectangles consistent en une paire de coordonnées (x,y) correspondant à une valeur X minimale, une valeur Y minimale, et une largeur et hauteur, lesquelles sont habituellement positives.

Un objet `SVGRect` peut être marqué en lecture seule, ce qui signifie que les tentatives de modification sur cet objet entraîneront un lancement d'exception.

### Vue d'ensemble de l'interface

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Implémente aussi</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Méthodes</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Propriétés</th>
      <td>
        <ul>
          <li>float <code>x</code></li>
          <li>float <code>y</code></li>
          <li>float <code>width</code></li>
          <li>float <code>height</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Document normatif</th>
      <td>
        <a href="http://www.w3.org/TR/SVG11/types.html#InterfaceSVGRect"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Propriétés

| Nom      | Type  | Description                                             |
| -------- | ----- | ------------------------------------------------------- |
| `x`      | float | La coordonnée _x_ du rectangle, en unité utilisateur.   |
| `y`      | float | La coordonnée _y_ du rectangle, en unité utilisateur.   |
| `width`  | float | La largeur _width_ du rectangle, en unité utilisateur.  |
| `height` | float | La hauteur _height_ du rectangle, en unité utilisateur. |

**Exceptions à l'affectation :** une [`DOMException`](DOMException) avec le code `NO_MODIFICATION_ALLOWED_ERR` est levée lors d'une tentative de modification d'un attribut en lecture-seule.

## Méthodes

L'interface `SVGRect` ne fournit pas de méthode spécifique.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
