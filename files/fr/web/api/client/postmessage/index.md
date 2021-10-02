---
title: Client.postMessage()
slug: Web/API/Client/postMessage
tags:
  - API
  - Client
  - Méthode
  - Reference
  - Service Worker
  - ServiceWorker
  - postMessage
translation_of: Web/API/Client/postMessage
---
<p>{{SeeCompatTable}}{{APIRef("Client")}}</p>

<p>La méthode <code><strong>postMessage() </strong></code>de l'interface {{domxref("Client")}} permet à un service worker client d'envoyer un message à un {{domxref("ServiceWorker")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">Client.postMessage(message[, transfer]);</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Void.</p>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>message</code></dt>
 <dd>Le message à envoyer au service worker.</dd>
 <dt><code>transfer {{optional_inline}}</code></dt>
 <dd>Un objet transferable, comme par exemple une référence à un port.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Ce fragment de code est tiré de l'<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/post-message/index.html">exemple d'envoi de message du service worker</a> exemple d'envoi de message du service worker (voir <a href="https://googlechrome.github.io/samples/service-worker/post-message/">exemple en ligne</a>). Le code envoi un message et transfert le port vers le service worker qui pourra répondre via {{domxref("Client.postMessage()")}}.</p>

<p>Ce message est contenu dans une promesse qui se résolvera si la réponse ne contient pas d'erreur et qui échouera avec l'erreur.</p>

<pre class="brush: js">function sendMessage(message) {
  return new Promise(function(resolve, reject) {
     var messageChannel = new MessageChannel();
     messageChannel.port1.onmessage = function(event) {
       if (event.data.error) {
         reject(event.data.error);
       } else {
         resolve(event.data);
       }
     };
    navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
  });
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
   <td>{{SpecName('Service Workers', '#client-postmessage-method', 'postMessage()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Client.postMessage")}}</p>
