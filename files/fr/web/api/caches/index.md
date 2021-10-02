---
title: WindowOrWorkerGlobalScope.caches
slug: Web/API/caches
translation_of: Web/API/WindowOrWorkerGlobalScope/caches
original_slug: Web/API/WindowOrWorkerGlobalScope/caches
---
<p>{{APIRef()}}{{SeeCompatTable}}</p>

<p>La propriété en lecture seule  <code><strong>caches</strong></code> de l'interface {{domxref("WindowOrWorkerGlobalScope")}} retourne l'objet {{domxref("CacheStorage")}} associé au contexte actuel. Cet objet permet de stocker des ressources pour une utilisation hors-ligne et de générer des réponses personnalisées à des requêtes.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>myCacheStorage</em> = self.caches; // ou simplement caches
</pre>

<h3 id="Value">Value</h3>

<p>Un objet de type {{domxref("CacheStorage")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant montre comment mettre en cache un contexte de <a href="/en-US/docs/Web/API/Service_Worker_API">service worker</a> pour stocker des ressources et les utiliser hors-ligne.</p>

<pre class="brush: js">this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#self-caches', 'caches')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>
    <p>Défini dans un <code>WindowOrWorkerGlobalScope</code> partiel dans la nouvelle spec.</p>
   </td>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.WindowOrWorkerGlobalScope.caches")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">Service Workers</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li>{{domxref("CacheStorage")}}</li>
 <li>{{domxref("Cache")}}</li>
</ul>
