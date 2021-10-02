---
title: Client
slug: Web/API/Client
tags:
  - API
  - Client
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorkerClient
  - ServiceWorkers
translation_of: Web/API/Client
---
<p>{{APIRef("Service Workers API")}}</p>

<p>L'interface <code>Client</code> de l'<a href="/en-US/docs/Web/API/ServiceWorker_API">API ServiceWorker</a> représente la portée d'exécution d'un {{domxref("Worker")}} ou {{domxref("SharedWorker")}}. Les clients {{domxref("Window")}} sont représentés par le plus spécifique {{domxref("WindowClient")}}. Vous pouvez obtenir les objets <code>Client</code>/<code>WindowClient</code> via les méthodes {{domxref("Clients.matchAll","Clients.matchAll()")}} et {{domxref("Clients.get","Clients.get()")}}.</p>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("Client.postMessage()")}}</dt>
 <dd>Permet à un service worker d'envoyer un message au <code><a href="/en-US/docs/Web/API/ServiceWorkerClient">ServiceWorkerClient</a></code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("Client.id")}} {{readonlyInline}}</dt>
 <dd>Retourne l'identifiant universellement unique de l'objet <code>Client</code>.</dd>
 <dt>{{domxref("Client.type")}} {{readonlyInline}}</dt>
 <dd>Indique le type de contexte de navigation du client courant. Cette valeur peut être <code>auxiliary</code>, <code>top-level</code>, <code>nested</code>, or <code>none</code>.</dd>
 <dt>{{domxref("Client.url")}} {{readonlyInline}}</dt>
 <dd>Retourne l'URL du client service worker courant.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Ce code est basé sur un fragment pris d'un <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/post-message/index.html">exemple d'envoi de message</a> (voir <a href="https://googlechrome.github.io/samples/service-worker/post-message/">l'exemple en ligne</a>.) Ce code envoie une référence de message à laquelle le service worker peut répondre via {{domxref("Client.postMessage()")}}.</p>

<p>Ce message est contenu dans une promesse qui est résolue si la réponse ne contient pas d'erreur et est rejetée avec une erreur.</p>

<pre class="brush: js">// client service worker (par exemple un document)
function sendMessage(message) {
  return new Promise(function(resolve, reject) {
    // Notez que c'est la version du ServiceWorker.postMessage
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = function(e) {
      resolve(e.data);
    };
  });
}

// Contrôle du service worker
self.addEventListener("message", function(e) {
  // e.source est un object client
  e.source.postMessage("Hello! Your message was: " + e.data);
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#client', 'Client')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("api.Client")}}</div>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utiliser les Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Exemple simple de service workers</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Est ce que le ServiceWorker est prêt ?</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promesses</a></li>
 <li><a href="/en-US/docs/Web/Guide/Performance/Using_web_workers">Utilisation performante des web workers</a></li>
 <li><a href="/en-US/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a></li>
</ul>
