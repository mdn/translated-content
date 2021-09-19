---
title: FetchEvent
slug: Web/API/FetchEvent
translation_of: Web/API/FetchEvent
---
<p>{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}</p>

<p>Le paramètre passé au gestionnaire {{domxref("ServiceWorkerGlobalScope.onfetch")}}, <code>FetchEvent</code> représente une action de récupération qui est délivrée sur la {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}. Il contient des informations relatives à la requête et la réponse associée, et fourni la méthode {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} , qui permet de renvoyer une réponse arbitraire à la page controlée.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("FetchEvent.FetchEvent()")}}</dt>
 <dd>Crée un nouvel objet <code>FetchEvent</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite de son ancêtre, {{domxref("Event")}}</em>.</p>

<dl>
 <dt>{{domxref("FetchEvent.isReload")}} {{readonlyInline}}</dt>
 <dd>Retourne un {{jsxref("Boolean")}} qui est à <code>true</code> si l'évènement a été délivré avec l'intention de recharger la page, ou <code>false</code> sinon. Par exemple, cliquer sur le bouton recharger du navigateur est considéré comme une intention de recharger la page, tandis que cliquer sur un lien ou sur le bouton précédent du navigateur n'est pas considéré comme tel.</dd>
 <dt>{{domxref("FetchEvent.request")}} {{readonlyInline}}</dt>
 <dd>Retourne la {{domxref("Request")}} qui a déclenché l'évènement.</dd>
 <dt>{{domxref("FetchEvent.clientId")}} {{readonlyInline}}</dt>
 <dd>Retourne l'id du {{domxref("Client")}} controlé par le service worker en cours.</dd>
</dl>

<h3 id="Propriétés_dépréciées">Propriétés dépréciées</h3>

<dl>
 <dt>{{domxref("FetchEvent.client")}} {{readonlyInline}}</dt>
 <dd>Retourne le {{domxref("Client")}} controlé par le service worker en cours.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite de son parent, </em><em>{{domxref("ExtendableEvent")}}</em>.</p>

<dl>
 <dt>{{domxref("FetchEvent.respondWith()")}}</dt>
 <dd>Promesse qui est résolue en retournant une {{domxref("Response")}} ou une <a href="http://fetch.spec.whatwg.org/#concept-network-error">erreur réseau</a>  à <code><a href="http://fetch.spec.whatwg.org/#concept-fetch">Fetch</a></code>.</dd>
 <dt>{{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}</dt>
 <dd>
 <p>Etend la durée de vie de l'évènement. Cette méthode est destinée à être appelée dans l'{{event("Event_handlers", "event handler")}} {{event("install")}} pour le worker {{domxref("ServiceWorkerRegistration.installing", "installing")}}, et dans l'{{event("Event_handlers", "event handler")}} {{event("active")}} pour le worker {{domxref("ServiceWorkerRegistration.active", "active")}}.</p>
 </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Ce extrait de code provient de l'exemple <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js">Service Worker Fetch</a> (<a href="https://googlechrome.github.io/samples/service-worker/prefetch/">lancer l'exemple dans le navigateur</a>). Dans une partie antérieure du code,  un {{domxref("InstallEvent")}} contrôle la mise en cache de plusieurs ressources. Le gestionnaire {{domxref("ServiceWorkerGlobalScope.onfetch")}} attends ensuite l'évènement {{event("fetch")}} . Une fois déclenché, {{domxref("FetchEvent.respondWith()")}} retourne une promesse à la page contrôlée. Cette promesse est résolue avec comme valeur de retour la première requête d'URL qui correspond dans l'objet {{domxref("Cache")}}. Si aucune correspondance n'est trouvée (i.e. la ressource n'a pas été mise en cache pendant la phase d'installation), le code va récupérer une réponse depuis le réseau.</p>

<p>Le code gère aussi les exceptions émises depuis l'opération {{domxref("ServiceWorkerGlobalScope.fetch()")}}. A noter que qu'une réponse d'erreur HTTP (e.g., 404) ne déclenche pas d'exception. Elle retourne un objet de réponse normal avec le code d'erreur approprié.</p>

<pre class="brush: js">self.addEventListener('fetch', function(event) {
  console.log('Gestion de l\'évènement de fetch pour', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Réponse trouvée en cache:', response);

        return response;
      }
      console.log('Pas de réponse trouvée en cache. Sur le point de la récupérer via le réseau...');

      return fetch(event.request).then(function(response) {
        console.log('La réponse du réseau est:', response);

        return response;
      }).catch(function(error) {
        console.error('Récupération échouée:', error);

        throw error;
      });
    })
  );
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#fetch-event-section', 'FetchEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.FetchEvent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a></li>
</ul>
