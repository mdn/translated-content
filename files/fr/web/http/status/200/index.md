---
title: 200 OK
slug: Web/HTTP/Status/200
tags:
  - Code de statut
  - HTTP
translation_of: Web/HTTP/Status/200
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse HTTP <strong><code>200 OK</code></strong> indique la réussite d'une requête. Une réponse 200 peut être mise en cache par défaut.</p>

<p>La signification de la réussite dépend de la méthode de requête HTTP :</p>

<ul>
 <li>{{HTTPMethod("GET")}} : la ressource a été récupérée et est transmise dans le corps du message.</li>
 <li>{{HTTPMethod("HEAD")}} : l'en-tête entier est dans le corps du message.</li>
 <li>{{HTTPMethod("POST")}} : la ressource qui décrit le résultat d'une action est transmise dans le corps du message.</li>
 <li>{{HTTPMethod("TRACE")}} : le corps du message contient le message de requête reçu par le serveur.</li>
</ul>

<p>La plupart du temps, le résultat d'une requête réussie avec la méthode {{HTTPMethod("PUT")}} ou  {{HTTPMethod("DELETE")}} n'est pas <code>200</code> <code>OK</code> mais plutôt {{HTTPStatus("204")}} <code>No Content</code> (ou {{HTTPStatus("201")}} <code>Created</code> lorsque la ressource est envoyée pour la première fois).</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">200 OK</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "200 OK" , "6.3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/status", "200")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTTP/Methods">Les verbes utilisés pour les méthodes HTTP</a></li>
</ul>
