---
title: 103 Early Hints
slug: Web/HTTP/Status/103
tags:
  - HTTP
  - Reference
  - Statut
translation_of: Web/HTTP/Status/103
---
<p>{{HTTPSidebar}}{{Draft}}</p>

<p>Le code de statut de réponse  <strong><code>103 Early Hints</code></strong> est principalement utilisé avec l'en-tête HTTP {{HTTPHeader("Link")}} afin de permettre à l'application cliente de commencer le chargement des ressources tandis que le serveur prépare une réponse.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">103 Early Hints</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC(8297, "103 Early Hints")}}</td>
   <td>IETF RFC</td>
   <td>Première version</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("http.status.103")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Link")}}</li>
</ul>
