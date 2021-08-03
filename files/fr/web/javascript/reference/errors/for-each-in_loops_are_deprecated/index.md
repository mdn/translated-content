---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
tags:
  - Avertissement
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
original_slug: Web/JavaScript/Reference/Erreurs/For-each-in_loops_are_deprecated
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>Avertissement.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>L'instruction {{jsxref("Instructions/for_each...in", "for each (variable in obj)")}} présente à partir de JavaScript 1.6 est une instruction dépréciée et est amenée à disparaître dans un avenir proche.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Itérer_sur_un_objet">Itérer sur un objet</h3>

<p>{{jsxref("Instructions/for_each...in", "for each...in")}} pouvait être utilisé pour parcourir les valeurs contenues dans un objet.</p>

<h4 id="Syntaxe_dépréciée">Syntaxe dépréciée</h4>

<pre class="brush: js example-bad">var objet = { a: 10, b: 20 };

for each (var x in objet) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h4 id="Syntaxe_alternative_standard">Syntaxe alternative, standard</h4>

<p>On peut désormais utilisé l'instruction de boucle standard {{jsxref("Instructions/for...in", "for...in")}} afin d'itérer sur les clés d'un objet et de récupérer les valeurs des propriétés :</p>

<pre class="brush: js example-good">var objet = { a: 10, b: 20 };

for (var key in objet) {
  var x = objet[key];
  console.log(x);        // 10
                         // 20
}
</pre>

<p>Ou alors, on peut utiliser {{jsxref("Instructions/for...of", "for...of")}} (ES2015) et {{jsxref("Object.values")}} (ES2017) afin d'obtenir un tableau des valeurs associées à un objet pour ensuite le parcourir :</p>

<pre class="brush: js example-good">var objet = { a: 10, b: 20 };

for (var x of Object.values(objet)) {
  console.log(x);        // 10
                         // 20
}
</pre>

<h3 id="Itérer_sur_un_tableau">Itérer sur un tableau</h3>

<p>{{jsxref("Instructions/for_each...in", "for each...in")}} pouvait être utilisée afin de parcourir les éléments d'un tableau.</p>

<h4 id="Syntaxe_dépréciée_2">Syntaxe dépréciée</h4>

<pre class="brush: js example-bad">var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h4 id="Syntaxe_alternative_standard_2">Syntaxe alternative, standard</h4>

<p>On peut obtenir le même effet avec les boucles {{jsxref("Instructions/for...of", "for...of")}} (ES2015).</p>

<pre class="brush: js example-good">var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
</pre>

<h3 id="Parcourir_un_tableau_qui_vaille_null_ou_undefined">Parcourir un tableau qui vaille <code>null</code> ou <code>undefined</code></h3>

<p>{{jsxref("Instructions/for_each...in", "for each...in")}} ne fera rien si la valeur fournie est <code>null</code> ou <code>undefined</code>. En revanche, {{jsxref("Instructions/for...of", "for...of")}} lèvera une exception dans ces cas.</p>

<h4 id="Syntaxe_dépréciée_3">Syntaxe dépréciée</h4>

<pre class="brush: js example-bad">function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // rien ne s'affiche
func(undefined);       // rien ne s'affiche
</pre>

<h4 id="Syntaxe_alternative_standard_3">Syntaxe alternative, standard</h4>

<p>Pour réécrire les instructions {{jsxref("Instructions/for_each...in", "for each...in")}} afin que les valeurs <code>null</code> ou <code>undefined</code> puissent être gérées avec {{jsxref("Instructions/for...of", "for...of")}}, il faudra rajouter une protection :</p>

<pre class="brush: js example-good">function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // rien ne s'affiche
func(undefined);       // rien ne s'affiche
</pre>

<h3 id="Itérer_sur_les_tuples_clé-valeur_d'un_objet">Itérer sur les tuples clé-valeur d'un objet</h3>

<h4 id="Syntaxe_dépréciée_4">Syntaxe dépréciée</h4>

<p>On pouvait utiliser une forme syntaxique particulière, désormais dépréciée, qui combine {{jsxref("Instructions/for_each...in", "for each...in")}} et l'objet déprécié {{jsxref("Iterator")}}.</p>

<pre class="brush: js example-bad">var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<h4 id="Syntaxe_alternative_standard_4">Syntaxe alternative, standard</h4>

<p>On peut désormais utiliser la boucle {{jsxref("Instructions/for...in", "for...in")}} afin de parcourir les différentes clés d'un objet pour ensuite récupérer les valeurs associées :</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<p>Ou encore, on peut utiliser {{jsxref("Instructions/for...of", "for...of")}} (ES2015) et {{jsxref("Object.entries")}} (ES2017) pour récupérer un tableau contenant les clés et les valeurs d'un objet qu'on pourra ensuite parcourir :</p>

<pre class="brush: js example-good">var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/for...of", "for...of")}}</li>
 <li>{{jsxref("Object.values")}}</li>
 <li>{{jsxref("Object.entries")}}</li>
</ul>
