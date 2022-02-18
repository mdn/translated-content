---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td><pre class="brush: json">"version_name": "0.1 beta"</pre></td>
    </tr>
  </tbody>
</table>

En plus du champ [version](/fr/Add-ons/WebExtensions/manifest.json/version), qui est utilisé à des fins de mise à jour, [version_name](https://developer.chrome.com/extensions/manifest/version) peut être défini sur une chaîne de version descriptive et sera utilisé à des fins d'affichage s'il est présent.

Si aucun **version_name** n'est présent, le champ de **version** sera également utilisé à des fins d'affichage.

## Compatibilité du navigateur

{{Compat("webextensions.manifest.version_name")}}
