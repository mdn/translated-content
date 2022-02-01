---
title: user_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
tags:
  - Add-ons
  - Extensions
  - WebExtensions
  - manifest.json
  - user_scripts key
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
---
{{AddonSidebar}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre class="brush: json">
  "user_scripts": {
    "api_script": "apiscript.js",
  }
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Charge le navigateur de charger le script utilisateur nommé dans la propriété `"api_script"` .

La propriété `"api_script"` nomme le script utilisateur qui sera associé à cette extension.

Une fois chargé, le script sera appelé après l'exécution du gestionnaire d'événement affecté à la propriété {{WebExtAPIRef("userScripts.onBeforeScript")}}. Ceci permet au gestionnaire d'exporter un ensemble de méthodes API personnalisées qui seront mises à la disposition des scripts de contenu représentés par {{WebExtAPIRef("contentScripts")}}.

## Voir aussi

- {{WebExtAPIRef("userScripts")}}
- {{WebExtAPIRef("contentScripts")}}
