---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
tags:
  - En-tête HTTP
  - En-tête de requête
  - HTTP
  - Reference
  - Requêtes Conditionnelles
translation_of: Web/HTTP/Headers/If-None-Match
---
<div> </div>

<p>L'en-tête de requête HTTP <strong><code>If-None-Match</code></strong> permet de conditionner la requête. Pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, le serveur renvoie la ressource demandée, avec un statut {{HTTPStatus("200")}}, seulement si elle n'a pas un {{HTTPHeader("ETag")}} correspondant à ceux fournis. Pour les autres méthodes, la requête ne sera traitée que si l'{{HTTPHeader("ETag")}} de l'éventuelle ressource existante ne correspond à aucune des valeurs listées.</p>

<p>Quand la condition échoue pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, le serveur doit retourner un code statut HTTP 304 (Not Modified). Pour les méthodes appliquant des changements côté serveur, le code statut 412 (Precondition Failed) est utilisé. Notez que le serveur générant une réponse 304 DOIT générer toutes les en-têtes qui auraient été envoyées avec une réponse 200 (OK) à la même requête : Cache-Control, Content-Location, Date, ETag, Expires, and Vary.</p>

<p>La comparaison avec l'{{HTTPHeader("ETag")}} stocké utilise l'<em>algorithme de comparaison faible</em>, c'est-à-dire que 2 fichiers sont considérés identiques pas seulement s'ils sont identiques octet à octet mais si leurs contenus sont équivalents. Par exemple, 2 pages dont seule la date de génération dans le pied de page diffère seraient considérées identiques.</p>

<p>Quand utilisé avec {{HTTPHeader("If-Modified-Since")}}, il a la priorité (si le serveur le supporte).</p>

<p>Il y a 2 cas d'utilisation communs:</p>

<ul>
 <li>Pour les méthodes {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}}, pour mettre à jour une entité en cache qui a un {{HTTPHeader("ETag")}} associé.</li>
 <li>Pour les autres méthodes, et en particulier pour {{HTTPMethod("PUT")}}, <code>If-None-Match</code> avec pour valeur <code>*</code> peut être  utilisé pour sauver un fichier dont on ne sait pas s'il existe, garantissant qu'un autre téléversement n'a pas été fait avant, perdant les données du précédent chargement ; ce problème est une variation du <a href="https://www.w3.org/1999/04/Editing/#3.1">problème de la mise à jour perdue</a>.</li>
</ul>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'en-tête</th>
   <td>{{Glossary("En-tête de requête")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Nom d'en-tête interdit")}}</th>
   <td>non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">If-None-Match: "&lt;valeur_etag&gt;"
If-None-Match: "&lt;valeur_etag&gt;", "&lt;valeur_etag&gt;", …
If-None-Match: *</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;etag_value&gt;</dt>
 <dd>Des tags d'entité représentant de façon unique les ressources demandées. Ce sont des chaînes de caractères ASCII entre guillemets doubles (comme <code>"675af34563dc-tr34"</code>) et peuvent être préfixés par <code>W/</code> pour indiquer que l'algorithme de comparaison faible doit être utilisé (inutile avec <code>If-None-Match</code> car il n'utilise que cet algorithme).</dd>
 <dt><code>*</code></dt>
 <dd>L'astérisque est une valeur spéciale représentant toute ressource. Ils ne sont utilies que quand on téléverse une ressource, habituellement avec {{HTTPMethod("PUT")}}, pour vérifier si une autre ressource avec cette identité a déjà été téléversée avant.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Title</th>
  </tr>
  <tr>
   <td>{{RFC("7232", "If-None-Match", "3.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>

<p>{{Compat("http.headers.If-None-Match")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{HTTPHeader("ETag")}}</li>
 <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
 <li>{{HTTPHeader("If-Modified-Since")}}</li>
 <li>{{HTTPHeader("If-Match")}}</li>
 <li>{{HTTPStatus("304")}}<code> Not Modified</code></li>
 <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
</ul>
