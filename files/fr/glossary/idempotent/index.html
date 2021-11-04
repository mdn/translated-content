---
title: Idempotente
slug: Glossary/Idempotent
tags:
  - Glossaire
  - HTTP
  - Mécanismes web
translation_of: Glossary/Idempotent
original_slug: Glossaire/Idempotent
---
<p>Une méthode HTTP est <strong>idempotente</strong> si une requête identique peut être faite une ou plusieurs fois de suite avec le même effet, tout en laissant le serveur dans le même état. En d'autres termes, une méthode idempotente ne doit pas avoir d'effets secondaires (sauf dans la tenue de statistiques). Implémentées correctement, les méthodes {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} et {{HTTPMethod("DELETE")}} sont idempotentes, mais pas la méthode {{HTTPMethod("POST")}}. Toutes les méthodes {{glossary("Safe","sécurisées")}} sont également idempotentes.</p>

<p>L'idempotence implique que seul l'état réel du serveur est pris en compte et le code d'état renvoyé par chaque requête peut différer : le premier appel d'un {{HTTPMethod("DELETE")}} retournera probablement un code {{HTTPStatus("200")}}, tandis que les lancements successifs retourneront probablement un code {{HTTPStatus("404")}}. Une autre implication, {{HTTPMethod("DELETE")}} étant idempotente, les développeurs ne doivent pas implémenter d'API RESTful avec une fonctionnalité de suppression de la dernière entrée utilisant la méthode DELETE.</p>

<p>À noter : l'idempotence d'une méthode n'est pas garantie par le serveur et certaines applications peuvent incorrectement rompre la contrainte d'idempotence.</p>

<p><code>GET /pageX HTTP/1.1</code> est idempotente. Appelée plusieurs fois de suite, le client obtient les mêmes résultats :</p>

<pre>GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
</pre>

<p><code>POST /add_row HTTP/1.1</code> n'est pas idempotente ; si elle est appelée plusieurs fois, elle ajoute plusieurs lignes :</p>

<pre>POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -&gt; ajoute une 2nde ligne
POST /add_row HTTP/1.1   -&gt; ajoute une 3ème ligne
</pre>

<p><code>DELETE /idX/delete HTTP/1.1</code> est idempotente, même si le code d'état renvoyé peut changer entre les demandes :</p>

<pre>DELETE /idX/delete HTTP/1.1   -&gt; Retourne 200 si idX existe
DELETE /idX/delete HTTP/1.1   -&gt; Retourne 404 comme il vient d'être supprimé
DELETE /idX/delete HTTP/1.1   -&gt; Retourne 404</pre>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>Définition d'<a href="https://tools.ietf.org/html/rfc7231#section-4.2.2">idempotent</a> dans la spécification HTTP (en).</li>
</ul>

<h3 id="Savoir_technique">Savoir technique</h3>

<ul>
 <li>Description de méthodes idempotentes courantes : {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}</li>
 <li>Description d'une méthode non idempotente courante : {{HTTPMethod("POST")}}</li>
</ul>
