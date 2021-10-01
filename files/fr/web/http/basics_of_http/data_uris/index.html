---
title: URLs de données
slug: Web/HTTP/Basics_of_HTTP/Data_URIs
tags:
  - Base64
  - Guide
  - HTTP
  - Intermédiaire
  - URL
translation_of: Web/HTTP/Basics_of_HTTP/Data_URIs
---
<div>{{HTTPSidebar}}</div>

<p><strong>Les URLs de données</strong>, les URLs préfixées par le schéma <code>data:</code>, permettent aux créateurs de contenu d'intégrer de petits fichiers dans des documents.</p>

<div class="note">
<p><strong>Note :</strong> Les URLs de données sont traitées comme des origines opaques uniques par les navigateurs modernes, ainsi, contrairement aux autres objets classiques, ces URLs n'héritent pas des propriétés de l'objet ayant mené à cette URL.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Les URLs de données sont composées de quatre parties : un préfixe (<code>data:</code>), un type MIME indiquant le type de donnée, un jeton facultatif encodé en <code>base64</code> dans le cas où il n'est pas textuel ainsi que les données elles-mêmes :</p>

<pre class="syntaxbox">data:[&lt;mediatype&gt;][;base64],&lt;data&gt;
</pre>

<p>Le <code>mediatype</code> est une chaîne de type MIME, telle que <code>'image/jpeg'</code> pour un fichier image JPEG. Si le format MIME n'est pas spécifié, la valeur par défaut sera <code>text/plain;charset=US-ASCII</code>.</p>

<p>Si les données sont textuelles, vous pouvez simplement incorporer le texte (en utilisant les entités appropriées ou les échappements basés sur le type de document englobant). Sinon, vous pouvez spécifier <code>base64</code> pour intégrer des données binaires encodées en base64.</p>

<p>Quelques exemples :</p>

<dl>
 <dt><code>data:,Hello%2C%20World!</code></dt>
 <dd>Texte simple / Données brutes</dd>
 <dt><code>data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D</code></dt>
 <dd>Version encodée en base64 de ce qui précède</dd>
 <dt><code>data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E</code></dt>
 <dd>Un document HTML avec <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code></dd>
 <dt><code>data:text/html,&lt;script&gt;alert('hi');&lt;/script&gt;</code></dt>
 <dd>Un document HTML exécutant une alerte JavaScript. Notez que la balise fermante du script est requise.</dd>
</dl>

<h2 id="Encodage_des_données_au_format_base64">Encodage des données au format base64</h2>

<p>Il est possible de le faire très simplement via la ligne de commande <code>uuencode</code> pour les systèmes Linux et Mac OS X :</p>

<pre>uuencode -m infile remotename
</pre>

<p>Le paramètre <code>infile</code> est le nom du fichier que vous souhaitez encoder au format base64, <code>remotename</code> est le nom du fichier distant qui n'est pas réellement utilisé dans l'URL de type <code>data</code>.</p>

<p>Le résultat devrait ressembler à :</p>

<pre>begin-base64 664 test
YSBzbGlnaHRseSBsb25nZXIgdGVzdCBmb3IgdGV2ZXIK
====
</pre>

<p>L'URL de donnée pourra ainsi utiliser la donnée encodée après l'en-tête.</p>

<h3 id="Dans_une_page_web_via_JavaScript">Dans une page web, via JavaScript</h3>

<p>Les APIs web contiennent des méthodes pour encoder et décoder en base64 : <a href="/fr/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">Décoder et encoder en base64</a>.</p>

<h2 id="Problèmes_habituels">Problèmes habituels</h2>

<p>Cette section décrit les problèmes qui apparaissent fréquemment lors de la création et de l'utilisation des URLs de type <code>data</code></p>

<pre>data:text/html,lots of text...&lt;p&gt;&lt;a name%3D"bottom"&gt;bottom&lt;/a&gt;?arg=val
</pre>

<p>Cela représente une ressource HTML dont le contenu est le suivant :</p>

<pre>beaucoup de texte...&lt;p&gt;&lt;a name="bottom"&gt;bottom&lt;/a&gt;?arg=val
</pre>

<dl>
 <dt>Syntaxe</dt>
 <dd>Le format pour les URLs de type <code>data</code> est très simple, mais il est aussi simple d'oublier la virgule qui précède le segment de données ou de mal encoder la donnée en base64.</dd>
 <dt>Mise en forme HTML</dt>
 <dd>Une URL de donnée expose un fichier dans un fichier, le fichier fourni peut éventuellement être bien plus gros que le fichier l'englobant. En tant qu'URL, une URL de donnée devrait pouvoir être mise en forme à l'aide de caractères d'espacement (retour chariot, tabulation ou espace), néanmoins, des limitations pratiques apparaissent lorsqu'il s'agit d'effectuer <a class="external" href="https://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12">l'encodage en base64</a>.</dd>
 <dt>Limitations sur la longueur</dt>
 <dd>Bien que Firefox supporte les URLs de données ayant une taille virtuellement infinie, il est important de noter que les navigateurs ne sont pas obligés de supporter une longueur maximale de donnée. Ainsi dans Opera 11 les URLs ont une longueur maximale de 65535 caractères, limitant ainsi la longueur de la donnée utilisable dans les URLs de données à 65529 caractères si celle-ci est encodée.</dd>
 <dt>Absence de gestion d'erreur</dt>
 <dd>Les paramètres invalides dans le format MIME ou les coquilles lorsque l'on spécifie <code>'base64'</code>, sont ignorés mais aucune erreur n'est retournée.</dd>
 <dt>Aucun support des requêtes via l'URL, etc</dt>
 <dd>
 <p>La donnée au sein de l'URL de donnée est opaque, ainsi toute tentative d'utiliser une chaîne de paramètres de recherche comme on le ferait avec une URL classique à l'aide de la syntaxe <code>&lt;url&gt;?parameter-data</code>) avec une URL de donnée ne ferait qu'inclure les paramètres de l'URL au sein de la donnée.</p>
 </dd>
 <dt>Problèmes de sécurité</dt>
 <dd>De nombreux problèmes de sécurité (comme le phishing) ont été associés au URLs de donnés et du fait qu'elle puisse avoir un accès direct au navigateur. Afin de réduire l'impact de ces problèmes, la navigation à la racine via des URLs de données <code>data://</code> a été bloquée dans Firefox 59+ (en version finale, Nightly/Beta bloquent à partir de la version 58). Nous espérons voir d'autres navigateurs nous emboîter le pas prochainement. <a href="https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-58/">Voir Blocking Top-Level Navigations to data URLs for Firefox 58</a> pour plus de détails.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Titre</th>
  </tr>
  <tr>
   <td>{{RFC("2397")}}</td>
   <td>Le schéma d'URL "data"</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{compat("http.data-url")}}</p>

<h2 id="Voir_aussi">Voir_aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">Décoder et encoder en base64</a></li>
 <li>{{domxref("WindowBase64.atob","atob()")}}</li>
 <li>{{domxref("WindowBase64.btoa","btoa()")}}</li>
 <li><a href="/fr/docs/Web/CSS/uri">CSS <code>url()</code></a></li>
 <li><a href="/fr/docs/Glossary/URI">URI</a></li>
</ul>
