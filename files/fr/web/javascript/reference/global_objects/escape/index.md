---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
tags:
  - Deprecated
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/escape
original_slug: Web/JavaScript/Reference/Objets_globaux/escape
---
<div>{{jsSidebar("Objects")}}</div>

<div class="warning"><p><strong>Attention :</strong> Bien que <code>escape(…)</code> ne soit pas strictement obsolète (au sens où elle n'a pas été retirée des standards), elle est définie au sein de <a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers">l'Annexe B</a> du standard ECMA-262 qui commence par :

<blockquote>… L'ensemble des fonctionnalités et comportements définis dans cette annexe possède une ou plusieurs caractéristiques indésirables. En l'absence d'une utilisation historique, ces fonctionnalités seraient retirés de la spécification. …<br>
… Les développeurs ne devraient pas utiliser ces fonctionnalités et comportements ou présupposer qu'elles existent lors de l'écriture de nouveau code ECMAScript. …</blockquote></p>
</div>

<p>La fonction <code><strong>escape()</strong></code> permet de renvoyer une nouvelle chaîne de caractères dont certains caractères ont été remplacés par leur séquence d'échappement hexadécimale. Cette méthode est obsolète et il est donc conseillé d'utiliser {{jsxref("encodeURI")}} ou {{jsxref("encodeURIComponent")}} à la place.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Cette fonction pouvait être utilisée pour l'encodage de fragment de requêtes d'URL. Si on souhaite remplacer des caractères par leur séquence d'échappement correcte (avec <code>%20</code> par exemple), on pourra utiliser <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/decodeURIComponent">decodeURIComponent</a></code>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">escape(<var>str</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>Une chaîne de caractères à encoder.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères dont certains caractères ont été échappés.</p>

<h2 id="Description">Description</h2>

<p>La fonction <code>escape</code> est une propriété de l'<em>objet global</em>. Les caractères spéciaux, sauf @*_+-./, seront encodés.</p>

<p>La forme hexadécimale des caractères dont la valeur du codet est inférieure à 0xFF sera représentée sur deux chiffres : %xx. Pour les caractères avec un code supérieur, quatre chiffres seront utilisés avec le format suivant %<strong>u</strong>xxxx.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">escape("abc123");     // "abc123"
escape("äöü");        // "%E4%F6%FC"
escape("ć");          // "%u0107"

// caractères spéciaux
escape("@*_+-./");    // "@*_+-./"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-B.2.1', 'escape')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définie dans l'annexe B (informative) sur la compatibilité.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-escape-string', 'escape')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définie dans l'annexe B (normative) pour les fonctionnalités additionnelles d'ECMAScript pour les navigateurs Web.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-escape-string', 'escape')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définie dans l'annexe B (normative) pour les fonctionnalités additionnelles d'ECMAScript pour les navigateurs Web.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.escape")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("encodeURIComponent")}}</li>
 <li>{{jsxref("unescape")}}</li>
</ul>
