---
title: WindowClient
slug: Web/API/WindowClient
tags:
  - API
  - Client
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
translation_of: Web/API/WindowClient
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>L'interface <code>WindowClient</code> de l'<a href="/en-US/docs/Web/API/ServiceWorker_API">API ServiceWorker</a> représente la portée d'un client service worker lorsque celui-ci existe en tant que document dans un contexte navigateur, controlé par un worker actif. Le client sélectionne et utilise un service worker pour son propre chargement et celui de ses sous-ressources.</p>

<h2 id="Méthodes">Méthodes</h2>

<p><em><code>WindowClient</code> hérite certaines méthodes de son parent, {{domxref("Client")}}.</em></p>

<dl>
 <dt>{{domxref("WindowClient.focus()")}}</dt>
 <dd>Assigne le focus au client en cours.</dd>
 <dt>{{domxref("WindowClient.navigate()")}}</dt>
 <dd>Charge l'url spécifiée dans la page en cours.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em><code>WindowClient</code> hérite certaines propriétés de son parent, {{domxref("Client")}}.</em></p>

<dl>
 <dt>{{domxref("WindowClient.focused")}} {{readonlyInline}}</dt>
 <dd>Un booléen qui indique si oui ou non le client en cours est focus.</dd>
 <dt>{{domxref("WindowClient.visibilityState")}} {{readonlyInline}}</dt>
 <dd>Indique la visibilité du client en cours. Peut prendre les valeures <code>hidden</code>, <code>visible</code>, <code>prerender</code>, ou <code>unloaded</code>.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // Vérifie si le client en cours est ouvert et
  // le focus le cas échéant
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
});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#window-client-interface', 'WindowClient')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WindowClient")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers">Using Service Workers</a></li>
 <li><a href="https://github.com/mdn/sw-test">Service workers basic code example</a></li>
 <li><a href="https://jakearchibald.github.io/isserviceworkerready/">Is ServiceWorker ready?</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a></li>
 <li><a href="/en-US/docs/Web/Guide/Performance/Using_web_workers">Using web workers</a></li>
 <li><a href="/en-US/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a></li>
</ul>
