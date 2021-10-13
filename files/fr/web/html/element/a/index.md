---
title: '<a> : l''élément d''ancre'
slug: Web/HTML/Element/a
tags:
  - Content
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Interactive content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Inline element
  - Reference
  - Web
translation_of: Web/HTML/Element/a
browser-compat: html.elements.a
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;a&gt;</code></strong> (pour ancre ou <i>anchor</i> en anglais), avec <a href="#href">son attribut <code>href</code></a>, crée un lien hypertexte vers des pages web, des fichiers, des adresses e-mail, des emplacements se trouvant dans la même page, ou tout ce qu'une URL peut adresser. Le contenu de chaque élément <code>&lt;a&gt;</code> <b>doit</b> indiquer la destination du lien. Si <a href="#href">l'attribut <code>href</code></a> est présent, appuyer sur la touche entrée en se concentrant sur l'élément <code>&lt;a&gt;</code> l'activera.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/a.html")}}</div>

<h2 id="attributes">Attributs</h2>

<p>Cet élément inclut les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a>.</p>

<dl>
  <dt><strong><code>download</code></strong></dt>
  <dd>
    <p>Sans valeur, le navigateur proposera un nom de fichier/extension, généré à partir de diverses sources :</p>
      <ul>
          <li>L'en-tête HTTP <a href="/fr/docs/Web/HTTP/Headers/Content-Disposition"><code>Content-Disposition</code></a></li>
          <li>Le segment final dans l'URL : <a href="/fr/docs/Web/API/URL/pathname">path</a></li>
          <li>Le <a href="/fr/docs/Glossary/MIME_type">Type MIME</a> (de l'en-tête <a href="/fr/docs/Web/HTTP/Headers/Content-Type"><code>Content-Type</code></a>, le début d'une URL <a href="/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"><code>data:</code></a>, ou <a href="/fr/docs/Web/API/Blob/type"><code>Blob.type</code></a> pour une URL <a href="/fr/docs/Web/API/URL/createObjectURL"><code>blob:</code></a>).</li>
      </ul>
      <p>La définition d'une valeur la suggère comme nom de fichier. Les caractères <code>/</code> et <code>\</code> sont convertis en caractères de soulignement (<code>_</code>). Les systèmes de fichiers peuvent interdire d'autres caractères dans les noms de fichiers, les navigateurs ajusteront donc le nom suggéré si nécessaire.</p>
    <div class="note">
      <p><strong>Note :</strong></p>
      <ul>
        <li><code>download</code> ne fonctionne que pour <a href="/fr/docs/Web/Security/Same-origin_policy">les URLs de même origine</a>, ou les schémas <code>blob:</code> et <code>data:</code>.</li>
        <li>
          <p>Si l'en-tête <code>Content-Disposition</code> comporte des informations différentes de celles de l'attribut <code>download</code>, le comportement résultant peut différer :</p>
          <ul>
            <li>Si l'en-tête spécifie un <code>nom de fichier</code>, il a priorité sur un nom de fichier spécifié dans l'attribut <code>download</code>.</li>
            <li>Si l'en-tête spécifie une disposition de <code>inline</code>, Chrome, et Firefox 82+, donnent la priorité à l'attribut et le traitent comme un téléchargement. Les versions de Firefox antérieures à 82 donnent la priorité à l'en-tête et affichent le contenu en ligne.</li>
          </ul>
        </li>
      </ul>
    </div>
  </dd>
  <dt><strong><code>href</code></strong></dt>
  <dd>
    <p>L'URL vers laquelle pointe l'hyperlien. Les liens ne sont pas limités aux URL basées sur HTTP - ils peuvent utiliser n'importe quel schéma d'URL pris en charge par les navigateurs :</p>
    <ul>
      <li>Sections d'une page avec des fragments d'URL</li>
      <li>Des morceaux de fichiers médias avec des fragments de médias</li>
      <li>Les numéros de téléphone avec l'URL <code>tel:</code>.</li>
      <li>Les adresses électroniques avec l'URL <code>mailto:</code>.</li>
      <li>Bien que les navigateurs web puissent ne pas prendre en charge d'autres schémas d'URL, les sites web le peuvent avec <a href="/fr/docs/Web/API/Navigator/registerProtocolHandler"><code>registerProtocolHandler()</code></a>.</li>
    </ul>
  </dd>
  <dt><strong><code>hreflang</code></strong></dt>
  <dd>Donne des indications sur le langage humain de l'URL liée. Aucune fonctionnalité intégrée. Les valeurs autorisées sont les mêmes que <a href="/fr/docs/Web/HTML/Global_attributes/lang">l'attribut global <code>lang</code></a>.</dd>
  <dt><strong><code>ping</code></strong></dt>
  <dd>Contient une liste d'URL séparées par des espaces vers lesquelles sont envoyées des requêtes <a href="/fr/docs/Web/HTTP/Methods/POST"><code>POST</code></a> avec le corps <code>PING</code> lorsque l'utilisateur suit le lien. Cet attribut est généralement utilisé pour tracer un utilisateur.</dd>
  <dt><strong><code>referrerpolicy</code></strong> {{experimental_inline}}</dt>
  <dd>La portion du <a href="/fr/docs/Web/HTTP/Headers/Referer">referrer</a> envoyer lors du suivi du lien. Voir <a href="/fr/docs/Web/HTTP/Headers/Referrer-Policy"><code>Referrer-Policy</code></a> pour les valeurs possibles et leurs effets.</dd>
  <dt><strong><code>rel</code></strong></dt>
  <dd>Cet attribut indique la relation entre la cible du lien et l'objet faisant le lien. La valeur est une liste de <a href="/fr/docs/Web/HTML/Link_types">types de liens</a> séparés par des espaces.</dd>
  <dt><strong><code>target</code></strong></dt>
  <dd>Où afficher l'URL liée, comme nom d'un <em>contexte de navigation</em> (un onglet, une fenêtre ou un <a href="/fr/docs/Web/HTML/Element/iframe"><code>&lt;iframe&gt;</code></a>). Les mots-clés suivants ont des significations spéciales pour l'endroit où charger l'URL :
    <ul>
      <li><code>_self</code> : le contexte de navigation actuel. (Par défaut)</li>
      <li><code>_blank</code> : généralement un nouvel onglet, mais les utilisateurs peuvent configurer les navigateurs pour ouvrir une nouvelle fenêtre à la place.</li>
      <li><code>_parent</code> : le contexte de navigation parent de celui en cours. S'il n'y a pas de parent, il se comporte comme <code>_self</code>.</li>
      <li><code>_top</code> : le contexte de navigation le plus haut (le contexte "le plus haut" qui est un ancêtre du contexte actuel). S'il n'a aucun ancêtre, il se comporte comme <code>_self</code>.</li>
    </ul>
    <div class="note">
      <p><strong>Note :</strong>Définir <code>target="_blank"</code> sur les éléments <code>&lt;a&gt;</code> fournit implicitement le même comportement <code>rel</code> que définir <a href="/fr/docs/Web/HTML/Link_types/noopener"><code>rel="noopener"</code></a> qui ne définit pas <code>window.opener</code>. Voir la <a href="#browser_compatibility">compatibilité des navigateurs</a> pour le support.</p>
    </div>
  </dd>
  <dt><strong><code>type</code></strong></dt>
  <dd>Donne des indications sur le format de l'URL liée avec un <a href="/fr/docs/Glossary/MIME_type">Type MIME</a>. Aucune fonctionnalité intégrée.</dd>
