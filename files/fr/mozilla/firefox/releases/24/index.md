---
title: Firefox 24 pour les développeurs
slug: Mozilla/Firefox/Releases/24
translation_of: Mozilla/Firefox/Releases/24
original_slug: Mozilla/Firefox/Versions/24
---
<div>{{FirefoxSidebar}}</div><h2 id="Changements_pour_les_développeurs_Web">Changements pour les développeurs Web</h2>

<h3 id="CSS">CSS</h3>

<ul>
 <li>Les deux valeurs <code>-moz-zoom-in</code> et <code>-moz-zoom-out</code> de la propriété {{cssxref("cursor")}} ont été dépréfixés pour <code>zoom-in</code> et <code>zoom-out</code> ({{bug("772153")}}).</li>
 <li>Pour correspondre à la spécification, les mots-clés <code>not</code>, <code>only</code>, <code>and</code> et <code>or</code> ne peuvent plus être utilisés comme un type de média ({{bug("757554")}}).</li>
</ul>

<h3 id="HTML">HTML</h3>

<ul>
 <li>L'élément {{HTMLElement("track")}} a été implémenté derrière la préférence <code>media.webvtt.enabled</code> ({{bug(833385)}}).</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>Les <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">fonctions fléchées</a> ne sont plus automatiquement en mode strict sauf si c'est spécifié avec <code>"use strict"</code> ({{bug(852762)}}).</li>
 <li>La méthode <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/repeat"><code>String.prototype.repeat</code></a> a été implémentée ({{bug(815431)}}).</li>
 <li>Les méthodes {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}} et {{jsxref("Set.prototype.entries()")}} de l'objet {{jsxref("Set")}} ont été implémentées ({{bug("869996")}}).</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>Le support du constructeur {{domxref("Range.Range", "Range()")}} a été ajouté ({{bug(868999)}}).</li>
 <li>Le support du constructeur {{domxref("Text.Text", "Text()")}} a été ajouté ({{bug(869000)}}).</li>
 <li>Le support du constructeur {{domxref("Comment.Comment", "Comment()")}} a été ajouté ({{bug(869006)}}).</li>
 <li>Le support du constructeur {{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}} a été ajouté ({{bug(869002)}}).</li>
 <li>L'interface {{domxref("FocusEvent")}} a été implémentée ({{bug(855741)}}).</li>
 <li>Le support de la méthode {{domxref("ChildNode.remove()")}} a été ajoutée ({{bug(856629)}}).</li>
 <li>Les interfaces liées à l'élémént {{HTMLElement("track")}}, {{domxref("HTMLTrackElement")}}, {{domxref("TextTrack")}}, {{domxref("TextTrackCue")}}, {{domxref("TextTrackList")}} et {{domxref("TextTrackCueList")}} ont été implémentées derrière la préférence <code>media.webvtt.enabled</code>, sur <code>false</code> par défaut ({{bug(833385)}}).</li>
 <li>L'interface {{domxref("Gamepad")}} et la méthode {{domxref("Navigator.getGamepads")}} ont été implémentées derrière la préférence <code>dom.gamepad.enabled</code>, sur <code>false</code> par défaut ({{bug(690935)}}).</li>
 <li>Sur Firefox Desktop seulement, <code>HTMLCanvasElement.getContext()</code> peut désormais prendre la valeur de <code>webgl</code>, en plus de <code>experimental-webgl</code> ({{bug(870232)}}).</li>
 <li>La méthode non standard <code>mozLoadFrom()</code> de {{domxref("HTMLMediaElement")}} a été retirée ({{bug(877135)}}).</li>
</ul>

<h3 id="Outils_de_développement">Outils de développement</h3>

<ul>
 <li>L'inspecteur Réseau vous permet désormais de filtrer par type de contenu (CSS/Images/Polices etc.) et de voir la taille et les temps de chargement par pertinence.</li>
 <li>Le panneau d'options des Outils de développement vous permet de désactiver temporairement Javascript.</li>
 <li>Les développeurs d'extensions peuvent utiliser la nouvelle <a href="http://www.robodesign.ro/mihai/blog/the-browser-console-is-replacing-the-error-console">Console Web</a> pour les scripts au niveau du Chrome (Remplace la console d'erreur).</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>L'attribut <code>dir</code> pour contrôler le sens de lecture des formules, par ex. sur les éléments {{MathMLElement("math")}} ou {{MathMLElement("mrow")}}, est désormais équivalent à l'utilisation de la propriété CSS {{cssxref("direction")}}.</li>
 <li>Le signe égal ("=") est désormais <a href="/fr/docs/Web/MathML/Element/mo#attr-stretchy">extensible</a>.</li>
 <li>La valeur "<code>updiagonalarrow</code>" pour la notation de l'attribut <code>notation</code> sur l'élément {{MathMLElement("menclose")}} a été ajouté.</li>
</ul>

<h2 id="Changements_pour_les_développeurs_Mozilla_et_développeurs_d'add-on">Changements pour les développeurs Mozilla et développeurs d'add-on</h2>

<ul>
 <li>DocShell a désormais l'attribut <code>allowMedia</code> pour désactiver la lecture des médias ({{bug(759964)}}).</li>
 <li>Les plugins de recherche Sherlock dans le répertoire de l'application ou du profile, ne seront plus chargés ({{bug(862143)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://www.mozilla.org/en-US/firefox/24.0/releasenotes/">Notes de version de Firefox 24</a></li>
 <li><a href="https://blog.mozilla.org/addons/2013/09/03/compatibility-for-firefox-24/">Compatibilité des add-ons avec Firefox 24</a></li>
</ul>

<h3 id="Anciennes_versions">Anciennes versions</h3>

<p>{{Firefox_for_developers('23')}}</p>
