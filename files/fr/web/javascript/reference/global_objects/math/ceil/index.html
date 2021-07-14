---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/ceil
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/ceil
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.ceil()</strong></code> retourne le plus petit entier supérieur ou égal au nombre donné.</p>

<div>{{EmbedInteractiveExample("pages/js/math-ceil.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.ceil(<var>x</var>) </pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>Un nombre.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le plus petit entier qui est supérieur ou égal au nombre donné.</p>

<h2 id="Description">Description</h2>

<p><code>ceil()</code> est une méthode statique de <code>Math</code>. Elle doit être utilisée avec la syntaxe <code>Math.ceil()</code>, plutôt que comme une méthode d'un autre objet qui aurait été créé (<code>Math</code> n'est pas un constructeur).</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> <code>Math.ceil(null)</code> renverra <code>0</code> et pas {{jsxref("NaN")}}.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.ceil()">Utiliser <code>Math.ceil()</code></h3>

<p>Voici un exemple d'utilisation de <code>Math.ceil()</code>.</p>

<pre class="brush:js;">Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
Math.ceil(null);   // 0</pre>

<h3 id="Arrondi_décimal">Arrondi décimal</h3>

<pre class="brush:js">// Fermeture
(function(){

	/**
	 * Fonction pour arrondir un nombre.
	 *
	 * @param	{String}	type	Le type d'arrondi.
	 * @param	{Number}	value	Le nombre à arrondir.
	 * @param	{Integer}	exp		L'exposant (le logarithme en base 10 de la base pour l'arrondi).
	 * @returns	{Number}			La valeur arrondie.
	 */
	function decimalAdjust(type, value, exp) {
		// Si l'exposant vaut undefined ou zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// Si value n'est pas un nombre
        // ou si l'exposant n'est pas entier
		if (isNaN(value) || !(typeof exp === 'number' &amp;&amp; exp % 1 === 0)) {
			return NaN;
		}
		// Décalage
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Re "calage"
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Arrondi décimal
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Arrondi décimal inférieur
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Arrondi décimal supérieur
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}

})();

// Arrondi décimal
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
// Arrondi décimal inférieur
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Arrondi décimal supérieur
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.8.2.6', 'Math.ceil')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-math.ceil', 'Math.ceil')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.ceil', 'Math.ceil')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.ceil")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.floor()")}}</li>
 <li>{{jsxref("Math.round()")}}</li>
 <li>{{jsxref("Math.sign()")}}</li>
 <li>{{jsxref("Math.trunc()")}}{</li>
</ul>
