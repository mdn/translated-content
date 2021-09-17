---
title: Allow
slug: Web/HTTP/Headers/Allow
tags:
  - Entête HTTP
  - HTTP
  - Reference
  - entête
translation_of: Web/HTTP/Headers/Allow
---
<div>{{HTTPSidebar}}</div>

<p>L'entête <code><strong>Allow</strong></code> liste les méthodes supportées par une ressource.</p>

<p>Cet entête doit être envoyée si le serveur répond avec un statut {{HTTPStatus("405")}} <code>Method Not Allowed</code> pour indiquer quelles méthodes peuvent être utilisées pour la requête. Une entête <code>Allow</code> vide indique que la ressource n'autorise aucune méthode, ce qui peut erriver temporairement pour une ressource donnée, par exemple.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'entête</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Allow: &lt;methodes-http&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;methodes-http&gt;</dt>
 <dd>La liste des <a href="/en-US/docs/Web/HTTP/Methods">méthodes de requête HTTP</a> autorisées, séparées par des virgules.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>Allow: GET, POST, HEAD</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "Allow", "7.4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPStatus("405")}}</li>
 <li>{{HTTPHeader("Server")}}</li>
</ul>
