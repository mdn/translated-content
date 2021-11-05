---
title: Firefox 11 pour les développeurs
slug: Mozilla/Firefox/Releases/11
tags:
  - Firefox
  - Firefox 11
translation_of: Mozilla/Firefox/Releases/11
original_slug: Mozilla/Firefox/Versions/11
---
<div>{{FirefoxSidebar}}</div><p>Firefox 11, basé sur Gecko 11.0, est sorti le 13 mars 2012. Cet article fournit des informations sur les nouvelles fonctionnalités et les principaux bugs corrigés, ainsi que des liens vers une documentation plus détaillée pour les développeurs web et d'extensions.</p>

<h2 id="Changements_pour_les_développeurs_Web">Changements pour les développeurs Web</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>Les attributs <code>muted</code> et <code>loop</code> pour les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} ont été implémentés.</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>La propriété {{domxref("element.outerHTML")}} supporte maintenant les éléments HTML.</li>
 <li><a href="/fr/docs/HTML_in_XMLHttpRequest"><code>XMLHttpRequest</code> supporte l'analyse HTML</a>.</li>
 <li>Suppression du support des attributs <code>responseType</code> et <code>withCredentials</code> {{domxref("XMLHttpRequest")}} lors de requêtes synchrones. Si vous tentez de le faire l'exception <code>NS_ERROR_DOM_INVALID_ACCESS_ERR</code> est envoyée. Ce changement a été proposé au W3C pour être normalisé.</li>
 <li>la nouvelle méthode {{domxref("window.navigator.mozVibrate()")}} vous permet de faire vibrer le périphérique supporté, c'est implémenté dans Gecko en tant que <code>mozVibrate()</code>.</li>
 <li>{{domxref("window.navigator.mozApps")}} retourne un objet <a href="/fr/docs/DOM/Apps">Apps</a>, vous pouvez l'utiliser pour installer et gérer des <a href="/fr/docs/Applications">applications Web ouvertes</a>.</li>
 <li>Les évènements <code>MozBeforePaint</code> ne sont plus exploités. Ceux qui ont utilisé {{domxref("window.requestAnimationFrame", "mozRequestAnimationFrame()")}} devraient transmettre une fonction de rappel à la place.</li>
 <li>La prise en charge de l'annulation des demandes d'animation de trame a été ajouté, {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} retourne désormais la valeur ID de la demande, que vous pouvez passer à {{domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} pour annuler la demande.</li>
 <li>Plusieurs constructeurs {{domxref("Event")}} (<code>Event</code>, HTML events, <code>UIEvent</code> et <code>MouseEvent</code>) introduits dans les spécifications DOM4 sont à présent supportés.</li>
 <li>{{domxref("window.navigator.mozBattery", "Battery API")}} est désormais activée par défaut.</li>
 <li>Le support des propriétés <a href="/fr/docs/DOM/HTMLMediaElement"><code>defaultMuted</code></a>, <code><a href="/fr/docs/DOM/HTMLMediaElement">loop</a></code> et <a href="/fr/docs/DOM/HTMLMediaElement"><code>muted</code></a> de <a href="/fr/docs/DOM/HTMLMediaElement"><code>HTMLMediaElement</code></a> a été ajouté.</li>
 <li>L'appel {{domxref("document.mozCancelFullScreen()")}} restaure à présent l'élément précédemment en plein-écran, si un autre élément était en mode plein-écran lorsque la méthode {{domxref("element.mozRequestFullScreen()")}} a été appelée.</li>
 <li>La méthode {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} ne supporte plus une forme sans argument. Cela n'est pas beaucoup utilisé et il est peu probable que ça fasse partie de la norme.</li>
 <li>Les images SVG peuvent à présent être dessinées dans un canvas sans <a href="/fr/docs/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F">entacher le canvas</a>.</li>
 <li>La propriété non-standard <code>countryCode</code> de l'interface <code>GeoPositionAddress</code> a été supprimée, voir {{interface("nsIDOMGeoPositionAddress")}}.</li>
 <li><a href="/fr/docs/Server-sent_events">Les évènements Server-sent</a> supportent désormais <a href="/fr/docs/HTTP_access_control">CORS</a>.</li>
 <li>Dans le passé, lorsque l'utilisateur suivait un lien, les valeurs définies sur l'objet {{domxref("window.navigator")}} été retenus par la nouvelle page. Maintenant un nouvel objet <code>navigator</code> est crée pour la nouvelle page. Cela rend le comportement de Firefox identique aux autres navigateurs.</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>La propriété <a href="/fr/docs/CSS/text-size-adjust"><code>text-size-adjust</code></a> est à présent supportée.</li>
 <li>Les <a href="/fr/docs/CSS/CSS3#Conditional_Rules">Règles Conditionnelles</a> <a href="/fr/docs/CSS/CSS3">CSS3</a> sont à présent mieux supportées : les déclarations imbriquées peuvent désormais être ajoutées à <a href="/fr/docs/CSS/@media">@media</a>, <a href="/fr/docs/CSS/@-moz-document">@-moz-document</a>. (Voir <a href="/fr/docs/CSS/Syntax">CSS Syntax</a> et <a href="/fr/docs/CSS/At-rule">CSS at-rules</a>).</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>L'interface DOM {{domxref("SVGSVGElement")}} supporte désormais la méthode <code>getElementById</code>.</li>
</ul>

<h3 id="WebSocket">WebSocket</h3>

<ul>
 <li>L'API <a href="/fr/docs/WebSockets">WebSocket</a> supporte désormais les messages binaires (voir {{bug("676439")}}).</li>
 <li>Le protocole et l'API ont été mis à jour suivant la dernière version de la spécification et l'API n'a plus de préfixe (voir {{bug("666349")}} et {{bug("695635")}}).</li>
 <li>Auparavant, les messages envoyés et reçus à l'aide de WebSockets dans Firefox été limités à 16 Mo en taille, désormais ils peuvent aller jusqu'à 2 Go (bien que les limitations de capacité de mémoire peut les empêcher d'être plus grand, Firefox le supporte).</li>
</ul>

<h3 id="IndexedDB">IndexedDB</h3>

<ul>
 <li>Le support de <a href="/fr/docs/IndexedDB/IDBFactory#cmp%28%29">IDBFactory.cmp()</a> a été ajouté.</li>
 <li>Une <a href="/fr/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#section_6">clé IndexedDB</a> peut également être de l'un des types suivants : Date, Arrays et Float (et pas seulement String et Integer).</li>
</ul>

<h3 id="Réseau">Réseau</h3>

<ul>
 <li>La modification dans Firefox 8 concernant la suppression des guillemets comme délimiteurs pour {{rfc(2231)}} et {{rfc(5987)}} a été annulée, car cela a cassé certains sites, y compris Outlook Web Access.</li>
</ul>

<h3 id="Outils_de_développement">Outils de développement</h3>

<ul>
 <li>L'<a href="/fr/docs/Tools/Page_Inspector">Inspecteur de page</a> offre désormais une <a href="/fr/docs/Tools/Page_Inspector/3D_view">vue 3D</a> si votre système supporte <a href="/fr/docs/WebGL">WebGL</a>.</li>
 <li>Le nouvel <a href="/fr/docs/Tools/Style_Editor">Editeur de styles</a> offre un moyen d'éditer et de composer des feuilles de style CSS en temps réel.</li>
 <li>La <a href="/fr/docs/View_source">fonctionnalité Afficher la source</a> utilise désormais le nouveau parseur HTML5 au lieu du vieux parseur HTML.</li>
</ul>

<h2 id="Changements_pour_les_développeurs_de_Mozilla_et_de_modules_complémentaires">Changements pour les développeurs de Mozilla et de modules complémentaires</h2>

<h3 id="Module_de_code_JavaScript">Module de code JavaScript</h3>

<h4 id="NetUtil.jsm">NetUtil.jsm</h4>

<ul>
 <li><a href="/fr/docs/JavaScript_code_modules/NetUtil.jsm#readInputStreamToString()"><code>readInputStreamToString()</code></a> a un nouveau paramètre (optionnel) à configurer pour l'interprétation du jeu de caractères lors de la lecture du flux d'entrée.</li>
</ul>

<h4 id="Nouveau_module_de_code_JavaScript">Nouveau module de code JavaScript</h4>

<dl>
 <dt><a href="/fr/docs/JavaScript_code_modules/source-editor.jsm"><code>source-editor.jsm</code></a></dt>
 <dd>Offre un moyen pratique facile d'éditeur de code source que vous pouvez utiliser dans vos add-ons. C'est le même éditeur utilisé par l'<a href="/fr/docs/Outils/Ardoise">Ardoise</a> et les autres outils de développement intégrés dans Firefox.</dd>
</dl>

<h3 id="Changements_dans_les_interfaces">Changements dans les interfaces</h3>

<ul>
 <li>L'interface {{interface("mozIAsyncHistory")}} a une nouvelle méthode {{ifmethod("mozIAsyncHistory","isURIVisited")}} pour vérifier si une URI a été visitée.</li>
 <li>Une nouvelle interface {{interface("mozIVisitStatusCallback")}} a été ajoutée pour fournir une fonctionnalité de traitement des rappels pour {{ifmethod("mozIAsyncHistory","isURIVisited")}}.</li>
 <li>L'interface {{interface("nsIMacDockSupport")}} interface now supports adding a text badge to the application's icon in the Dock using its new <code>badgeText</code> attribute.</li>
 <li>Dans l'interface {{interface("nsINavHistoryResultObserver")}}, vous devez à présent implémenter {{ifmethod("nsINavHistoryResultObserver", "containerStateChanged")}} au lieu des anciennes méthodes <code>containerOpened()</code> et <code>containerClosed()</code>.</li>
</ul>

<h4 id="Interface_supprimées">Interface supprimées</h4>

<p>Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables :</p>

<ul>
 <li>{{interface("nsICharsetResolver")}}</li>
 <li>{{interface("nsIDOMNSElement")}}, voir {{bug("707576")}} ; utilisez {{interface("nsIDOMElement")}} à la place.</li>
</ul>

<h3 id="Changement_lié_au_thème">Changement lié au thème</h3>

<ul>
 <li>Le fichier <code>omni.jar</code> se nomme désormais <a href="/fr/docs/Mozilla/About_omni.ja_(formerly_omni.jar)"><code>omni.ja</code></a>.</li>
</ul>

<h3 id="Changement_dans_les_préférences">Changement dans les préférences</h3>

<dl>
 <dt>{{Pref("ui.tooltipDelay")}}</dt>
 <dd>Définit le délai, en millisecondes, entre le moment où le curseur de la souris s'arrête et l'affichage d'une info-bulle.</dd>
</dl>

<h3 id="Changement_dans_le_système_de_compilation">Changement dans le système de compilation</h3>

<ul>
 <li>L'option de compilation <code>--enable-tracejit</code> a été supprimée.</li>
</ul>

<h3 id="Autre_changement">Autre changement</h3>

<ul>
 <li>Les extensions qui n'ont pas été mises à jour depuis longtemps sont supposées ne plus être compatible par défaut, ce qui concerne actuellement les add-ons qui indiquent 4.0 pour <code>maxVersion</code>.</li>
</ul>

<h2 id="Voir_également">Voir également</h2>

<p>{{Firefox_for_developers('10')}}</p>
