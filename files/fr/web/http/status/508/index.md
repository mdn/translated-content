---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
tags:
  - '508'
  - Code de statut
  - Erreur serveur
  - HTTP
translation_of: Web/HTTP/Status/508
---
<div>{{HTTPSidebar}}</div>

<p>Le code de réponse HTTP <code><strong>508 Loop Detected</strong></code> peut être donné dans le contexte du protocol <code><strong>Web Distributed Authoring and Versioning</strong></code> (WebDAV).</p>

<p>Il indique que le serveur termine une opération car il rencontre une boucle infinie pendant le traitement de la requête avec "Depth: infinity". Ce statut indique que l'entièreté de l'opération a échouée.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">508 Loop Detected</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("5842", "508 Loop Detected" , "7.2")}}</td>
   <td>Web Distributed Authoring and Versioning</td>
  </tr>
 </tbody>
</table>
