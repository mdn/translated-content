---
title: devtools_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td>chaîne</td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">"devtools_page": "devtools/my-page.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

Utilisez cette clé pour activer votre extension et intégrer les outils de développement du navigateur.

Cette clé est définie comme une URL d'un fichier HTML. Le fichier HTML doit être regroupé avec l'extension, et l'URL est relative à la racine de l'extension.

Voir [Extension des outils développeurs](/fr/Add-ons/WebExtensions/Extending_the_developer_tools) pour plus d'informations.

## Exemple

```json
"devtools_page": "devtools/my-page.html"
```

## Compatibilité des navigateurs

{{Compat}}
