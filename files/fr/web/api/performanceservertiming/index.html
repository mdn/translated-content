---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
tags:
  - API
  - Interface
  - Reference
  - Performance Web
  - Resource Timing API
translation_of: Web/API/PerformanceServerTiming
---
<div>{{APIRef("Resource Timing API")}} {{securecontext_header}}</div>

<p>L'interface <strong><code>PerformanceServerTiming</code></strong> présente des métriques de serveur qui sont envoyées avec la réponse dans l'en-tête <a href="/fr/docs/Web/HTTP/Headers/Server-Timing"><code>Server-Timing</code></a> dans l'en-tête HTTP.</p>

<p>Cette interface est limitée à la même origine, mais vous pouvez utiliser l'en-tête <a href="/fr/docs/Web/HTTP/Headers/Timing-Allow-Origin"><code>Timing-Allow-Origin</code></a> pour spécifier les domaines qui sont autorisés à accéder aux paramètres du serveur. Notez que cette interface n'est disponible que dans des contextes sécurisés (HTTPS) dans certains navigateurs.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Properties">Propriétés</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceServerTiming/description"><code>PerformanceServerTiming.description</code></a>{{readonlyInline}}</dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> décrivant la métrique spécifiée par le serveur, ou une chaîne vide.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceServerTiming/duration"><code>PerformanceServerTiming.duration</code></a>{{readonlyInline}}</dt>
  <dd>Un double qui contient la durée de la métrique spécifiée par le serveur, ou la valeur <code>0.0</code>.</dd>
  <dt><a href="/fr/docs/Web/API/PerformanceServerTiming/name"><code>PerformanceServerTiming.name</code></a>{{readonlyInline}}</dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> avec le nom de la métrique spécifiée par le serveur.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceServerTiming/toJSON()"><code>PerformanceServerTiming.toJSON()</code></a></dt>
  <dd>Retourne une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui est la représentation JSON de l'objet <code>PerformanceServerTiming</code>.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>Étant donné un serveur qui envoie l'en-tête <a href="/fr/docs/Web/HTTP/Headers/Server-Timing"><code>Server-Timing</code></a>, par exemple un serveur node.js comme celui-ci :</p>

<pre class="brush: js">const http = require('http');

function requestHandler(request, response) {
  const headers = {
    'Server-Timing': `
      cache;desc="Cache Read";dur=23.2,
      db;dur=53,
      app;dur=47.2
    `.replace(/\n/g, '')
  };
  response.writeHead(200, headers);
  response.write('');
  return setTimeout(_ =&gt; {
    response.end();
  }, 1000)
};

http.createServer(requestHandler).listen(3000).on('error', console.error);</pre>

<p>Les entrées <code>PerformanceServerTiming</code> sont désormais observables depuis JavaScript via la propriété <a href="/fr/docs/Web/API/PerformanceResourceTiming/serverTiming"><code>PerformanceResourceTiming.serverTiming</code></a> :</p>

<pre class="brush: js">let entries = performance.getEntriesByType('resource');
console.log(entries[0].serverTiming);
// 0: PerformanceServerTiming {name: "cache", duration: 23.2, description: "Cache Read"}
// 1: PerformanceServerTiming {name: "db", duration: 53, description: ""}
// 2: PerformanceServerTiming {name: "app", duration: 47.2, description: ""}
</pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Server Timing','#the-performanceservertiming-interface', 'PerformanceServerTiming')}}</td>
      <td>{{Spec2('Server Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceServerTiming")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/HTTP/Headers/Server-Timing"><code>Server-Timing</code></a></li>
  <li><a href="/fr/docs/Web/API/PerformanceResourceTiming/serverTiming"><code>PerformanceResourceTiming.serverTiming</code></a></li>
</ul>
