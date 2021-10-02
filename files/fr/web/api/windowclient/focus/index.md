---
title: WindowClient.focus()
slug: Web/API/WindowClient/focus
tags:
  - API
  - Client
  - Experimental
  - Focus
  - Method
  - Reference
  - Service Workers
  - WindowClient
translation_of: Web/API/WindowClient/focus
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>La méthode <strong><code>focus()</code></strong> de l'interface {{domxref("WindowClient")}} focus le client en cours et retourne une {{jsxref("Promise")}} qui est résolue vers le {{domxref("WindowClient")}} existant.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Client.focus().then(function(WindowClient) {
  // utilisez le WindowClient une fois qu'il est focus
});</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Nil.</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une {{jsxref("Promise")}} qui est résolue vers le {{domxref("WindowClient")}} existant.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

<code>  // Vérifie si le client en cours est ouvert et
  // le focus le cas échéant</code>
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
   <td>{{SpecName('Service Workers', '#client-focus-method', 'focus()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale..</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WindowClient.focus")}}</p>
