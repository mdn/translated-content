---
title: Serveur
slug: Web/HTTP/Headers/Server
tags:
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Server
original_slug: Web/HTTP/Headers/Serveur
---
<div>{{ HTTPSidebar }}</div>

<div> </div>

<p>Le paramètre d'entête <code><strong>Server</strong></code> contient des informations à propos du système (ou sous-système) en place sur le serveur qui s'occupe de la requête.</p>

<p>Il est préférable d'éviter les valeurs excessivement longues et/ou détaillées : elles peuvent révéler des détails internes qui pourraient rendre (un peu) plus facile une attaque et l'exploitation d'une éventuelle faille de sécurité.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'entête</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Server: &lt;valeur&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;valeur&gt;</dt>
 <dd>Le nom du système (ou sous-système) qui gère les requêtes.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>Server: Apache/2.4.1 (Unix)</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Server", "7.4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Navigateurs_compatibles">Navigateurs compatibles</h2>

<p>{{Compat("http.headers.Server")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{HTTPHeader("Allow")}}</li>
</ul>
