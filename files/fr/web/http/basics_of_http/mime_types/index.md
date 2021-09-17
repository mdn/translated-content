---
title: Types MIME
slug: Web/HTTP/Basics_of_HTTP/MIME_types
tags:
  - Content-Type
  - Guide
  - HTTP
  - Types MIME
translation_of: Web/HTTP/Basics_of_HTTP/MIME_types
---
<div>{{HTTPSidebar}}</div>

<p>Le <strong>type Multipurpose Internet Mail Extensions (type MIME)</strong> est un standard permettant d'indiquer la nature et le format d'un document. Il est défini au sein de la <a href="https://tools.ietf.org/html/rfc6838">RFC 6838</a>. L'<a href="https://www.iana.org/">Internet Assigned Numbers Authority (IANA)</a> est l'organisme officiel responsable du suivi de l'ensemble des types MIME officiels existants. Une liste exhaustive et maintenue est consultable sur la <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">page Media Types de l'IANA</a>.</p>

<p>Les navigateurs utilisent le plus souvent le type MIME et non l'extension d'un fichier pour déterminer la façon dont ils vont traiter ou afficher un document. Il est donc important que les serveurs puissent correctement attacher le type MIME dans l'en-tête de la réponse qu'ils renvoient.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Structure_générale">Structure générale</h3>

<pre class="syntaxbox">type/sous-type</pre>

<p>La structure d'un type MIME est simple, elle est composée d'un type et d'un sous-type. Les deux chaînes de caractères sont séparées par un <code>'/'</code>. Les caractères d'espacement ne sont pas autorisés. Le <em>type</em> représente la catégorie et peut être <em>particulier</em> ou <em>composé</em> lorsqu'il regroupe plusieurs formats. Le <em>sous-type</em> est spécifique à chaque type.</p>

<p>Un type MIME est insensible à la casse mais il s'écrit usuellement en minuscule.</p>

<h3 id="Types_particuliers">Types particuliers</h3>

<pre class="syntaxbox">text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
…</pre>

<p>Les types <em>particuliers</em> indiquent la catégorie d'un document. Les valeurs possibles sont :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
   <th scope="col">Exemple de sous-type communément associé</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>text</code></td>
   <td>Représente n'importe quel document contenant du texte et qui est théoriquement lisible par un utilisateur.</td>
   <td><code>text/plain</code>, <code>text/html</code>, <code>text/css, text/javascript</code></td>
  </tr>
  <tr>
   <td><code>image</code></td>
   <td>Représente n'importe quelle image. Les vidéos ne font pas partie de ce type bien que les images animées tels les GIFs animés) font partie de ce type.</td>
   <td><code>image/gif</code>, <code>image/png</code>, <code>image/jpeg</code>, <code>image/bmp</code>, <code>image/webp</code></td>
  </tr>
  <tr>
   <td><code>audio</code></td>
   <td>Représente n'importe quel fichier audio.</td>
   <td><code>audio/midi</code>, <code>audio/mpeg, audio/webm, audio/ogg, audio/wav</code></td>
  </tr>
  <tr>
   <td><code>video</code></td>
   <td>Représente n'importe quel fichier vidéo.</td>
   <td><code>video/webm</code>, <code>video/ogg</code></td>
  </tr>
  <tr>
   <td><code>application</code></td>
   <td>Représente n'importe quelle donnée binaire.</td>
   <td><code>application/octet-stream</code>, <code>application/pkcs12</code>, <code>application/vnd.mspowerpoint</code>, <code>application/xhtml+xml</code>, <code>application/xml</code>, <code>application/pdf</code></td>
  </tr>
 </tbody>
</table>

<p><code>text/plain</code> doit être utilisé pour tous les documents texte sans sous-type spécifique. De la même façon, les documents binaires sans sous-type ou dont le sous-type est inconnu doivent utiliser <code>application/octet-stream</code>.</p>

<h3 id="Types_composés_ou_multipart">Types composés ou <em>multipart</em></h3>

<pre class="syntaxbox">multipart/form-data
multipart/byteranges</pre>

<p>Les types composés, aussi appelés types <em>multipart</em> indiquent une catégorie de document qui sont constitués de différents éléments. A l'exception de <code>multipart/form-data</code>, utilisé en association avec des <a href="/fr/docs/Web/Guide/HTML/Forms">formulaires HTML</a> et la méthode {{HTTPMethod("POST")}} et de <code>multipart/byteranges</code>, utilisé avec le statut HTTP {{HTTPStatus("206")}} <code>Partial Content</code> renvoyant uniquement une sous-partie du document ce qui entraînera vraisemblablement l'apparition d'une fenêtre "Enregistrer sous" étant donné que HTTP ne gère pas ces documents de manière différente et que le navigateur ne saura pas commment afficher ce document incomplet.</p>

