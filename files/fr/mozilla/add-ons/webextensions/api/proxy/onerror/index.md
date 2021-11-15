---
title: proxy.onProxyError
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onError
tags:
  - API
  - Add-ons
  - Event
  - Proxy
  - Reference
  - WebExtensions
  - onProxyError
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy/onError
original_slug: Mozilla/Add-ons/WebExtensions/API/proxy/onProxyError
---
<div>{{AddonSidebar()}}</div>

<p>Lancé en cas d'erreur lors de l'évaluation du fichier PAC ou l'écouteur <code>onRequest</code>.</p>

<p>L'erreur peut être déclenchée en lançant ou renvoyant une valeur invalide dans le gestionnaire d'événements proxy.onRequest.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.proxy.onError.addListener(listener)
browser.proxy.onError.removeListener(listener)
browser.proxy.onError.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(listener)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si l'<code>écouteur</code> est enregistré pour cet événement. Renvoie <code>true</code> s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>newState</code></dt>
  <dd><code>Object</code>. Un objet <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error">Error</a> représentant l'erreur.</dd>
 </dl>
 </dd>
</dl>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.proxy.onError")}}</p>
