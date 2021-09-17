---
title: 403 Forbidden
slug: Web/HTTP/Status/403
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/403
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut d'erreur de réponse HTTP <strong><code>403 Forbidden</code></strong> indique qu'un serveur comprend la requête mais refuse de l'autoriser.</p>

<p>Ce statut est similaire au statut {{HTTPStatus("401")}}, mais dans ce cas, la ré-authentification ne changera rien. L'accès est définitivement interdit et est lié à la logique de l'application, par exemple manque d'une permission d'accès à une ressource.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">403 Forbidden</pre>

<h2 id="Exemple_de_réponse">Exemple de réponse</h2>

<pre>HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "403 Forbidden" , "6.5.3")}}</td>
   <td>HTTP/1.1: Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/status", "403")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPStatus("401")}}</li>
</ul>
