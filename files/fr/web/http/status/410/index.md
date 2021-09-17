---
title: 410 Gone
slug: Web/HTTP/Status/410
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/410
---
<div>{{HTTPSidebar}}</div>

<p>Le code de réponse d'erreur HyperText Transfer Protocol (HTTP) <code><strong>410</strong></code><strong><code> Gone</code></strong> est une erreur client qui indique que l'accès à la ressource visée n'est plus disponible sur le serveur d'origine et que cet état est susceptible d'être définitif.</p>

<p>Si vous ne savez pas si cette absence est temporaire ou permanente, il est préférable de renvoyer un code de statut {{HTTPStatus(404)}}.</p>

<div class="note">
<p><strong>Note :</strong> Par défaut, une réponse 410 peut être mise en cache.</p>
</div>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">410 Gone</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "410 Gone" , "6.5.9")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>L'information ci-dessous provient du GitHub de MDN (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.410")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPStatus(404)}}</li>
</ul>
