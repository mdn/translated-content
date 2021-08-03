---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
tags:
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/isNaN
original_slug: Web/JavaScript/Reference/Objets_globaux/isNaN
---
<div>{{jsSidebar("Objects")}}</div>

<p>La fonction <code><strong>isNaN()</strong></code> permet de déterminer si une valeur est {{jsxref("NaN")}}. On notera que cette fonction utilise des règles de conversion différentes de {{jsxref("Number.isNaN()")}}, définie avec ECMAScript 2015 (ES6).</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">isNaN(<var>valeurÀTester</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeurÀTester</code></dt>
 <dd>La valeur dont on souhaite déterminer si elle est {{jsxref("NaN")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la valeur fournie vaut {{jsxref("NaN")}}, sinon, la méthode renverra <code>false</code>.</p>

<h2 id="Description">Description</h2>

<h3 id="La_nécessité_d'avoir_isNaN()">La nécessité d'avoir <code>isNaN()</code></h3>

<p>À la différence des autres valeurs JavaScript, il est impossible d'utiliser les opérateurs d'égalité faible et stricte ({{jsxref("Opérateurs/Opérateurs_de_comparaison","==","#.C3.89galit.C3.A9_simple_(.3D.3D)")}} et {{jsxref("Opérateurs/Opérateurs_de_comparaison","===","#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)")}}) afin de déterminer si une valeur <em>est </em>ou<em> n'est pas</em> réellement {{jsxref("NaN")}}. En effet <code>NaN == NaN</code> et <code>NaN === NaN</code> renvoient <code>false</code> tous les deux. C'est pour cela qu'il est nécessaire d'avoir la fonction <code>isNaN()</code>.</p>

<h3 id="Les_origines_de_NaN">Les origines de <code>NaN</code></h3>

<p>La valeur <code>NaN</code> est générée lorsqu'une opération arithmétique résulte en une valeur indéfinie ou non représentable. De telles valeurs ne représentent pas nécessairement des dépassements de condition. <code>NaN</code> peut également être le résultat d'une conversion numérique pour les valeurs qui n'ont pas de valeurs numériques correspondantes (par exemple lorsqu'on souhaite convertir la chaîne <code>"toto"</code> en un nombre).</p>

<p>Par exemple, lorsqu'on divise zéro par zéro, on obtient <code>NaN</code>. En revanche, lorsqu'on divise d'autres nombres par zéro, on n'obtient pas ce résultat.</p>

<h3 id="Comportement_étrange_de_isNaN()">Comportement étrange de <code>isNaN()</code></h3>

<p>Depuis les premières spécifications pour <code>isNaN()</code>, son comportement sur les arguments non-numériques a toujours été source de confusion. Lorsque l'argument passé à la fonction n'est pas du type <a href="https://es5.github.com/#x8.5">Number</a>, la valeur est d'abord convertie en une valeur du type Number. La valeur résultante est ensuite utilisée lors du test afin de déterminer si c'est {{jsxref("NaN")}}. Ainsi pour valeurs non numériques qui sont converties en une valeur non-NaN numérique (notamment la chaîne vide, les valeurs booléennes qui donnent zéro ou un), la fonction renverra <code>false</code>, ce qui pourrait être inattendu (en effet, la chaîne vide <em>n'est pas un nombre</em>). Ici, la confusion provient du fait que « not a number » a un sens particulier pour les valeurs numériques représentées selon IEEE-754. Cette fonction doit plutôt être vue comme la réponse à la question « est-ce que cette valeur, lorsqu'elle est convertie en une valeur numérique, correspond à la valeur IEEE-754 "Not A Number" ? ».</p>

<p>La version ECMAScript ES2015 ajoute la méthode {{jsxref("Number.isNaN()")}}. <code>Number.isNaN(x)</code> permettra de tester de façon plus fiable si <code>x</code> vaut <code>NaN</code> ou non. Si on ne dispose pas de cette méthode, on peut également utiliser l'expression <code>(x != x)</code> afin de tester de façon plus certaine si <code>x</code> vaut <code>NaN</code> ou non (en effet le résultat de cette expression n'aura pas les faux positifs de <code>isNaN</code>). Sous cet angle, <code>isNaN()</code> peut être vu comme :</p>

<pre class="brush: js">var isNaN = function(valeur) {
  return Number.isNaN(Number(valeur));
};</pre>

<p>Ou encore, en utilisant le fait que <code>NaN</code> est la seule valeur différente d'elle-même :</p>

<pre class="brush: js">var isNaN = function(valeur) {
  var n = Number(valeur);
  return n !== n;
};</pre>

<h3 id="NaN_est_«_empoisonné_»"><code>NaN</code> est « empoisonné »</h3>

<p>Cette fonction peut être utilisée afin de déterminer si la valeur courante peut faire partie d'une expression arithmétique. En effet, si un des composants d'une expression arithmétique vaut <code>NaN</code>, le résultat de l'expression sera <code>NaN</code> également (on dit alors que <code>NaN</code> « empoisonne » l'expression). La méthode <code>isNaN()</code> permet alors de vérifier, avant de construire une expression, que les valeurs utilisées n'empoisonneront pas l'expression.</p>

<p>On peut par exemple construire une fonction dont on souhaite qu'elle incrémente l'argument et que la valeur qu'elle renvoie ne puisse pas être <code>NaN</code>. Le code de cette fonction pourrait être :</p>

<pre class="brush: js">function incrément(x) {
  if (isNaN(x)){
    x = 0;
  }
  return x + 1;
}

// En utilisant des notations raccourcies,
// on pourrait écrire une fonction équivalente
function incrémentCourt(x) {
  isNaN(x) ? 1 : x + 1;
}

incrément("blabla");  // 1
incrément(1);         // 2
incrément(NaN);       // 1
</pre>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false : "37" est converti vers le nombre 37 qui n'est pas NaN
isNaN("37.37");   // false : "37.37" est converti vers le nombre 37.37 qui n'est pas NaN
isNaN("37,25");   // true  : la virgule n'est pas considérée comme un séparateur décimal
isNaN("123ABC");  // true  : "123ABC" converti en 123 par parseInt mais en NaN par Number
isNaN("");        // false : la chaîne vide est convertie en 0 qui n'est pas NaN
isNaN(" ");       // false : une chaîne de blancs est convertie en 0 qui n'est pas NaN

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// Voici le résultat « faux-positif » qui fait que isNaN n'est pas entièrement fiable
isNaN("blabla")   // true : "blabla" est converti en un nombre
                  // Si on souhaite convertir cette valeur en nombre, cela échoue
                  // et on obtient NaN
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
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.2.4', 'isNaN')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-isnan-number', 'isNaN')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-isnan-number', 'isNaN')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.isNaN")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("NaN")}}</li>
 <li>{{jsxref("Number.isNaN()")}}</li>
</ul>
