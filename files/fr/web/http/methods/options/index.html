---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
translation_of: Web/HTTP/Methods/OPTIONS
original_slug: Web/HTTP/Méthode/OPTIONS
---
<div>{{HTTPSidebar}}</div>

<p>La <strong>méthode HTTP <code>OPTIONS</code></strong> est utilisée pour décrire les options de communication pour la ressource ciblée. Le client peut renseigner une URL spécifique pour la méthode OPTIONS, ou une astérisque (*) pour interroger le serveur dans sa globalité.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">La requête a un corps</th>
   <td>Non</td>
  </tr>
  <tr>
   <th scope="row">Une réponse de succès a un corps</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Sûre")}}</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotente")}}</th>
   <td>Oui</td>
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

<p> </p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Identifier_les_méthodes_HTTP_autorisées">Identifier les méthodes HTTP autorisées</h3>

<p>Pour déterminer les méthodes HTTP supportées par le serveur, on peut utiliser curl et envoyer une requête OPTIONS :</p>

<pre>curl -X OPTIONS http://example.org -i</pre>

<p>La réponse contient un en-tête {{HTTPHeader("Allow")}} qui liste les méthodes autorisées :</p>

<pre>HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
Content-Length: 0
</pre>

<h3 id="Requête_de_pré-vérification_cross-origin_CORS">Requête de pré-vérification cross-origin <a href="https://developer.mozilla.org/fr/docs/Glossaire/CORS">CORS</a></h3>

<p>En <a href="/en-US/docs/Web/HTTP/Access_control_CORS">CORS</a>, une requête de pré-vérification est envoyée avec la méthode <code>OPTIONS</code> afin que le serveur indique si la requête est acceptable avec les paramètres spécifiés. En tant qu'élément de la requête de pré-vérification, le header {{HTTPHeader("Access-Control-Request-Method")}} notifie le serveur que lorsque la véritable requête sera envoyée, ce sera avec une méthode <code>POST</code>. Le header {{HTTPHeader("Access-Control-Request-Headers")}} indique au serveur que lorsque la vraie requête sera envoyée, elle aura les en-tête personnalisés <code>X-PINGOTHER</code> et <code>Content-Type</code>. Le serveur a maintenant la possibilité de déterminer s'il souhaite ou non accepter la requête dans les conditions énoncées par la requête de pré-vérification.</p>

<pre>OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type</pre>

<p>Dans la réponse du serveur, l'en-tête {{HTTPHeader("Access-Control-Allow-Methods")}} indique que les méthodes <code>POST</code>, <code>GET</code>, and <code>OPTIONS</code> sont utilisables pour interroger la ressource.  Cet en-tête est similaire à {{HTTPHeader("Allow")}}, mais utilisé uniquement dans le contexte CORS.</p>

<pre>HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "OPTIONS", "4.3.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.methods.OPTIONS")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>en-tête {{HTTPHeader("Allow")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">CORS</a></li>
</ul>
