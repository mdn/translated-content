---
title: "Window : propriété external"
short-title: external
slug: Web/API/Window/external
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{APIRef}}{{Deprecated_Header}}

La propriété `external` de l'interface {{DOMxRef("Window")}} retourne une instance de l'interface `External`, qui était destinée à contenir des fonctions liées à l'ajout de fournisseurs de recherche externes au navigateur. Cependant, ceci est désormais obsolète, et les méthodes qu'elle contient sont maintenant des fonctions factices qui ne font rien conformément à la spécification.

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
    <tr>
      <td><code>getHostEnvironmentValue(name)</code> {{Non-standard_Inline}}</td>
      <td>L'API propriétaire de Microsoft Edge. Voir <a href="https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/mt795399(v=vs.85)">la documentation Microsoft <sup>(angl.)</sup></a> pour plus d'informations.</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
