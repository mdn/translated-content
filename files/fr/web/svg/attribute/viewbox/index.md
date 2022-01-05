---
title: viewBox
slug: Web/SVG/Attribute/viewBox
tags:
  - Attributs SVG
  - SVG
translation_of: Web/SVG/Attribute/viewBox
---
« [Sommaire de la référence des attributs SVG](/fr/SVG/Attribute)

L'attribut `viewBox` permet de spécifier qu'un groupe d'éléments graphiques s'étire afin de s'adapter à un élément conteneur.

La valeur de l'attribut `viewBox` est une liste de quatre nombres `min-x`, `min-y`, `width` et `height`, séparés par des espaces ou/et des virgules. Ces nombres spécifient un rectangle dans l'espace utilisateur, qui doit correspondre aux coins du viewport établis par l'élément SVG donné, ceci en prenant en compte l'attribut {{ SVGAttr("preserveAspectRatio") }}.

Les valeurs négatives de `width` et `height` ne sont pas autorisées et une valeur à zéro désactive le rendu de l'élément.

## Contexte d'utilisation

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Catégories</th>
      <td>Aucune</td>
    </tr>
    <tr>
      <th scope="row">Valeur</th>
      <td><em>Voir ci-dessus</em></td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Document de norme</th>
      <td>
        <a href="http://www.w3.org/TR/SVG11/coords.html#ViewBoxAttribute"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemple

Nous créons ici un viewport de 300×200 unités, ce qui fait que chaque unité de l'élément SVG correspondra à une unité du viewport. On aura donc un élément SVG dont le système de coordonnée ira de 0 à 300 en largeur et de 0 à 200 en hauteur :

`<svg width="300" height="200"></svg>`

En ajoutant une notion de viewbox, nous transformons ce système de coordonnées afin qu'il aille de 0 à w à l'horizontale et de 0 à h à la verticale. Ici, ce sera donc 300/30 (=10) en x ce qui équivaut à 10 unités d'élément SVG pour 1 unité du viewport :

`<svg width="300" height="200" viewBox="0 0 30 20"></svg>`

## Elements

Les éléments suivants peuvent utiliser l'attribut `viewBox`

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("view") }}

## Voir également

- [Introduction au SVG : Positionnement](/fr/SVG/Tutoriel/Positionnement)
