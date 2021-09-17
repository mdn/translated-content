---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
tags:
  - Erreur serveur
  - HTTP
  - Statut de réponse
translation_of: Web/HTTP/Status/506
---
<div>{{HTTPSidebar}}</div>

<p>Le code de réponse HTTP <code><strong>506 Variant Also Negotiates</strong></code> peut être donné dans le contexte du protocol <code><strong>Transparent Content Negotiation</strong></code> (voir <a href="https://tools.ietf.org/html/rfc2295">RFC 2295</a>). Ce protocol active un client pour recevoir la meilleure variante d'une ressource donnée, où le serveur supporte de multiples variantes.</p>

<p>Le statut <code><strong>Variant Also Negotiates</strong></code> indique une erreur de configuration interne du serveur dans laquelle la variante choisie est elle-même configurée pour s'engager dans la négociation de contenu, et n'est donc pas un point final de négociation approprié.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">506 Variant Also Negotiates</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("2295", "506 Variant Also Negotiates" , "8.1")}}</td>
   <td>Transparent Content Negotiation in HTTP</td>
  </tr>
 </tbody>
</table>
