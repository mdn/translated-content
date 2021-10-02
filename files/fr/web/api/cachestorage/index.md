---
title: CacheStorage
slug: Web/API/CacheStorage
tags:
  - API
  - Cache de stockage
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/CacheStorage
---
<p>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</p>

<p>L'interface <code>CacheStorage</code> représente le stockage des objets {{domxref("Cache")}}.</p>

<p>L'interface :</p>

<ul>
 <li>Fournit un répertoire principal de tous les caches nommés qui peut être accessible par un {{domxref("ServiceWorker")}} ou un autre type de travailleur ou portée de {{domxref("window")}} (vous n'êtes pas limité à l'utiliser uniquement avec des Service Workers, même si la spécification {{SpecName("Service Workers")}} le définit).
  <div class="note">
    <p><strong>Note :</strong> <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1026063">Chrome et Safari n'exposent que "CacheStorage" au contexte fenêtré sur HTTPS</a>. {{domxref("window.caches")}} sera indéfinie, à moins qu'un certificat SSL ne soit configuré.</p></div>
 </li>
 <li>Maintient une correspondance entre les noms des chaînes de caractères et les objets {{domxref("Cache")}} correspondants.</li>
</ul>

<p>Utilisez {{domxref("CacheStorage.open()")}} pour obtenir une instance {{domxref("Cache")}}.</p>

<p>Utilisez {{domxref("CacheStorage.match()")}} pour vérifier si une {{domxref("Request", "Requête")}} donnée est une clé dans l'un des objets {{domxref("Cache")}} que l'objet <code>CacheStorage</code> surveille.</p>

<p>Vous pouvez accéder à <code>CacheStorage</code> via la propriété globale {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}}.</p>

<div class="note">
  <p><strong>Note :</strong> CacheStorage échouera systématiquement avec une <code>SecurityError</code> sur les domaines non certifiés (i.e. ceux qui n'utilisent pas HTTPS, bien que cette définition risque de devenir plus complexe dans le future). Pendant vos tests vous pouvez contourner ce comportement en cochant l'option "Enable Service Workers over HTTP (when toolbox is open)" dans les options Firefox Devtools / le menu gear.</p>
</div>

<div class="note">
  <p><strong>Note :</strong> {{domxref("CacheStorage.match()")}} est une méthode de convenance. Il est possible d'implémenter une fonctionnalité équivalente pour matcher une entrée de cache en appelant {{domxref("CacheStorage.open()")}}, puis en retournant {{domxref("CacheStorage.keys()")}}, et en matchant les entrées voulues avec {{domxref("CacheStorage.match()")}}.</p>
</div>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("CacheStorage.match()")}} {{experimental_inline}}</dt>
 <dd>Cherche si une {{domxref("Request")}} donnée est la clé de n'importe lequel des objets {{domxref("Cache")}} maintenus par le {{domxref("CacheStorage")}}, et retourne une {{jsxref("Promise", "Promesse")}} résolue en cet objet {{domxref("Cache")}}.</dd>
 <dt>{{domxref("CacheStorage.has()")}} {{experimental_inline}}</dt>
 <dd>Retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en <code>true</code> si un objet {{domxref("Cache")}} qui correspond au <code>cacheName</code> existe.</dd>
 <dt>{{domxref("CacheStorage.open()")}} {{experimental_inline}}</dt>
 <dd>Retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en l'objet {{domxref("Cache")}} qui correspond au <code>cacheName</code> (si il n'existe pas, un nouveau cache est créé).</dd>
 <dt>{{domxref("CacheStorage.delete()")}} {{experimental_inline}}</dt>
 <dd>Trouve l'objet {{domxref("Cache")}} correspondant au <code>cacheName</code>, et si il est trouvé, supprime l'objet {{domxref("Cache")}} et retourne une {{jsxref("Promise", "Promesse")}} résolue à <code>true</code>. Si aucun objet {{domxref("Cache")}} n'est trouvé, la {{jsxref("Promise", "Promesse")}} est résolue à <code>false</code>.</dd>
 <dt>{{domxref("CacheStorage.keys()")}} {{experimental_inline}}</dt>
 <dd>Retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en un tableau qui contient toutes les chaînes correspondantes aux objets {{domxref("Cache")}} maintenus par le {{domxref("CacheStorage")}}. Cette méthode peut s'utiliser pour itérer sur une liste de tous les objets {{domxref("Cache")}}.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Cet extrait de code est tiré de l'<a href="https://github.com/mdn/sw-test/">exemple MDN sw-test</a> (lancer <a href="https://mdn.github.io/sw-test/">sw-test dans votre navigateur</a>). Ce service worker script attends le déclenchement d'un {{domxref("InstallEvent")}}, puis lance {{domxref("ExtendableEvent.waitUntil","waitUntil")}} pour gérer la phase d'installation de l'app. Cela consiste à appeler {{domxref("CacheStorage.open")}} pour créer un nouveau cache, puis {{domxref("Cache.addAll")}} pour y ajouter une série d'assets.</p>

