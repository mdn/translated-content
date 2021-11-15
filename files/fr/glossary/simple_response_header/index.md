---
title: En-tête de réponse simple
slug: Glossary/Simple_response_header
tags:
  - En-têtes
  - Glossaire
  - HTTP
translation_of: Glossary/Simple_response_header
original_slug: Glossaire/En-tête_de_réponse_simple
---
<p>Un <em>en-tête de réponse simple</em> (ou un en-tête de réponse sécurisé <em>CORS</em>) est un <a href="/fr/docs/HTTP/Headers">en-tête HTTP</a> qui a été sécurisé pour ne pas être filtré lorsque les réponses sont traitées par CORS, car elles sont considérées comme sûres (comme les en-têtes listés dans {{HTTPHeader("Access-Control-Expose-Headers")}}). Par défaut, la liste des réponses sûres inclut les en-têtes de réponse suivants :</p>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Content-Language")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
 <li>{{HTTPHeader("Last-Modified")}}</li>
 <li>{{HTTPHeader("Pragma")}}</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Extension_de_la_liste_des_en-têtes_sécurisés">Extension de la liste des en-têtes sécurisés</h3>

<p>Vous pouvez étendre la liste des en-têtes de réponse sécurisés CORS en utilisant l'en-tête {{HTTPHeader("Access-Control-Expose-Headers")}} :</p>

<pre>Access-Control-Expose-Headers: X-Custom-Header, Content-Length</pre>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<ul>
 <li><a href="/fr/docs/HTTP">HTTP</a></li>
 <li><a href="/fr/docs/HTTP/Headers">En-têtes HTTP</a></li>
 <li>{{HTTPHeader("Access-Control-Expose-Headers")}}</li>
 <li>{{Glossary("CORS")}}</li>
 <li>{{Glossary("Simple header","En-tête simple")}}</li>
 <li>{{Glossary("Forbidden header name","Noms d'en-tête interdits")}}</li>
 <li>{{Glossary("Request header","En-tête de requête")}}</li>
</ul>