<h2 id="Types_MIME_utiles_pour_les_développeurs_web">Types MIME utiles pour les développeurs web</h2>

<h3 id="applicationoctet-stream"><code>application/octet-stream</code></h3>

<p>Il s'agit de la valeur par défaut pour un fichier binaire. Etant donné qu'il signifie <em>fichier binaire inconnu</em> il est probable que les navigateurs ne l'exécutent pas automatiquement et que l'utilisateur ne puisse pas l'exécuter directement dans le navigateur. Le comportement sera alors le même que si l'en-tête {{HTTPHeader("Content-Disposition")}} était présente avec la valeur <code>attachment</code> et proposera une invite "Enregistrer sous".</p>

<h3 id="textplain"><code>text/plain</code></h3>

<p>Il s'agit de la valeur par défaut pour les fichiers texte. Bien qu'il signifie fichier texte de format inconnu, les navigateurs prendront pour hypothèse qu'ils peuvent l'afficher.</p>

<div class="note">
<p><strong>Note :</strong> Il est important de noter que <code>text/plain</code> ne signifie pas <em>tous les formats de fichiers textuels</em>. Si le client s'attend à recevoir un format particulier de données textuelles, il est vraisemblable que le type <code>text/plain</code> ne soit pas considéré comme valide à la réception. Par exemple, si le client télécharge un fichier <code>text/plain</code> à partir d'un {{HTMLElement("link")}} déclarant des fichiers CSS, ce dernier ne sera pas considéré comme un CSS, le type MIME à utiliser étant <code>text/css</code>.</p>
</div>

<h3 id="textcss"><code>text/css</code></h3>

<p>N'importe quel fichier CSS qui doit être interprété comme pour servir une page web <strong> doit</strong> être de type <code>text/css</code>. Bien souvent, les serveurs ne sont pas en mesure de reconnaître les fichiers ayant l'extension <code>.css</code> comme étant des fichiers CSS, ces derniers sont donc transmis avec le type MIME <code>text/plain</code> ou <code>application/octet-stream</code>. Dès lors, les navigateurs ne les considèreront pas comme des fichiers CSS et ils seront ignorés. Il est donc important de servir les fichiers CSS à l'aide du type approprié.</p>

<h3 id="texthtml"><code>text/html</code></h3>

<p>L'ensemble du contenu HTML doit être renvoyé à l'aide de ce type. Les types MIME pour XHTML (comme <code>application/xml+html)</code> ne sont actuellement plus utilisés (HTML5 ayant unifié ces formats).</p>

<h3 id="Formats_dimages">Formats d'images</h3>

<p>Seuls quelques types MIME associés à des images sont largement reconnus et considérés comme pouvant être utilisé sans risque sur le Web, on peut donc directement les intégrer dans une page web :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Type MIME</th>
   <th scope="col">Format d'image</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>image/gif</code></td>
   <td>images GIF (compression sans perte, remplacé par PNG)</td>
  </tr>
  <tr>
   <td><code>image/jpeg</code></td>
   <td>images JPEG</td>
  </tr>
  <tr>
   <td><code>image/png</code></td>
   <td>images PNG</td>
  </tr>
  <tr>
   <td><code>image/svg+xml</code></td>
   <td>images SVG (images vectorielles)</td>
  </tr>
 </tbody>
</table>

<p>Il y a un débat quant à l'ajout de WebP (<code>image/webp</code>) à cette liste. En effet l'ajout d'un nouveau format mènerait à une augmentation du nombre de cas à gérer et pourrait introduire des problématiques de sécurité, pour ces raisons les constructeurs de navigateurs font preuve de précaution avant de l'intégrer.</p>

<p>D'autres formats d'images peuvent constituer un document web. Par exemple, la plupart des navigateurs web supportent les types des images favicon, le format ICO étant pris en charge à l'aide du type MIME <code>image/x-icon</code>.</p>

<h3 id="Formats_audios_et_vidéos">Formats audios et vidéos</h3>

