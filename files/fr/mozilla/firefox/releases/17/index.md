---
title: Firefox 17 pour les développeurs
slug: Mozilla/Firefox/Releases/17
tags:
  - Firefox
  - Firefox 17
translation_of: Mozilla/Firefox/Releases/17
original_slug: Mozilla/Firefox/Versions/17
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 17, basé sur Gecko 17.0, est sorti le 20 novembre 2012. Cette page résume les principaux changements dans Firefox 17 qui sont utiles aux développeurs.</p>

<h2 id="Changements_pour_les_développeurs_Web">Changements pour les développeurs Web</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>Le support de l'attribut {{htmlattrxref("sandbox", "iframe")}} sur l'élément {{HTMLElement("iframe")}} a été ajouté. ({{bug(341604)}})</li>
 <li>Le support de l'attribut <code>inputmode</code> sur l'élément {{HTMLElement("input")}} a été ajouté. (Note : actuellement, les valeurs de Gecko diffèrent de la spécification HTML de WHATWG.) ({{bug(746142)}})</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>Le support de la règle {{cssxref("@supports")}} définie dans la <a href="http://dev.w3.org/csswg/css3-conditional/">spécification CSS3 Conditional Rules</a> a été lancée. Les développeurs peuvent l'essayer en passant la préférence <code>layout.css.supports-rule.enabled</code> à <code>true</code> ({{bug(649740)}})</li>
 <li>Le support de la pseudo-classe {{cssxref(":dir", ":dir()")}}, des sélecteurs CSS de niveau 4, permettant de sélectionner des éléments selon leur directionnalité a été lancée. ({{bug(562169)}})</li>
 <li>Le support de la nouvelle valeur <code>isolate-override</code> de la propriété CSS {{cssxref("unicode-bidi")}} a été lancée. ({{bug(774335)}})</li>
 <li>Notre implémentation de {{cssxref("box-sizing")}} préfixé prend désormais en compte {{cssxref("min-height")}} et {{cssxref("max-height")}}. Un pas de plus vers son dépréfixage. ({{bug(308801)}})</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>Le support de l'interface {{domxref("CSSSupportsRule")}} définie dans la <a href="http://dev.w3.org/csswg/css3-conditional/">spécification CSS3 Conditional Rules</a> a été lancée. ({{bug(649740)}})</li>
 <li>Le support de l'objet {{domxref("WheelEvent")}} et de l'évènement <code>wheel</code> a été lancé. ({{bug(719320)}}).</li>
 <li>Le support de la touche DOM Meta sur Linux est de nouveau disponible. ({{bug(751749)}}).</li>
 <li>Sur {{domxref("HTMLMediaElement")}}, une nouvelle méthode a été ajoutée, <code>mozGetMetadata</code>. Elle retourne un objet JavaScript dont les propriétés représentent les métadonnées à partir de la ressource du média joué comme des paires {clé: valeur}. ({{bug(763010)}}).</li>
</ul>


<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>L'objet <a href="/fr/docs/JavaScript/R%C3%A9f%C3%A9rence_JavaScript/Objets_globaux/String"><code>String</code></a> offre à présent les méthodes d'Harmony <code>startsWith</code>, <code>endsWith</code> et <code>contains</code>. ({{bug(772733)}})</li>
 <li>Les méthodes de <code>String</code> <a href="/fr/docs/JavaScript/Reference/Global_Objects/String/link"><code>link</code></a> et <a href="/fr/docs/JavaScript/Reference/Global_Objects/String/anchor"><code>anchor</code></a> échappent désormais à <strong>"</strong> (guillemet). ({{bug("352437")}})</li>
 <li>Le support expérimental pour l'objet <a href="/fr/docs/JavaScript/R%C3%A9f%C3%A9rence_JavaScript/Objets_globaux/ParallelArray"><code>ParallelArray</code></a> a été implémenté. ({{bug(778559)}})</li>
 <li>Support des itérateurs <a href="/fr/docs/JavaScript/Reference/Global_Objects/Map"><code>Map</code></a>/<a href="/fr/docs/JavaScript/Reference/Global_Objects/Set"><code>Set</code></a>. ({{bug(725909)}})</li>
 <li><a href="/fr/docs/E4X">E4X</a> est désactivé par défaut pour le contenu Web. ({{bug(778851)}})</li>
 <li><code>__exposedProps__</code> doit désormais être défini pour les objets JavaScript Chrome exposés au contenu. Les tentatives d'accès à des objets de contenu sans Chrome <code>__exposedProps__ </code> échoueront ensembles silencieusement. ({{bug(553102)}})</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>L'analyse de l'attribut <code>align</code> sur les éléments {{MathMLElement("mtable")}} a été mise à jour pour mieux traiter les espaces optionnels.</li>
</ul>

<h3 id="XUL">XUL</h3>

<ul>
 <li>L'élément XUL <a href="/fr/docs/XUL/key"><code>key</code></a> supporte le modificateur "os" qui est la touche Win (Super ou Hyper touche). ({{bug(751749)}})</li>
</ul>

<h3 id="Agent_Utilisateur">Agent Utilisateur</h3>

<p>La partie de Gecko sur la chaine de l'agent utilisateur a changée. La date de compilation (qui n’avait pas été mise à jour depuis 2010) a été retirée, et c'est le numéro de version de Gecko qui a été mis en place. Donc <code>Gecko/20100101</code> -&gt; <code>Gecko/17.0</code>. Cela peut vous affecter si vous faites du reniflement.</p>

<h2 id="Changements_pour_les_développeurs_de_Mozilla_et_de_modules_complémentaires">Changements pour les développeurs de Mozilla et de modules complémentaires</h2>

<h3 id="Changements_dans_les_interfaces">Changements dans les interfaces</h3>

<dl>
 <dt>{{interface("nsIInputStream")}}</dt>
 <dd>La méthode <code>available()</code> retourne une longueur de 64-bit au lieu de 32-bit. ({{bug(215450)}})</dd>
 <dt>{{interface("nsIDOMWindowUtils")}}</dt>
 <dd>La méthode <code>sendMouseScrollEvent()</code> a été remplacée par <code>sendWheelEvent()</code>. ({{bug(719320)}})</dd>
 <dt>{{interface("nsIFilePicker")}}</dt>
 <dd>La méthode <code>open()</code>, pour ouvrir la boîte de dialogue d'un fichier de façon asynchrone, a été ajoutée et la méthode <code>show()</code> a été dépréciée. ({{bug("731307")}})</dd>
 <dt>{{interface("nsIScriptSecurityManager")}}</dt>
 <dd>Les méthodes <code>checkLoadURIStr()</code> et <code>checkLoadURI()</code> ont été retirées. ({{bug(327244)}})</dd>
 <dt>{{interface("nsIRefreshURI")}}</dt>
 <dd>La méthode <code>setupRefreshURIFromHeader()</code> a un paramètre <code>principal</code> en plus.</dd>
</dl>

<h2 id="Voir_également">Voir également</h2>

<p>{{Firefox_for_developers('16')}}</p>
