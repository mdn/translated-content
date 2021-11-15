---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Reference
  - WebExtensions
  - contextualIdentities
  - query
translation_of: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
---
<div>{{AddonSidebar()}}</div>

<p>Obtient des informations sur toutes les identités contextuelles ou sur les identités contextuelles correspondant à un argument de filtre donné.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var getContext = browser.contextualIdentities.query(
  details                  // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>details</code></dt>
 <dd>
 <p><code>object</code>. Un objet qui peut être utilisé pour filtrer les identités contextuelles renvoyées. Cela peut contenir l'une des propriétés suivantes :</p>

 <dl>
  <dt><code>name</code> {{optional_inline}}</dt>
  <dd><code>string</code>. Renvoie uniquement les identités contextuelles avec ce nom.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un tableau d'objets  {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} chacun décrivant une seule identité. Si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.contextualIdentities.query")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Retrieve all contextual identities, and log their names :</p>

<pre class="brush: js">function onGot(contexts) {
  for (let context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.query({}).then(onGot, onError);</pre>

<p>Récupérez toutes les identités contextuelles dont les noms sont "my-thing", et consignez leurs noms :</p>

<pre class="brush: js">function onGot(contexts) {
  for (let context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.query({
  name: "my-thing"
}).then(onGot, onError);
</pre>

<p>{{WebExtExamples}}</p>
