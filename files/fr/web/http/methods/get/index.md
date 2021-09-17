---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - HTTP
  - Reference
  - Request method
translation_of: Web/HTTP/Methods/GET
original_slug: Web/HTTP/Méthode/GET
---
<div>{{HTTPSidebar}}</div>

<p>La <strong>méthode HTTP GET</strong> demande une représentation de la ressource spécifiée. Les requêtes GET doivent uniquement être utilisées afin de récupérer des données.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">La requête a un corps</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Une réponse de succès a un corps</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe","Sûre")}}</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent","Idempotente")}}</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable","Peut être mise en cache")}}</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Autorisée dans les formulaires HTML</th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">GET /index.html
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "GET", "4.3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/methods", "GET")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Range")}}</li>
</ul>
