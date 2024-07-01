---
title: externally_connectable
slug: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
---

{{AddonSidebar}}{{SeeCompatTable}}

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatoire</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Exemple</th>
      <td>
        <pre>
"externally_connectable": {
  // List of extension IDs that extension wishes to communicate with
  // If "browser_action" is specified but "browser_action.ids" is not,
  // no extensions can communicate with this extension.
  // To match all extension IDs use "*".
  "ids": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "cccccccccccccccccccccccccccccccc"
  ],
  // Regular expression patterns specifying web pages
  // If "matches" is not specified, no web pages can communicate with
  // this extension
  "matches": [
    "https://example1.com/*",
    "*://*.example2.com/*"
  ]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Une connexion externe permet au développeur d'extensions de contrôler quelles autres extensions et pages Web peuvent communiquer avec cette extension via {{WebExtAPIRef("runtime.connect","runtime.connect()")}} et {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} passage de message. Si `externally_connectable` n'est pas spécifié, toutes les extensions peuvent communiquer entre elles, mais pas avec les pages Web.

### Attribut "ids"

`ids` active la communication entre cette extension et les autres extensions installées spécifiées par les identificateurs d'extension. Utilisez le motif `"*"` si vous souhaitez communiquer avec toutes les extensions.

### Attribut "matches"

Les correspondances permettent la communication entre cette extension et les pages Web. Voici une liste d'expressions régulières pour les URL de page avec lesquelles vous souhaitez communiquer.

> **Note :** Si `browser_action` n'est pas spécifié, la communication entre les extensions est toujours autorisée, comme si `browser_action` était `{"ids": ["*"] }`, par conséquent, si vous spécifiez `browser_action.matches` n'oubliez pas d'ajouter des identifiants si vous souhaitez toujours communiquer. avec d'autres extensions.

## Compatibilité des navigateurs

{{Compat}}
