---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
translation_of: Web/API/ServiceWorkerContainer
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>L’interface <code>ServiceWorkerContainer</code> de l’<a href="/fr/docs/Web/API/ServiceWorker_API">API ServiceWorker</a> fournit un objet représentant le service worker comme une unité globale de l’écosystème réseau, incluant des fonctionnalités pour enregistrer, désenregistrer et mettre à jour des services workers, et accéder à l’état des services workers et de leurs enregistrements.</p>

<p>Parmi le plus important, cette interface expose la méthode {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register(scriptURL, scope[, base])")}} utilisée pour enregistrer les services workers, et la propriété {{domxref("ServiceWorkerContainer.controller")}} utilisée pour déterminer si oui ou non la page courante est activement conrôlée.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}</dt>
 <dd>Retourne un objet {{domxref("ServiceWorker")}} si son état est <code>activated</code> (le même objet retourné par {{domxref("ServiceWorkerRegistration.active")}}). Cette propriété retourne <code>null</code> si la requête est un rechargement forcé (<em>Majuscule</em> + rechargement) ou si il n'y a pas de worker actif.</dd>
</dl>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}</dt>
 <dd>Détermine si oui ou non un service worker est prêt à contrôler la page. Cette propriété retourne une {{jsxref("Promise")}} qui ne sera jamais rejetée, et se résoudra en un {{domxref("ServiceWorkerRegistration")}} avec un worker en état {{domxref("ServiceWorkerRegistration.active")}}.</dd>
</dl>

<h3 id="Gestionnaires_d'événement">Gestionnaires d'événement</h3>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.oncontrollerchange")}}</dt>
 <dd>Un gestionnaire d’événement lancé quand un événement {{Event("controllerchange")}} se produit — quand le {{domxref("ServiceWorkerRegistration")}} associé au document ajoute un nouveau worker en état {{domxref("ServiceWorkerRegistration.active")}}.</dd>
 <dt>{{domxref("ServiceWorkerContainer.onerror")}}</dt>
 <dd>Un gestionnaire d’événement lancé quand un événement {{Event("error")}} se produit dans le service worker associé.</dd>
 <dt>{{domxref("ServiceWorkerContainer.onmessage")}}</dt>
 <dd>Un gestionnaire d’événement lancé quand un événement {{Event("message")}} se produit — quand des messages entrants sont reçus par l’objet {{domxref("ServiceWorkerContainer")}} (e.g. par un appel à {{domxref("MessagePort.postMessage()")}}.)</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} </dt>
 <dd>Crée ou met à jour un {{domxref("ServiceWorkerRegistration")}} pour un <code>scriptURL</code> donné.</dd>
 <dt>{{domxref("ServiceWorkerContainer.getRegistration()")}}</dt>
 <dd>Récupère un objet {{domxref("ServiceWorkerRegistration")}} dont l’URL de la portée correspond à l’URL du document fourni.  Si la méthode ne peut retourner un {{domxref("ServiceWorkerRegistration")}}, elle retourne une <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a>. </dd>
 <dt>{{domxref("ServiceWorkerContainer.getRegistrations()")}}</dt>
 <dd>Retourne tous les  {{domxref("ServiceWorkerRegistration")}} associés à un <code>ServiceWorkerContainer</code> dans un tableau. Si la méthode ne peut retourner les {{domxref("ServiceWorkerRegistration")}}, elle retourne une <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise</code></a>. </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Cet extrait de code provient de <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/fallback-response/index.html#L126">exemple service worker fallback-response</a> (voir <a href="http://googlechrome.github.io/samples/service-worker/fallback-response/">fallback-response live</a>). Le code test si le navigateur supporte les services workers. Alors le code enregistre le service worker et détermine si la page est activement contrôlée par le service worker. Si elle ne l’est pas, il invite l’utilisateur à recharger la page pour permettre au service worker de prendre le contrôle. Ce code indique aussi les échecs d’enregistrement.</p>

<pre class="brush: js">if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(function() {
    if (navigator.serviceWorker.controller) {
      document.querySelector('#status').textContent = 'The service worker is currently handling network operations.';
      showRequestButtons();
    } else {
      document.querySelector('#status').textContent = 'Please reload this page to allow the service worker to handle network operations.';
    }
  }).catch(function(error) {
    document.querySelector('#status').textContent = error;
  });
} else {
  var aElement = document.createElement('a');
  aElement.href = 'http://www.chromium.org/blink/serviceworker/service-worker-faq';
  aElement.textContent = 'unavailable';
  document.querySelector('#status').appendChild(aElement);
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#service-worker-container', 'ServiceWorkerContainer')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.ServiceWorkerContainer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utiliser les Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Service workers : exemple basique</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Le ServiceWorker est-il prêt ?</a></li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/fr/docs/Web/Guide/Performance/Using_web_workers">Utiliser les web workers</a></li>
</ul>
