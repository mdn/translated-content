---
title: SVGAElement
slug: Web/API/SVGAElement
tags:
  - API
  - Reference
  - SVG
  - SVG DOM
  - WebAPI
translation_of: Web/API/SVGAElement
---
## SVG a DOM interface

L'interface `SVGAElement` fournit un accès aux propriétés des éléments [`<a>`](/fr/docs/Web/SVG/Element/a) ainsi qu'aux méthodes pour les manipuler.

### Interface overview

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Egalement implémenté</th>
      <td>
        {{ domxref("SVGElement") }},
        {{ domxref("SVGURIReference") }},
        {{ domxref("SVGTests") }},
        {{ domxref("SVGLangSpace") }},
        {{ domxref("SVGExternalResourcesRequired") }},
        {{ domxref("SVGStylable") }},
        {{ domxref("SVGTransformable") }}
      </td>
    </tr>
    <tr>
      <th scope="row">Methodes</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Propriétés</th>
      <td>
        <ul>
          <li>
            lectureseule{{ domxref("SVGAnimatedString") }}
            <code>cible</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Document Normative</th>
      <td>
        <a href="http://www.w3.org/TR/SVG11/linking.html#InterfaceSVGAElement"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Propriétés

| Nom     | Type                                         | Description                                                                                           |
| ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cible` | {{ domxref("SVGAnimatedString") }} | Correspond à attribuer {{ SVGAttr("cible") }} sur l'élément {{ SVGElement("a") }} donné. |

## Methodes

L'interface `SVGAElement` ne fournit aucune méthode spécifique.

## Spécifications

| Spécification                                                                    | Statut                   | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("SVG2", "linking.html#InterfaceSVGAElement")}}     | {{Spec2("SVG2")}} | Remplacement de l'héritage de {{domxref("SVGElement")}} par {{domxref("SVGGraphicsElement")}} et suppression des implémentations d'interface de {{domxref("SVGTests")}}, {{domxref("SVGLangSpace")}}, {{domxref("SVGExternalResourcesRequired")}}, {{domxref("SVGStylable")}}, et {{domxref("SVGTransformable")}} par {{domxref("HTMLHyperlinkElementUtils")}} |
| {{SpecName("SVG1.1", "linking.html#InterfaceSVGAElement")}} | {{Spec2("SVG1.1")}} | Définition initiale                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Compatibilité des navigateurs

{{Compat("api.SVGAElement")}}

## Voir aussi

- {{ SVGElement("a") }} SVG Element
