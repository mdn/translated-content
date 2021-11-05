---
title: sessions.getTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getTabValue
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
---
<div>{{AddonSidebar()}}</div>

<p>Récupère une valeur précédemment stockée par un appel à  {{WebExtAPIRef("sessions.setTabValue")}}.</p>

<p>Vous pouvez récupérer une valeur d'un onglet même au cours d'un cycle de fermeture / restauration: si vous définissez une valeur, l'utilisateur ferme l'onglet, puis restaure l'onglet à l'aide de la fonction "restaurer l'onglet" du navigateur (par exemple, en appuyant sur Control+Shift+T), then you will be able to retrieve the value from the restored tab. vous pourrez alors récupérer la valeur de l'onglet restauré. Notez cependant qu'un onglet restauré n'obtient pas le même ID que l'original, donc l'ID que vous passez dans <code>getTabValue()</code> sera différent de l'ID que vous avez passé dans <code>setTabValue()</code>, même s'ils font tous deux référence au même onglet.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var retrieving = browser.sessions.getTabValue(
  tabId,    // integer
  key       // string
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>tabId</code></dt>
 <dd><code>integer</code>. ID de l'onglet dont vous essayez de récupérer les données.</dd>
 <dt><code>key</code></dt>
 <dd><code>string</code>. Clé identifiant la valeur particulière à récupérer. Cela doit correspondre à la clé précédemment donnée dans {{WebExtAPIRef("sessions.setTabValue")}}.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera résolue avec la valeur si elle existe, ou <code>undefined</code>.  Si elle n'existe pas. Si l'appel a échoué (par exemple, parce que l'ID de l'onglet n'a pas pu être trouvé), la promesse sera rejetée avec un message d'erreur.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.sessions.getTabValue", 10)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Consignez la valeur de "my-key" pour tous les nouveaux onglets créés (cela inclura tous les onglets qui ont été restaurés) :</p>

<pre class="brush: js">function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.tabs.onCreated.addListener((tab) =&gt; {
  browser.sessions.getTabValue(tab.id, "my-key").then(onGetResolved, onGetRejected);
});</pre>

<p>{{WebExtExamples}}</p>
