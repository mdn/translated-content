---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Number
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/isSafeInteger
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Number.isSafeInteger()</code></strong> permet de déterminer si la valeur, passée en argument, est un entier représentable correctement en JavaScript (c'est-à-dire un nombre compris entre -(2^53-1) et 2^53-1).</p>

<div>{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}</div>



<div class="blockIndicator note">
<p><strong>Note :</strong> Pour représenter des entiers qui ne sont pas compris dans cet intervalle, on pourra utiliser le type {{jsxref("BigInt")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Number.isSafeInteger(valeurÀTester)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code><var>valeurÀTester</var></code></dt>
 <dd>La valeur dont on souhaite savoir si elle représente un entier représentable correctement en une valeur non signée sur 32 bits. (JavaScript utilise <a class="external external-icon" href="https://en.wikipedia.org/wiki/Double_precision_floating-point_format">les nombres au format de virgule flottante à double précision</a> comme spécifié dans <a class="external external-icon" href="https://fr.wikipedia.org/wiki/IEEE_754">IEEE 754</a> et ne peut représenter avec certitude un entier qu'entre <code>-(2^53-1)</code> et <code>2^53-1</code> (c'est-à-dire ± <code>9007199254740991</code>).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen qui indique si la valeur fournie en argument est un entier représentable correctement en JavaScript.</p>

<h2 id="Description">Description</h2>

<p>Un entier correctement représentable en JavaScript :</p>

<ul>
 <li>peut exactement être représenté avec un nombre à précision double selon IEEE-754</li>
 <li>la réprésentation IEEE-754 du nombre ne permet pas de l'arrondir à un autre entier pouvant être représenté avec le format décrit par IEEE-754.</li>
</ul>

<p>Ainsi, par exemple, <code>2^53 - 1</code> peut être représenté correctement, aucun autre entier ne peut être arrondi en cette valeur selon IEEE-754. En revanche, <code>2^53</code> ne peut pas être représenté correctement car <code>2^53 + 1</code> sera arrondi en <code>2^53</code> selon les règles IEEE-754 (arrondi à l'entier le plus proche).</p>

<p>L'intervalle des entiers qui peuvent être correctement représentés est <code>[-(2^53 - 1),2^53 - 1</code> ].</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">Number.isSafeInteger(3);                    // true
Number.isSafeInteger(Math.pow(2, 53))       // false
Number.isSafeInteger(Math.pow(2, 53) - 1)   // true
Number.isSafeInteger(NaN);                  // false
Number.isSafeInteger(Infinity);             // false
Number.isSafeInteger("3");                  // false
Number.isSafeInteger(3.1);                  // false
Number.isSafeInteger(3.0);                  // true
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
   <td>{{SpecName('ES2015', '#sec-number.issafeinteger', 'Number.isSafeInteger')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.issafeinteger', 'Number.isSafeInteger')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.isSafeInteger")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'objet {{jsxref("Number")}} auquel appartient cette méthode</li>
 <li>{{jsxref("Number.MIN_SAFE_INTEGER")}}</li>
 <li>{{jsxref("Number.MAX_SAFE_INTEGER")}}</li>
 <li>{{jsxref("BigInt")}}</li>
</ul>
