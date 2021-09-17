---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
translation_of: Web/HTTP/Headers/Accept-Encoding
---
<div>{{HTTPSidebar}}</div>

<p>L'en-tête HTTP <strong><code>Accept-Encoding</code></strong> permet de définir quel sera l'encodage du contenu. Il s'agit généralement de l'algorithme de compression utilisé par le serveur. Le client peut alors décoder le corps de la requête correctement. Utilisant <a href="/fr/docs/Web/HTTP/Content_negotiation">la négociation de contenu</a>, le serveur choisit l'une des propositions d'encodage que le client prend en charge. Le serveur l'utilise et le notifie au client à l'aide de l'en-tête de réponse <a href="/fr/docs/Web/HTTP/Headers/Content-Encoding"><code>Content-Encoding</code></a>.</p>


<p>Même si le client et le serveur supportent deux algorithmes de compressions communs, le serveur peut choisir de ne pas compresser le corps de la réponse si l'encodage <code>identity</code> (aucune compression) est accepté par le client. Deux exemples de cas communs peuvent conduire à la non-compression du corps de la réponse :</p>


<ul>
 <li>Les données sont déjà compressées et la compression ne réduira pas la taille des données transmises. Cela peut être le cas de certains formats d'images qui sont déjà compressés ;</li>
 <li>Le serveur est en surcharge et ne peut plus allouer suffisamment de temps de calcul nécessaire pour compresser les données. Microsoft recommande de ne pas utiliser la compression si le serveur utilise plus de 80% de la puissance de calcul.</li>
</ul>

<p>Dès lors que l'usage d'<code>identity</code>, signifiant l'absence de compression, n'est pas explicitement interdite, que ce soit par <code>identity;q=0</code> ou <code>*;q=0</code> (sans l'usage d'une autre valeur pour <code>identity</code>), le serveur ne doit jamais renvoyer une erreur <a href="/fr/docs/Web/HTTP/Status/406"><code>406</code></a> <code>Not Acceptable.</code></p>

<div class="note">
  <p><strong>Note :</strong>
    <ul>
        <li>Un dépôt IANA garde à jour <a href="https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1">une liste complète des encodages de contenu</a>.
        </li>
        <li>Deux autres encodages, <code>bzip</code> et <code>bzip2</code>, sont parfois utilisés, bien que non-standards. Ils implémentent l'algorithme utilisé par les deux programmes UNIX respectifs. À noter que le premier n'est plus maintenu suite à des problèmes de licence.</li>
    </ul>
  </p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type d'en-tête</th>
   <td><a href="/fr/docs/Glossary/Request_header">En-tête de requête</a></td>
  </tr>
  <tr>
   <th scope="row"><a href="/fr/docs/Glossary/Forbidden_header_name">Nom d'en-tête interdit</a></th>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: html">Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Plusieurs algorithmes pondérés par facteur de qualité :
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>gzip</code></dt>
 <dd>Un format de compression utilisant <a href="https://fr.wikipedia.org/wiki/LZ77_et_LZ78#LZ77">Lempel-Ziv coding</a> (LZ77), avec un CRC (Contrôle de Redondance Cyclique) de 32 bits.</dd>
 <dt><code>compress</code></dt>
 <dd>Un format de compression utilisant l'algorithme <a href="https://fr.wikipedia.org/wiki/Lempel-Ziv-Welch">Lempel-Ziv-Welch</a> (LZW).</dd>
 <dt><code>deflate</code></dt>
 <dd>Un format de compression utilisant la structure <a href="https://fr.wikipedia.org/wiki/Zlib">zlib</a>, avec l'algorithme de compression <a href="https://fr.wikipedia.org/wiki/Deflate"><em>deflate</em></a>.</dd>
 <dt><code>br</code></dt>
 <dd>Un format de compression utilisant l'algorithme <a href="https://fr.wikipedia.org/wiki/Brotli">Brotli</a>.</dd>
 <dt><code>identity</code></dt>
 <dd>Indique la fonction identité (c'est-à-dire pas de compression ou de modification). Cette valeur est toujours considérée comme acceptable, même si l'en-tête ne le précise pas.</dd>
 <dt><code>*</code></dt>
 <dd>Correspond à tous les systèmes d'encodage de contenu qui n'ont pas été listés dans l'en-tête. C'est la valeur par défaut de l'en-tête s'il n'est pas présent. Cela ne signifie pas que tous les algorithmes sont supportés; seulement qu'aucune préférence n'est exprimée.</dd>
 <dt><code>;q=</code> (pondération par qvalues)</dt>
 <dd>La valeur indique l'ordre de préférence des méthodes de compression à utiliser. Ce champ utilise les <a href="/fr/docs/Glossary/Quality_values">pondérations de qualité (ou <i>quality values</i> en anglais)</a>.</dd>
</dl>

<h2 id="examples">Exemples</h2>

<pre>Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
</pre>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Title</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">RFC 7231, section 5.3.4: Accept-Encoding</a></td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("http.headers.Accept-Encoding")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/HTTP/Content_negotiation">Négociation de contenu</a> HTTP</li>
 <li>En-tête résultant de la négociation de contenu : <a href="/fr/docs/Web/HTTP/Headers/Content-Encoding"><code>Content-Encoding</code></a></li>
 <li>Autres en-têtes en rapport : <a href="/fr/docs/Web/HTTP/Headers/TE"><code>TE</code></a>, <a href="/fr/docs/Web/HTTP/Headers/Accept"><code>Accept</code></a>, <a href="/fr/docs/Web/HTTP/Headers/Accept-Charset"><code>Accept-Charset</code></a>, <a href="/fr/docs/Web/HTTP/Headers/Accept-Language"><code>Accept-Language</code></a></li>
</ul>
