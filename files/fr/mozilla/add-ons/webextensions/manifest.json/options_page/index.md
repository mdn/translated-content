---
title: options_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
tags:
  - Add-ons
  - Deprecated
  - Extensions
  - Manifest
  - Options
  - WebExtensions
  - options_page
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/options_page
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json;">"options_page": "options/options.html"</pre>
      </td>
    </tr>
  </tbody>
</table>

{{Deprecated_Header}}

> **Attention :** Cette clé du manifest a été dépréciée. Utilisez [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui)à la place.

Utilisez la clé d'`options_page` pour définir une [page d'options](/fr/Add-ons/WebExtensions/Options_pages) pour votre extension.

La page des options contient les paramètres de l'extension. L'utilisateur peut y accéder depuis le gestionnaire d'add-ons du navigateur, et vous pouvez l'ouvrir depuis votre extension en utilisant {{WebExtAPIRef("runtime.openOptionsPage()")}}.

Contrairement aux pages d'options spécifiées à l'aide de la nouvelle clé `options_ui`, les pages d'options spécifiées à l'aide de la clé `options_page` obsolète ne reçoivent pas les styles de navigateur et s'ouvrent toujours dans un onglet normal du navigateur.

## Exemple

```json
"options_page": "options/options.html"
```

## Compatibilité du navigateur

{{Compat("webextensions.manifest.options_page")}}

## Voir aussi

- [`options_ui`](/fr/Add-ons/WebExtensions/manifest.json/options_ui)
- [Options pages](/fr/Add-ons/WebExtensions/user_interface/Options_pages)
