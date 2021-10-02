---
title: 'WebSocket : évènement close'
slug: Web/API/WebSocket/close_event
browser-compat: api.WebSocket.close_event
translation_of: Web/API/WebSocket/close_event
---
<div>{{APIRef}}</div>

<p>L'évènement <code>close</code> est déclenché lorsqu'une connexion avec une <code>WebSocket</code> est fermée.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bouillonne/Remonte</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td><a href="/fr/docs/Web/API/CloseEvent"><code>CloseEvent</code></a></td>
  </tr>
  <tr>
   <th scope="row">Propriété de gestionnaire d'évènement correspondante</th>
   <td><a href="/fr/docs/Web/API/WebSocket/onclose"><code>onclose</code></a></td>
  </tr>
 </tbody>
</table>

<h2 id="examples">Exemples</h2>

<p>On peut vouloir savoir lorsque la connexion a été fermée afin de mettre à jour l'interface utilisateur ou, éventuellement, pour sauvegarder des données à propos de la connexion. Soit une variable <code>socketExemple</code> qui fait référence à une connexion WebSocket ouverte, le fragment de code suivant gère la situation où la socket a été fermée :</p>

<pre class="brush: js">socketExemple.addEventListener('close', (event) =&gt; {
  console.log('La connexion a été fermée avec succès.');
});</pre>

<p>On peut effectuer les mêmes actions avec la propriété de gestion d'évènement correspondante :</p>

<pre class="brush: js">socketExemple.onclose = function (event) {
  console.log('La connexion a été fermée avec succès.');
};</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="Voir aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/WebSocket/error_event">WebSocket : évènement <code>error</code></a></li>
 <li><a href="/fr/docs/Web/API/WebSocket/message_event">WebSocket : évènement <code>message</code></a></li>
 <li><a href="/fr/docs/Web/API/WebSocket/open_event">WebSocket : évènement <code>open</code></a></li>
 <li><a href="/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications">Écrire des applications clientes WebSocket</a></li>
</ul>
