---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
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
"omnibox": {
  "keyword": "mdn"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Utilisez la clé `omnibox` pour définir un mot-clé omnibox pour votre extension.

Lorsque l'utilisateur tape ce mot-clé dans la barre d'adresse du navigateur, suivi d'un espace, les caractères suivants seront envoyés à l'extension à l'aide de l'API [`omnibox`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/omnibox). L'extension pourra ensuite remplir la liste de suggestions de la liste déroulante de la barre d'adresse avec ses propres suggestions.

Si deux ou plusieurs extensions définissent le même mot-clé, l'extension qui a été installée la dernière permet de contrôler le mot-clé. Toute extension précédemment installée qui définit le même mot-clé ne pourra plus utiliser l'API omnibox.

## Exemple

```json
"omnibox": {
  "keyword": "mdn"
}
```

## Compatibilité du navigateur

{{Compat("webextensions.manifest.omnibox")}}
