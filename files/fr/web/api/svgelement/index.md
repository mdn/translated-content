---
title: SVGElement
slug: Web/API/SVGElement
tags:
  - Reference
translation_of: Web/API/SVGElement
---
## Interface d'élément SVG

Toutes les interfaces SVG DOM qui correspondent directement à des éléments du langage SVG dérivent de l'interface `SVGElement`.

### Vue d'ensemble de l'interface

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Implémente aussi</th>
      <td>Voir l'interface générique DOM {{ domxref("Element") }}.</td>
    </tr>
    <tr>
      <th scope="row">Méthodes</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Propriétés</th>
      <td>
        <ul>
          <li>readonly {{ domxref("DOMString") }} <code>id</code></li>
          <li>
            readonly {{ domxref("DOMString") }} <code>xmlbase</code>
          </li>
          <li>
            readonly {{ domxref("SVGSVGElement") }}
            <code>ownerSVGElement</code>
          </li>
          <li>
            readonly {{ domxref("SVGElement") }}
            <code>viewportElement</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="http://www.w3.org/TR/SVG11/types.html#InterfaceSVGElement"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Properties

<table class="standard-table">
  <thead>
    <tr>
      <th>Nom</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>{{ domxref("DOMString") }}</td>
      <td>
        La valeur de l'attribut {{ SVGAttr("id") }} de l'élément, ou une
        chaîne vide si <code>id</code> n'est pas présent.
      </td>
    </tr>
    <tr>
      <td><code>xmlbase</code></td>
      <td>{{ domxref("DOMString") }}</td>
      <td>
        Correspond à l'attribut {{ SVGAttr("xml:base") }} de l'élément.
      </td>
    </tr>
    <tr>
      <td><code>ownerSVGElement</code></td>
      <td>{{ domxref("SVGSVGElement") }}</td>
      <td>
        <p>
          L'élément {{ SVGElement("svg") }} parent le plus près.
          <code>Null</code> si l'élément est l'élément svg le plus à
          l'extérieur.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>viewportElement</code></td>
      <td>{{ domxref("SVGElement") }}</td>
      <td>
        <p>
          L'élément qui a établi la fenêtre actuelle. Souvent l'élément parent
          {{ SVGElement("svg") }} le plus prêt. <code>Null</code> si
          l'élément est l'élément svg le plus à l'extérieur.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Méthodes

L'interface `SVGElement` ne possède aucune méthode spécifique.

## Compatibilité des navigateurs

{{Compat("api.SVGElement")}}

## Voir aussi

- Référence DOM {{ SVGElement("element") }}
