---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
tags:
  - JavaScript
  - Méthode
  - Number
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isInteger
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/isInteger
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>Number.isInteger()</code></strong> permet de déterminer si l'argument est un nombre entier.</p>

<div>{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Number.isInteger(valeurÀTester)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code><var>valeurÀTester</var></code></dt>
 <dd>La valeur dont on souhaite savoir si elle est entière ou non.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen qui indique si la valeur fournie en argument est un entier.</p>

<h2 id="Description">Description</h2>

<p>Si la valeur à tester est un entier, cette méthode renvoie <code>true</code>, <code>false</code> sinon. Si la valeur est {{jsxref("NaN")}} ou l'infini ({{jsxref("Infinity")}}), la méthode renverra <code>false</code>. La méthode renverra également <code>true</code> pour les nombres flottants qui peuvent être représentés comme des entiers.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(0);         // true
Number.isInteger(1.000)      // true
// Number.isInteger(9…9999); // true, même si le nombre dépasse 32 bits

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(-Infinity); // false
Number.isInteger(true);      // false
Number.isInteger(NaN);       // false
Number.isInteger("10");      // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001);// false
Number.isInteger(5.0000000000000001); // true
</pre>

<h2 id="Prothèse_démulation_polyfill">Prothèse d'émulation (<em>polyfill</em>)</h2>

<pre class="brush: js">Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &amp;&amp;
           isFinite(value) &amp;&amp;
           Math.floor(value) === value;
};</pre>

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
   <td>{{SpecName('ES6', '#sec-number.isinteger', 'Number.isInteger')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.isinteger', 'Number.isInteger')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.isInteger")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'objet global {{jsxref("Number")}} auquel appartient cette méthode.</li>
</ul>
