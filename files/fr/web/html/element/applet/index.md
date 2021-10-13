---
title: "<applet> : l'élément d'applet Java embarqué"
slug: Web/HTML/Element/applet
tags:
  - Element
  - HTML
  - Java
  - Deprecated
  - Reference
  - Web
  - applet
translation_of: Web/HTML/Element/applet
---
<div>{{HTMLRef}}</div>

<div class="warning">
  <p><strong>Attention :</strong> Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.</p>
</div>

<div class="warning">
  <p><strong>Attention :</strong> Cet élément a été retiré à partir de <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1279218">Gecko 56</a>, de <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=470301">Chrome 47</a> et le retrait est à l'étude pour <a href="https://bugs.webkit.org/show_bug.cgi?id=157926">WebKit</a> et <a href="https://developer.microsoft.com/fr/microsoft-edge/platform/issues/11946645/">Edge</a>.</p>
</div>

<p>L'élément <strong><code>&lt;applet&gt;</code></strong>, pour les applets, définit l'intégration d'un applet Java. Cet élément est désormais déprécié en faveur de <a href="/fr/docs/Web/HTML/Element/object"><code>&lt;object&gt;</code></a>.</p>

<p>L'utilisation d'applets Java sur le Web est dépréciée, la plupart des navigateurs ne prennent plus en charge les plugins Java.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content">contenu intégré</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content">contenu interactif</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs <a href="/fr/docs/Web/HTML/Element/param"><code>&lt;param&gt;</code></a> suivi d'un contenu <a href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model">transparent</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content">contenu intégré</a>.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><code>HTMLAppletElement</code> (supprimé)</td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément peut utiliser <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<dl>
  <dt><strong><code>align</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut est utilisé pour positionner l'applet sur la page en fonction du contenu qui l'entoure. La spécification HTML 4.01 définit l'utilisation des valeurs <code>bottom</code> (en bas), <code>left</code> (à gauche), <code>middle</code> (au milieu), <code>right</code> (à droite), et <code>top</code> (en haut), tandis que Microsoft et Netscape supporteraient également les valeurs <code>absbottom</code>, <code>absmiddle</code>, <code>baseline</code>, <code>center</code>, et <code>texttop</code>.</dd>
  <dt><strong><code>alt</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut génère un texte alternatif à afficher pour les navigateurs ne supportant pas Java. Il est à noter que le contenu de l'élément <code>&lt;applet&gt;</code> peut être également restitué comme du texte alternatif dans certains cas.</dd>
  <dt><strong><code>archive</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut fait référence à une version archivée ou compressée de l'applet et des fichiers classes associés, ce qui peut aider à réduire le temps de téléchargement.</dd>
  <dt><strong><code>code</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut définit l'URL du fichier classe de l'applet qui doit être chargé et exécuté. Les noms de fichiers pour les applets sont définis avec une extension en .class. L'URL définie par cet attribut peut être relative par rapport à l'attribut <code>codebase</code>.</dd>
  <dt><strong><code>codebase</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut donne une URL absolue ou relative du répertoire où les fichiers classes de l'applet (déclarés dans l'attribut <code>code</code>) doivent être placés.</dd>
  <dt><strong><code>datafld</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut, supporté par Internet Explorer à partir de sa version 4, définit le nom de colonne attribué aux objets de données fournis par les données attachées. Cet attribut peut être utilisé pour définir les différents éléments <a href="/fr/docs/Web/HTML/Element/param"><code>&lt;param&gt;</code></a> envoyés à l'applet Java.</dd>
  <dt><strong><code>datasrc</code></strong> {{deprecated_inline}}</dt>
  <dd>Comme l'attribut <code>datafld</code>, cet attribut est utilisé pour les données attachées sous Internet Explorer 4. Il indique un identifiant pour l'objet définissant la source des données qui seront attachées aux éléments <a href="/fr/docs/Web/HTML/Element/param"><code>&lt;param&gt;</code></a> associés à l'applet.</dd>
  <dt><strong><code>height</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut définit la hauteur dont l'applet à besoin, en pixels.</dd>
  <dt><strong><code>hspace</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut définit l'espace horizontal supplémentaire qui doit être réservé à côté de l'applet, en pixels.</dd>
  <dt><strong><code>mayscript</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut, concerné par l'implémentation effectuée dans Netscape, permet l'accès à l'applet par les scripts contenus dans le document.</dd>
  <dt><strong><code>name</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut donne un nom à l'applet afin qu'elle soit possiblement identifiée par d'autres ressources, notamment les scripts.</dd>
  <dt><strong><code>object</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut définit l'URL d'une représentation de l'applet.</dd>
  <dt><strong><code>src</code></strong> {{deprecated_inline}}</dt>
  <dd>Dans Internet Explorer 4 et ses versions ultérieures, cet attribut définit une URL pour le fichier associé à l'applet. La signification de cet attribut n'est pas claire et ne fait pas partie du standard HTML.</dd>
  <dt><strong><code>vspace</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut définit l'espace supplémentaire qui doit être réservé en haut et en bas de l'applet, en pixels.</dd>
  <dt><strong><code>width</code></strong> {{deprecated_inline}}</dt>
  <dd>Cet attribut définit la largeur, en pixels, dont l'applet a besoin</dd>
</dl>

<h2 id="example">Exemple</h2>

<h3 id="html">HTML</h3>

<pre class="brush: html">&lt;applet code="game.class" align="left" archive="game.zip" height="250" width="350"&gt;
  &lt;param name="difficulte" value="facile"&gt;
  &lt;b&gt;Vous avez besoin de Java pour activer cela.&lt;/b&gt;
&lt;/applet&gt;
</pre>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample("example","100%", 30)}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="notes">Notes</h2>

<p>La spécification W3C désapprouve l'utilisation de l'élément <code>&lt;applet&gt;</code> et conseille l'utilisation de l'élément <a href="/fr/docs/Web/HTML/Element/object"><code>&lt;object&gt;</code></a>. Pour HTML 4.01 cet élément est déprécié et est devenu entièrement obsolète sous HTML5.</p>
