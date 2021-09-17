---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/408
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse HTTP <code><strong>408</strong></code><strong><code> Request Timeout</code></strong> indique que le serveur souhaiterait clôturer cette connexion inutilisée. Pour certains serveurs, ce code est parfois envoyé sur une connexion inactive sans qu'il y ait nécessairement eu de requête de la part du client.</p>

<p>Un serveur doit envoyer l'en-tête {{HTTPHeader("Connection")}} avec la valeur <code>"close"</code> en réponse, puisque 408 implique que le serveur a décidé de fermer la connexion plutôt que de continuer à attendre.</p>

<p>Cette réponse est plus utilisée depuis que certains navigateurs, comme Chrome, Firefox 27+ ou IE9, utilisent le mécanisme HTTP de pré-connexion qui permet d'accélérer la navigation. On notera également que certains serveurs ferment purement et simplement la connexion, sans renvoyer ce message.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">408 Request Timeout</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "408 Request Timeout" , "6.5.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("X-DNS-Prefetch-Control")}}</li>
</ul>
