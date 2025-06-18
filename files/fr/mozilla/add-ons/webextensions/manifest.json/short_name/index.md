---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
---

{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Chaîne</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td><pre class="brush: json">"short_name": "MonExtension"</pre></td>
    </tr>
  </tbody>
</table>

Nom abrégé de l'extension. S'il est donné, il sera utilisé dans des contextes où le champ [name](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) est trop long. Il est recommandé que le nom court ne dépasse pas 12 caractères. Si le champ du nom court n'est pas inclus dans manifest.json, le nom sera utilisé à la place et peut être tronqué.

C'est une [propriété localisable](/fr/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Exemple

```json
"short_name": "MonExtension"
```

## Compatibilité des navigateurs

{{Compat}}
