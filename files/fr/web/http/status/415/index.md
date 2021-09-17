---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/415
---
<div>{{HTTPSidebar}}</div>

<p>Le code de réponse d'erreur HTTP <code><strong>415 Unsupported Media Type</strong></code> indique que le serveur refuse la requête car le format de la charge utile (<em>payload</em>) n'est pas pris en charge.</p>

<p>Le problème de format peut être causé par les valeurs des en-têtes {{HTTPHeader("Content-Type")}} ou {{HTTPHeader("Content-Encoding")}} dans la requête ou, plus directement, à cause de l'inspection des données.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">415 Unsupported Media Type</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Content-Encoding")}}</li>
 <li>{{HTTPHeader("Accept")}}</li>
</ul>
