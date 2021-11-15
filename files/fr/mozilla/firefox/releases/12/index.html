---
title: Firefox 12 pour les développeurs
slug: Mozilla/Firefox/Releases/12
tags:
  - Firefox
  - Firefox 12
translation_of: Mozilla/Firefox/Releases/12
original_slug: Mozilla/Firefox/Versions/12
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 12, basé sur Gecko 12.0, est sorti le 24 avril 2012. Cette page résume les principaux changements dans Firefox 12 qui sont utiles aux développeurs.</p>

<h2 id="Changements_pour_les_développeurs_Web">Changements pour les développeurs Web</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>L'attribut <code>title</code> supporte désormais les caractères de saut de ligne pour permettre des multi-lignes dans les info-bulles.</li>
 <li>Si JavaScript est désactivé, l'élément {{HTMLElement("canvas")}} était rendu au lieu d'afficher le contenu de secours selon la <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html">spécification</a>. Désormais, c'est le contenu de secours qui est rendu.</li>
 <li>L'attribut <code>crossorigin</code> est à présent supporté par {{HTMLElement("video")}}.</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>Le support de la propriété {{cssxref("text-align-last")}} a été ajouté (prefixée).</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>Le support des <a href="/fr/docs/JavaScript/Sharp_variables_in_JavaScript">variables sharp</a> (extension non-standard de Netscape) a été abandonné.</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>{{domxref("DOMParser")}} supporte désormais l'analyse de fragments de documents HTML.</li>
 <li>{{domxref("XMLHttpRequest")}} supporte désormais des délais d'attente en utilisant la propriété <code>timeout</code> et l'évènement "timeout", ainsi que le gestionnaire d'évènements <code>ontimeout</code> de l'interface {{domxref("XMLHttpRequestEventTarget")}}.</li>
 <li>{{domxref("XMLHttpRequest")}} peut désormais se charger à partir des <a href="/fr/docs/data_URIs">URIs <code>data:</code></a>.</li>
 <li>Lors du téléchargement de grandes quantités de données, les gestionnaires d'événements {{domxref("XMLHttpRequest")}} de progression sont désormais appelés régulièrement avec l'ensemble <code>responseType</code> vers "moz-blob" et la réponse étant un {{domxref("Blob")}} contenant toutes les données reçues jusqu'ici. Cela permet aux gestionnaires de progression de commencer le traitement des données sans avoir à tout attendre.</li>
 <li>Gecko supporte désormais le <a href="/fr/docs/DOM/Touch_events">multi-touch</a> (au lieu d'une touche à la fois) sur Android.</li>
 <li>Lorsque vous éditez du texte à l'aide d'un IME, l'événement <code>input</code> est à présent envoyé chaque fois que le contenu de l'élément en cours d'édition a été changé, ce qui se passe après l'événement <code>compositionupdate</code> est envoyé pour indiquer que le texte de l'IME a été modifié. Vous pouvez donc utiliser le gestionnaire d'événements <code>input</code>, pour suivre l'évolution du contenu réel de l'élément.</li>
 <li>{{domxref("DOMError")}} a été implémenté selon la spécification DOM 4.</li>
 <li>La méthode {{domxref("Document.createNodeIterator()")}} a été mise à jour suivant la spécification DOM4. Cela rend les paramètres <code>whatToShow</code> et <code>filter</code> facultatifs et supprime le quatrième paramètre non-standard, <code>entityReferenceExpansion</code>.</li>
 <li>La méthode <code>slice()</code> de l'interface {{domxref("Blob")}} a été touché par un bug qui l'empêchait d'accepter correctement le début et la fin des valeurs hors de la portée d'un entier de 64 bits signé, cela a été corrigé.</li>
 <li>La méthode {{domxref("element.getBoundingClientRect()")}} considère désormais l'effet des <a href="/fr-/docs/CSS/Utilisation_des_transformations_CSS">transformations CSS</a> lors du calcul des délimitations du rectangle de l'élément.</li>
 <li>La propriété <code>crossOrigin</code> est à présent supportée par {{domxref("HTMLMediaElement")}}.</li>
</ul>

<h4 id="Nouvelles_WebAPIs">Nouvelles WebAPIs</h4>

<ul>
 <li>API Information Réseau : Ajout du support expérimental de {{domxref("window.navigator.connection")}} (prefixé).</li>
 <li>API WebTelephony : {{domxref("window.navigator.mozTelephony")}} a été implémenté et fournit un support pour composer, répondre, et gérer les appels téléphoniques sur un appareil.</li>
 <li>API WebSMS : {{domxref("window.navigator.mozSms")}} est à présent disponible pour les appareils mobiles pour envoyer des SMS.</li>
 <li>API Screen brightness : {{domxref("window.screen.mozEnabled")}} et {{domxref("window.screen.mozBrightness")}} ont été ajoutés pour contrôler l'écran de l'appareil.</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>Firefox implémente désormais l'API DOM {{domxref("SVGTests")}}, voir {{bug(607854)}}</li>
 <li>L'interface DOM {{domxref("SVGStringList")}} supporte la propriété non-standard <code>length</code>, voir {{bug(711958)}}</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>Pour contrôler la directionnalité des formules de MathML, l'attribut <code>dir</code> est désormais supporté par les éléments {{MathMLElement("math")}}, {{MathMLElement("mrow")}} et {{MathMLElement("mstyle")}} ainsi que par les <a href="/Special:Tags?tag=MathML:Token+Elements">éléments MathML Token</a>. C'est particulièrement important pour certaines <a href="http://www.w3.org/TR/arabic-math/">notations mathématiques Arabes</a>.</li>
 <li>L'attribut d'alignement <code>align</code> definit dans MathML3 a été implementé pour {{MathMLElement("munder")}}, {{MathMLElement("mover")}} et {{MathMLElement("munderover")}}.</li>
</ul>

<h3 id="Réseau">Réseau</h3>

<ul>
 <li>Auparavant, Gecko rapportait le code de fermeture <code>CLOSE_NORMAL</code> quand un canal WebSocket était fermé en raison d'une erreur inattendue ou d'une condition d'erreur que la spécification ne couvre pas. Désormais, <code>CLOSE_GOING_AWAY</code> est rapporté à la place.</li>
</ul>

<h3 id="Outils_de_développement">Outils de développement</h3>

<ul>
 <li>La <a href="/fr/docs/Tools/Web_Console">console Web/a&gt; met à présent en cache les message d'erreurs et les entrées du journal ajoutés grâce à {{domxref("console.log()")}} si la console n'est pas ouverte actuellement, et les affichent lorsque qu'elle s'ouvre.</a></li>
 <li><a href="/fr/docs/Tools/Web_Console">Vous pouvez désormais réinitialiser le niveau de zoom, panoramique et de rotation dans la </a><a href="/fr/docs/Tools/Page_Inspector/3D_view">vue 3D</a> en appuyant sur la touche "r".</li>
 <li>Vous pouvez désormais masquer les nœuds dans la <a href="/fr/docs/Tools/Page_Inspector/3D_view">vue 3D</a> en appuyant sur la touche "x" après les avoir sélectionnés.</li>
 <li>L'<a href="/fr/docs/Tools/Using_the_Source_Editor">éditeur de source</a> a plusieurs nouvelles fonctionnalités d'édition et de raccourcis clavier, voir <a href="/fr/docs/Tools/Using_the_Source_Editor">Utilisation de l'éditeur de source</a> pour plus de détails</li>
</ul>

<p>Mozilla travaille sur l'intégration des ses propres outils de développement Web qui complètent l'add-on populaire <a href="http://getfirebug.com/">Firebug</a>. Vous pouvez obtenir plus d'informations sur ces outils et également voir une liste de ressources externes à Firefox qui vous aideront dans le développement Web. La liste se trouve dans les <a href="/fr/docs/Outils">outils de développement Web</a>.</p>

<h3 id="Changements_divers">Changements divers</h3>

<ul>
 <li>Le jeu de caractères GEOSTD8, qui n'a jamais été entièrement supporté, n'est plus du tout pris en charge.</li>
</ul>

<h2 id="Changements_pour_les_développeurs_de_Mozilla_et_de_modules_complémentaires">Changements pour les développeurs de Mozilla et de modules complémentaires</h2>

<h3 id="Modules_de_code_JavaScript">Modules de code JavaScript</h3>

<h4 id="source-editor.jsm">source-editor.jsm</h4>

<ul>
 <li>La méthode <a href="/fr/docs/JavaScript_code_modules/source-editor.jsm#resetUndo%28%29"><code>resetUndo()</code></a> a été ajoutée, elle vous permet d'effacer la pile d'annulation.</li>
 <li>L'éditeur de source offre à présent des méthodes pour apporter des capacités de recherche : <a href="/fr/docs/JavaScript_code_modules/source-editor.jsm#find()"><code>find()</code></a>, <a href="/fr/docs/JavaScript_code_modules/source-editor.jsm#findNext()"><code>findNext()</code></a>, and <a href="/fr/docs/JavaScript_code_modules/source-editor.jsm#findPrevious()"><code>findPrevious()</code></a>.</li>
</ul>

<h3 id="XUL">XUL</h3>

<ul>
 <li>La définition des valeurs pour l'attribut {{XULAttr("chromemargin")}} a été légèrement modifié, pour que ce soit plus facile de faire du code XUL multi-plateforme qui rend bien sur les plateformes avec des largeurs par défaut des bordures de fenêtres différentes.</li>
</ul>

<h3 id="XPCOM">XPCOM</h3>

<ul>
 <li><a href="/fr/docs/nsISupports_proxies">Les proxys <code>nsISupports</code></a> ne sont plus supportés. A la place, vous devez utiliser des exécutables ; voir <a href="/fr/docs/XPCOM/Making_cross-thread_calls_using_runnables">Faire des appels inter-thread exécutables</a>.</li>
 <li>Firefox 11 a changé le comportement de <a href="/fr/docs/Components.utils.getWeakReference"><code>Components.utils.getWeakReference()</code></a> pour générer une exception lorsque la référence de l'objet est nulle, l'ancien comportement qui était silencieux a été rétabli.</li>
</ul>

<h3 id="XPConnect">XPConnect</h3>

<ul>
 <li>Le type de données <a href="/fr/docs/PRUint64"><code>PRUint64</code></a> été mal utilisé puisqu'il est sensiblement identique à <a href="/fr/docs/PRInt64"><code>PRint64</code></a> lorsqu'il est utilisé avec XPConnect. Cela a été corrigé.</li>
</ul>

<h3 id="Changements_dans_les_interfaces">Changements dans les interfaces</h3>

<ul>
 <li>L'interface <code>nsIScreen_MOZILLA_2_0_BRANCH</code> a été intégré dans {{interface("nsIScreen")}}. Les API définies dans cette interface (pour contrôler la luminosité de l'écran) n'avaient pas encore été documentées, mais désormais elles le sont.</li>
 <li>L'interface {{interface("nsIScriptError2")}} a été intégré dans {{interface("nsIScriptError")}}.</li>
 <li>{{ifmethod("nsIDownloadManager", "addDownload")}} est à présent géré de manière asynchrone plutôt que de façon synchrone.</li>
 <li>La méthode {{ifmethod("imgIContainerObserver", "frameChanged")}} reçoit désormais le premier paramètre d'un objet {{interface("imgIRequest")}} qui identifie la demande correspondante.</li>
 <li>La méthode {{ifmethod("nsIDOMWindowUtils", "sendTouchEvent")}} a été ajoutée pour permettre de synthétiser les événements tactiles.</li>
 <li>Vous pouvez désormais faire défiler le contenu spécifié verticalement au centre de la vue en spécifiant <code>SCROLL_CENTER_VERTICALLY</code> lors de l'appel de la constante de défilement {{ifmethod("nsISelectionController", "scrollSelectionIntoView")}}.</li>
 <li>Le nouvel attribut {{ifattribute("nsIMemoryMultiReporter", "explicitNonHeap")}} a été ajouté ; C'est un moyen plus efficace d'obtenir la somme de toutes les mesures du multi-rapporteur qui mesure ceux qui ont un chemin commençant par "explicit" <strong>et</strong> qui sont de type <code>KIND_NONHEAP</code>.</li>
 <li>L'attribut {{ifattribute("nsIDOMWindowUtils", "paintingSuppressed")}} a été ajouté ; cette valeur booléenne indique si oui ou non la toile est en train d'être supprimée de la fenêtre. C'est utilisé sur mobile pour éviter le rendu sautillant qui se produit lorsque les tentatives pour dessiner la page commencent avant que le contenu disponible soit insuffisant pour le faire.</li>
 <li>Les interfaces <code>nsIDocCharset</code> et <code>nsIDocumentCharsetInfo</code> ont été intégrées dans {{interface("nsIDocShell")}}. Dans le cadre de ce travail, le vieil attribut <code>forcedDetector</code> a été enlevé, il n'a jamais rien fait.</li>
</ul>

<h3 id="SpiderMonkey">SpiderMonkey</h3>

<ul>
 <li><code>JSThread</code> a été supprimé.</li>
 <li><code>JSThreadData</code> a été intégré dans <code>JSRuntime</code>.</li>
</ul>

<h3 id="Compilation">Compilation</h3>

<ul>
 <li>Lors de la compilation sous Windows, vous devez avoir le SDK de Windows 7 installé.</li>
</ul>

<h3 id="Autres_changements">Autres changements</h3>

<ul>
 <li>Le composant d'édition (appelé <a href="/fr/docs/Midas">Midas</a>) <a href="/fr/docs/Using_the_Editor_from_XUL#Editor_event_handling">n'accepte désormais que les évènements</a> provenant du code privilégié.</li>
</ul>

<h2 id="Voir_également">Voir également</h2>

<p>{{Firefox_for_developers('11')}}</p>
