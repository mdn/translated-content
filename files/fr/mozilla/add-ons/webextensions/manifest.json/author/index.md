---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/author
original_slug: Mozilla/Add-ons/WebExtensions/manifest.json/auteur
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td>chaîne de caractères</td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td><pre class="brush: json">"author": "Walt Whitman"</pre></td>
    </tr>
  </tbody>
</table>

L'auteur de l'extension, destiné à être visualisé dans l'interface utilisateur du navigateur. Si la clé du [developpeur](/fr/Add-ons/WebExtensions/manifest.json/developer) est fournie et qu'elle contient la propriété "nom", elle remplacera la clé de l'auteur. Il n'y a aucun moyen de spécifier plusieurs auteurs.

Notez que Firefox ne supporte cette clé qu'à partir de la version 52 et que cette clé est obligatoire dans Microsoft Edge.

## Exemple

```json
"author": "Walt Whitman"
```

## Compatibilité des navigateurs

{{Compat("webextensions.manifest.author")}}