<p>Dans le second bloc de code, on attends le déclenchement d'un {{domxref("FetchEvent")}}. On construit ensuite une réponse spéciale comme suit :</p>

<ol>
 <li>Vérifier si il y a un match pour la requête dans le CacheStorage. Le cas échéant, servir ça.</li>
 <li>Sinon, récupérer la requête sur le réseau, puis ouvrir le cache du premier bloc et y ajouter un clone de la requête grâce à {{domxref("Cache.put")}} (<code>cache.put(event.request, response.clone())</code>.)</li>
 <li>En cas d'échec (e.g. car le réseau est inaccessible), retourner une réponse par défaut.</li>
</ol>

<p>Enfin, on retourne cette réponse en utilisant {{domxref("FetchEvent.respondWith")}}.</p>

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
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() fonctionne toujours
    // mais en cas de succès, la réponse aura une valeur
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // la réponse ne peut être utilisée qu'une seule fois
        // nous devons sauvegarder le clone pour mettre
        // une copie en cache et servir le second
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});</pre>

<p>Cet extrait montre comment l'API peut être utilisée en dehors du contexte d'un Service Worker, et utilise l'opérateur "await" pour un code beaucoup plus lisible.</p>

<pre class="brush: js">// Essayer d'obtenir des données du cache, mais se rabattre sur la récupération en direct.
async function getData() {
   const cacheVersion = 1;
   const cacheName    = `myapp-${ cacheVersion }`;
   const url          = 'https://jsonplaceholder.typicode.com/todos/1';
   let cachedData     = await getCachedData( cacheName, url );

   if ( cachedData ) {
      console.log( 'Récupération des données mises en cache' );
      return cachedData;
   }

   console.log( 'Obtenir de nouvelles données' );

   const cacheStorage = await caches.open( cacheName );
   await cacheStorage.add( url );
   cachedData = await getCachedData( cacheName, url );
   await deleteOldCaches( cacheName );

   return cachedData;
}

// Obtenir des données du cache.
async function getCachedData( cacheName, url ) {
   const cacheStorage   = await caches.open( cacheName );
   const cachedResponse = await cacheStorage.match( url );

   if ( ! cachedResponse || ! cachedResponse.ok ) {
      return false;
   }

   return await cachedResponse.json();
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches( currentCache ) {
   const keys = await caches.keys();

   for ( const key of keys ) {
      const isOurCache = 'myapp-' === key.substr( 0, 6 );

      if ( currentCache === key || ! isOurCache ) {
         continue;
      }

      caches.delete( key );
   }
}

try {
   const data = await getData();
   console.log( { data } );
} catch ( error ) {
   console.error( { error } );
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#cache-storage', 'CacheStorage')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_des_navigateurs">Compatibilités des navigateurs</h2>



<p>{{Compat("api.CacheStorage")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utilisation des Service Workers</a></li>
 <li>{{domxref("Cache")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.caches")}}</li>
</ul>
