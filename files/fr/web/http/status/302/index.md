---
title: 302 Found
slug: Web/HTTP/Status/302
tags:
  - Code de statut
  - HTTP
  - Reference
  - redirections
translation_of: Web/HTTP/Status/302
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse de redirection <code><strong>302</strong></code><strong><code> Found</code></strong> indique que la ressource est temporairement déplacée vers l'URL contenue dans l'en-tête {{HTTPHeader("Location")}}. Un navigateur redirige vers cette page, mais les moteurs de recherche ne mettent pas à jour leurs liens vers la ressource (en termes de référencement, cela indique que le flux de référencement n'est pas envoyé vers la nouvelle URL).</p>

<p>Même si la spécification impose que la méthode et le corps ne soient pas altérés lors d'une redirection, tous les agents utilisateurs ne s'y conforment pas et il est toujours possible de trouver des logiciels bogués sur ce point. Il est donc recommandé d'utiliser le code <code>302</code> uniquement comme réponse à une méthode {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} et d'utiliser le code  {{HTTPStatus("307")}} <code>Temporary Redirect</code> à la place puisque le changement de méthode est explicitement interdit dans ce cas.</p>

<p>Si vous souhaitez que la méthode utilisée soit changée en {{HTTPMethod("GET")}}, vous pouvez utiliser {{HTTPStatus("303")}} <code>See Also</code> à la place. Ceci s'avère utile lorsqu'on souhaite donner une réponse à une méthode {{HTTPMethod("PUT")}} qui n'est pas la ressource téléversée, mais plutôt un message de confirmation (par exemple "Vous avez téléversé avec succès XYZ").</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">302 Found</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "302 Found" , "6.4.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/status", "302")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPStatus("307")}} <code>Temporary Redirect</code>, l'équivalent de ce code de statut, mais qui ne change jamais la méthode utilisée.</li>
 <li>{{HTTPStatus("303")}} <code>See Also</code>, une redirection temporaire qui change la méthode utilisée par {{HTTPMethod("GET")}}.</li>
 <li>{{HTTPStatus("301")}} <code>Moved Permanently</code>, la redirection permanente.</li>
</ul>
