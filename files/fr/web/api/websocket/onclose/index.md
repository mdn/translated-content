---
title: WebSocket.onclose
slug: Web/API/WebSocket/onclose
browser-compat: api.WebSocket.onclose
---
<p>{{APIRef("Web Sockets API")}}</p>

<p>La propriété <code><strong>WebSocket.onclose</strong></code> est un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènement</a> invoqué lorsque l'état <a href="/fr/docs/Web/API/WebSocket/readyState"><code>readyState</code></a> de la connexion WebSocket change de valeur pour passer à <a href="/fr/docs/Web/API/WebSocket/readyState"><code>CLOSED</code></a>. Ce gestionnaire est appelé avec un paramètre <a href="/fr/docs/Web/API/CloseEvent"><code>CloseEvent</code></a>.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
unWebSocket.onclose = function(event) {
  console.log("La WebSocket est désormais fermée.");
};</pre>

<h2 id="value">Valeur</h2>

<p>Une fonction <a href="/fr/docs/Web/API/EventListener"><code>EventListener</code></a>.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>
