---
title: 'WebSocket : évènement open'
slug: Web/API/WebSocket/open_event
browser-compat: api.WebSocket.open_event
---
<div>{{APIRef}}</div>

<p>L'évènement <code>open</code> est déclenché lorsqu'une connexion avec une <code>WebSocket</code> est ouverte.</p>

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
   <td><a href="/fr/docs/Web/API/Event"><code>Event</code></a></td>
  </tr>
  <tr>
   <th scope="row">Propriété de gestionnaire d'évènement correspondante</th>
   <td><a href="/fr/docs/Web/API/WebSocket/onopen"><code>onopen</code></a></td>
  </tr>
 </tbody>
</table>

<h2 id="examples">Exemples</h2>

<pre class="brush: js">
// Crée une connexion WebSocket
const socket = new WebSocket('ws://localhost:8080');

// La connexion est ouverte
socket.addEventListener('open', (event) =&gt; {
  socket.send('Coucou serveur !');
});</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/WebSocket/close_event">WebSocket : évènement <code>close</code></a></li>
  <li><a href="/fr/docs/Web/API/WebSocket/error_event">WebSocket : évènement <code>error</code></a></li>
  <li><a href="/fr/docs/Web/API/WebSocket/message_event">WebSocket : évènement <code>message</code></a></li>
  <li><a href="/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications">Écrire des applications clientes WebSocket</a></li>
 </ul>
