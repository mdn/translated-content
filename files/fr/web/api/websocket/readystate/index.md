---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
browser-compat: api.WebSocket.readyState
---
<p>{{APIRef("Web Sockets API")}}</p>

<p>La propriété en lecture seule <strong><code>WebSocket.readyState</code></strong> renvoie l'état courant de la connexion <a href="/fr/docs/Web/API/WebSocket"><code>WebSocket</code></a>.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
var readyState = uneWebSocket.readyState;
</pre>

<h2 id="value">Valeur</h2>

<p>Cette propriété peut valoir l'une des valeurs de type <code>unsigned short</code> suivantes :</p>

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Valeur</td>
      <td class="header">État</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>0</code></td>
      <td><code>CONNECTING</code></td>
      <td>La socket a été créée. La connexion n'est pas encore ouverte.</td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>OPEN</code></td>
      <td>La connexion est ouverte et prête pour la communication.</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>CLOSING</code></td>
      <td>La connexion est en cours de fermeture.</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>CLOSED</code></td>
      <td>La connexion est fermée ou n'a pas pu être ouverte.</td>
    </tr>
  </tbody>
</table>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>
