---
title: Virgules finales (trailing commas)
slug: Web/JavaScript/Reference/Trailing_commas
tags:
  - ECMAScript2017
  - ECMAScript5
  - JavaScript
  - Syntaxe
  - Virgule
translation_of: Web/JavaScript/Reference/Trailing_commas
original_slug: Web/JavaScript/Reference/Virgules_finales
---
<div>{{JsSidebar("More")}}</div>

<p>Les <strong>virgules finales</strong> (<em>trailing commas</em> en anglais) s'avèrent utiles lorsqu'on souhaite ajouter de nouveaux éléments, paramètres ou de nouvelles propriétés à du code JavaScript. Si on souhaite ajouter une propriété en fin de course, on peut simplement ajouter une ligne sans avoir à modifier la précédente si celle-ci utilise une virgule finale. Cela permet d'avoir des vues de différences (<em>diffs</em>) plus claires et de simplifier l'édition de code.</p>

<p>Les virgules finales peuvent être utilisées dans les littéraux de tableau depuis le début. Elles sont été ajoutées dans les littéraux objets à partir d'ECMAScript 5 et ECMAScript 2017 permet de les utiliser dans la liste des paramètres d'une fonction.</p>

<p>{{Glossary("JSON")}}, en revanche, ne permet pas d'utiliser des virgules finales.</p>

<h2 id="Les_virgules_finales_dans_les_littéraux">Les virgules finales dans les littéraux</h2>

<h3 id="Tableaux">Tableaux</h3>

<p>JavaScript ignore les virgules finales dans les tableaux :</p>

<pre class="brush: js">var arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3</pre>

<p>Si plusieurs virgules finales sont utilisées, cela crée un vide dans le tableau. Un tableau avec des vides est parfois qualifié de <em>parsemé</em> (ou <em>sparse</em> en anglais). Lorsqu'on parcourt un tableau avec les méthodes {{jsxref("Array.prototype.forEach()")}} ou {{jsxref("Array.prototype.map()")}}, par exemple, ces vides sont ignorés.</p>

<pre class="brush: js">var arr = [1, 2, 3,,,];
arr.length; // 5
</pre>

<h3 id="Objets">Objets</h3>

<p>À partir d'ECMAScript 5, on peut également utiliser les virgules finales dans les littéraux objets :</p>

<pre class="brush: js">var objet = {
  toto: "truc",
  bidule: "azerty",
  age: 42,
};</pre>

<h2 id="Les_virgules_finales_dans_les_fonctions">Les virgules finales dans les fonctions</h2>

<p>ECMAScript 2017 permet d'utiliser les virgules finales dans la liste des paramètres d'une fonction.</p>

<h3 id="Définitions_des_paramètres">Définitions des paramètres</h3>

<p>Pour chacune des deux paires de définitions qui suivent, les deux définitions sont autorisées et équivalentes entre elles. Les virgules finales n'ont pas d'impact sur la propriété <code>length</code> de la fonction ni sur l'objet <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments">arguments</a>.</p>

<pre class="brush: js">function f(p) {}
function f(p,) {}

(p) =&gt; {};
(p,) =&gt; {};
</pre>

<p>Les virgules finales peuvent également être utilisées lors <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode">des définitions de méthodes</a> dans les objets et les classes :</p>

<pre class="brush: js">class C {
  un(a,) {},
  deux(a, b,) {},
}

var obj = {
  un(a,) {},
  deux(a, b,) {},
};
</pre>

<h3 id="Appels_de_fonctions">Appels de fonctions</h3>

<p>Pour chacune des deux paires d'appels qui suivent, les deux appels sont équivalents entre eux :</p>

<pre class="brush: js">f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
</pre>

<h3 id="Virgules_finales_non-autorisées">Virgules finales non-autorisées</h3>

<p>Les définitions de paramètres ou les appels de fonctions qui ne contiennent qu'une seule virgule lèveront une exception {{Jsxref("SyntaxError")}}. Par ailleurs, on ne peut pas utiliser de virgule finale avec <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste">les paramètres du reste</a> :</p>

<pre class="brush: js example-bad">function f(,) {} // SyntaxError: missing formal parameter
(,) =&gt; {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) =&gt; {}        // SyntaxError: expected closing parenthesis, got ','
</pre>

<h2 id="Les_virgules_finales_et_la_décomposition">Les virgules finales et la décomposition</h2>

<p>On peut aussi utiliser une virgule finale dans l'opérande gauche lorsqu'on utilise <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition">l'affectation par décomposition</a> :</p>

<pre class="brush: js">// Décomposition d'un tableau avec
// une virgule finale
[a, b,] = [1, 2];

// Décomposition d'un objet avec une
// virgule finale
var o = {
  p: 42,
  q: true,
};
var {p, q,} = o;
</pre>

<p>Là encore, si on utilise un élément du reste, une exception {{jsxref("SyntaxError")}} sera levée :</p>

<pre class="brush: js example-bad">var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma</pre>

<h2 id="Les_virgules_finales_en_JSON">Les virgules finales en JSON</h2>

<p>L'utilisation des virgules finales dans les objets a été introduite avec ECMAScript 5. Toutefois, le format JSON est basé sur la syntaxe JavaScript antérieure à ES5 <strong>et les virgules finales sont donc interdites en JSON</strong>.</p>

<p>Les deux lignes suivantes lèveront une exception {{jsxref("SyntaxError")}} :</p>

<pre class="brush: js example-bad">JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
</pre>

<p>Pour analyser le JSON correctement, on évitera les virgules finales :</p>

<pre class="brush: js example-good">JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Ajout des virgules finales pour les littéraux objets.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2017')}}</td>
   <td>{{Spec2('ES2017')}}</td>
   <td>Ajout des virgules finales à la liste des arguments d'une fonction (déclaration et appels).</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>ES2017 added trailing function commas.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.grammar.trailing_commas")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La proposition initiale pour ECMAScript, déposée par Jeff Morrison, afin d'utiliser <a href="https://github.com/tc39/proposal-trailing-function-commas">les virgules finales dans les fonctions</a>.</li>
</ul>
