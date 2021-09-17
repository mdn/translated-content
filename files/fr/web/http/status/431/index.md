---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/431
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse HTTP <code><strong>431 Request Header Fields Too Large</strong></code> indique que le serveur n'est pas disposé à traiter la requête, car les champs d'en-têtes sont trop grands. La requête peut être renvoyée une fois que les champs des en-têtes de la requête auront été réduits.</p>

<p>Ce code peut être utilisé lorsque tous les champs sont trop grands ou qu'un seul champ est trop grand. Cette erreur ne devrait pas se produire pour les systèmes en production mais peut être employée lorsqu'on teste un nouveau système pour lequel tous les contrôles n'ont pas encore été mis en place.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">431 Request Header Fields Too Large</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("6585", "431 Request Header Fields Too Large" , "5")}}</td>
   <td>Additional HTTP Status Codes</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{Glossary("En-tête")}}</li>
</ul>
