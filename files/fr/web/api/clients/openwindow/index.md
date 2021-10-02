---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
translation_of: Web/API/Clients/openWindow
---
<p>{{SeeCompatTable}}{{APIRef("Service Workers API")}}</p>

<p>La méthode <strong><code>openWindow()</code></strong> de l'interface {{domxref("Clients")}} crée un nouveau niveau de contexte de navigation et charge une URL donnée. Si le script d'origine n'a pas la permission d'ouvrir une popup,   <strong><code>openWindow()</code></strong> lèvera une InvalidAccessError.</p>

<p>Dans Firefox, une méthode est authorisée d'ouvrir une popup seulement lorsqu'elle est appelée à la suite d'un click sur une notification.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">ServiceWorkerClients.openWindow(url).then(function(WindowClient) {
  // Faire quelque chose avec le WindowClient
});</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>url</code></dt>
 <dd>Une {{domxref("USVString")}} représentant l'URL que le client veut ouvrir dans une nouvelle fenêtre. Généralement, cette valeur doit être une URL de la même  origine que le script d'origine.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une {{jsxref("Promise")}} qui résoud un objet {{domxref("WindowClient")}} si l'URL est de la même origine que le service worker, et {{Glossary("null", "null value")}} sinon.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Quand l'utilisateur click sur une notification, focus sur la fenêtre si elle existe,
// ou ouvre en une autre.
onotificationclick = function(event) {
  var found = false;
  clients.matchAll().then(function(clients) {
    for (i = 0; i &lt; clients.length; i++) {
      if (clients[i].url === event.data.url) {
        // La fenêtre existe, focus dessus.
        found = true;
        clients[i].focus();
        break;
      }
    }
    if (!found) {
      // Crée une nouvelle fenêtre
      clients.openWindow(event.data.url).then(function(windowClient) {
        // Faire quelque chose avec le WindowClient
      });
    }
  });
};
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
   <td>{{SpecName('Service Workers', '#clients', 'Clients')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Clients.openWindow")}}</p>