</dl>

<h3 id="deprecated_attributes">Attributs obsolètes</h3>

<dl>
  <dt><strong><code>charset</code></strong> {{Deprecated_Inline}}</dt>
  <dd>Fait allusion aux <a href="/fr/docs/Glossary/character_encoding">encodages des caractères</a> de l'URL liée.
    <div class="note">
      <p><strong>Note :</strong>Cet attribut est déprécié et <strong>ne doit pas être utilisé par les auteurs</strong>. Utilisez l'en-tête HTTP <a href="/fr/docs/Web/HTTP/Headers/Content-Type"><code>Content-Type</code></a> sur l'URL liée.</p>
    </div>
  </dd>
  <dt><strong><code>coords</code></strong> {{Deprecated_Inline}}</dt>
  <dd>Utilisé avec <a href="#shape">l'attribut <code>shape</code></a>. Une liste de coordonnées séparées par des virgules.</dd>
  <dt><strong><code>name</code></strong> {{Deprecated_Inline}}</dt>
  <dd>Était nécessaire pour définir un emplacement cible possible dans une page. En HTML 4.01, <code>id</code> et <code>name</code> pouvaient tous deux être utilisés sur <code>&lt;a&gt;</code>, pour autant qu'ils aient des valeurs identiques.
    <div class="note">
      <p><strong>Note :</strong>Utilisez l'attribut universel <a href="/fr/docs/Web/HTML/Global_attributes#attr-id"><code>id</code></a> à la place.</p>
    </div>
  </dd>
  <dt><strong><code>rev</code></strong> {{Deprecated_Inline}}</dt>
  <dd>Spécifiait un lien inverse ; l'opposé de <a href="#rel">l'attribut <code>rel</code></a>. Déprécié pour avoir été très confus.</dd>
  <dt><strong><code>shape</code></strong> {{Deprecated_Inline}}</dt>
  <dd>La forme de la région de l'hyperlien dans une carte d'image.
    <div class="note">
      <p><strong>Note :</strong>Utilisez plutôt l'élément <a href="/fr/docs/Web/HTML/Element/area"><code>&lt;area&gt;</code></a> pour les cartes d'images.</p>
    </div>
  </dd>
