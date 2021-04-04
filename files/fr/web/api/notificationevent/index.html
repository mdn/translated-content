---
title: NotificationEvent
slug: Web/API/NotificationEvent
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - ServiceWorker
translation_of: Web/API/NotificationEvent
---
<div>{{APIRef("Service Workers API")}}{{SeeCompatTable}}</div>

<p>L'interface <strong><code>NotificationEvent</code></strong> représente un évènement de clic pour une notification et qui est dispatché vers le {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}.</p>

<p>Cette interface hérite de l'interface {{domxref("ExtendableEvent")}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("NotificationEvent.NotificationEvent()")}}</dt>
 <dd>Cette méthode permet de créer un nouvel objet <code>NotificationEvent</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cet objet hérite de propriétés grâce à son ancêtre : {{domxref("Event")}}</em>.</p>

<dl>
 <dt>{{domxref("NotificationEvent.notification")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie un objet {{domxref("Notification")}} représentant la notification sur laquelle on a cliqué pour déclencher l'évènement.</dd>
 <dt>{{domxref("NotificationEvent.action")}} {{readonlyinline}}</dt>
 <dd>Cette propriété renvoie une chaîne de caractères identifiant le bouton de la notification sur lequel l'utilisateur a cliqué. Cette valeur sera {{jsxref("undefined")}} si l'utilisateur a cliqué autre part que sur le bouton pour la notification ou si la notification ne possède pas de bouton.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Cet objet hérite de méthodes grâce à son parent </em><em>{{domxref("ExtendableEvent")}}</em>.</p>

<dl>
 <dt>{{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}</dt>
 <dd>
 <p>Cette méthode allonge la durée de vie de l'évènement. Elle est conçue pour être appelée dans le gestionnaire d'évènement {{event("install")}} lors de l'installation (cf. {{domxref("ServiceWorkerRegistration.installing")}}) du <em>worker</em> et dans le gestionnaire d'évènement {{event("active")}} pour le <em>worker</em> actif (cf. {{domxref("ServiceWorkerRegistration.active")}}).</p>
 </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('Au clic sur la notification : ', event.notification.tag);
  event.notification.close();

  // On regarde ici si elle est déjà ouverte
  // et si le focus est dessus
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i &lt; clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' &amp;&amp; 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#notificationevent','NotificationEvent')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Note :</strong> Cette interface est définie au sein de <a href="/fr/docs/Web/API/Notifications_API">l'API Notifications</a>, mais on y accède via {{domxref("ServiceWorkerGlobalScope")}}.</p>
</div>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.NotificationEvent")}}</p>
