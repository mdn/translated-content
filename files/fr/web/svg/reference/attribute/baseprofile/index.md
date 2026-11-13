---
title: baseProfile
slug: Web/SVG/Reference/Attribute/baseProfile
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

L'attribut **`baseProfile`** décrit le profil de langage SVG minimum que l'auteur·ice estime nécessaire pour rendre correctement le contenu. L'attribut ne définit aucune restriction de traitement&nbsp;; il peut être considéré comme des métadonnées.

Par exemple, la valeur de l'attribut peut être utilisée par un outil de création pour avertir l'utilisateur·ice lorsqu'il·elle modifie le document au-delà du cadre du profil de base défini.

Chaque profil SVG doit définir le texte approprié pour cet attribut.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("svg")}}

## Notes de contexte

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>Nom du profil</td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Exemples

```svg
<svg width="120" height="120" version="1.1"
 xmlns="http://www.w3.org/2000/svg" baseProfile="full">

  …

</svg>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
