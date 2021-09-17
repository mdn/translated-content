---
title: 206 Partial Content
slug: Web/HTTP/Status/206
tags:
  - Code de statut
  - HTTP
translation_of: Web/HTTP/Status/206
---
<div>{{HTTPSidebar}}</div>

<p>Le code de statut de réponse succès HTTP <strong><code>206 Partial Content</code></strong> indique que la requête a bien abouti et que le corps de la réponse contient les plages de données demandées, tel que décrit dans l'en-tête {{HTTPHeader("Range")}} de la requête.</p>

<p>S'il n'y a qu'une seule plage, l'entête {{HTTPHeader("Content-Type")}} de la réponse correspondra au type du document et l'en-tête {{HTTPHeader("Content-Range")}} sera fourni.</p>

<p>Si plusieurs plages sont renvoyées, l'en-tête {{HTTPHeader("Content-Type")}} vaudra <code>multipart/byteranges</code> et chaque fragment couvrira une plage, décrite par les en-têtes {{HTTPHeader("Content-Range")}} et {{HTTPHeader("Content-Type")}}.</p>

<h2 id="Statut">Statut</h2>

<pre class="syntaxbox">206 Partial Content</pre>

<h2 id="Exemples">Exemples</h2>

<p>Une réponse qui contient une seule plage :</p>

<pre>HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...</pre>

<p>Une réponse qui contient plusieurs plages :</p>

<pre>HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...la première plage...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...La seconde plage
--String_separator--</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("7233", "206 Partial Content" , "4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("http/status", "206")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("If-Range")}}</li>
 <li>{{HTTPHeader("Range")}}</li>
 <li>{{HTTPHeader("Content-Range")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
</ul>
