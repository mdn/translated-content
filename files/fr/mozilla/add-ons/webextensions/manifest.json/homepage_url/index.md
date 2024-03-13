---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
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
        <pre class="brush: json">
"homepage_url": "https://example.org/my-addon"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

URL pour la page d'accueil de l'extension.

Si la clé [dévelopeur](/fr/Add-ons/WebExtensions/manifest.json/developer) est fournie et qu'elle contient la propriété "url", cela remplacera la clé "homepage_url".

c'est une [proriété localisable](/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## Exemple

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify"
```

## Compatibilité des navigateurs

{{Compat}}
