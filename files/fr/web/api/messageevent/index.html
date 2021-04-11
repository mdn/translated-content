---
title: MessageEvent
slug: Web/API/MessageEvent
tags:
  - API
  - Channels
  - Interface
  - Reference
  - WebSockets
  - Window
  - Workers
  - messaging
translation_of: Web/API/MessageEvent
---
<div>{{APIRef("HTML DOM")}}</div>

<p>L'interface <code><strong>MessageEvent</strong></code> représente un message reçu par un objet cible.</p>

<p>Il est utilisé pour représenter les messages en :</p>

<ul>
  <li><a href="/fr/docs/Web/API/Server-sent_events">Événements envoyés par le serveur</a> (voir {{domxref("EventSource.onmessage")}}).</li>
  <li><a href="/fr/docs/Web/API/WebSockets_API">Sockets Web</a> (voir la propriété <code>onmessage</code> de l'interface <a href="/fr/docs/Web/API/WebSocket">WebSocket</a>).</li>
  <li>Messagerie inter-documents (voir {{domxref("Window.postMessage()")}} et {{domxref("Window.onmessage")}}).</li>
  <li><a href="/fr/docs/Web/API/Channel_Messaging_API">Messagerie de canal</a> (voir {{domxref("MessagePort.postMessage()")}} et {{domxref("MessagePort.onmessage")}}).</li>
  <li>Messagerie inter-worker/document (voir les deux entrées ci-dessus, mais aussi {{domxref("Worker.postMessage()")}}, {{domxref("Worker.onmessage")}}, {{domxref("ServiceWorkerGlobalScope.onmessage")}}, etc.)</li>
  <li><a href="/fr/docs/Web/API/Broadcast_Channel_API">Canaux de diffusion</a> (voir {{domxref("Broadcastchannel.postMessage()")}}) et {{domxref("BroadcastChannel.onmessage")}}).</li>
  <li>Les canaux de données WebRTC (voir {{domxref("RTCDataChannel.onmessage")}}).</li>
</ul>

<p>L'action déclenchée par cet événement est définie dans une fonction définie comme gestionnaire d'événement pour l'événement {{event("message")}} correspondant (par exemple, en utilisant un gestionnaire <code>onmessage</code> comme indiqué ci-dessus).</p>

<p>{{AvailableInWorkers}}</p>

<p>{{InheritanceDiagram(600, 80)}}</p>

<h2 id="Constructor">Constructeur</h2>

<dl>
  <dt>{{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}</dt>
  <dd>Crée un nouveau <code>MessageEvent</code>.</dd>
</dl>

<h2 id="Properties">Propriétés</h2>

<p><em>Cette interface hérite également des propriétés de son parent, {{domxref("Event")}}.</em></p>

<dl>
  <dt>{{domxref("MessageEvent.data")}} {{readonlyInline}}</dt>
  <dd>Les données envoyées par l'émetteur du message.</dd>
  <dt>{{domxref("MessageEvent.origin")}} {{readonlyInline}}</dt>
  <dd>Une chaîne de caractères {{domxref("USVString")}} représentant l'origine de l'émetteur du message.</dd>
  <dt>{{domxref("MessageEvent.lastEventId")}} {{readonlyInline}}</dt>
  <dd>Une chaîne de caractères {{domxref("DOMString")}} représentant un identifiant unique pour l'événement.</dd>
  <dt>{{domxref("MessageEvent.source")}} {{readonlyInline}}</dt>
  <dd>Un <code>MessageEventSource</code> (qui peut être un objet {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, ou {{domxref("ServiceWorker")}}) représentant l'émetteur du message.</dd>
  <dt>{{domxref("MessageEvent.ports")}} {{readonlyInline}}</dt>
  <dd>Un tableau d'objets {{domxref("MessagePort")}} représentant les ports associés au canal par lequel le message est envoyé (le cas échéant, par exemple dans la messagerie de canal ou lors de l'envoi d'un message à un travailleur partagé).</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p><em>Cette interface hérite également des méthodes de son parent, {{domxref("Event")}}.</em></p>

<dl>
  <dt>{{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}</dt>
  <dd>Initialise un événement de message. <strong>Ne plus utiliser ceci - utilisez le constructeur {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} à la place.</strong></dd>
</dl>

<h2 id="Examples">Exemples</h2>

<p>Dans notre exemple de <a href="https://github.com/mdn/simple-shared-worker">travailleur partagé basique</a> (<a href="https://mdn.github.io/simple-shared-worker/">exécuter le travailleur partagé</a>), nous avons deux pages HTML, dont chacune utilise un peu de JavaScript pour effectuer un calcul simple. Les différents scripts utilisent le même fichier worker pour effectuer le calcul - ils peuvent tous deux y accéder, même si leurs pages s'exécutent dans des fenêtres différentes.</p>

<p>L'extrait de code suivant montre la création d'un objet {{domxref("SharedWorker")}} à l'aide du constructeur {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}. Les deux scripts contiennent ceci :</p>

<pre class="brush: js">var myWorker = new SharedWorker('worker.js');</pre>

<p>Les deux scripts accèdent ensuite au worker par le biais d'un objet {{domxref("MessagePort")}} créé à l'aide de la propriété {{domxref("SharedWorker.port")}}. Si l'événement onmessage est attaché à l'aide de addEventListener, le port est démarré manuellement à l'aide de sa méthode <code>start()</code> :</p>

<pre class="brush: js">myWorker.port.start();</pre>

<p>Lorsque le port est démarré, les deux scripts postent des messages au worker et traitent les messages envoyés par celui-ci en utilisant respectivement <code>port.postMessage()</code> et <code>port.onmessage</code> :</p>

<pre class="brush: js">first.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posté au worker');
}

second.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posté au worker');
}

myWorker.port.onmessage = function(e) {
  result1.textContent = e.data;
  console.log('Message reçu du worker');
}</pre>

<p>À l'intérieur du worker, nous utilisons le gestionnaire {{domxref("SharedWorkerGlobalScope.onconnect")}} pour nous connecter au même port que celui mentionné ci-dessus. Les ports associés à ce worker sont accessibles dans la propriété <code>ports</code> de l'événement {{event("connect")}} - nous utilisons ensuite {{domxref("MessagePort")}} La méthode <code>start()</code> pour démarrer le port, et le handler <code>onmessage</code> pour gérer les messages envoyés par les processus principaux.</p>

<pre class="brush: js">onconnect = function(e) {
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  });

  port.start(); // Requis si vous utilisez addEventListener. Sinon, il est appelé implicitement par le paramètre onmessage.
}</pre>

<h2 id="Specifications">Spécifications</h2>

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
      <td>{{SpecName('HTML WHATWG', "#messageevent", "MessageEvent")}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.MessageEvent")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>{{domxref("ExtendableMessageEvent")}} — similaire à cette interface mais utilisée dans les interfaces qui doivent donner plus de flexibilité aux auteurs.</li>
</ul>
