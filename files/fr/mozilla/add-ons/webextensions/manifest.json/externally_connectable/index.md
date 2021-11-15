---
title: externally_connectable
slug: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
tags:
  - Add-ons
  - WebExtensions
  - manifest.json
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
---
<p>{{AddonSidebar}}{{SeeCompatTable}}</p>

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
}</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>Une connexion externe permet au développeur d’extensions de contrôler quelles autres extensions et pages Web peuvent communiquer avec cette extension via  {{WebExtAPIRef("runtime.connect","runtime.connect()")}} et {{WebExtAPIRef("runtime.sendMessage", "runtime.sendMessage()")}} passage de message. Si <code>externally_connectable</code> n'est pas spécifié, toutes les extensions peuvent communiquer entre elles, mais pas avec les pages Web.</p>

<h3 id="attribut_ids">attribut "ids"</h3>

<p><code>ids</code> active la communication entre cette extension et les autres extensions installées spécifiées par les identificateurs d'extension. Utilisez le motif <code>"*"</code> si vous souhaitez communiquer avec toutes les extensions. </p>

<h3 id="attribut_matches">attribut "matches"</h3>

<p>Les correspondances permettent la communication entre cette extension et les pages Web. Voici une liste d'expressions régulières pour les URL de page avec lesquelles vous souhaitez communiquer.</p>

<div class="note">
<p><strong>Note :</strong> Si <code>browser_action</code> n'est pas spécifié, la communication entre les extensions est toujours autorisée, comme si <code>browser_action</code> était <code>{"ids": ["*"] }</code>, par conséquent, si vous spécifiez <code>browser_action.matches</code> n'oubliez pas d'ajouter des identifiants si vous souhaitez toujours communiquer. avec d'autres extensions.</p>
</div>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.manifest.externally_connectable")}}</p>
