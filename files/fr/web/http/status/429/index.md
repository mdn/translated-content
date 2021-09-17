---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/429
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse HTTP <code><strong>429 Too Many Requests</strong></code> indique que l'utilisateur a envoyé trop de requêtes en un temps donné.</p>

<p>Un en-tête {{HTTPHeader("Retry-After")}} peut être inclus dans cette réponse afin d'indiquer le temps à attendre pour effectuer une nouvelle requête.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">429 Too Many Requests</pre>

<h2 id="Exemple">Exemple</h2>

<pre>HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("6585", "429 Too Many Requests" , "4")}}</td>
   <td>Additional HTTP Status Codes</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Retry-After")}}</li>
</ul>
