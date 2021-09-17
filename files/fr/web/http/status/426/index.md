---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/426
---
<div>{{HTTPSidebar}}</div>

<p>Le code de réponse d'erreur HTTP <code><strong>426 Upgrade Required</strong></code> indique que le serveur refuse de réaliser la requête en utilisant le protocole actuel mais qu'il sera peut-être disposé à le faire après que le client augmente la version du protocole utilisé.</p>

<p>Avec cette réponse, le serveur renvoie un en-tête {{HTTPHeader("Upgrade")}} pour indiquer le(s) protocole(s) requis.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">426 Upgrade Required</pre>

<h2 id="Exemples">Exemples</h2>

<pre>HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "426 Upgrade Required" , "6.5.15")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Upgrade")}}</li>
 <li>{{HTTPStatus("101")}} <code>Switching Protocol</code></li>
</ul>
