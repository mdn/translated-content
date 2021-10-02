---
title: Location
slug: Web/API/Location
tags:
  - API
  - HTML DOM
  - Interface
  - JavaScript
  - Location
  - Reference
translation_of: Web/API/Location
---
<div>{{APIRef("HTML DOM")}}</div>

<p>L'interface <strong><code>Location</code></strong> représente l'emplacement de l'objet auquel elle est liée. Les changements effectués dessus sont reflétés sur l'objet lié. Les deux interfaces {{domxref("Document")}} et {{domxref("Window")}} sont liées à une <code>Location</code>, accessible via {{domxref("Document.location")}} et {{domxref("Window.location")}} respectivement.</p>

<h2 id="Anatomie_dune_Location">Anatomie d'une Location</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;span id="href" title="href"&gt;&lt;span id="protocol" title="protocol"&gt;http:&lt;/span&gt;//&lt;span id="host" title="host"&gt;&lt;span id="hostname" title="hostname"&gt;example.org&lt;/span&gt;:&lt;span id="port" title="port"&gt;8888&lt;/span&gt;&lt;/span&gt;&lt;span id="pathname" title="pathname"&gt;/foo/bar&lt;/span&gt;&lt;span id="search" title="search"&gt;?q=baz&lt;/span&gt;&lt;span id="hash" title="hash"&gt;#bang&lt;/span&gt;&lt;/span&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">html, body {height:100%;}
html {display:table; width:100%;}
body {display:table-cell; text-align:center; vertical-align:middle; font-family:georgia; font-size:230%; line-height:1em; white-space:nowrap;}

[title] {position:relative; display:inline-block; box-sizing:border-box; /*border-bottom:.5em solid;*/ line-height:2em; cursor:pointer;}

[title]:before {content:attr(title); font-family:monospace; position:absolute; top:100%; width:100%; left:50%; margin-left:-50%; font-size:40%; line-height:1.5; background:black;}
[title]:hover:before,
:target:before {background:black; color:yellow;}

[title] [title]:before {margin-top:1.5em;}
[title] [title] [title]:before {margin-top:3em;}

[title]:hover,
:target {position:relative; z-index:1; outline:50em solid rgba(255,255,255,.8);}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">[].forEach.call(document.querySelectorAll('[title][id]'), function (node) {
  node.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.hash = '#' + $(this).attr('id');
  });
});
[].forEach.call(document.querySelectorAll('[title]'), function (node) {
  node.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.hash = '';
  });
});</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Anatomy_Of_Location')}}</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface <code>Location</code> n'hérite d'aucune propriété, mais implémente celles de {{domxref("URLUtils")}}.</em></p>

<dl>
 <dt>{{domxref("Location.href")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant l'URL entière.</dd>
 <dt>{{domxref("Location.protocol")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant le schéma de protocole de l'URL, incluant le <code>':'</code> final.</dd>
 <dt>{{domxref("Location.host")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant l'hôte, c'est-à-dire le <em>domaine</em>, un <code>':'</code>, et le <em>numéro de port</em> de l'URL.</dd>
 <dt>{{domxref("Location.hostname")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant le domaine de l'URL.</dd>
 <dt>{{domxref("Location.port")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant le numéro de port de l'URL.</dd>
 <dt>{{domxref("Location.pathname")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant un <code>'/'</code> initial suivi du chemin de l'URL.</dd>
 <dt>{{domxref("Location.search")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant un <code>'?'</code> suivi des paramètres de l'URL. Les navigateurs moderne fournissent <a href="/en-US/docs/Web/API/URLSearchParams/get#Example">URLSearchParams</a> et <a href="/en-US/docs/Web/API/URL/searchParams#Example">URL.searchParams</a> pour faciliter l'analyse des paramètres de la chaîne de requête (querystring).</dd>
 <dt>{{domxref("Location.hash")}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant un <code>'#'</code> suivi de <em>l'identifiant de fragment</em> de l'URL.</dd>
 <dt>{{domxref("Location.username")}} {{Obsolete_Inline}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant le nom d'utilisateur spécifié avant le nom de domaine.</dd>
 <dt>{{domxref("Location.password")}} {{Obsolete_Inline}}</dt>
 <dd>Une {{domxref("DOMString")}} contenant le mot de passe spécifié avant le nom de domaine.</dd>
 <dt>{{domxref("Location.origin")}} {{readOnlyInline}}</dt>
 <dd>Retourne une {{domxref("DOMString")}} contenant la forme canonique de l'origine de la location.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>L'interface <code>Location</code> n'hérite d'aucune méthode, mais implémente celles de {{domxref("URLUtils")}}.</em></p>

<dl>
 <dt>{{domxref("Location.assign()")}}</dt>
 <dd>Charge la ressource située à l'URL passée en paramètre.</dd>
 <dt>{{domxref("Location.reload()")}}</dt>
 <dd>Recharge la ressource depuis l'URL actuelle. Son unique paramètre facultatif est un <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean">Boolean</a>, qui, s'il est <code>true</code>, implique que la page est toujours rechargée depuis le serveur. Si ce paramètre est <code>false</code> ou non spécifié, le navigateur peut éventuellement recharger la page depuis son cache.</dd>
 <dt>{{domxref("Location.replace()")}}</dt>
 <dd>Remplace la ressource actuelle par celle à l'URL passée en paramètre. la différence avec la méthode <code>assign()</code> est que, après avoir utilisé <code>replace()</code>, la page actuelle ne sera pas enregistrée dans l'historique de session {{domxref("History")}}, ce qui signifie que l'utilisateur ne pourra pas utiliser le bouton <em>précédent</em> pour y revenir.</dd>
 <dt>{{domxref("Location.toString()")}}</dt>
 <dd>Retourne une {{domxref("DOMString")}} contenant l'URL entière. C'est un synonyme de {{domxref("URLUtils.href")}}, sauf que <code>toString()</code> ne peut être utilisée pour modifier la valeur.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Crée un élèment ancre et utilise la propriété href dans le but de cet exemple
// Une alternative plus correcte est de naviguer vers l'URL et d'utiliser document.location ou window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org:8080
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // 8080
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org:8080</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "history.html#the-location-interface", "Location")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de différence avec {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "browsers.html#the-location-interface", "Location")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité">Compatibilité</h2>



<p>{{Compat("api.Location")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Deux méthodes qui créent un objet <code>location</code> : {{domxref("Window.location")}} et {{domxref("Document.location")}}.</li>
 <li>Interfaces liées aux URL: {{domxref("URL")}}, {{domxref("URLSearchParams")}} et {{domxref("HTMLHyperlinkElementUtils")}}.</li>
</ul>
