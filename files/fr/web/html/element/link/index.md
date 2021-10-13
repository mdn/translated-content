---
title: '<link> : l''élément de lien vers des ressources externes'
slug: Web/HTML/Element/link
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/link
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML<strong> <code>&lt;link&gt;</code></strong> définit la relation entre le document courant et une ressource externe. Cet élément peut être utilisé pour définir un lien vers <a href="/fr/docs/Glossaire/CSS">une feuille de style</a>, vers les icônes utilisées en barre de titre ou comme icône d'application sur les appareils mobiles.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/link.html")}}</div>

<p>Pour lier une feuille de style externe, on inclut un élément <code>&lt;link&gt;</code> de la forme suivante à l'intérieur de l'élément {{htmlelement("head")}} :</p>

<pre class="brush: html">&lt;link href="main.css" rel="stylesheet"&gt;</pre>

<p>Dans cet exemple, on indique le chemin vers la feuille de style grâce à l'attribut <code>href</code>, l'attribut  <code>rel</code> possède une valeur <code>stylesheet</code> qui indique que c'est une feuille de style. <code>rel</code> signifie <em>relationship</em> qui correspond donc à la relation entre la ressource et le document courant. Il existe de <a href="/fr/docs/Web/HTML/Types_de_lien">nombreux types de liens possibles</a>.</p>

<p>Certains types sont assez fréquents. Ainsi, pour l'icône présentant le site dans l'onglet, on trouvera :</p>

<pre class="brush: html">&lt;link rel="icon" href="favicon.ico"&gt;</pre>

<p>Il existe différents types de relations pour préciser les icônes et qui permettent notamment de cibler certaines plateformes mobiles :</p>

<pre class="brush: html">&lt;link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="apple-icon-114.png" type="image/png"&gt;</pre>

<p>L'attribut <code>sizes</code> indique la taille de l'icône tandis que l'attribut <code>type</code> contient le type MIME de la ressource qui est liée. Ces attributs permettent alors au navigateur de sélectionner la ressource la plus adéquate.</p>

<p>On peut également fournir l'attribut <code>media</code> afin d'utiliser telle ou telle ressource lorsqu'une requête média est vérifiée. Ainsi, on pourra utiliser ce qui suit afin d'avoir une feuille de style utilisée à l'impression et une autre dédiée au mobile :</p>

<pre class="brush: html">&lt;link href="print.css" rel="stylesheet" media="print"&gt;
&lt;link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)"&gt;</pre>

<p>Certaines fonctionnalités relatives à la sécurité sont également disponibles avec certains attributs de <code>&lt;link&gt;</code>. Dans cet exemple :</p>

<pre class="brush: html">&lt;link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous"&gt;</pre>

<p>L'attribut <code>rel</code> vaut <code>preload</code> et indique que le navigateur doit précharger la ressource (voir <a href="/fr/docs/Web/HTML/Précharger_du_contenu">Le préchargement du contenu avec <code>rel="preload"</code></a> pour plus de détails), l'attribut <code>as</code> indique la classe de contenu qui est récupéré et l'attribut <code>crossorigin</code> indique si la ressource doit être récupérée avec une requête CORS.</p>

<p>Quelques notes d'utilisation :</p>

<ul>
 <li>Un élément <code>&lt;link&gt;</code> element peut être placé dans un élément {{HTMLElement("head")}} ou {{htmlelement("body")}} selon la valeur de la relation. C'est cependant une bonne pratique que de placer l'ensemble des éléments <code>&lt;link&gt;</code> dans l'élément <code>&lt;head&gt;</code>.</li>
 <li>Lorsque <code>&lt;link&gt;</code> est utilisé pour la <em>favicon</em> d'un site et que celui-ci utilise les règles CSP afin d'améliorer la sécurité, les règles s'appliquent également aux icônes. Aussi, si la <em>favicon</em> ne charge pas, veuillez vérifier que la directive <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/img-src"><code>img-src</code></a> de l'en-tête {{HTTPHeader("Content-Security-Policy")}} ne bloque pas le chargement de l'image.</li>
 <li>Les spécifications HTML et XHTML définissent des gestionnaires d'évènements pour l'élément <code>&lt;link&gt;</code> mais leur utilisation reste incertaine.</li>
 <li>Pour XHTML 1.0, les éléments vides tels que <code>&lt;link&gt;</code> devaient utiliser une barre oblique de fin : <code>&lt;link /&gt;</code>.</li>
 <li>WebTV prend en charge la valeur <code>next</code> pour l'attribut <code>rel</code> afin de précharger la page suivante pour une série de documents.</li>
