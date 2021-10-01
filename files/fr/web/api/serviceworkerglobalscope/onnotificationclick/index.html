---
title: ServiceWorkerGlobalScope.onnotificationclick
slug: Web/API/ServiceWorkerGlobalScope/onnotificationclick
tags:
  - API
  - Experimental
  - Interface
  - Propriété
  - Reference
  - ServiceWorkerGlobalScope
  - onnotificationclick
translation_of: Web/API/ServiceWorkerGlobalScope/onnotificationclick
---
<p>{{APIRef("Service Workers API")}}</p>

<p>La propriété <strong><code>ServiceWorkerGlobalScope.onnotificationclick</code></strong> est un gestionnaire d'événements appelé chaque fois que l'événement {{Event("notificationclick")}} est envoyé sur l'objet {{domxref ("ServiceWorkerGlobalScope")}}, c'est-à-dire lorsqu'un utilisateur clique sur une notification affichée générée par {{domxref("ServiceWorkerRegistration.showNotification()")}}.</p>

<p>Les notifications créées sur le thread principal ou dans un worker qui ne sont pas des service worker utilisant le constructeur {{domxref ("Notification.Notification", "Notification()")}} recevront à la place un événement {{Event("click")}} sur l'objet <code>Notification</code> lui-même.</p>

<div class="note">
<p><strong>Note :</strong> Essayer de créer une notification dans le {{domxref ("ServiceWorkerGlobalScope")}} en utilisant le constructeur {{domxref ("Notification.Notification", "Notification()")}} générera une erreur.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... }
ServiceWorkerGlobalScope.onnotificationclick = (NotificationEvent) =&gt; { ... }
</pre>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">self.onnotificationclick = (event) =&gt; {
  console.log('On notification click: ', event.notification.tag)
  event.notification.close()

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then((clientList) =&gt; {
        for (let i = 0; i &lt; clientList.length; i++) {
          const client = clientList[i]
          if (client.url == '/' &amp;&amp; 'focus' in client) return client.focus()
        }
        if (clients.openWindow) return clients.openWindow('/')
      })
  )
}
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
   <td>{{SpecName('Web Notifications','#dom-serviceworkerglobalscope-onnotificationclick','onnotificationclick')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Définition initiale. Cette propriété est spécifiée dans {{domxref ('Notifications_API')}} même si elle fait partie de {{domxref ('ServiceWorkerGlobalScope')}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.ServiceWorkerGlobalScope.onnotificationclick")}}</p>
