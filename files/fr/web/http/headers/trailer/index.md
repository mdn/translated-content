---
title: Trailer
slug: Web/HTTP/Headers/Trailer
translation_of: Web/HTTP/Headers/Trailer
---
<div>{{HTTPSidebar}}</div>

<p>L'en-tête <strong>Trailer</strong> permet à l'expéditeur d'inclure des champs supplémentaires à la fin des blocs de messages pour fournir des métadonnées supplémentaires qui peuvent être générées de manière dynamique pendant que le corps du message sera envoyé, il peut s'agir de la vérification de l'intégrité du message, une signature numérique, ou encore un statut après le traitement.</p>

<div class="note">
<p><strong>Note :</strong> L'en-tête {{HTTPHeader("TE")}} de la requête devra être définie en tant que "trailers" pour autoriser les champs de type "trailer".</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'en-tête</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>yes</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Trailer: header-names</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>header-names</code></dt>
 <dd>HTTP header fields which will be present in the trailer part of chunked messages. These header fields are <strong>disallowed</strong>:
 <ul>
  <li>message framing headers (e.g., {{HTTPHeader("Transfer-Encoding")}} and {{HTTPHeader("Content-Length")}}),</li>
  <li>routing headers (e.g., {{HTTPHeader("Host")}}),</li>
  <li>request modifiers (e.g., controls and conditionals, like {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, or {{HTTPHeader("TE")}}), </li>
  <li>authentication headers (e.g., {{HTTPHeader("Authorization")}} or {{HTTPHeader("Set-Cookie")}}),</li>
  <li>or {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, and <code>Trailer</code> itself.</li>
 </ul>
 </dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<h3 id="Encodage_de_transfert_en_bloc_en_utilisant_les_en-têtes_trailer."><strong>Encodage de transfert en bloc</strong> en utilisant les en-têtes "trailer".</h3>

<p>Dans cet exemple, l'en-tête {{HTTPHeader("Expires")}} est utilisée à la fin du bloc du message et sert en tant qu'un "trailing header".</p>

<pre>HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "Trailer", "4.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
  <tr>
   <td>{{RFC("7230", "Chunked trailer part", "4.1.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilités</h2>

<p>{{Compat("http/headers/trailer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
 <li>{{HTTPHeader("TE")}}</li>
 <li>
  <p><a href="https://fr.wikipedia.org/wiki/Chunked_transfer_encoding">Encodage de transfert en bloc</a></p>
 </li>
</ul>
