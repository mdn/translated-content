---
title: En-tête
slug: Glossary/HTTP_header
tags:
  - En-têtes
  - Glossaire
  - Mécanismes web
translation_of: Glossary/HTTP_header
original_slug: Glossaire/Header
---
<p>Un <strong>en-tête HTTP</strong> est un champ de requête ou de réponse HTTP permettant de transmettre des informations supplémentaires modifiant ou précisant la sémantique du message ou de son contenu. Les en-têtes ne sont pas sensibles à la casse, commencent au début d'une ligne et sont immédiatemment suivis d'un '<code>:</code>' et d'une valeur dépendant de l'en-tête en question. La valeur se termine au retour chariot suivant ou à la fin du message.</p>

<p>Traditionnellement, les en-têtes sont classés en catégories, mais cette classification ne fait plus partie d'aucune spécification :</p>

<ul>
 <li>{{Glossary("General header","en-tête général")}} : en-têtes applicables à la fois aux requêtes et aux réponses, mais sans lien avec les données eventuellement transmises dans le corps du message.</li>
 <li>{{Glossary("Request header","en-tête de requête")}} : en-têtes contenant des informations supplémentaires sur la ressource à récupérer ou sur le client lui-même.</li>
 <li>{{Glossary("Response header","en-tête de réponse")}} : en-têtes contenant des informations supplémentaires à propos de la réponse, telles que son emplacement, ou à propos du serveur lui-même (nom, version...).</li>
 <li>{{Glossary("Entity header","en-tête d'entité")}} : en-têtes contenant des informations supplémentaires sur le corps de l'entité, telles que la taille de son contenu ou son type MIME.</li>
</ul>

<p>Requête basique avec un seul en-tête :</p>

<pre>GET /example.http HTTP/1.1
Host: example.com
</pre>

<p>Les redirections ont des en-têtes obligatoires ({{HTTPHeader("Location")}}) :</p>

<pre>302 Found
Location: /NewPage.html
</pre>

<p>Un ensemble d'en-têtes typique :</p>

<pre>304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
</pre>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>Syntaxe des <a href="https://tools.ietf.org/html/rfc7230#section-3.2">en-têtes</a> dans la spécification HTTP.</li>
</ul>

<h3 id="Informations_techniques">Informations techniques</h3>

<ul>
 <li><a href="/fr/docs/HTTP/Headers">Liste de tous les en-têtes HTTP</a></li>
</ul>
