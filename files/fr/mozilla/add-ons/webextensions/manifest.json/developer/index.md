---
title: developer
slug: Mozilla/Add-ons/WebExtensions/manifest.json/developer
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/developer
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Objet</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Le nom du développeur de l'extension et l'URL de sa page d'accueil, destinés à être affichés dans l'interface utilisateur du navigateur.

L'objet et ses deux propriétés sont facultatifs. Les propriétés "nom" et "url", si présentes, remplacent respectivement les clés [author](/fr/Add-ons/WebExtensions/manifest.json/author) et [homepage_url](/fr/Add-ons/WebExtensions/manifest.json/homepage_url). Cet objet ne permet qu'un seul nom de développeur et une URL à spécifier.

Ceci est une [propriété localisable](/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## Exemple

```json
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}
```

## Compatibilité du navigateur

{{Compat("webextensions.manifest.developer")}}
