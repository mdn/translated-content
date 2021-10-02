---
title: Cache.add()
slug: Web/API/Cache/add
tags:
  - API
  - Add
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Worker
  - Service worker API
  - ServiceWorker
translation_of: Web/API/Cache/add
---
<p>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>add()</code></strong> de l'interface {{domxref("Cache")}} accepte une URL, la récupère, et ajoute l'objet réponse qui en résulte dans le cache. La méthode <code>add()</code> est équivalent au code suivant :</p>

<pre class="brush: js">fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('bad response status');
  }
  return cache.put(url, response);
})</pre>

<p>Pour des opérations plus complexes, il faut utiliser {{domxref("Cache.put","Cache.put()")}} directement.</p>

<div class="note">
<p><strong>Note :</strong> <code>add()</code> écrasera toute paire clé/valeur précedemment stockée en cache et qui correspond à la requête.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">cache.add(request).then(function() {
  //request a été ajoutée au cache
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>request</dt>
 <dd>La requête à mettre en cache. Ce paramètre peut être un objet {{domxref("Request", "Requête")}} ou une URL.</dd>
</dl>

<h3 id="Retour">Retour</h3>

<p>Une {{jsxref("Promise", "Promesse")}} qui est résolue en void.</p>

<h3 id="Exceptions">Exceptions</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"><strong>Exception</strong></th>
   <th scope="col"><strong>Arrive quand</strong></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TypeError</code></td>
   <td>
    <p>Le schéma d'URL n'est pas <code>http</code> ou <code>https</code>.</p>

    <p>Le statut de la réponse n'est pas dans les 200 (i.e., une requête qui a échoué.) Cela peut arriver si la requête échoue, mais également si la requête est une <em>cross-origin no-cors</em> (auquel cas le statut retourné est systématiquement 0.)</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Ce bloc de code attends le déclenchement d'un {{domxref("InstallEvent")}}, puis lance {{domxref("ExtendableEvent.waitUntil","waitUntil")}} qui gère la phase d'installation de l'application. Cela consite à appeler {{domxref("CacheStorage.open")}} afin de créer un nouveau cache, puis à utiliser {{domxref("Cache.add")}} pour y ajouter des ressources.</p>

<pre class="brush: js">this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.add('/sw-test/index.html');
    })
  );
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-cache-add', 'Cache: add')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Cache.add")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers">Utiliser les Service Workers</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WorkerGlobalScope.caches")}}</li>
</ul>
