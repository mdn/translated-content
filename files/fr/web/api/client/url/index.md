---
title: Client.url
slug: Web/API/Client/url
tags:
  - API
  - Client
  - Experimental
  - Property
  - Reference
  - ServiceWorkers
  - URL
translation_of: Web/API/Client/url
---
<div>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</div>

<div>La propriété <code><strong>url</strong></code> (lecture seule) de l'interface {{domxref("Client")}} retourne l'url du service worker client courant.</div>

<div> </div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var clientUrl = Client.url;</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Valeur de type {{domxref("USVString")}}.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('Au click de notification : ', event.notification.tag);
  event.notification.close();

  // Vérification pour savoir si l'évenement est ouvert et
  // se focalise dessus si c'est le cas
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
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#client-url', 'url')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Défintion initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Client.url")}}</p>
