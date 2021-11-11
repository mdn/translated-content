---
title: Catégories de contenu
slug: Web/Guide/HTML/Content_categories
tags:
  - Avancé
  - Contenus
  - Guide
  - HTML
translation_of: Web/Guide/HTML/Content_categories
original_slug: Web/Guide/HTML/Catégories_de_contenu
---
<p>Chaque élément <a href="https://developer.mozilla.org/fr/docs/Web/HTML">HTML</a> est membre d'un certain nombre de catégories de contenu qui regroupent des éléments partageant un ensemble de caractéristiques. Ceci est un regroupement lâche, en ce sens qu'il ne crée pas réellement de relation entre les éléments de ces types, mais il aide à définir et à décrire leur comportement et les règles associées qu'ils doivent respecter, en particulier lorsque l'on entre dans leurs détails complexes. Il est également possible que les éléments ne soient membres d'aucune de ces catégories.</p>

<p>Il y a trois types différents de catégories de contenu :</p>

<ul>
 <li>Les catégories de contenu principales qui décrivent un ensemble de règles de contenu partagées par une grande variété d'éléments ;</li>
 <li>Les catégories de contenu relatives aux formulaires qui décrivent les règles de contenu partagées par les éléments en lien avec les formulaires ;</li>
 <li>Les catégories de contenu spécifiques qui décrivent des catégories plus rares et qui s'appliquent à peu d'éléments, parfois dans un contexte particulier</li>
</ul>

<div class="note">
<p><strong>Note :</strong> un discours plus détaillé sur ces catégories de contenu et de leurs fonctionnalités comparatives dépasse le cadre de cet article ; pour en savoir plus, vous pouvez lire les <a href="https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content">parties correspondantes de la spécification HTML</a> (en).</p>
</div>

<div><img src="content_categories_venn.png"></div>

<h2 id="Principales_catégories_de_contenu">Principales catégories de contenu</h2>

<h3 id="Contenu_de_méta-données">Contenu de méta-données</h3>

<p>Les éléments appartenant à cette catégorie modifient la présentation ou le comportement du reste du document, insèrent des liens vers d'autres documents ou comportent des informations sur la structure même des données.</p>

<p>Les éléments appartenant à cette catégories sont : {{HTMLElement("base")}}, {{HTMLElement("command")}}{{ Obsolete_inline()}} , {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} et {{HTMLElement("title")}}.</p>

<h3 id="Contenu_de_flux">Contenu de flux</h3>

