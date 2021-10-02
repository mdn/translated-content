---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
tags:
  - API
  - Experimental
  - ExtendableEvent
  - Interface
  - Offline
  - Reference
  - Service Workers
  - ServiceWorker
  - Workers
translation_of: Web/API/ExtendableEvent
browser-compat: api.ExtendableEvent
---
<div>{{APIRef("Service Workers API")}}</div>

<p>L'interface <strong><code>ExtendableEvent</code></strong> étend la durée de vie des événements <code><a href="/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event">install</a></code> et <code><a href="/fr/docs/Web/API/ServiceWorkerGlobalScope/activate_event">activate</a></code> envoyés dans la portée globale dans le cycle de vie du service worker. Elle s'assure que les événements fonctionnels (comme <a href="/fr/docs/Web/API/FetchEvent"><code>FetchEvent</code></a>) ne soient pas distribués avant de mettre à jour les schémas de la base de données et de vider l'ancien cache.</p>

<p>Si <a href="/fr/docs/Web/API/ExtendableEvent/waitUntil"><code>waitUntil()</code></a> est appelé en dehors du gestionnaire <code>ExtendableEvent</code>, le navigateur doit lever une exception <code>InvalidStateError</code> ; notez que plusieurs appels vont s'empiler, et que les promesses de résultat seront ajoutées à la liste des <a href="https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises">promesses à vie étendue</a>.</p>

<div class="note">
<p><strong>Note :</strong> Le comportement décrit dans le paragraphe précédent a été corrigé dans Firefox 43 (voir <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1180274">le bug 1180274</a>).</p>
</div>

<p>Cette interface hérite de l'interface <a href="/fr/docs/Web/API/Event"><code>Event</code></a>.</p>

<p>{{InheritanceDiagram(700, 60, 20)}}</p>

<div class="note">
<p><strong>Note :</strong> Cette interface est disponible seulement quand la portée globale est <a href="/fr/docs/Web/API/ServiceWorkerGlobalScope"><code>ServiceWorkerGlobalScope</code></a>. Elle n'est pas disponible quand c'est un objet <a href="/fr/docs/Web/API/Window"><code>Window</code></a> ou un autre type de worker.</p>
</div>

<h2 id="constructor">Constructeur</h2>

<dl>
 <dt><a href="/fr/docs/Web/API/ExtendableEvent/ExtendableEvent"><code>ExtendableEvent()</code></a></dt>
 <dd>Crée un nouvel objet <code>ExtendableEvent</code>.</dd>
</dl>

<h2 id="properties">Propriétés</h2>

<p>N'implémente pas de propriétés spécifiques, mais hérite de celles de son parent, <em><a href="/fr/docs/Web/API/Event"><code>Event</code></a>.</em></p>

<h2 id="methods">Méthodes</h2>

<p>Hérite des méthodes de son parent <em><a href="/fr/docs/Web/API/Event"><code>Event</code></a>.</em></p>

<dl>
 <dt><a href="/fr/docs/Web/API/ExtendableEvent/waitUntil"><code>ExtendableEvent.waitUntil()</code></a></dt>
 <dd>Étend la durée de vie de l'évènement. Cette méthode doit être appelée dans le gestionnaire d'évènement <code><a href="/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event">install</a></code> pour le worker en cours d'installation (voir <a href="/fr/docs/Web/API/ServiceWorkerRegistration/installing"><code>installing</code></a>) et dans le gestionnaire d'évènement <code><a href="/fr/docs/Web/API/ServiceWorkerGlobalScope/activate_event">activate</a></code> pour le worker actif (voir <a href="/fr/docs/Web/API/ServiceWorkerRegistration/active"><code>active</code></a>).</dd>
</dl>

<h2 id="examples">Exemples</h2>

<p>Ce fragment de code est tiré de <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js">l'exemple du service worker utilisant prefetch</a> (voir <a href="https://googlechrome.github.io/samples/service-worker/prefetch/">l'exemple en live</a>). Ce code appelle <a href="/fr/docs/Web/API/ExtendableEvent/waitUntil"><code>ExtendableEvent.waitUntil()</code></a> dans le gestionnaire d'évènement <a href="/fr/docs/Web/API/ServiceWorkerGlobalScope/oninstall"><code>ServiceWorkerGlobalScope.oninstall</code></a>, retardant le traitement du worker <a href="/fr/docs/Web/API/ServiceWorkerRegistration/installing"><code>ServiceWorkerRegistration.installing</code></a> après l'installation jusqu'à ce que la promesse se résolve. La promesse se résout quand toutes les ressources ont été récupérées et mises en cache, ou quand une exception est levée.</p>

<p>Ce fragment de code montre aussi une bonne pratique pour construire des versions de cache utilisées par le service worker. Même s'il n'y a qu'un cache dans cet exemple, la même approche peut être utilisée pour plusieurs caches. Il lie un identifiant court pour un cache avec un nom de cache spécifique et versionné.</p>

<pre class="brush: js">var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
  var urlsToPrefetch = [
    './static/pre_fetched.txt',
    './static/pre_fetched.html',
    'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif'
  ];

  console.log('Installation en cours. Ressources à pré-charger :', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch']).then(function(cache) {
      cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
        return new Request(urlToPrefetch, {mode: 'no-cors'});
      })).then(function() {
        console.log('Toutes les ressources ont été chargées et mises en cache.');
      });
    }).catch(function(error) {
      console.error('Erreur de pré-chargement :', error);
    })
  );
});</pre>

<div class="warning">
  <p><strong>Attention :</strong> Au moment du chargement des ressources, il est très important d'utiliser <code>{mode: 'no-cors'}</code> s'il y a une chance que la ressource soit servie depuis un serveur qui ne supporte pas le <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">CORS</a>. Dans cet exemple, <a href="https://www.chromium.org">www.chromium.org</a> ne prend pas en charge le CORS.</p>
</div>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Service Workers', '#extendable-event', 'ExtendableEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utiliser les Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Un exemple de base pour un service worker</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Peut-on utiliser les service workers ?</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a></li>
 <li><a href="/fr/docs/Web/Guide/Performance/Using_web_workers">Utiliser les web workers</a></li>
</ul>
