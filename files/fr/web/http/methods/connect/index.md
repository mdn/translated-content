---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
tags:
  - HTTP
  - Reference
  - Request method
translation_of: Web/HTTP/Methods/CONNECT
original_slug: Web/HTTP/Méthode/CONNECT
---
<div>{{HTTPSidebar}}</div>

<p>La <strong>méthode HTTP <code>CONNECT</code></strong> crée une communication bidirectionnelle avec la ressource demandée. Elle peut être utilisée pour ouvrir un tunnel.</p>

<p>Par exemple, la méthode <code>CONNECT</code> peut être utilisée pour accéder à des sites web qui utilisent {{Glossary("SSL")}} ({{Glossary("HTTPS")}}). Le client demande à un serveur Proxy HTTP de créer un tunnel TCP vers la destination désirée. Le serveur poursuit alors afin d'établir la connexion pour le compte du client. Une fois que la connexion a été établie par le serveur, le serveur Proxy continue de gérer le flux TCP à destination et en provenance du client.</p>

<p><code>CONNECT</code> est une méthode "saut-par-saut".</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">La requête a un corps</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Une réponse de succès a un corps</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Sûre")}}</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotente")}}</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Peut être mise en cache")}}</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Autorisée dans les  <a href="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires">formulaires HTML</a></th>
   <td>Non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">CONNECT www.example.com:443 HTTP/1.1
</pre>

<h2 id="Exemple">Exemple</h2>

<p>Certains serveurs proxy pourraient avoir besoin d'une autorisation pour créer un tunnel. Voir aussi l'en-tête {{HTTPHeader("Proxy-Authorization")}}.</p>

<pre>CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "CONNECT", "4.3.6")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/methods", "CONNECT")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{Glossary("Proxy server")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
</ul>
