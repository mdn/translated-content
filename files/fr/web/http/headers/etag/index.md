---
title: ETag
slug: Web/HTTP/Headers/ETag
tags:
  - HTTP
  - Reference
  - Response
  - header
translation_of: Web/HTTP/Headers/ETag
---
<div>{{HTTPSidebar}}</div>

<p>L'en-tête de réponse <code>ETag</code> HTTP est un identifiant pour une version spécifique d'une ressource. Il permet aux caches d'être plus efficaces et d'économiser de la bande passante, du fait que le serveur Web n'a pas besoin d'envoyer une réponse complète si le contenu n'a pas changé. Sinon, si le contenu a changé, les etags sont utiles pour empêcher les mises à jour simultanées d'une ressource de s'écraser mutuellement ("collisions en vol").</p>

<p>Si la ressource à une URL donnée change, une nouvelle valeur <code>Etag</code> doit être générée. Les Etags sont donc similaires aux empreintes digitales et elles peuvent également être utilisées à des fins de suivi par certains serveurs. Une comparaison entre elles permet de déterminer rapidement si deux représentations d'une ressource sont identiques, mais un serveur de suivi peut également leur imposer de persister indéfiniment.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'entête</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>non</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">ETag: W/"&lt;etag_value&gt;"
ETag: "&lt;etag_value&gt;"
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>W/</code> {{optional_inline}}</dt>
 <dd><code>'W/'</code> (sensible à la casse) indique qu'un validateur faible est utilisé. Les validateurs faibles sont faciles à générer, mais ils sont beaucoup moins utiles pour les comparaisons. Les validateurs forts sont idéaux pour les comparaisons, mais ils peuvent être très difficiles à générer efficacement. Les valeurs <code>Etag</code> faibles de deux représentations des mêmes ressources peuvent être sémantiquement équivalentes, mais ne pas être identiques octet par octet.</dd>
 <dt><strong>"&lt;etag_value&gt;</strong>"</dt>
 <dd>Balises d'entité représentant d'une façon unique les ressources demandées. Elles sont consituées d'une chaîne de caractères ASCII placés entre apostrophes doubles (comme <code>"675af34563dc-tr34"</code>). La méthode par laquelle les valeurs <code>ETag</code> sont générées n'est pas spécifiée. Souvent, un hachage du contenu, un hachage de l'horodatage de la dernière modification, ou seulement un numéro de révision est utilisé. Par exemple, MDN utilise un hachage de chiffres hexadécimaux du contenu du wiki.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre>ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"</pre>

<h3 id="Évitement_des_collisions_en_vol">Évitement des collisions en vol</h3>

<p>A l'aide des en-têtes <code>ETag</code> et {{HTTPHeader("If-Match")}}, vous pouvez détecter les collisions d'édition en vol.</p>

<p>Par exemple, lors de l'édition de MDN, le contenu actuel du wiki est haché et placé dans un <code>Etag</code> dans la réponse :</p>

<pre>ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>Lors de la sauvegarde des modifications d'une page wiki ("post" des données), la requête {{HTTPMethod("POST")}} contiendra l'en-tête {{HTTPHeader("If-Match")}} contenant les valeurs ETag par rapport auxquelles vérifier la péremption.</p>

<pre>If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>Si les hachages ne correspondent pas, cela signifie que le document a été modifié entre-temps, et une erreur {{HTTPStatus("412")}} <code>Precondition Failed</code> est déclenchée.</p>

<h3 id="Mise_en_cache_des_ressources_inchangées">Mise en cache des ressources inchangées</h3>

<p>Un autre cas d'utilisation typique de l'en-tête <code>ETag</code> est de mettre en cache les ressources qui sont inchangées. Si un utilisateur visite à nouveau une URL donnée (qui a un ensemble d'<code>ETag</code>), et qu'elle est <em>périmée</em>, c'est à dire, trop ancienne pour être considérée comme utilisable, le client enverra en même temps la valeur de son <code>ETag</code> dans un champ d'en-tête {{HTTPHeader("If-None-Match")}} :</p>

<pre>If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>Le serveur comparera l'<code>ETag</code> du client (envoyé avec <code>If-None-Match</code>) à l'<code>ETag</code> de sa version en cours de la ressource, et si les deux valeurs correspondent (c'est-à-dire que la ressource n'a pas changé), le serveur renverra un statut {{HTTPStatus( "304")}} Not Modified, sans aucun corps, qui indiquera au client que sa version mise en cache de la réponse est toujours bonne à utiliser (actuelle).</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7232", "ETag", "2.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.ETag")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("If-Match")}}</li>
 <li>{{HTTPHeader("If-None-Match")}}</li>
 <li>{{HTTPStatus("304")}}<code> Not Modified</code></li>
 <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
 <li>
  <p><a href="https://www.w3.org/1999/04/Editing/">W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout</a></p>
 </li>
</ul>
