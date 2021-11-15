---
title: En-tête d'entité
slug: Glossary/Entity_header
tags:
  - Glossaire
  - Mécanismes web
translation_of: Glossary/Entity_header
original_slug: Glossaire/En-tête_entité
---
<p>Un en-tête d'entité est un {{glossary("header","en-tête HTTP")}} décrivant le contenu du corps du message. Les en-têtes d'entité sont utilisés à la fois dans les requêtes et les réponses HTTP. Des en-têtes tels que {{HTTPHeader("Content length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}} sont des en-têtes d'entité.</p>

<p>Même si les en-têtes d'entité ne sont ni des en-têtes de requête, ni des en-têtes de réponse, ils sont souvent inclus avec ces modalités.</p>

<p>Dans l'exemple suivant, {{HTTPHeader("Content-Length")}} est un en-tête d'entité, tandis que {{HTTPHeader("Host")}} et {{HTTPHeader("User-Agent")}} sont des {{glossary("Request header","en-têtes de requête")}} :</p>

<pre>POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128</pre>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Connaissance_technique">Connaissance technique</h3>

<ul>
 <li><a href="/fr/docs/HTTP/Headers">Liste de tous les en-têtes HTTP</a></li>
</ul>
