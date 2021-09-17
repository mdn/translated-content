---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Interface
  - Reference
  - Service Workers
translation_of: Web/API/ExtendableMessageEvent
---
<div>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</div>

<div> </div>

<p>L'interface <strong><code>ExtendableMessageEvent</code></strong> de {{domxref("ServiceWorker_API", "ServiceWorker API")}} représentes un objet d'évenement qu'un évènement {{event("message_(ServiceWorker)","message")}} lance pour un service worker (quand un canal de message est reçu sur le {{domxref("ServiceWorkerGlobalScope")}} depuis un autre context) — étends la durée de vie de ces évènements.</p>

<p>Cette interface hérite de l'interface {{domxref("ExtendableEvent")}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("ExtendableMessageEvent.ExtendableMessageEvent()")}}</dt>
 <dd>Crée une nouvelle instance de l'objet <code>ExtendableMessageEvent</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de son parent, </em><em>{{domxref("ExtendableEvent")}}</em>.</p>

<dl>
 <dt>{{domxref("ExtendableMessageEvent.data")}} {{readonlyinline}}</dt>
 <dd>Retourne les données de l'évenements. Il peut être de n'importe quel type.</dd>
 <dt>{{domxref("ExtendableMessageEvent.origin")}} {{readonlyinline}}</dt>
 <dd>Retourne l'origine du {{domxref("ServiceWorkerClient")}} qui envoie le message.</dd>
 <dt>{{domxref("ExtendableMessageEvent.lastEventId")}} {{readonlyinline}}</dt>
 <dd>Représente, dans un <a href="en-US/docs/Server-sent_events/Using_server-sent_events">server-sent events</a>, le dernier ID de l'évenement source.</dd>
 <dt>{{domxref("ExtendableMessageEvent.source")}} {{readonlyinline}}</dt>
 <dd>Retourne une référence vers le service worker qui envoie le message.</dd>
 <dt>{{domxref("ExtendableMessageEvent.ports")}} {{readonlyinline}}</dt>
 <dd>Retourne un tableau contenant l'objet {{domxref("MessagePort")}} représentant les ports associés au canal de messagerie.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite des méthodesde son parent, {{domxref("ExtendableEvent")}}</em>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code suivant est utilisé dans un service worker pour répondre à un message push en envoyant les données reçues via  {{domxref("PushMessageData")}} au contexte principale via un <a href="/en-US/docs/Web/API/Channel_Messaging_API">channel message</a>, l'objet d'évènement du <code>onmessage</code> sera un <code>ExtendableMessageEvent</code>.</p>

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
  console.log(e);
  port = e.ports[0];
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaireaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#extendablemessage-event-interface', 'ExtendableMessageEvent')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilités_des_navigateurs">Compatibilités des navigateurs</h2>

<p>{{Compat("api.ExtendableMessageEvent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Utiliser les Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Exemple simple de service workers</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Les serviceWorker sont-ils prêts?</a></li>
 <li><a href="/en-US/docs/Web/API/Channel_Messaging_API">Cannal de Messagerie</a></li>
</ul>
