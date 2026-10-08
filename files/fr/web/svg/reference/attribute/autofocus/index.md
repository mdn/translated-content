---
title: autofocus
slug: Web/SVG/Reference/Attribute/autofocus
l10n:
  sourceCommit: f806e0ff9b3ef7f633533b4c6c1657e9430e2f06
---

L'attribut SVG universel **`autofocus`** définit un élément pouvant recevoir la sélection pour qu'il soit mis au point après sa connexion à un document. L'attribut n'a aucun effet si l'élément n'est pas déjà sélectionnable.

L'attribut `autofocus` a un équivalent HTML&nbsp;: [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus). Aucun élément du document ne peut avoir plus d'un attribut `autofocus`. Si l'attribut est appliqué à plusieurs éléments, le premier reçoit la sélection.

## Notes d'utilisation

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <code><a href="/fr/docs/Glossary/Boolean/HTML">attribut booléen</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>Aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

Pour une description des valeurs, veuillez vous référer à l'attribut HTML [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus).

## Problèmes d'accessibilité

La sélection automatique d'un SVG peut perturber les personnes malvoyantes utilisant une technologie de lecture d'écran et les personnes ayant des déficiences cognitives. Lorsque l'attribut `autofocus` est attribué, les lecteurs d'écran «&nbsp;téléportent&nbsp;» leur utilisateur·ice vers l'élément pouvant recevoir la sélection sans les avertir au préalable.

Faites preuve de prudence en matière d'accessibilité lors de l'application de l'attribut `autofocus`. La mise au point automatique sur un élément peut provoquer le défilement de la page au chargement. La mise au point peut également provoquer l'affichage de claviers dynamiques sur certains appareils tactiles. Bien qu'un lecteur d'écran annonce le {{Glossary("accessible name", "nom accessible")}} de l'élément recevant la mise au point, le lecteur d'écran n'annonce rien avant l'élément qui peut fournir plus de contexte, et l'utilisateur·ice voyant·e sur un petit appareil manque également le contexte créé par le contenu précédent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut {{SVGAttr("tabindex")}}
- L'attribut HTML [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus)
- La propriété API {{DOMxRef("SVGElement.autofocus")}}