</ul>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("as")}}</dt>
 <dd>Cet attribut est uniquement utilisé lorsque <code>rel="preload"</code> ou <code>rel="prefetch"</code> est utilisé pour l'élément <code>&lt;link&gt;</code>. L'attribut indique le type de contenu chargé par l'élément <code>&lt;link&gt;</code> et permet au navigateur de déterminer la priorité du contenu, d'identifier les utilisations de la ressource plus bas dans le document, d'appliquer <a href="/fr/docs/HTTP/CSP">la bonne politique de sécurité des contenus</a> et de définir le bon en-tête de requête {{httpheader("Accept")}}.</dd>
 <dt>{{htmlattrdef("crossorigin")}}</dt>
 <dd>Cet attribut à valeur contrainte indique si le CORS doit être utilisé lorsque la ressource liée est récupérée. <a href="/fr/docs/Web/HTML/Images_avec_le_contrôle_d_accès_HTTP">Les images avec CORS activé</a> peuvent être réutilisée dans un élément {{HTMLElement("canvas")}} sans qu'il soit corrompu. Les valeurs autorisées sont :
 <ul>
  <li><code>"anonymous"</code> : une requête <em>cross-origine</em> est effectuée (avec l'en-tête HTTP <code>Origin</code>). Mais aucune information d'identification n'est envoyée (aucun cookie, aucun certificat X.509, aucune authentification simple via HTTP). Si le serveur ne fournit pas d'informations au site d'origine (c'est-à-dire sans utiliser l'en-tête HTTP {{httpheader("Access-Control-Allow-Origin")}}, l'image sera <em>corrompue</em> et son utilisation sera restreinte.</li>
  <li><code>"use-credentials"</code> : une requête <em>cross-origine</em> est effectuée (avec l'en-tête HTTP <code>Origin</code>) avec des informations d'authentification qui sont envoyées (un cookie, un certification et une authentification HTTP simple sont envoyés). Si le serveur ne fournit pas d'information d'authentification au site d'origine via l'en-tête {{httpheader("Access-Control-Allow-Credentials")}}, l'image sera corrompue et son utilisation sera restreinte.</li>
 </ul>
 Lorsque l'attribut est absent, la ressource est récupérée sans requête CORS (c'est-à-dire sans envoyer l'en-tête {{httpheader("Origin")}}) ce qui empêche de l'utiliser dans les éléments qui ne doivent pas être corrompus tels que {{HTMLElement('canvas')}}. Si la valeur est invalide, elle est synonyme de <code>anonymous</code>. Pour plus d'informations, consulter <a href="/fr/docs/Web/HTML/Reglages_des_attributs_CORS">l'article sur le contrôle d'origine HTTP (CORS)</a>.</dd>
 <dt>{{htmlattrdef("disabled")}}</dt>
 <dd>
 <p>Cet attribut est uniquement utilisable avec les liens avec <code>rel="stylesheet"</code>. L'attribut booléen <code>disabled</code> indique si la feuille de style référencée devrait être chargée et appliquée au document. Si l'attribut <code>disabled</code> est indiqué dans le document HTML lors de son chargement, la feuille de style ne sera pas chargé au chargement de la page. La feuille de style sera uniquement chargée à la demande si (et lorsque) l'attribut <code>disabled</code> est retiré ou passé à <code>false</code>via un script.</p>

 <p>Toutefois, une fois que la feuille de style a été chargée, toute modification à l'attribut <code>disabled</code> n'aura aucun impact, sa valeur ne sera pas liée à la propriété {{domxref("StyleSheet.disabled")}}. Modifier cet attribut ne fait qu'activer/désactiver la capacité de charger et d'appliquer la feuille de style au document.</p>

 <p>Cette propriété est à distinguer de la propriété <code>disabled</code> de l'interface {{domxref("StyleSheet")}} : lorsqu'on utilise celle-ci, la feuille de style est retirée de {{domxref("document.styleSheets")}} et elle n'est pas rechargée automatiquement lorsqu'on la repasse à <code>false</code>.</p>
 </dd>
 <dt>{{htmlattrdef("href")}}</dt>
 <dd>Cet attribut définit l'URL de la ressource liée. L'URL utilisée peut être absolue ou relative.</dd>
 <dt>{{htmlattrdef("hreflang")}}</dt>
 <dd>Cet attribut, purement indicatif, définit la langue de la ressource liée. La valeur doit être une balise de langue <a href="https://www.ietf.org/rfc/bcp/bcp47.txt">BCP47</a> valide. Cet attribut doit uniquement être utilisé si l'attribut <code>href</code> est présent.</dd>
 <dt>{{htmlattrdef("importance")}} {{experimental_inline}}</dt>
 <dd>Cet attribut indique l'importance relative de la ressource. Les indications de priorité utilisent ces valeurs :
 <dl>
  <dt><code>auto</code></dt>
  <dd>Aucune préférence n'est indiquée. Le navigateur peut utiliser une heuristique qui lui est propre afin de décider de la priorité de la ressource.</dd>
  <dt><code>high</code></dt>
  <dd>Cette valeur indique au navigateur que la ressource a une priorité élevée.</dd>
  <dt><code>low</code></dt>
  <dd>Cette valeur indique au navigateur que la ressource a une priorité basse.</dd>
 </dl>

 <p>Note : L'attribut <code>importance</code> peut uniquement être utilisé sur l'élément <code>link</code> si <code>rel</code> vaut <code>"preload"</code> ou <code>"prefetch"</code>.</p>
 </dd>
 <dt>{{htmlattrdef("integrity")}} {{experimental_inline}}</dt>
 <dd>Cet attribut contient des métadonnées en ligne qui correspondent à l'empreinte cryptographique de la ressource qu'on souhaite récupérer. Cela permet à l'agent utilisateur de contrôler que la ressource récupérée n'a pas été manipulée. Pour plus d'informations, consulter <a href="/fr/docs/Web/Security/Subresource_Integrity">l'article sur le contrôle des sous-ressources</a>.</dd>
 <dt>{{htmlattrdef("media")}}</dt>
 <dd><p>Cet attribut indique le média auquel s'applique la ressource liée. Sa valeur doit être <a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries">une requête média</a>. Cet attribut est principalement utilisé pour permettre à l'agent utilisateur de sélectionner la meilleure feuille de style en fonction de l'appareil de l'utilisateur.</p>
 <div class="note"><p><strong>Note :</strong></p>
 <ul>
  <li>En HTML4, la valeur de cet attribut était une liste de descripteurs de médias (<a href="/fr/docs/Web/CSS/@media">des types ou des groupes de média</a>) séparés par des espaces, par exemple <code>print</code> <code>screen</code> <code>aural</code> <code>braille</code>. HTML5 étend cet attribut à l'ensemble <a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries">des requêtes média</a> qui forment un surensemble des valeurs autorisées en HTML 4.</li>
  <li>Les navigateurs qui ne prennent pas en charge <a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries">les requêtes média CSS3</a> ne reconnaîtront pas nécessairement les liens adéquats et il faut donc toujours fournir des liens de recours.</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("referrerpolicy")}} {{experimental_inline}}</dt>
 <dd>Une chaîne de caractères qui indique le référent à utiliser lors de la récupération de la ressource :
 <ul>
  <li><code>'no-referrer'</code> : l'en-tête {{HTTPHeader("Referer")}} n'est pas envoyé</li>
  <li><code>'no-referrer-when-downgrade'</code> signifie qu'aucun en-tête {{HTTPHeader("Referer")}} ne sera envoyé lors de la navigation vers une origine non protégée par TLS (HTTPS). C'est le comportement par défaut de l'agent utilisateur si aucune autre règle n'est indiquée.</li>
  <li><code>'origin'</code> indique que le référent sera l'origine de la page (ce qui correspond approximativement au schéma, à l'hôte et au port).</li>
  <li><code>'origin-when-cross-origin'</code> indique que lorsqu'on navigue vers d'autres origines, le référent se limitera au schéma, à l'hôte et au port et que lorsqu'on navigue sur la même origine, il incluera le chemin.</li>
  <li><code>'unsafe-url'</code> : le référent incluera l'origine et le chemin (mais ni le fragment, ni le mot de passe ou le nom d'utilisateur). Ce comportement n'est pas sécurisé car il peut laisser fuiter des origines et des chemins de ressources TLS vers des origines non-sécurisées.</li>
 </ul>
 </dd>
 <dt>{{htmlattrdef("rel")}}</dt>
 <dd>Cet attribut indique la relation qui existe entre le document et la ressource liée. Cet attribut doit être une liste de <a href="/fr/docs/Web/HTML/Types_de_lien">types de lien</a>, séparés par des espaces. La plupart du temps, cet attribut est utilisé pour caractériser un lien vers une feuille de style et il vaut alors <code>stylesheet</code> quand l'attribut <code>href</code> reçoit l'URL de la feuille de style à charger. WebTV supporte également la valeur <code>next</code> qui permet de précharger la page suivante d'une série de pages.</dd>
 <dt>{{htmlattrdef("sizes")}}</dt>
 <dd>Cet attribut définit les dimensions des icônes pour le média contenu dans la ressource. Cet attribut doit uniquement être présent lorsque {{htmlattrxref("rel","link")}} contient le type de lien <code>icon</code>. Il peut prendre l'une des valeurs suivantes :
 <ul>
  <li><code>any</code> : l'icône peut être redimensionnée à volonté car elle utilise un format vectoriel (par exemple <code>image/svg+xml</code>).</li>
  <li>une liste de tailles, séparées par des espaces, dont chacune est de la forme <code><em>&lt;largeur en pixels&gt;</em>x<em>&lt;hauteur en pixels&gt;</em></code> ou <code><em>&lt;largeur en pixels&gt;</em>X<em>&lt;hauteur en pixels&gt;</em></code>. Pour chacune de ces dimensions, il doit exister une image correspondante dans la ressource.</li>
 </ul>

 <div class="note"><p><strong>Note :</strong></p>

 <ul>
  <li>La plupart des format d'icône permettent simplement de stocker une seule icône, c'est pour cela que, la plupart du temps, {{htmlattrxref("sizes")}} ne contient qu'un seul élément.</li>
  <li>Safari sur iOS ne prend pas en charge cet attribut mais utilise des types de lien non-standards pour définir l'icône utilisé dans la barre du site ou pour le lancer : <code>apple-touch-icon</code> et <code>apple-touch-startup-icon</code>.</li>
 </ul>
 </div>
 </dd>
 <dt>{{htmlattrdef("title")}}</dt>
 <dd>L'attribut <code>title</code> possède un sens spécifique pour l'élément <code>&lt;link&gt;</code>. Utilisé pour un lien <code>&lt;link rel="stylesheet"&gt;</code>, l'attribut <code>title</code> définit <a href="/fr/docs/Web/CSS/Feuilles_de_style_alternatives">une feuille de style alternative ou une feuille de style préférée</a>. S'il est mal utilisé, <a href="/fr/docs/Utiliser_des_titres_corrects_avec_des_feuilles_de_styles_externes">la feuille de style pourra être ignorée</a>.</dd>
 <dt>{{htmlattrdef("type")}}</dt>
 <dd>Cet attribut est utilisé pour définir le type de contenu auquel le lien fait référence. La valeur de cet attribut doit être un type MIME tel que <code>text/html</code> ou <code>text/css</code>, etc. Le plus souvent, cet attribut est utilsé pour définir le type de feuille de style utilisé et la valeur la plus fréquente est <code>text/css</code> qui indique le format d'une feuille de style en cascade (<em>Cascading Style Sheet</em> pour CSS). Cet attribut est également utilisé pour les liens avec <code>rel="preload"</code> afin de vérifier la prise en charge du format de fichier (si le navigateur ne prend pas en charge ce fichier, il n'est pas téléchargé).</dd>
