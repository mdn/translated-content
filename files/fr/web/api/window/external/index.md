---
title: "Window : propriété external"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

La propriété `external` de l'interface {{DOMxRef("Window")}} retourne une instance de l'interface `External`, qui est destinée à contenir des fonctions liées à l'ajout de fournisseurs de recherche externes au navigateur. Cependant, ceci est désormais obsolète, et les méthodes qu'elle contient sont maintenant des fonctions factices qui ne font rien conformément à la spécification.

## Méthodes d'instance

L'objet `External` possède les méthodes suivantes&nbsp;:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Méthode</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(descriptionURL)</code>
      </td>
      <td>
        Fonction factice&nbsp;; ne fait rien. Utilisée pour <a href="/fr/docs/Web/XML/Guides/OpenSearch">enregistrer des descriptions de recherche</a>.
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>Fonction factice&nbsp;; ne fait rien.</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
