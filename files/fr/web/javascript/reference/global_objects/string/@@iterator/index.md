---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/@@iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/String/@@iterator
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>[@@iterator]()</code></strong> renvoie un nouvel objet <code><a href="/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator">Iterator</a></code> qui itère sur les points de code (codets) d'une chaîne de caractères, en renvoyant chaque point de code sous forme d'une chaîne de caractères.</p>

<div>{{EmbedInteractiveExample("pages/js/string-iterator.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>chaîneDeCaractères</var>[Symbol.iterator]</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>Iterator</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_iterator()">Utiliser <code>[@@iterator]()</code></h3>

<pre class="brush:js">var chaîne = "A\uD835\uDC68";

var chaîneIter = chaîne[Symbol.iterator]();

console.log(chaîneIter.next().value); // "A"
console.log(chaîneIter.next().value); // "\uD835\uDC68"
</pre>

<h3 id="Utiliser_iterator()_avec_une_boucle_for..of">Utiliser <code>[@@iterator]()</code> avec une boucle <code>for..of</code></h3>

<pre class="brush:js">var chaine = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (var c of chaine) {
  console.log(c);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
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
   <td>{{SpecName('ES2015', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype-@@iterator', 'String.prototype[@@iterator]()')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.@@iterator")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">Les protocoles d'itération</a></li>
</ul>
