---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
tags:
  - CORS
  - HTTP
  - entête
  - pré-vérification
translation_of: Web/HTTP/Headers/Access-Control-Request-Headers
---
<div>{{HTTPSidebar}}</div>

<p>L'entête <strong><code>Access-Control-Request-Headers</code></strong> est utilisé quand une requête de pré-vérification ({{glossary("preflight request")}}) et faite vers le serveur pour savoir les entêtes qui seront utilisés après la pré-vérification.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>yes</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Access-Control-Request-Headers: &lt;header-name&gt;, &lt;header-name&gt;, ...
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;header-name&gt;</dt>
 <dd>Une liste <a href="/en-US/docs/Web/HTTP/Headers">d'entête HTTP</a> séparé par des virgules qui sont inclus dans la requête.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>Access-Control-Request-Headers: X-PINGOTHER, Content-Type</pre>

<p>Dans cet exemple le serveur en réponse à la demande de pré-vérification indiquer au demandeur de la pré-vérification que la requête suivante sera accepté si elle contient <em>X-PINGOTHER</em> ou <em>Content-type</em>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#http-access-control-request-headers', 'Access-Control-Request-Headers')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>

<p>{{Compat("http/headers/access-control-request-headers")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Request-Method")}}</li>
</ul>