<p>Les éléments appartenant à la catégorie de contenu de flux contiennent généralement du texte ou du contenu intégré. Ces éléments sont : {{HTMLElement("a")}}, {{HTMLElement("abbr")}}, {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}},{{HTMLElement("bdo")}}, {{HTMLElement("bdi")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{ Obsolete_inline() }}{{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("del")}}, {{HTMLElement("details")}}, {{HTMLElement("dfn")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("ins")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}}, {{HTMLElement("label")}}, {{HTMLElement("main")}}, {{HTMLElement("map")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("menu")}}, {{HTMLElement("meter")}}, {{HTMLElement("nav")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("ol")}}, {{HTMLElement("output")}}, {{HTMLElement("p")}}, {{HTMLElement("picture")}}, {{HTMLElement("pre")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("section")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("table")}}, {{HTMLElement("template")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("ul")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} et le texte.</p>

<p>Quelques autres éléments appartiennent à cette catégorie mais seulement sous certaines conditions :</p>

<ul>
 <li>{{HTMLElement("area")}} s'il est un descendant de l'élément {{HTMLElement("map")}}</li>
 <li>{{HTMLElement("link")}} si l'attribut <a href="/fr/docs/HTML/Global_attributes#itemprop" title="/fr/docs/HTML/Global_attributes#itemprop"><strong>itemprop</strong></a> est présent</li>
 <li>{{HTMLElement("meta")}} si l'attribut <a href="/fr/docs/HTML/Global_attributes#itemprop" title="/fr/docs/HTML/Global_attributes#itemprop"><strong>itemprop</strong></a> est présent</li>
 <li>{{HTMLElement("style")}} si l'attribut {{htmlattrxref("scoped","style")}} {{deprecated_inline()}} est présent</li>
</ul>

<h3 id="Contenu_sectionnant">Contenu sectionnant</h3>

<p>Les éléments appartenant à cette catégorie sont ceux créant une nouvelle <a href="/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document" title="/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document">section dans le plan du document</a> qui définit la portée des éléments {{HTMLElement("header")}}, des éléments {{HTMLElement("footer")}} et du <a href="#Contenu de titre" title="#Contenu de titre">contenu de titre</a>.</p>

<p>Les éléments appartenant à cette catégorie sont les éléments {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} et {{HTMLElement("section")}}. </p>

<div class="note">
<p><strong>Note :</strong> Il ne faut pas confondre ce modèle de contenu avec la catégorie de <a href="/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement" title="/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement">racine de sectionnement</a> qui isole un contenu par rapport à la structure (ou plan) principale.</p>
</div>

<h3 id="Contenu_de_titre">Contenu de titre</h3>

<p>Le contenu de titre définit le titre d'une section, qu'elle soit marquée par un <a href="#">contenu sectionnant</a> de manière explicite ou qu'elle soit définie de manière implicite par le contenu de titre lui-même.</p>

<p>Les éléments appartenant à cette catégorie sont {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}} et {{HTMLElement("hgroup")}}.</p>

<div class="note">
<p><strong>Note :</strong> Bien qu'il soit probable qu'un élément {{HTMLElement("header")}} comporte du contenu de titre, il n'est pas lui-même un contenu de titre.</p>
</div>

<div class="note">
<p><strong>Note :</strong> {{HTMLElement("hgroup")}} est supprimé du document recommandé par W3C.</p>
</div>

<h3 id="Contenu_phrasé">Contenu phrasé</h3>

<p>Le contenu phrasé définit le texte et le balisage qu'il contient. Des séquences de contenu phrasé constituent des paragraphes.</p>

<p>Les éléments appartenant à cette catégorie sont  {{HTMLElement("abbr")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{ Obsolete_inline() }}{{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("dfn")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}}, {{HTMLElement("label")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("meter")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("picture")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} et du texte brut (n'étant pas une simple suite de blancs).</p>

<p>Quelques autres éléments appartiennent à cette catégorie mais seulement selon certaines conditions :</p>

<ul>
 <li>{{HTMLElement("a")}} s'il contient seulement du contenu phrasé</li>
 <li>{{HTMLElement("area")}} s'il est un descendant de l'élément {{HTMLElement("map")}}</li>
 <li>{{HTMLElement("del")}} s'il contient seulement du contenu phrasé</li>
 <li>{{HTMLElement("ins")}} s'il contient seulement du contenu phrasé</li>
 <li>{{HTMLElement("link")}} si l'attribut <a href="/fr/docs/HTML/Global_attributes#itemprop" title="/fr/docs/HTML/Global_attributes#itemprop"><strong>itemprop</strong></a> est présent</li>
 <li>{{HTMLElement("map")}} s'il contient seulement du contenu phrasé</li>
 <li>{{HTMLElement("meta")}} si l'attribut <a href="/fr/docs/HTML/Global_attributes#itemprop" title="/fr/docs/HTML/Global_attributes#itemprop"><strong>itemprop</strong></a> est présent</li>
</ul>

<h3 id="Contenu_intégré">Contenu intégré</h3>

<p>Le contenu intégré importe une autre ressource ou intègre du contenu provenant d'un autre langage de balisage ou d'un autre espace de noms dans le document. Les éléments appartenant à cette catégorie sont : {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{HTMLElement("svg")}}, {{HTMLElement("video")}}.</p>

<h3 id="Contenu_interactif">Contenu interactif</h3>

<p>Le contenu interactif regroupe des éléments spécialement conçus pour une interaction avec l'utilisateur. Les éléments appartenant à cette catégories sont : {{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("label")}}, {{HTMLElement("select")}}, et {{HTMLElement("textarea")}}.</p>

<p>Quelques éléments appartiennent à cette catégorie seulement sous certaines conditions :</p>

<ul>
 <li>{{HTMLElement("audio")}} si l'attribut {{htmlattrxref("controls", "audio")}} est présent</li>
 <li>{{HTMLElement("img")}} si l'attribut {{htmlattrxref("usemap", "img")}} est présent</li>
 <li>{{HTMLElement("input")}} si l'attribubt {{htmlattrxref("type", "input")}} ne vaut pas <code>hidden</code></li>
 <li>{{HTMLElement("menu")}} si l'attribut {{htmlattrxref("type", "menu")}} vaut <code>toolbar</code></li>
 <li>{{HTMLElement("object")}} si l'attribut {{htmlattrxref("usemap", "object")}} est présent</li>
 <li>{{HTMLElement("video")}}, si l'attribut {{htmlattrxref("controls", "video")}} est présent</li>
</ul>

<h3 id="Contenu_tangible">Contenu tangible</h3>

<p>Un contenu peut être dit tangible lorsqu'il n'est ni vide ni caché. Les éléments dont le modèle de contenu est de flux ou phrasé devraient toujours avoir au moins un noeud dont le contenu est tangible.</p>

<h3 id="Contenu_associé_aux_formulaires">Contenu associé aux formulaires</h3>

<p>Le contenu associé aux formulaires contient les éléments possédés par un formulaire, exposé avec un attribut <strong>form</strong>. Être possédé par un formulaire signifie être descendant d'un élément  {{HTMLElement("form")}} ou de l'élément dont l'identifiant est référencé par la valeur de l'attribut <strong>form</strong>.</p>

<p>Cette catégorie contient les éléments :</p>

<ul>
 <li>{{HTMLElement("button")}}</li>
 <li>{{HTMLElement("fieldset")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("keygen")}}{{deprecated_inline()}}</li>
 <li>{{HTMLElement("label")}}</li>
 <li>{{HTMLElement("meter")}}</li>
 <li>{{HTMLElement("object")}}</li>
 <li>{{HTMLElement("output")}}</li>
 <li>{{HTMLElement("progress")}}</li>
 <li>{{HTMLElement("select")}}</li>
 <li>{{HTMLElement("textarea")}}</li>
</ul>

<p> Cette catégorie peut être subdivisée en plusieurs sous-catégories.</p>

<dl>
 <dt>listed (éléments listés)</dt>
 <dd>Les éléments étant listés sont les ensembles IDL <a href="/fr/docs/DOM/form.elements" title="DOM/form.elements">form.elements</a> et fieldset.elements. Ce sont : {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, et {{HTMLElement("textarea")}}.</dd>
 <dt>labelable (éléments étiquetables)</dt>
 <dd>Les éléments pouvant être associés avec des éléments  {{HTMLElement("label")}}. Ce sont : {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.</dd>
 <dt>submittable (éléments participants à l'envoi du formulaire)</dt>
 <dd>Les éléments pouvant être utilisés pour construire les données du formulaires quand celui-ci est envoyé. Ce sont : {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}} , {{HTMLElement("object")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.</dd>
 <dt>resettable (éléments de ré-initialisation)</dt>
 <dd>Éléments pouvant être impactés lorsqu'un formulaire est ré-initialisé. Ce sont : {{HTMLElement("input")}}, {{HTMLElement("keygen")}}{{deprecated_inline()}}, {{HTMLElement("output")}},{{HTMLElement("select")}} et {{HTMLElement("textarea")}}.</dd>
</dl>

<h2 id="Catégories_secondaires">Catégories secondaires</h2>

<p>Il existe des classifications secondaires d'éléments qu'il peut être utile de connaître également.</p>

<h3 id="Éléments_supports_de_script">Éléments supports de script</h3>

<p>Les éléments supports de script sont des éléments qui ne contribuent pas directement à la sortie rendue d'un document. Au lieu de cela, ils servent à prendre en charge les scripts, soit en contenant ou en spécifiant le code de script directement, soit en spécifiant les données qui seront utilisées par les scripts. Ce sont :</p>

<ul>
 <li>{{HTMLElement("script")}}</li>
 <li>{{HTMLElement("template")}}</li>
</ul>

<h2 id="Modèle_de_contenu_transparent">Modèle de contenu transparent</h2>

<p>Si l'élément possède un modèle de contenu transparent, son contenu doit alors être structuré comme du HTML5 valide, et ce, même si l'élément transparent a été enlevé et remplacé par ses éléments fils.</p>

<p>Les éléments {{HTMLElement("del")}} et {{HTMLELement("ins")}} sont des exemples d'éléments transparents.</p>

<pre>&lt;p&gt;Bonjour &lt;del&gt;&lt;em&gt;tout&lt;/em&gt;&lt;/del&gt; &lt;ins&gt;le monde&lt;/ins&gt;.&lt;/p&gt;
</pre>

<p>Si ces éléments étaient retirés, ce fragment de code HTML serait toujours du HTML valide.</p>

<pre>&lt;p&gt;Bonjour &lt;em&gt;tout&lt;/em&gt; le monde.&lt;/p&gt;
</pre>

<h2 id="Autres_modèles_de_contenu">Autres modèles de contenu</h2>

<p><a href="/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement" title="/fr/docs/HTML/Sections_and_Outlines_of_an_HTML5_document#Racines_de_sectionnement">Racine de sectionnement.</a></p>
