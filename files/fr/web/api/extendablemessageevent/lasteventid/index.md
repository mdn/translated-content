---
title: ExtendableMessageEvent.lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Property
  - Reference
  - Service Workers
  - lastEventID
translation_of: Web/API/ExtendableMessageEvent/lastEventId
---
<p>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</p>

<p>La propriété en lecture seule <strong><code>lastEventID</code></strong> de l'interface {{domxref("ExtendableMessageEvent")}} représente, dans <a href="/en-US/docs/Web/API/en-US/docs/Server-sent_events/Using_server-sent_events">les évenements envoyés par lle serveur</a>, le dernier ID de l'évenement source.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var myLastEventId = ExtendableMessageEventInstance.lastEventId;</pre>

<h3 id="Value">Value</h3>

<p>Une {{domxref("DOMString")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code suivant est utilisé, dans un service worker, pour répondre à un message push en envoyant les données reçues par le  {{domxref("PushMessageData")}} au contexte principale, via le <a href="/en-US/docs/Web/API/Channel_Messaging_API">canal de messages</a>. L'objet événement de <code>onmessage</code> sera un <code>ExtendableMessageEvent.</code></p>

<pre class="brush: js">var port;

self.addEventListener('push', function(e) {
  var obj = e.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

self.onmessage = function(e) {
  console.log(e.lastEventId);
  port = e.ports[0];
}
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
   <td>{{SpecName('Service Workers', '#extendablemessage-event-lasteventid-attribute', 'ExtendableMessageEvent.lastEventId')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_des_navigateurs">Compatibilités des navigateurs</h2>

<p>{{Compat("api.ExtendableMessageEvent.lastEventId")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utilisation des Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Exemple simple des service workers</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Est-ce que les service workers sont prêts ?</a></li>
 <li><a href="/en-US/docs/Web/API/Channel_Messaging_API">Canal de messages</a></li>
</ul>
