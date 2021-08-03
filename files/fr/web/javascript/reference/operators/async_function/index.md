---
title: Expression async function
slug: Web/JavaScript/Reference/Operators/async_function
tags:
  - Function
  - JavaScript
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/async_function
original_slug: Web/JavaScript/Reference/Opérateurs/async_function
---
<div>{{jsSidebar("Operators")}}</div>

<p>Le mot-clé <strong><code>async function</code></strong> peut être utilisé pour définir une fonction asynchrone au sein d'une expression.</p>

<div class="note">
<p><strong>Note :</strong> Il est aussi possible de définir une fonction asynchrone en utilisant une <a href="/fr/docs/Web/JavaScript/Reference/Instructions/async_function">instruction <code>async function</code></a>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">async function [<em>name</em>]([<em>param1</em>[, <em>param2[</em>, ..., <em>paramN</em>]]]) {
   <em>instructions</em>
}</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Le nom de la fonction. Il est facultatif et s'il n'est pas utilisé, la fonction est <em>anonyme</em>. Le nom utilisé est uniquement local pour le corps de la fonction.</dd>
 <dt><code>paramN</code></dt>
 <dd>Le nom d'un argument à passer à la fonction.</dd>
 <dt><code>instructions</code></dt>
 <dd>Les instructions qui composent le corps de la fonction.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> À partir d'ES2015 (ES6), il est aussi possible d'utiliser des <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es">fonctions fléchées</a> pour les expressions de fonction asynchrone.</p>
</div>

<h2 id="Description">Description</h2>

<p>Une expression <code>async function</code> est très proche, et partage quasiment la même syntaxe avec {{jsxref('Instructions/async_function', 'une instruction async function',"",1)}}. La différence principale entre une expression async <code>function</code> et une instruction async <code>function</code> est qu'on peut omettre le nom de la fonction dans les expressions <code>async function</code>. On peut donc utiliser une expression <code>async function</code> afin de créer une <em>IIFE</em> (pour <em>Immediately Invoked Function Expression</em>) qu'on appelle au moment de sa définition. Voir également le chapitre sur <a href="/fr/docs/Web/JavaScript/Reference/Fonctions">les fonctions</a> pour plus d'informations.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
};

(async function(x) { // fonction asynchrone immédiatement appelée
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
})(10).then(v =&gt; {
  console.log(v);  // affiche 60 après 2 secondes.
});

var add = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then(v =&gt; {
  console.log(v);  // affiche 60 après 4 secondes.
});
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
   <td>{{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES2018', '#sec-async-function-definitions', 'async function')}}</td>
   <td>{{Spec2('ES2018')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES2017', '#sec-async-function-definitions', 'async function')}}</td>
   <td>{{Spec2('ES2017')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.async_function_expression")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/async_function", "async function")}}</li>
 <li>L'objet {{jsxref("AsyncFunction")}}</li>
 <li>{{jsxref("Opérateurs/await", "await")}}</li>
</ul>
