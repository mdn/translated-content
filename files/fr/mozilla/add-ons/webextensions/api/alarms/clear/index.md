---
title: alarms.clear()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clear
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - alarms
  - clear
translation_of: Mozilla/Add-ons/WebExtensions/API/alarms/clear
---
<div>{{AddonSidebar}}</div>

<p>Cette méthode supprime une alarme à partir du nom passé en argument. Il s'agit d'une fonction asynchrone qui renvoie une {{jsxref("Promise")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var clearAlarm = browser.alarms.clear(
  name // string
);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>name</code>{{optional_inline}}</dt>
 <dd><code><code>string</code></code>. Le nom de l'alarme à supprimer. Si le paramètre n'est pas fourni, c'est la chaîne vide "" qui sera utilisée.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}) qui sera tenue avec un booléen. Ce booléen vaudra <code>true</code> si l'alarme a bien été effacée et <code>false</code> sinon.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">function onCleared(wasCleared) {
  console.log(wasCleared);  // true/false
}

var clearAlarm = browser.alarms.clear("my-periodic-alarm");
clearAlarm.then(onCleared);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("webextensions.api.alarms.clear")}}</p>

<p><strong>Remerciements :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/alarms"><code>chrome.alarms</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