</dl>

<h2 id="properties">Propriétés</h2>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu du flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content">contenu interactif</a>, contenu palpable.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#transparent_content_model">Transparent</a>, contenant soit le <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu du flux</a> (à l'exclusion du <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content">contenu interactif</a>), soit <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">la formulation du contenu</a>, ou tout élément qui accepte <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">le contenu du flux</a>, mais pas les autres éléments <code>&lt;a&gt;</code>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://w3c.github.io/aria/#link">lien</a> lorsque l'attribut <code>href</code> est présent, sinon <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">pas de rôle correspondant</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <p>Lorsque l'attribut <code>href</code> est présent :</p>
        <ul>
          <li><a href="https://w3c.github.io/aria/#button">button</a></li>
          <li><a href="https://w3c.github.io/aria/#checkbox">checkbox</a></li>
          <li><a href="https://w3c.github.io/aria/#menuitem">menuitem</a></li>
          <li><a href="https://w3c.github.io/aria/#menuitemcheckbox">menuitemcheckbox</a></li>
          <li><a href="https://w3c.github.io/aria/#menuitemradio">menuitemradio</a></li>
          <li><a href="https://w3c.github.io/aria/#option">option</a></li>
          <li><a href="https://w3c.github.io/aria/#radio">radio</a></li>
          <li><a href="https://w3c.github.io/aria/#switch">switch</a></li>
          <li><a href="https://w3c.github.io/aria/#tab">tab</a></li>
          <li><a href="https://w3c.github.io/aria/#treeitem">treeitem</a></li>
        </ul>
        <p>Lorsque l'attribut <code>href</code> n'est pas présent :</p>
        <ul>
          <li>tout</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLAnchorElement"><code>HTMLAnchorElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="examples">Exemples</h2>

<h3 id="linking_to_an_absolute_url">Créer un lien vers une URL absolue</h3>

<h4 id="html">HTML</h4>

<pre class="brush: html">&lt;a href="https://www.mozilla.com"&gt;
  Mozilla
&lt;/a&gt;</pre>

<h4 id="result">Résultat</h4>

<p>{{EmbedLiveSample("linking_to_an_absolute_url", "100%", 50)}}</p>

<h3 id="linking_to_relative_urls">Créer des liens vers des URL relatives</h3>

<h4 id="html_2">HTML</h4>

<pre class="brush: html">&lt;a href="//example.com"&gt;URL relative au schéma&lt;/a&gt;
&lt;a href="/fr/docs/Web/HTML"&gt;URL relative à l'origine&lt;/a&gt;
&lt;a href="./p"&gt;URL relative au répertoire&lt;/a&gt;</pre>

<pre class="brush: css hidden">a { display: block; margin-bottom: 0.5em }</pre>

<h4 id="result_2">Résultat</h4>

<p>{{EmbedLiveSample("linking_to_relative_urls", "100%", 120)}}</p>

<h3 id="linking_to_an_element_on_the_same_page">Créer un lien vers un élément de la même page</h3>

<pre class="brush: html">&lt;!-- &lt;a&gt; élément liens vers la section ci-dessous --&gt;
&lt;p&gt;&lt;a href="#section_further_down"&gt;
  Passez à la rubrique ci-dessous
&lt;/a&gt;&lt;/p&gt;

&lt;!-- Rubrique à relier --&gt;
&lt;h2 id="section_further_down"&gt;Section plus bas&lt;/h2&gt;</pre>

<div class="note">
  <p><strong>Note :</strong>Vous pouvez utiliser <code>href="#top"</code> ou le fragment vide (<code>href="#"</code>) pour créer un lien vers le haut de la page actuelle, <a href="https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier">comme défini dans la spécification HTML</a>.</p>
</div>

<h3 id="linking_to_an_email_address">Créer un lien avec une adresse électronique</h3>

<p>Pour créer des liens qui s'ouvrent dans le programme de messagerie de l'utilisateur, pour lui permettre d'envoyer un nouveau message, utilisez le schéma <code>mailto:</code> :</p>

<pre class="brush: html">&lt;a href="mailto:nowhere@mozilla.org"&gt;Envoyer un courriel nulle part&lt;/a&gt;</pre>

<p>Pour plus de détails sur les URL <code>mailto:</code>, comme l'inclusion d'un sujet ou d'un corps de message, voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#e-mail_links">Liens de courrier électronique</a> ou <a href="https://tools.ietf.org/html/rfc6068">RFC 6068</a>.</p>

<h3 id="linking_to_telephone_numbers">Créer un lien avec les numéros de téléphone</h3>

<pre class="brush: html">&lt;a href="tel:+49.157.0156"&gt;+49 157 0156&lt;/a&gt;
&lt;a href="tel:+1(555)5309"&gt;(555) 5309&lt;/a&gt;</pre>

<p><code>tel:</code> le comportement du lien varie en fonction des capacités du périphérique :</p>

<ul>
  <li>Les appareils cellulaires composent automatiquement le numéro.</li>
  <li>La plupart des systèmes d'exploitation disposent de programmes permettant de passer des appels, comme Skype ou FaceTime.</li>
  <li>Les sites web peuvent passer des appels téléphoniques avec <a href="/fr/docs/Web/API/Navigator/registerProtocolHandler"><code>registerProtocolHandler</code></a>, comme <code>web.skype.com</code>.</li>
  <li>Les autres comportements comprennent l'enregistrement du numéro dans les contacts, ou l'envoi du numéro à un autre appareil.</li>
</ul>

<p>Voir <a href="https://tools.ietf.org/html/rfc3966">RFC 3966</a> pour la syntaxe, les fonctionnalités supplémentaires et d'autres détails sur le schéma URL <code>tel:</code>.</p>

<h3 id="using_the_download_attribute_to_save_a_canvas_as_a_png">Utilisation de l'attribut de téléchargement pour enregistrer un &lt;canvas&gt; au format PNG.</h3>

<p>Pour enregistrer le contenu d'un élément <a href="/fr/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a> sous forme d'image, vous pouvez créer un lien avec un attribut <code>download</code> et les données du canvas sous forme d'une URL <code>data:</code> :</p>

<h4 id="example_painting_app_with_save_link">Exemple d'application de peinture avec lien de sauvegarde</h4>

<h5 id="html_3">HTML</h5>

<pre class="brush: html">&lt;p&gt;
  Peignez en maintenant le bouton de la souris enfoncé et en le déplaçant.
  &lt;a href="" download="my_painting.png"&gt;Télécharger ma peinture&lt;/a&gt;
&lt;/p&gt;

&lt;canvas width="300" height="300"&gt;&lt;/canvas&gt;</pre>

<h5 id="css_2">CSS</h5>

<pre class="brush: css">html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}</pre>

