---
title: runtime.getBrowserInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getBrowserInfo
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
---
<div>{{AddonSidebar}}</div>

<p>Renvoie les informations sur le navigateur dans lequel l'extension est installée.</p>

<p>Il s'agit d'une fonction asynchrone qui renvoie une {{JSxRef("Promise")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var gettingInfo = browser.runtime.getBrowserInfo()
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>None.</p>

<h3 id="valeur_retournée">valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un objet qui a les propriétés suivantes :</p>

<ul>
 <li><strong><code>name</code></strong>: Valeur de chaîne représentant le nom du navigateur, par exemple "Firefox".</li>
 <li><strong><code>vendor</code></strong>: Valeur de chaîne représentant le fournisseur du navigateur, par exemple "Mozilla".</li>
 <li><strong><code>version</code></strong>: Chaîne représentant la version du navigateur, par exemple "51.0" or "51.0a2".</li>
 <li><strong><code>buildID</code></strong>: Chaine représentant la version spécifique du navigateur, par exemple "20161018004015".</li>
</ul>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>



<p>{{Compat("webextensions.api.runtime.getBrowserInfo")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Obtenir et enregistrer le nom du navigateur :</p>

<pre class="brush: js">function gotBrowserInfo(info) {
  console.log(info.name);
}

var gettingInfo = browser.runtime.getBrowserInfo();
gettingInfo.then(gotBrowserInfo);</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>
