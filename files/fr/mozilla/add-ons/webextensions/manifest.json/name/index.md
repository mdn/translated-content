---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
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
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td><pre class="brush: json">"name": "Mon extension"</pre></td>
    </tr>
  </tbody>
</table>

Nom de l'extension. Ceci permet d'identifier l'extension dans l'interface utilisateur du navigateur et sur les sites comme addons.mozilla.org.

Il est recommandé de garder le nom suffisamment court pour pouvoir s'afficher dans l'interface utilisateur. Google Chrome et Microsoft Edge limitent la longueur du nom à 45 caractères.

C'est une [propriété localisable](/fr/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## Exemple

```json
"name": "Mon extension"
```

## Compatibilité des navigateurs

{{Compat}}
