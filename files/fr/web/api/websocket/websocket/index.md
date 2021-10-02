---
title: WebSocket()
slug: Web/API/WebSocket/WebSocket
browser-compat: api.WebSocket.WebSocket
---
<p>{{APIRef("Web Sockets API")}}</p>

<p>Le constructeur <code><strong>WebSocket()</strong></code> renvoie un nouvel objet <a href="/fr/docs/Web/API/WebSocket"><code>WebSocket</code></a>.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
var <em>aWebSocket</em> = new WebSocket(<em>url</em> [, protocols]);
</pre>

<h3 id="parameters">Paramètres</h3>

<dl>
  <dt><code>url</code></dt>
  <dd>L'URL à laquelle se connecter. Cela devrait être l'URL à laquelle le serveur WebSocket répondra.</dd>
  <dt><code>protocols</code> {{optional_inline}}</dt>
  <dd>Une valeur qui est une chaîne de caractères représentant un seul protocole ou un tableau de chaînes de caractères représentant une liste de protocoles. Ces chaînes de caractères indiquent des sous-protocoles : un serveur donné pourra implémenter différents sous-protocoles WebSocket (on peut vouloir qu'un serveur soit capable de gérér différents types d'interaction selon le <code>protocol</code> indiqué). Si cette valeur est absence, c'est un tableau vide qui est utilisé par défaut : <code>[]</code>.</dd>
</dl>

<h3 id="exceptions_thrown">Exceptions levées</h3>

<dl>
  <dt><code>SECURITY_ERR</code></dt>
  <dd>Le port ciblé par la tentative de connexion est bloqué.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError">SyntaxError</a></dt>
  <dd>L'URL est invalide.</dd>
</dl>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>
