---
title: CacheStorage.has()
slug: Web/API/CacheStorage/has
tags:
  - API
  - CacheStorage
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - ServiceWorker
  - has
translation_of: Web/API/CacheStorage/has
---
<p>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>has()</code></strong> de l'interface {{domxref("CacheStorage")}} retourne une {{jsxref("Promise", "Promesse")}} qui renvoie <code>true</code> si un objet {{domxref("Cache")}} est égal au <code>cacheName</code>.</p>

<p>Vous pouvez accéder à <code>CacheStorage</code> via la propriété globale {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">caches.has(<em>cacheName</em>).then(function(true) {
  // le cache existe!
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>cacheName</dt>
 <dd>Un  {{domxref("DOMString")}} représentant le nom de l'objet {{domxref("Cache")}} que vous cherchez dans le {{domxref("CacheStorage")}}.</dd>
</dl>

<h3 id="Retour">Retour</h3>

<p>Une {{jsxref("Promise", "Promesse")}} qui renvoie <code>true</code> si le cache existe.</p>

<h2 id="Exemples">Exemples</h2>

<p>L'exemple suivant vérifie qu'un cache nommé 'v1' exists. Si c'est le cas, nous lui ajoutons une liste d'assets. Si non (la promesse <code>has()</code> est rejetée) alors nous exécutons une sorte d'initialisation du cache.</p>

<pre class="brush: js">caches.has('v1').then(function() {
  caches.open('v1').then(function(cache) {
      return cache.addAll(myAssets);
  });
}).catch(function() {
  someCacheSetupfunction();
});;</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#cache-storage-has', 'CacheStorage: has')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_des_navigateurs">Compatibilités des navigateurs</h2>



<p>{{Compat("api.CacheStorage.has")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers">Utiliser les Service Workers</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WorkerGlobalScope.caches")}}</li>
</ul>
