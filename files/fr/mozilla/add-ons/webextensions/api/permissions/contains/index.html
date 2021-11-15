---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
tags:
  - API
  - Add-ons
  - Contains
  - Method
  - Permissions
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/permissions/contains
---
<div>{{AddonSidebar()}}</div>

<p>Vérifiez si l'extension a les permissions listées dans l'objet  {{WebExtAPIRef("permissions.Permissions")}}.</p>

<p>L'argument <code>Permissions</code> peut contenir une propriété origine, qui est un tableau de <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">permissions hôtes</a>, ou une propriété  <code>permissions</code> , qui est un tableau de <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permissions API</a>, ou les deux.</p>

<p>Il s'agit d'une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promesse</a></code>. La promesse est remplie avec true  seulement si toute l'extension possède actuellement toutes les permissions données. Pour les permissions d'hôtes, si le modèle de permissions if the extension's permissions <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">pattern-match</a> the permissions listed in <code>origins</code>, then they are considered to match.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var getContains = browser.permissions.contains(
  permissions                // Permissions object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>permissions</code></dt>
 <dd>Un objet {{WebExtAPIRef("permissions.Permissions")}} .</dd>
</dl>

<h3 id="Valeur_renvoyée">Valeur renvoyée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promesse</a></code> qui sera remplie avec  <code>true</code> si l'extension possède déjà toutes les permissions listées dans l'argument des <code>permissions</code> , ou <code>false</code> dans le cas contraire.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.permissions.contains")}}</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

var testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"]
};

browser.permissions.contains(testPermissions1).then((result) =&gt; {
  console.log(result);    // true
});

var testPermissions2 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs", "alarms"]
};

browser.permissions.contains(testPermissions2).then((result) =&gt; {
  console.log(result);   // false, "alarms" doesn't match
});

var testPermissions3 = {
  origins: ["https://developer.mozilla.org/"],
  permissions: ["tabs", "webRequest"]
};

browser.permissions.contains(testPermissions3).then((result) =&gt; {
  console.log(result);   // true: "https://developer.mozilla.org/"
});                      // matches: "*://*.mozilla.org/*"

var testPermissions4 = {
  origins: ["https://example.org/"]
};

browser.permissions.contains(testPermissions4).then((result) =&gt; {
  console.log(result);   // false, "https://example.org/"
});                      // does not match

</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/permissions"><code>chrome.permissions</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
