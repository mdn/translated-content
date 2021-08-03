---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/baseName
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>Intl.Locale.prototype.baseName</code></strong> renvoie un extrait de la chaîne de caractères représentant l'objet <code>Locale</code>. Cet extrait contient les informations essentielles à propos de l'objet <code>Locale</code>.</p>

<h2 id="Description">Description</h2>

<p>Un objet <code>Intl.Locale</code> représente une locale ainsi que des options qui lui sont associées. La propriété <code>baseName</code> renvoie des informations essentielles quant à la locale sous la forme d'une chaîne de caractères. Cette chaîne est un extrait de la représentation textuelle complète de l'objet <code>Locale</code>. Cet extrait contient notamment la langue, le script utilisé ainsi que la région (s'ils sont disponibles).</p>

<p>Si on utilise <a href="https://www.unicode.org/reports/tr35/#Identifiers">la grammaire Unicode</a>, <code>baseName</code> renvoie la sous-séquence <code>language ["-" script] ["-" region] *("-" variant)</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<pre class="brush: js">let myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Candanian French
console.log(myLoc.toString()); // Prints out "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // Prints out "fr-Latn-CA"</pre>

<h3 id="Exemple_avec_certaines_options">Exemple avec certaines options</h3>

<pre class="brush: js">// Sets language to Japanese, region to Japan,

// calendar to Gregorian, hour cycle to 24 hours
let japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Prints out "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // Prints out "ja-JP"</pre>

<h3 id="Exemple_avec_options_qui_surchargent">Exemple avec options qui surchargent</h3>

<pre class="brush: js">// Input string indicates language as Dutch and region as Belgium,

// but options object overrides the region and sets it to the Netherlands
let dutch = new Intl.Locale("nl-Latn-BE", {region: "NL"});

console.log(dutch.baseName); // Prints out "nl-Latn-NL"</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td><a href="https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.baseName">Proposition pour <code>Intl.Locale.prototype.baseName</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.baseName")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
</ul>