</dl>

<h3 id="Attributs_dépréciés_obsolètes_ou_non-standard">Attributs dépréciés, obsolètes ou non-standard</h3>

<dl>
 <dt>{{htmlattrdef("charset")}}{{obsolete_inline}}</dt>
 <dd><p>Cet attribut définit l'encodage de la ressource lié. La valeur de cet attribut est une liste de jeux de caractères (tels que définis dans la RFC {{rfc(2045)}}) séparés par des espaces ou des virgules. La valeur par défaut de cet attribut est <code>iso-8859-1</code>.</p>
 <div class="note"><p><strong>Note :</strong> cet attribut est obsolète <strong>et ne doit pas être utilisé</strong>. Pour obtenir l'effet escompté, on utilisera l'en-tête HTTP {{httpheader("Content-Type")}} pour la ressource liée.</p></div>
 </dd>
 <dt>{{htmlattrdef("methods")}} {{Non-standard_inline}}</dt>
 <dd>La valeur de cet attribut fournit des informations quant aux fonctions qui peuvent être utilisées sur l'objet lié. Les valeurs sont généralement des méthodes HTTP mais elles peuvent également inclure des informations en avance sur le lien (le navigateur pourrait par exemple choisir un affichage différent pour un lien selon la méthode utilisée). Cet attribut n'est pas pris en charge de façon correcte, y compris par le navigateur qui le définit, Internet Explorer 4. Voir <a href="https://msdn.microsoft.com/en-us/library/ms534168%28VS.85%29.aspx" rel="external nofollow">la page MSDN sur la propriété <code>methods</code></a>.</dd>
 <dt>{{htmlattrdef("prefetch")}} {{Non-standard_inline}} {{secureContext_inline}}</dt>
 <dd>Cet attribut permet d'identifier une ressource qui sera nécessaire dans la suite de la navigation et que l'agent utilisateur devrait télécharger. Cela permet à l'agent utilisateur d'avoir un meilleur temps de réponse lorsque la ressource sera nécessaire.</dd>
 <dt>{{htmlattrdef("rev")}}{{obsolete_inline}}</dt>
 <dd>La valeur de cet attribut décrit le lien entre le document courant et la ressource liée (définie par l'attribut {{htmlattrxref("href", "link")}}). Cet attribut définit donc la relation réciproque à la relation décrite par l'attribut <code>rel</code>. <a href="/fr/docs/Web/HTML/Types_de_lien">Les types de lien</a> utilisés pour cet attribut sont semblables aux valeurs autorisés par {{htmlattrxref("rel", "link")}}.
 <div class="note">
   <p><strong>Note :</strong> cet attribut est obsolète en HTML5 <strong>et ne doit pas être utilisé</strong>. Pour obtenir le même effet, on utilisera l'attribut {{htmlattrxref("rel", "link")}} avec la valeur réciproque <a href="/fr/docs/Web/HTML/Types_de_lien">pour le type de lien</a>, (<code>made</code> devrait par exemple être remplacé par <code>author</code>). Cet attribut ne signifie pas « révision » et ne doit pas être utilisé comme un numéro de version.</p>
 </div>

 <div class="note">
 <p><strong>Note :</strong> La spécification actuelle de HTML 5.2 du W3C n'indique plus l'attribut <code>rev</code> comme obsolète. En revanche, la spécification du WHATWG le considère toujours comme obsolète. Tant que cette incohérence n'est pas résolue, mieux vaut considérer cet attribut comme obsolète.</p>
 </div>
 </dd>
 <dt>{{htmlattrdef("target")}}{{Non-standard_inline}}</dt>
 <dd>Cet attribut définit le nom de la <em>frame</em> ou de la fenêtre qui contient la ressource liée ou qui affichera la ressource liée.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Associer_une_feuille_de_style">Associer une feuille de style</h3>

<p>Pour associer une feuille de style à la page courante, on utilisera la syntaxe suivante :</p>

<pre class="brush: html">&lt;link href="style.css" rel="stylesheet"&gt;
</pre>

<h3 id="Fournir_des_feuilles_de_style_alternatives">Fournir des feuilles de style alternatives</h3>

<p>Pour un document, on peut indiquer <a href="/fr/docs/Web/CSS/Feuilles_de_style_alternatives">plusieurs feuilles de style alternatives</a>.</p>

<p>L'utilisateur pourra choisir parmi ces feuilles de style via le menu « Affichage &gt; Style de la page ». Ainsi, un utilisateur pourra voir différentes versions d'une même page.</p>

<pre class="brush: html">&lt;link href="default.css" rel="stylesheet" title="Mise en forme par défaut"&gt;
&lt;link href="joli.css" rel="alternate stylesheet" title="Joli"&gt;
&lt;link href="simple.css" rel="alternate stylesheet" title="Simple"&gt;
</pre>

<h3 id="Évènements_déclenchés_au_chargement_dune_feuille_de_style">Évènements déclenchés au chargement d'une feuille de style</h3>

<p>Il est possible de déterminer si une feuille de style a été chargée en écoutant l'évènement <code>load</code>. De la même façon, un évènement <code>error</code> indiquera qu'une erreur a eu lieu lors du traitement de la feuille de style:</p>

<pre class="brush: html">&lt;script&gt;
  function sheetLoaded() {
    // faire quelque chose, sachant
    // que la feuille a été chargéee
  }

  function sheetError() {
    console.log("Erreur lors du chargement de la feuille de style !");
  }
&lt;/script&gt;

&lt;link rel="stylesheet" href="mafeuilledestyle.css"
  onload="sheetLoaded()"
  onerror="sheetError()"&gt;
</pre>

<div class="note">
  <p><strong>Note :</strong> L'évènement <code>load</code> est déclenché une fois que la feuille de style et que le contenu associé ont été chargés et analysés et immédiatement avant que la mise en forme soit appliquée au contenu.</p>
</div>

<h3 id="Exemples_avec_preload">Exemples avec <code>preload</code></h3>

<p>De nombreux exemples avec <code>&lt;link rel="preload"&gt;</code> peuvent être lus sur <a href="/fr/docs/Web/HTML/Précharger_du_contenu">Précharger des ressources grâce à <code>rel="preload"</code></a>.</p>

<h2 id="Notes">Notes</h2>

<ul>
 <li>Un élément <code>&lt;link&gt;</code> peut être utilisé à l'intérieur d'un élément {{HTMLElement("head")}} ou bien dans le corps du document ({{HTMLElement("body")}}) si <a href="https://html.spec.whatwg.org/multipage/links.html#body-ok">le type de lien le permet (<em>body-ok</em>)</a>. On peut par exemple utiliser <code>&lt;link rel="stylesheet"&gt;</code> car ce type de lien est autorisé au sein de l'élément <code>&lt;body&gt;</code>.</li>
 <li>HTML 3.2 définit uniquement les attributs <code>href</code>, <code>rel</code>, <code>rev</code> et <code>title</code> pour l'élément <code>&lt;link&gt;</code>.</li>
 <li>HTML 2 définit les attributs <code>href</code>, <code>methods</code>, <code>rel</code>, <code>rev</code>, <code>title</code> et <code>urn</code> pour l'élément <code>&lt;link&gt;</code>. Les attributs <code>methods</code> et <code>urn</code> ont ensuite été retirés des spécifications.</li>
 <li>Les spécifications HTML et XHTML définissent toutes deux des gestionnaires d'évènements pour l'élément <code>&lt;link&gt;</code>.</li>
 <li>En XHTML 1.0, il est nécessaire qu'un élément <code>&lt;link&gt;</code> ait une barre oblique avant le chevron fermant.</li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td>Contenu de métadonnées. Si {{htmlattrxref("itemprop")}} est présent : <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a> et <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th>Contenu autorisé</th>
   <td>Aucun, cet élément est un élément vide.</td>
  </tr>
  <tr>
   <th>Omission de balise</th>
   <td>La balise de début doit être présente et la balise de fin ne doit pas être présente.</td>
  </tr>
  <tr>
   <th>Parents autorisés</th>
   <td>Tout élément qui accepte des éléments de métadonnées. Si l'attribut {{htmlattrxref("itemprop")}} est présent, tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Aucune.</td>
  </tr>
  <tr>
   <th>Interface DOM</th>
   <td>{{domxref("HTMLLinkElement")}}</td>
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
   <td>{{SpecName("Subresource Integrity", "#HTMLLinkElement", "lt;link&gt;")}}</td>
   <td>{{Spec2('Subresource Integrity')}}</td>
   <td>Ajout de l'attribut <code>integrity</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-link-element', '&lt;link&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Aucune modification depuis la dernière dérivation.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'document-metadata.html#the-link-element', '&lt;link&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Ajout des attributs <code>crossorigin</code> et <code>sizes</code>. Les valeurs de <code>media</code> sont étendues à l'ensemble des requêtes médias, ajout de nombreuses autres valeurs pour <code>rel</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/links.html#h-12.3', '&lt;link&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("Preload")}}</td>
   <td>{{Spec2("Preload")}}</td>
   <td>Définition de <code>&lt;link rel="preload"&gt;</code> et de l'attribut <code>as</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('Resource Hints','#prefetch','prefetch')}}</td>
   <td>{{Spec2('Resource Hints')}}</td>
   <td>Ajout des valeurs <code>dns-prefetch</code>, <code>preconnect</code>, <code>prefetch</code> et <code>prerender</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.link",3)}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'en-tête HTTP {{HTTPHeader("Link")}}</li>
 <li><a href="https://pie.gd/test/script-link-events/">Le tableau de compatibilité de Ryan Grove à propos de <code>&lt;script&gt;</code> et <code>&lt;link&gt;</code></a></li>
</ul>
