---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/405
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse HTTP <code><strong>405</strong></code><strong><code> Method Not Allowed</code></strong> indique que la méthode utilisée pour la requête est connue du serveur mais qu'elle n'est pas supportée par la ressource ciblée. </p>

<p>Le serveur doit générer un champ <strong><code>Allow</code></strong> dans le header en cas de réponse 405, contenant la liste des méthodes supportées par la ressource ciblée.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">405 Method Not Allowed</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "405 Method Not Allowed" , "6.5.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Allow")}}</li>
</ul>