<h5 id="javascript">JavaScript</h5>

<pre class="brush: js">var canvas = document.querySelector('canvas'),
    c = canvas.getContext('2d');
c.fillStyle = 'hotpink';

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI*2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener('mousemove', event =&gt;
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener('mousedown', () =&gt; isDrawing = true);
canvas.addEventListener('mouseup', () =&gt; isDrawing = false);

document.querySelector('a').addEventListener('click', event =&gt;
  event.target.href = canvas.toDataURL()
);</pre>

<h5 id="result_3">Résultat</h5>

<p>{{EmbedLiveSample('example_painting_app_with_save_link', '100%', '420')}}</p>

<h2 id="security_and_privacy">Sécurité et vie privée</h2>

<p>Les éléments <code>&lt;a&gt;</code> peuvent avoir des conséquences sur la sécurité et la vie privée des utilisateurs. Voir <a href="/fr/docs/Web/Security/Referer_header:_privacy_and_security_concerns"><code>Referer</code> header : privacy and security concerns</a> pour plus d'informations.</p>

<p>L'utilisation de <code>target="_blank"</code> sans <a href="/fr/docs/Web/HTML/Link_types/noreferrer"><code>rel="noreferrer"</code></a> et <a href="/fr/docs/Web/HTML/Link_types/noopener"><code>rel="noopener"</code></a> rend le site web vulnérable aux attaques d'exploitation de l'API <a href="/fr/docs/Web/API/Window/opener"><code>window.opener</code></a> (<a href="https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/">description de la vulnérabilité</a>), bien qu'il faille noter que, dans les versions plus récentes du navigateur, la définition de <code>target="_blank"</code> fournit implicitement la même protection que la définition de <code>rel="noopener"</code>. Voir la <a href="#browser_compatibility">compatibilité des navigateurs</a> pour plus de détails.</p>

<h2 id="Accessibilité">Accessibilité</h2>

<h3 id="strong_link_text">Texte de lien fort</h3>

<p><strong>Le contenu d'un lien doit indiquer où va le lien</strong>, même hors contexte.</p>

<h4 id="inaccessible_weak_link_text">Texte inaccessible, lien faible</h4>

<p>Une erreur tristement courante consiste à ne relier que les mots « cliquez ici » ou « ici » :</p>

<pre class="brush: html example-bad">&lt;p&gt;
  En savoir plus sur nos produits &lt;a href="/products"&gt;ici&lt;/a&gt;.
&lt;/p&gt;
</pre>

<h4 id="strong_link_text_2">Texte de lien fort</h4>

<p>Heureusement, il s'agit d'une solution facile, et elle est en fait plus courte que la version inaccessible !</p>

<pre class="brush: html example-good">&lt;p&gt;
  En savoir plus &lt;a href="/products"&gt;à propos de nos produits&lt;/a&gt;.
&lt;/p&gt;</pre>

<p>Les logiciels d'assistance disposent de raccourcis permettant de lister tous les liens d'une page. Cependant, un texte de lien fort profite à tous les utilisateurs − le raccourci « liste de tous les liens » imite la façon dont les utilisateurs voyants parcourent rapidement les pages.</p>

<h3 id="onclick_events">Évènements <code>onclick</code></h3>

<p>Les ancres sont souvent détournées avec l'évènement <code>onclick</code> afin de créer des pseudo-boutons avec l'attribut <code>href</code> qui vaut <code>"#"</code> ou <code>"javascript:void(0)"</code> pour empêcher le rafraîchissement de la page.</p>

<p>Ces valeurs produisent des résultats inadéquats lorsqu'on copie/déplace des liens, qu'on ouvre des liens dans de nouveaux onglets ou fenêtres, qu'on ajoute des marque-pages ou lorsque le JavaScript est encore en train d'être téléchargé. De plus, la sémantique exposée par le document, utilisée par les outils d'assistance, est incorrecte.</p>

<p>Dans ces cas, on privilégiera plutôt l'utilisation d'un bouton <a href="/fr/docs/Web/HTML/Element/Button"><code>&lt;button&gt;</code></a>. De façon générale, une ancre ne doit être utilisée que pour naviguer vers une URL correcte.</p>

<h3 id="external_links_and_linking_to_non-html_resources">Liens externes, liens vers des ressources non-HTML</h3>

<p>Les liens qui ouvrent un nouvel onglet ou une nouvelle fenêtre grâce à <code>target="_blank"</code>, ainsi que les liens qui ouvrent des fichiers devraient fournir une indication sur ce qui se produira lorsqu'on cliquera sur ces liens.</p>

<p>Les personnes qui utilisent des outils d'assistance à la navigation comme des lecteurs d'écran et/ou qui souffrent de troubles de la vision, cognitifs peuvent être confuses lorsqu'un nouvel onglet, fichier ou une nouvelle fenêtre s'ouvre de façon inattendue. Les anciennes versions des lecteurs d'écran peuvent également ne pas annoncer ce comportement.</p>

<h4 id="link_that_opens_a_new_tabwindow">Lien vers un nouvel onglet ou une nouvelle fenêtre</h4>

<pre class="brush: html">&lt;a target="_blank" href="https://www.wikipedia.org/"&gt;
  Wikipédia (s'ouvre dans une nouvelle fenêtre)
&lt;/a&gt;</pre>

<h4 id="link_to_a_non-html_resource">Lien vers une ressource non-HTML</h4>

<pre class="brush: html">&lt;a target="_blank" href="2017-rapport-annuel.ppt"&gt;
  Rapport annuel 2017 (PowerPoint)
&lt;/a&gt;</pre>

<p>Si une icône est utilisée en lieu et place du texte pour indiquer ce comportement, on s'assurera qu'elle contient bien <a href="/fr/docs/Web/HTML/Element/Img#attr-alt">une description alternative</a>.</p>

<pre class="brush: html">&lt;a  target="_blank" href="https://www.wikipedia.org"&gt;
  Wikipédia
  &lt;img alt="(s'ouvre dans un nouvel onglet)" src="newtab.svg"&gt;
&lt;/a&gt;

&lt;a href="2017-annual-report.ppt"&gt;
  Rapport annuel 2017 (PowerPoint)
  &lt;img alt="(fichier PowerPoint)" src="ppt-icon.svg"&gt;
&lt;/a&gt;</pre>

<ul>
  <li><a href="https://webaim.org/techniques/hypertext/hypertext_links">WebAIM : Liens et hypertexte (en anglais)</a></li>
  <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways">Comprendre les règles WCAG 3.2</a></li>
  <li><a href="https://www.w3.org/TR/WCAG20-TECHS/G200.html">G200 : Ouvrir de nouvelles fenêtres et onglets à partir d'un lien lorsque c'est strictement nécessaire - WCAG 2.0 (en anglais)</a></li>
  <li><a href="https://www.w3.org/TR/WCAG20-TECHS/G201.html">G201 : Fournir un avertissement aux utilisateurs lorsqu'ils ouvrent une nouvelle fenêtre WCAG 2.0 (en anglais)</a></li>
</ul>

<h3 id="skip_links"><i>Skip links</i> - liens pour l'accès rapide au contenu</h3>

<p>Un <i>skip link</i> (aussi appelé <i>skipnav</i> en anglais) est un élément <code>a</code> qui est placé le plus près possible de l'élément <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a> et qui renvoie au début du contenu principal de la page.</p>

<pre class="brush: html">&lt;body&gt;
  &lt;a href="#content"&gt;Skip to main content&lt;/a&gt;

  &lt;header&gt;
    …
  &lt;/header&gt;

  &lt;main id="content"&gt; &lt;!-- Le lien "skip" renvoie vers ici --&gt;</pre>

<p>Ce lien permet alors de passer plus facilement le contenu qui se répète sur l'ensemble des pages (l'en-tête et la barre de navigation par exemple).</p>

<p>Les <i>skip links</i> sont particulièrement utiles pour les personnes qui naviguent à l'aide d'outils d'assistance (commande vocale, stylets buccal ou frontal) pour lesquels devoir passer par des liens répétés peut freiner la lecture du document.</p>

<ul>
  <li><em><a href="https://webaim.org/techniques/skipnav/">WebAIM: "Skip Navigation" Links</a></em> (en anglais)</li>
  <li><a href="https://a11yproject.com/posts/2013-05-11-skip-nav-links/">Comment utiliser les <i>skip links</i> - <i>The A11Y Project</i> (en anglais)</a></li>
  <li><a href="/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are">Comprendre les règles WCAG 2.4</a></li>
  <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html"><i>Understanding Success Criterion 2.4.1 - W3C Understanding WCAG 2.0</i> (en anglais)</a></li>
</ul>

<h3 id="size_and_proximity">Dimensionnement et proximité</h3>

<h4 id="size">La taille</h4>

<p>Les éléments interactifs tels que les liens doivent fournir une surface suffisamment grande pour qu'il soit facile de les activer. Cela facilitera la tâche à une variété de personnes : celles qui ont des problèmes moteur, celles qui utilisent des dispositifs de pointage peu précis (doigt ou stylet). La taille interactive minimale recommandée est de 44x44 <a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels">pixels CSS</a>.</p>

<p>Les liens en texte seul dans le contenu en prose sont exemptés de cette exigence, mais il est toujours bon de s'assurer qu'il y a suffisamment de texte hyperlié pour être facilement activé.</p>

<ul>
  <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Comprendre le critère d'accessibilité 2.5.5 sur la taille des cibles - Comprendre WCAG 2.1 (en anglais)</a></li>
  <li><a href="https://adrianroselli.com/2019/06/target-size-and-2-5-5.html">Taille des cibles et critère 2.5.5, (en anglais) d'Adrian Roselli (an anglais)</a></li>
  <li><a href="https://a11yproject.com/posts/large-touch-targets/">Test rapide : cibles tactiles suffisamment grande - Projet A11Y (en anglais)</a></li>
</ul>

<h4 id="proximity">La proximité</h4>

<p>Lorsque plusieurs contenus interactifs (y compris les ancres) sont placés les uns à côté des autres, il est nécessaire de les espacer suffisamment pour minimiser le risque d'activer le mauvais contenu lors de la navigation.</p>

<p>Un tel espacement peut être obtenu grâce à la propriété CSS <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>.</p>

<ul>
  <li><a href="https://axesslab.com/hand-tremors/">Les tremblements de la main et le problème du bouton géant - Axess Lab (en anglais)</a></li>
</ul>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a> est similaire à <code>&lt;a&gt;</code>, mais représente des hyperliens de métadonnées qui sont invisibles pour les utilisateurs.</li>
  <li><a href="/fr/docs/Web/CSS/:link"><code>:link</code></a> est une pseudo-classe CSS qui correspondra aux éléments <code>&lt;a&gt;</code> avec des attributs <code>href</code> valides.</li>
</ul>
