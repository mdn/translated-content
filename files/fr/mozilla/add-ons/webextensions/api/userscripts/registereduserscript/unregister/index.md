---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
tags:
  - Add-ons
  - Extensions
  - Method
  - User Scripts API
  - WebExtensions
  - unregister
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
---
<p>{{AddonSidebar}}</p>

<p>La méthode <code>unregister()</code> de l'interface  {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} désenregistre le script utilisateur représenté par cette instance d'interface et précédemment enregistré via  {{WebExtAPIRef("userScripts.register","userScripts.register()")}}.</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> Les scripts utilisateur sont automatiquement désenregistrés lorsque la page d'extension correspondante (à partir de laquelle les scripts utilisateur ont été enregistrés) est déchargée, vous devez donc enregistrer un script utilisateur depuis une page d'extension qui persiste au moins aussi longtemps que vous voulez que les scripts utilisateur restent enregistrés..</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
…
await registeredUserScript.unregister()</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une {{JSxRef("Promise")}} qui sera résolu une fois le script utilisateur désenregistré. La promesse ne rapporte rien.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.userScripts.RegisteredUserScript.unregister")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{WebExtAPIRef("userScripts.register","userScripts.register()")}}</li>
 <li>{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}</li>
</ul>
