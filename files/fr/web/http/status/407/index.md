---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/407
---
<div>{{HTTPSidebar}}</div>

<p>Le code de réponse d'erreur HTTP <strong><code>407 Proxy Authentication Required </code></strong> indique que la requête n'a pas été appliquée à cause d'un manque d'authentification pour un  {{Glossary("proxy")}} situé entre le navigateur et le serveur qui peut accéder à la ressource demandée.</p>

<p>Ce code de statut est envoyé avec l'en-tête {{HTTPHeader("Proxy-Authenticate")}} qui contient les informations décrivant la façon de s'authentifier correctement.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">407 Proxy Authentication Required </pre>

<h2 id="Exemple_de_réponse">Exemple de réponse</h2>

<pre>HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7235", "407 Proxy Authentication Required" , "3.2")}}</td>
   <td>HTTP/1.1: Authentication</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/status", "407")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTTP/Authentication">La gestion de l'authentification en HTTP</a></li>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}</li>
</ul>
