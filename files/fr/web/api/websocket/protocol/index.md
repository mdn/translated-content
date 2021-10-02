---
title: WebSocket.protocol
slug: Web/API/WebSocket/protocol
browser-compat: api.WebSocket.protocol
---
<p>{{APIRef("Web Sockets API")}}</p>

<p>La propriété en lecture seule <strong><code>WebSocket.protocol</code></strong> renvoie le nom du sous protocole sélectionné par le serveur. Cette valeur sera l'une des chaînes de caractères du paramètre <code>protocols</code> utilisé lors de la création de l'objet <a href="/fr/docs/Web/API/WebSocket"><code>WebSocket</code></a> ou la chaîne vide si aucune connexion n'est établie.</p>

<h2 id="syntax">Syntax</h2>

<pre class="brush: js">
var protocol = uneWebSocket.protocol;
</pre>

<h2 id="value">Valeur</h2>

<p>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>
