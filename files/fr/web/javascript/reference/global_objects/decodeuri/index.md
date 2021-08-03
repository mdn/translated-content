---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURI
original_slug: Web/JavaScript/Reference/Objets_globaux/decodeURI
---
<div>{{jsSidebar("Objects")}}</div>

<p>La méthode <code><strong>decodeURI()</strong></code> permet de décoder un Uniform Resource Identifier (URI) créé par la méthode {{jsxref("encodeURI","encodeURI()")}} ou une méthode similaire.</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">decodeURI(<var>encodedURI</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>encodedURI</code></dt>
 <dd>Un URI complet, encodé.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères dont certains caractères ont été décodés à partir de l'URI encodée passée en argument.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode lève une exception {{jsxref("URIError")}} ("<em>malformed URI sequence"</em>) lorsque la chaîne passée en argument contient des séquences de caractères invalides.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode remplace chaque séquence d'échappement présente dans l'URI encodée avec le caractère correspondant. Les séquences d'échappement qui n'auraient pas pu être introduites par {{jsxref("encodeURI", "encodeURI()")}} ne seront pas décodées. Le caractère « <code>#</code> » n'est pas décodé au sein des séquences d'échappement.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Décoder_une_URL_cyrillique">Décoder une URL cyrillique</h3>

<pre class="brush: js">decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
</pre>

<h3 id="Gérer_les_exceptions">Gérer les exceptions</h3>

<pre class="brush: js">try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// Cela produira "URIError: malformed URI sequence"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.3.1', 'decodeURI')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-decodeuri-encodeduri', 'decodeURI')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-decodeuri-encodeduri', 'decodeURI')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.decodeURI")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("decodeURIComponent","decodeURIComponent()")}}</li>
 <li>{{jsxref("encodeURI","encodeURI()")}}</li>
 <li>{{jsxref("encodeURIComponent","encodeURIComponent()")}}</li>
</ul>
