---
title: <source>
slug: Web/HTML/Element/Source
tags:
  - Element
  - HTML
  - Media
  - Reference
  - Web
translation_of: Web/HTML/Element/source
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;source&gt;</code></strong> définit différentes ressources média pour un élément {{HTMLElement("picture")}}, {{HTMLElement("audio")}} ou {{HTMLElement("video")}}. C'est un élément vide : il ne possède pas de contenu et ne nécessite pas de balise fermante. Il est généralement utilisé pour distribuer le même contenu en utilisant <a href="/fr/docs/Web/HTML/formats_media_support">les différents formats pris en charge par les différents navigateurs</a>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("media")}}</dt>
 <dd><a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries">Une requête média</a> pour sélectionner la source du média. Cet attribut doit uniquement être utilisé pour un élément {{HTMLElement("picture")}}.</dd>
 <dt>{{htmlattrdef("sizes")}}</dt>
 <dd>Cet attribut est une liste de chaîne de caractères, séparées par des virgules, dont chacune décrit une condition de taille. Cette information est utilisée par le navigateur, avant la disposition de la page, pour déterminer quelle image parmi celles définies via l'attribut {{htmlattrxref("srcset", "source")}}. Cet attribut aura un effet uniquement lorsque l'élément {{HTMLElement("source")}} est un élément fils direct d'un élément {{HTMLElement("picture")}}.</dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>Cet attribut est obligatoire pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}}. Il définit l'adresse de la ressource. La valeur de cet attribut est ignorée lorsque l'élément <code>&lt;source&gt;</code> est à l'intérieur d'un élément{{HTMLElement("picture")}}.</dd>
 <dt>{{htmlattrdef("srcset")}}</dt>
 <dd>Une liste d'une ou plusieurs chaînes de caractères, séparées par des virgules. Cette liste indique un ensemble d'images qui peuvent être utilisées comme sources par le navigateur. Chaque chaîne de caractères se compose :
 <ol>
  <li>D'une URL pointant vers l'image,</li>
  <li>D'un descripteur de largeur, c'est un entier positif, directement suivi par <code>'w'</code>. La valeur par défaut, si ce descripteur est absent, correspond à l'infini positif.</li>
  <li>D'un descripteur de densité de pixel, c'est un nombre décimal positif, directement suivi par <code>'x'</code>. La valeur par défaut, si ce descripteur est absent, est <code>1x</code>.</li>
 </ol>

 <p>Pour être valide, chaque chaîne de caractères doit comporter au moins un descripteur de largeur ou un descripteur de densité de pixel. Dans cette liste, il ne peut y avoir qu'une seule chaîne pour un même couple de descripteurs largeur/pixels. Le navigateur choisira la meilleure image parmi celles fournies dans la liste.<br>
  L'attribut <code>srcset</code> n'aura un effet que lorsque l'élément {{HTMLElement("source")}} est le fils direct de l'élément {{HTMLElement("picture")}}.</p>
 </dd>
 <dt>{{htmlattrdef("type")}}</dt>
 <dd>Le type MIME de la ressource, éventuellement complété d'un paramètre <code>codecs</code>. <a class="external" href="https://tools.ietf.org/html/rfc4281">La RFC 4281</a> indique comment indiquer des codecs. Si l'attribut <code>type</code> n'est pas défini, le type de média est récupéré depuis le serveur et le navigateur vérifie s'il peut le gérer. Si le fichier ne peut être utilisé, la source suivante est contrôlée et ainsi de suite. Si l'attribut <code>type</code> est indiqué, le navigateur le compare avec la liste des types qu'il prend en charge, si le type n'est pas reconnu, le serveur n'est pas interrogé et le navigateur analyse l'élément <code>&lt;source&gt;</code> qui suit.</dd>
</dl>

<h2 id="Notes_d'utilisation">Notes d'utilisation</h2>

<p>L'élément <code>&lt;source&gt;</code> est un <em>élément vide</em> ce qui signifie qu'il n'a aucun contenu et qu'il n'y a pas de balise fermante associée. Autrement dit, on n'utilisera pas <code>&lt;/source&gt;</code> dans le code d'un document HTML.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Vidéo">Vidéo</h3>

<p>Dans cet exemple, on voit comment distribuer une vidéo au format Ogg pour les navigateurs qui prennent en charge ce format, la même vidéo au format QuickTime pour d'autres voire au format webm. Si le navigateur ne prend pas en charge <code>&lt;audio&gt;</code> ou <code>&lt;video&gt;</code>, un message sera affiché. Si le navigateur prend en charge l'élément mais aucun des formats proposé, un évènement <code>error</code> sera déclenché et le lecteur média (s'il est activé) indiquera une erreur. <a href="/fr/docs/Web/HTML/formats_media_support">Cette page indique les différents formats pris en charge par les navigateurs</a> pour les éléments <code>&lt;audio&gt;</code> et <code>&lt;video&gt;</code>.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;video controls&gt;
  &lt;source src="toto.webm" type="video/webm"&gt;
  &lt;source src="toto.ogg" type="video/ogg"&gt;
  &lt;source src="toto.mov" type="video/quicktime"&gt;
  Votre navigateur ne prend pas en charge audio ou video.
&lt;/video&gt;
</pre>

<p>Pour plus d'exemples, se référer à <a href="/fr/docs/Web/HTML/Utilisation_d'audio_et_video_en_HTML5">Manipuler les éléments <code>&lt;audio&gt;</code> et <code>&lt;video&gt;</code> dans Firefox</a>.</p>

<h3 id="Image">Image</h3>

<pre class="brush: html">&lt;picture&gt;
   &lt;source srcset="mdn-logo-wide.png" media="(min-width: 800px)"&gt;
   &lt;source srcset="mdn-logo-medium.png" media="(min-width: 600px)"&gt;
   &lt;img src="mdn-logo-narrow.png" alt="MDN"&gt;
&lt;/picture&gt;
</pre>

<p>Avec l'élément {{HTMLElement("picture")}}, il faut toujours inclure un élément {{HTMLElement("img")}} comme image de secours, avec un attribut <code>alt</code> qui garantit une certaine accessibilité.</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td>Aucune.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Aucun, c'est un élément vide.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>Cet élément doit avoir une balise ouvrante mais pas de balise fermante.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Parents autorisés</dfn></th>
   <td>
    <div>Un élément média —{{HTMLElement("audio")}} ou {{HTMLelement("video")}}— pour lequel l'élément <code>&lt;source&gt;</code> doit être placé avant <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">tout contenu de flux</a> ou tout élément {{HTMLElement("track")}}.</div>

    <div>Un élément {{HTMLElement("picture")}}, pour lequel l'élément <code>&lt;source&gt;</code> doit être placé avant tout élément {{HTMLElement("img")}}.</div>
   </td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Aucun.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLSourceElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'embedded-content.html#the-source-element', '&lt;source&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.source")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("picture")}}</li>
 <li>{{HTMLElement("audio")}}</li>
 <li>{{HTMLElement("video")}}</li>
 <li><a href="/fr/docs/Learn/Performance">Les performances sur le Web</a></li>
</ul>
