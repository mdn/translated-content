---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - openPopup
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
---
<div>{{AddonSidebar()}}</div>

<div>Ouvrez le popup de l'action du navigateur.</div>

<div></div>

<div>
<p>Vous pouvez uniquement appeler cette fonction à partir du gestionnaire pour une <a href="/fr/Add-ons/WebExtensions/User_actions">action utilisateur</a>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.browserAction.openPopup()
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>None.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> cela est résolu sans arguments.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.browserAction.openPopup", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Ouvrez la fenêtre contextuelle lorsque l'utilisateur sélectionne un élément de menu contextuel :</p>

<pre class="brush: js">browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() =&gt; {
  browser.browserAction.openPopup();
});</pre>

<p>{{WebExtExamples}}</p>
