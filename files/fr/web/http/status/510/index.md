---
title: 510 Not Extended
slug: Web/HTTP/Status/510
tags:
  - Code de statut
  - Erreur serveur
  - HTTP
  - Server error
  - Status code
translation_of: Web/HTTP/Status/510
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse HTTP <code><strong>510 Not Extended</strong></code> est envoyé dans le contexte de "l'HTTP Extension Framework", defini dans le <a href="https://tools.ietf.org/html/rfc2774">RFC 2774</a>.</p>

<p>Dans cette spécification, un client peut envoyer une demande qui contient une déclaration d'extension et qui décrit l'extension à utiliser. Si le serveur reçoit une telle demande, mais que les extensions décrites ne sont pas prises en charge pour la requête, alors, le serveur répond avec le code de statut 510.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">510 Not Extended</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("2774", "510 Not Extended" , "7")}}</td>
   <td>Cadre pour les extensions HTTP (<em>An HTTP Extension Framework</em>)</td>
  </tr>
 </tbody>
</table>
