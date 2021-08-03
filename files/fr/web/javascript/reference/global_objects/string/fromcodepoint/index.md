---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
original_slug: Web/JavaScript/Reference/Objets_globaux/String/fromCodePoint
---
<div>{{JSRef}}</div>

<p>La méthode statique <strong><code>String.fromCodePoint()</code></strong> renvoie une chaîne de caractères créée à partir d'un suite de codets.</p>

<div>{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">String.fromCodePoint(<var>num1</var>[, ...[, <var>numN</var>]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>num1, ..., num<em>N</em></code></dt>
 <dd>Une séquence de codets (<em>code points</em>).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères créée à partir de la séquence de codets indiquée.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Une exception {{jsxref("Erreurs/Not_a_codepoint","RangeError")}} est renvoyée si un codet (Unicode) invalide est utilisé (par exemple, on pourra avoir "RangeError: NaN is not a valid code point").</li>
</ul>

<h2 id="Description">Description</h2>

<p><code>fromCodePoint()</code> étant une méthode statique de {{jsxref("String")}}, elle doit toujours être utilisée avec la syntaxe <code>String.fromCodePoint()</code>, plutôt qu'avec une méthode d'un objet {{jsxref("String")}} qui aurait été créé.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_fromCodePoint()">Utiliser <code>fromCodePoint()</code></h3>

<pre class="brush: js">String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
</pre>

<h3 id="Comparaison_avec_fromCharCode()">Comparaison avec <code>fromCharCode()</code></h3>

<p>La méthode {{jsxref("String.fromCharCode()")}} ne peut pas renvoyer les caractères de l'intervalle 0x010000 à 0X10FFFF avec un seul codet, il est nécessaire de lui fournir la paire décomposée (<em>surrogate pair</em>) pour obtenr un tel caractère :</p>

<pre class="brush: js">String.fromCharCode(0xD83C, 0xDF03); // émoji « nuit étoilée »
String.fromCharCode(55356, 57091);   // équivalent en notation décimale</pre>

<p><code>String.fromCodePoint()</code>, en revanche, peut renvoyer les caractères qui s'expriment sur plus d'un codet de 16 bits grâce à leur codet « simple » :</p>

<pre class="brush: js">String.fromCodePoint(0x1F303); // ou 127747 en notation décimale</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-string.fromcodepoint', 'String.fromCodePoint')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.fromcodepoint', 'String.fromCodePoint')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.fromCodePoint")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
</ul>
