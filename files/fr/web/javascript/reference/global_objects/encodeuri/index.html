---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
tags:
  - JavaScript
  - Reference
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
original_slug: Web/JavaScript/Reference/Objets_globaux/encodeURI
---
<div>{{jsSidebar("Objects")}}</div>

<p>La fonction <code><strong>encodeURI()</strong></code> encode un Uniform Resource Identifier (URI) en remplaçant chaque exemplaire de certains caractères par une, deux, trois ou quatre séquences d'échappement représentant le caractère encodé en UTF-8 (les quatre séquences d'échappement ne seront utilisées que si le caractère est composé de deux caractères « <em>surrogate</em> »).</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">encodeURI(<var>URI</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>URI</code></dt>
 <dd>Un Uniform Resource Identifier complet.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères représentant un URI, encodé, à partir de la chaîne de caractères passée en argument.</p>

<h2 id="Description">Description</h2>

<p><code>encodeURI()</code> échappe tous les caractères sauf ceux-ci :</p>

<pre>A-Z a-z 0-9 ; , / ? : @ &amp; = + $ - _ . ! ~ * ' ( ) #
</pre>

<p><code>encodeURI()</code> est différente de {{jsxref("encodeURIComponent")}}. Par exemple :</p>

<pre class="brush: js">var set1 = ";,/?:@&amp;=+$#";  // Caractères réservés
var set2 = "-_.!~*'()";   // Caractères non-réservés
var set3 = "ABC abc 123"; // Caractères alphanumériques et espace

console.log(encodeURI(set1)); // ;,/?:@&amp;=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (l'espace est encodé en %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (l'espace est encodé en %20)

</pre>

<p>Une exception {{jsxref("URIError")}} sera levée si on tente d'encoder un caractère <em>surrogate</em> (demi-codet) qui ne fait pas partie d'une paire :</p>

<pre class="brush: js">// On a une paire de codets <em>surrogate</em>
console.log(encodeURI('\uD800\uDFFF'));

// Ici, seul le caractère "haut"
// ce qui déclenche une "URIError: malformed URI sequence"
console.log(encodeURI('\uD800'));

// Ici, seul le caractère "bas"
// ce qui déclenche une "URIError: malformed URI sequence"
console.log(encodeURI('\uDFFF'));
</pre>

<p><code>encodeURI()</code> ne permet pas de former des requêtes HTTP GET ou POST (par exemple avec {{domxref("XMLHTTPRequest")}}) car "&amp;", "+" et "=" ne sont pas encodés et sont traités comme des caractères spéciaux (toutefois, la méthode. {{jsxref("encodeURIComponent")}} pourra être utilisée pour encoder ces caractères).</p>

<p>Si on souhaite suivre la <a href="http://tools.ietf.org/html/rfc3986">RFC3986</a> qui concerne les URL et qui rend les crochets réservés (pour IPv6) (il ne faut donc plus encoder ces caractères lorsqu'ils font partie d'une URL (notamment pour la partie représentant l'hôte), on pourra utiliser le fragment de code suivant :</p>

<pre class="brush: js">function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}</pre>

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
   <td>{{SpecName('ESDraft', '#sec-encodeuri-uri', 'encodeURI')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-encodeuri-uri', 'encodeURI')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.3.3', 'encodeURI')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.encodeURI")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("decodeURI", "decodeURI()")}}</li>
 <li>{{jsxref("encodeURIComponent", "encodeURIComponent()")}}</li>
 <li>{{jsxref("decodeURIComponent", "decodeURIComponent()")}}</li>
</ul>
