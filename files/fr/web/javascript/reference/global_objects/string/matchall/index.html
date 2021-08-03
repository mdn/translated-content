---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/matchAll
original_slug: Web/JavaScript/Reference/Objets_globaux/String/matchAll
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>matchAll()</code></strong> renvoie un itérateur contenant l'ensemble des correspondances entre une chaîne de caractères d'une part et une expression rationnelle d'autre part (y compris les groupes capturants).</p>

<div>{{EmbedInteractiveExample("pages/js/string-matchall.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.matchAll(<var>regexp</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>regexp</code></dt>
 <dd>Un objet représentant une expression rationnelle. Si cet objet n'est pas une instance de {{jsxref("RegExp")}}, il est automatiquement et implicitement converti en une telle instance à l'aide de <code>new RegExp(obj)</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs">itérateur</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Regexp.exec()_et_matchAll()"><code>Regexp.exec()</code> et <code>matchAll()</code></h3>

<p>Avant l'apparition de <code>matchAll()</code> en JavaScript, il était possible d'utiliser {{jsxref("RegExp.exec")}} (et des expressions rationnelles utilisant le marqueur <code>/g</code>) dans une boucle afin d'obtenir l'ensemble des correspondances :</p>

<pre class="brush: js">const regexp = RegExp('foo*','g');
const str = 'table football, foosball';

while ((matches = regexp.exec(str)) !== null) {
  console.log(`${matches[0]} trouvé. Prochaine recherche à partir de ${regexp.lastIndex}.`);
  // dans la console : "foo trouvé. Prochaine recherche à partir de 9."
  // dans la console : "foo trouvé. Prochaine recherche à partir de 19."
}
</pre>

<p>Avec <code>matchAll()</code>, on peut éviter la boucle <code>while</code> et le marqueur global. On récupère l'itérateur et on utilise une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code>, <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition">la décomposition de tableau</a> ou encore {{jsxref("Array.from()")}} :</p>

<pre class="brush: js">const regexp = RegExp('foo*','g');
const str = 'table football, foosball';
let matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}
// Array [ "foo" ]
// Array [ "foo" ]

// l'itérateur est épuise après l'itération via for..of
// On rappelle matchAll afin de créer un nouvel itérateur
matches = str.matchAll(regexp);

Array.from(matches, m =&gt; m[0]);
// Array [ "foo", "foo" ]
</pre>

<h3 id="Meilleur_accès_aux_groupes_capturants">Meilleur accès aux groupes capturants</h3>

<p>Un autre avantage de <code>matchAll()</code> est un meilleur accès aux groupes capturants. De fait, les groupes capturants sont ignorés par <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match">match()</a></code> lorsqu'on utilise le marqueur global <code>/g</code> :</p>

<pre class="brush: js">var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']</pre>

<p>Avec <code>matchAll()</code>, on peut y accéder :</p>

<pre class="brush: js">let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
</pre>

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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.matchall', 'String.prototype.matchAll')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.matchAll")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
