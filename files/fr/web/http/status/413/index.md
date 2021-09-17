---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/413
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse <code><strong>413 Payload Too Large</strong></code> indique que la taille de l'entité fournie par la requête est supérieure aux limites définies par le serveur. Le serveur peut alors choisir de fermer la connexion ou de renvoyer un en-tête {{HTTPHeader("Retry-After")}}.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">413 Payload Too Large</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "413 Payload Too Large" , "6.5.11")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("Retry-After")}}</li>
</ul>
