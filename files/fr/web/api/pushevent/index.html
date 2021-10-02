---
title: PushEvent
slug: Web/API/PushEvent
tags:
  - API
  - ExtendableEvent
  - Interface
  - Push
  - Push API
  - Reference
  - Service Workers
  - Workers
  - hors-ligne
translation_of: Web/API/PushEvent
---
<p>{{APIRef("Push API")}}{{SeeCompatTable()}}</p>

<p>L'interface <strong><code>PushEvent</code></strong> de l'<a href="/en-US/docs/Web/API/Push_API">API Push</a> représente un message Push qui a été reçu. Cet événement est envoyé au <a href="/fr/docs/Web/API/ServiceWorkerGlobalScope">scope global</a> d'un {{domxref("ServiceWorker")}}. Il contient les informations transmises de l'application serveur vers un {{domxref("PushSubscription")}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("PushEvent.PushEvent()")}}</dt>
 <dd>Créer un nouvel objet <code>PushEvent</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite des propriétés de son parent, {{domxref("ExtendableEvent")}}. Propriétés additionnelles:</em></p>

<dl>
 <dt>{{domxref("PushEvent.data")}} {{readonlyinline}}</dt>
 <dd>Retourne une référence à un objet {{domxref("PushMessageData")}} contenant les données transmises au {{domxref("PushSubscription")}}.</dd>
</dl>

<h2>Méthodes</h2>

<p><em>Hérite des méthodes de son parent, {{domxref("ExtendableEvent")}}</em>.</p>

<h2 id="Exemples">Exemples</h2>

<p>L'exemple suivant prends les données du <code>PushEvent</code> et les affiche sur tous les clients du service worker.</p>

<pre class="brush: js">self.addEventListener('push', function(event) {
  if (!(self.Notification &amp;&amp; self.notification.permission === 'granted')) {
    return;
  }

  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  var title = data.title || "Something Has Happened";
  var message = data.message || "Here's something you might want to check out.";
  var icon = "images/new-notification.png";

  var notification = new Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  });
});
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
   <td>{{SpecName('Push API','#the-push-event','PushEvent')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>Définition intiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PushEvent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Push_API/Using_the_Push_API">Utiliser l'API Push</a></li>
 <li><a href="/fr/docs/Web/API/Push_API">API Push</a></li>
 <li><a href="/fr/docs/Web/API/Service_Worker_API">API Service Worker</a></li>
</ul>