<p>Comme pour les images, HTML ne définit pas de liste de formats supportés pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}. Dès lors, seul un ensemble restreint de formats est en mesure d'être utilisé sur le Web. La page <a href="/fr/docs/Web/HTML/Supported_media_formats">Formats pris en charge par les balises audio et video</a> détaille les codecs et les formats qui peuvent être employés.</p>

<p>Le format MIME de ces fichiers représente généralement le format du conteneur contenant le fichier. Dans le cas du Web, les formats les plus courants sont :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Type MIME</th>
   <th scope="col">Format audio et vidéo</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>audio/wave</code><br>
    <code>audio/wav</code><br>
    <code>audio/x-wav</code><br>
    <code>audio/x-pn-wav</code></td>
   <td>Un fichier audio WAVE. Le codec audio PCM (WAVE codec "1") est souvent pris en charge tandis que les autres codecs offrent une prise en charge moindre (lorsqu'elle existe).</td>
  </tr>
  <tr>
   <td><code>audio/webm</code></td>
   <td>Un fichier audio WebM. Les codecs les plus fréquemment associés sont Vorbis et Opus.</td>
  </tr>
  <tr>
   <td><code>video/webm</code></td>
   <td>Un fichier vidéo, pouvant contenir de l'audio, au format WebM. Les codecs vidéos VP8 et VP9 sont les plus communs tandis que Vorbis and Opus constituent les codecs audios les plus fréquents.</td>
  </tr>
  <tr>
   <td><code>audio/ogg</code></td>
   <td>Un fichier audio au format OGG. Vorbis est le codec audio le plus utilisé pour traiter ce genre de format conteneur.</td>
  </tr>
  <tr>
   <td><code>video/ogg</code></td>
   <td>Un fichier vidéo, pouvant contenir de l'audio, au format OGG. Theora est le codec vidéo habituel pour ce genre de conteneur tandis que Vorbis est utilisé pour l'audio.</td>
  </tr>
  <tr>
   <td>
    <p><code>application/ogg</code></p>
   </td>
   <td>
    <p>Un fichier audio ou vidéo au format OGG. Theora et Vorbis constituent respectivement les codecs vidéo et audio souvent utilisés.</p>
   </td>
  </tr>
 </tbody>
</table>

<h3 id="multipartform-data"><code>multipart/form-data</code></h3>

<p>Le type <code>multipart/form-data</code> peut être utilisé lors de l'envoi du contenu d'un <a href="/fr/docs/Web/Guide/HTML/Forms">formulaire HTML</a> du navigateur vers le serveur. En tant que document composé ou <em>multipart</em> il est constitué de différentes parties délimitées par une frontière (une chaîne de caractères débutant par un tiret double <code>'--'</code>). Chaque partie est une entité propre qui possède ses propres en-têtes {{HTTPHeader("Content-Disposition")}} et {{HTTPHeader("Content-Type")}} lorsqu'il s'agit d'un champ permettant de téléverser un fichier. L'en-tête ({{HTTPHeader("Content-Length")}} est ignorée puisque la limite est assurée par la frontière.</p>

<pre class="syntaxbox">Content-Type: multipart/form-data; boundary=aChaineDeDélimitation
(en-têtes divers associés à l'ensemble du document)

--aChaineDeDélimitation
Content-Disposition: form-data; name="monFichier"; filename="img.jpg"
Content-Type: image/jpeg

(données)
--aChaineDeDélimitation
Content-Disposition: form-data; name="monChamp"

(données)
--aChaineDeDélimitation
(éléments additionnels)
--aChaineDeDélimitation--

</pre>

<p>Le formulaire suivant :</p>

<pre class="brush: html">&lt;form action="http://localhost:8000/" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="text" name="monChampTexte"&gt;
  &lt;input type="checkbox" name="maCheckBox"&gt;Check&lt;/input&gt;
  &lt;input type="file" name="monFichier"&gt;
  &lt;button&gt;Envoyer le fichier&lt;/button&gt;
&lt;/form&gt;</pre>

<p>enverra le message suivant :</p>

<pre>POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="monChampTexte"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="maCheckBox"

sur
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="monFichier"; filename="test.txt"
Content-Type: text/plain

un fichier simple.
-----------------------------8721656041911415653955004498--

</pre>

<h3 id="multipartbyteranges"><code>multipart/byteranges</code></h3>

<p>Le type MIME <code>multipart/byteranges</code> est utilisé lors qu'il s'agit d'envoyer une réponse partielle au navigateur. Lorsque le statut {{HTTPStatus("206")}} <code>Partial Content</code> est envoyé, ce type MIME sert pour indiquer que le document est constitué de plusieurs parties. Comme les types composés, l'en-tête {{HTTPHeader("Content-Type")}} utilise la directive <code>boundary</code> pour définir une chaîne de délimitation. Chaque partie possède son en-tête {{HTTPHeader("Content-Type")}} ainsi que {{HTTPHeader("Content-Range")}} qui spécifie le morceau que cette partie représente.</p>

<pre><code>HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" /&gt;
    &lt;meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--</code></pre>

<h2 id="De_limportance_de_définir_correctement_un_type_MIME">De l'importance de définir correctement un type MIME</h2>

<p>La plupart des serveurs envoient des ressources de format inconnu et donc utilisent le type par défaut <code>application/octet-stream</code>. Pour des considérations de sécurité, les navigateurs n'effectuent pas d'action par défaut pour les ressources de ce type, ce qui oblige l'utilisateur à stocker le fichier sur son dique pour l'utiliser. Voici les erreurs communes de configuration côté serveur pour les formats suivants :</p>

<ul>
 <li>
  <p>Les fichiers RAR. Idéalement il faudrait définir le type MIME associé aux fichiers contenus. Ce n'est généralement pas possible étant donné que le type de ces fichiers est vraisemblablement inconnu du serveur, d'autre part, il est possible que plusieurs formats soient présents dans le fichier RAR. On pourra alors configurer le serveur pour envoyer le type MIME <code>application/x-rar-compressed</code> bien qu'il soit probable qu'aucune action par défaut pour ce type MIME n'ait été définie côté utilisateur.</p>
 </li>
 <li>
  <p>Fichiers audios et vidéos. Seules les ressources associées à un type MIME approprié seront reconnues et lues dans les éléments {{ HTMLElement("video")}} ou {{HTMLElement("audio")}}. Vérifiez que vous utilisez <a href="/fr/docs/Web/HTML/Supported_media_formats">un format correct pour les fichiers audios et vidéos</a>.</p>
 </li>
 <li>
  <p>Les fichiers au format propriétaire. Il est nécessaire d'être vigilent lorsque l'on sert des fichiers propriétaires. Evitez autant que possible l'utilisation de <code>application/octet-stream</code> puisque ce type générique ne permet pas une gestion appropriée de la ressource.</p>
 </li>
</ul>

<h2 id="Détection_de_type_MIME">Détection de type MIME</h2>

<p>Lorsque le type MIME est absent ou lorsque le client détecte que le type MIME a été mal associé, les navigateurs peuvent pratiquer la détection de type MIME via l'analyse de la ressource. Chaque navigateur implémente cette technique différemment et l'utilise dans des contextes différents. Il existe des problématiques de sécurité, étant donné que certaines ressources sont des fichiers exécutables et d'autres non. Les serveurs peuvent empêcher la détection de type MIME par le navigateur en envoyant l'en-tête {{HTTPHeader("X-Content-Type-Options")}} associé à {{HTTPHeader("Content-Type")}}.</p>

<h2 id="Autres_méthodes_pour_transporter_le_format_dun_document">Autres méthodes pour transporter le format d'un document</h2>

<p>Les types MIME ne sont pas la seule façon existante pour gérer le format d'un document :</p>

<ul>
 <li>Les extensions de fichiers sont parfois utilisées, comme sur les systèmes d'exploitation Microsoft Windows. Tous les systèmes d'exploitation ne considèrent pas l'extension comme signifiante (en particulier Linux et Mac OS). De la même manière que pour les types MIME externes, il n'est pas garanti que le contenu soit effectivement du type correspondant à l'extension du document.</li>
 <li>Nombres magiques : La syntaxe de différents fichiers permet de déterminer le fichier en analysant son contenu, ainsi les fichiers GIF commencent par les valeurs hexadécimales 47 49 46 38 soit [GIF89], les fichiers PNG quant à eux commencent par 89 50 4E 47 soit [.PNG]. Néanmoins, tous les types de fichiers ne permettent pas d'utiliser des nombres magiques, il ne s'agit donc pas d'une technique infaillible.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types">Configurer proprement les types MIME côté serveur</a></li>
 <li>
  <p><a href="/fr/docs/Web/HTML/Supported_media_formats">Formats multimédias supportés pour les éléments HTML audio et vidéo</a></p>
 </li>
 <li>
  <p><a href="https://www.iana.org/assignments/media-types/application/json">https://www.iana.org/assignments/media-types/application/json</a></p>
 </li>
</ul>
