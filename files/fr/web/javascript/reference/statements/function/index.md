---
title: function
slug: Web/JavaScript/Reference/Statements/function
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/function
original_slug: Web/JavaScript/Reference/Instructions/function
---
<div>{{jsSidebar("Statements")}}</div>

<p>La déclaration <strong><code>function</code></strong> (ou l'instruction <code>function</code>) permet de définir une fonction et les paramètres que celle-ci utilise.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-function.html")}}</div>



<p>Il est également possible de définir des fonctions en utilisant le constructeur {{jsxref("Function")}} et une {{jsxref("Opérateurs/L_opérateur_function", "expression de fonction","",1)}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">function <em>nom</em>([<em>param1</em>[, <em>param2</em>,[..., <em>paramN</em>]]]) {
   [<em>instructions</em>]
}
</pre>

<dl>
 <dt><code>nom</code></dt>
 <dd>Le nom de la fonction.</dd>
 <dt><code>param</code>N</dt>
 <dd>Le nom d'un argument à passer à la fonction. Une fonction peut avoir jusqu'à 255 arguments (cela peut varier en fonction des moteurs).</dd>
 <dt><code>instructions</code></dt>
 <dd>Les instructions qui constituent le corps de la fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Une fonction créée via une déclaration de fonction est un objet <code>Function</code> et possède toutes les caractéristiques (propriétés, méthodes et comportement) d'un objet <code>Function</code>. Voir la page {{jsxref("Function")}} pour plus d'informations sur ces caractéristiques.</p>

<p>Une fonction peut également être créée en utilisant une expression (voir {{jsxref("Opérateurs/L_opérateur_function", "les expressions de fonctions","",1)}}).</p>

<p>Par défaut, une fonction renvoie {{jsxref("undefined")}}. Pour renvoyer une autre valeur en résultat, une fonction doit utiliser une instruction {{jsxref("Instructions/return", "return")}} qui définit la valeur à retourner.</p>

<h3 id="Fonctions_créées_conditionnellement">Fonctions créées conditionnellement</h3>

<p>Il est possible de déclarer des fonctions de façon conditionnelle (c'est-à-dire qu'on peut placer une instruction de déclaration de fonction au sein d'une instruction <code>if</code>). La plupart des navigateurs, autres que ceux basés sur Gecko, traiteront cette déclaration conditionnelle comme si elle était inconditionnelle (que la condition souhaitée soit vérifiée ou non) (voir <a href="https://kangax.github.io/nfe/#function-statements">cet article</a> (en anglais) pour un aperçu). Pour cette raison, les déclarations de fonctions ne devraient pas être utilisées pour créer des fonctions de façon conditionnelle. Pour ce faire, il faut privilégier les expressions de fonctions.</p>

<pre class="brush: js">var remontee = "toto" in this;
console.log(`'toto' ${remontee ? "est" : "n'est pas"} remontée. typeof toto vaut ${typeof toto}`);
if (false) {
  function toto(){ return 1; }
}

// Pour Chrome:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Firefox:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Edge:
// 'toto' n'est pas remontée. typeof toto vaut undefined
//
// Pour Safari:
// 'toto' est remontée. typeof toto vaut function
</pre>

<p>On obtient exactement les mêmes résultats si la condition est vérifiée (ici avec <code>true</code>) :</p>

<pre class="brush: js">var remontee = "toto" in this;
console.log(`'toto' ${remontee ? "est" : "n'est pas"} remontée. typeof toto vaut ${typeof toto}`);
if (true) {
  function toto(){ return 1; }
}

// Pour Chrome:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Firefox:
// 'toto' est remontée. typeof toto vaut undefined
//
// Pour Edge:
// 'toto' n'est pas remontée. typeof toto vaut undefined
//
// Pour Safari:
// 'toto' est remontée. typeof toto vaut function</pre>

<h3 id="La_«_remontée_»_des_déclarations_de_fonction">La « remontée » des déclarations de fonction</h3>

<p>Lorsqu'on utilise une déclaration de fonction pour créer une fonction, la définition de la fonction est « remontée ». Il devient donc possible d'utiliser la fonction avant de l'avoir déclarée :</p>

<pre class="brush: js">remontée(); // affiche "toto" dans la console

function remontée() {
  console.log("toto");
}
</pre>

<p>On notera que les {{jsxref("Opérateurs/L_opérateur_function", "expressions de fonctions","",1)}} ne sont pas remontées :</p>

<pre class="brush: js">nonRemontée(); // TypeError: nonRemontée is not a function

var nonRemontée = function() {
   console.log("truc");
};
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_function">Utiliser <code>function</code></h3>

<p>Dans l'exemple qui suit, on déclare une fonction qui renvoie le total des ventes en fonction des nombres d'unités vendues pour les produits <code>a</code>, <code>b</code>, et <code>c</code>.</p>

<pre class="brush: js">function calc_ventes(nb_produits_a, nb_produits_b, nb_produits_c) {
   return nb_produits_a*79 + nb_produits_b * 129 + nb_produits_c * 699;
}
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
   <td>{{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function-definitions', 'Définition de fonction')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-13', 'Définition de fonction')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-13', 'Définition de fonction')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-13', 'Définition de fonction')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.function")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Fonctions", "Les fonctions","",1)}}</li>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_function", "Les expressions de fonction","",1)}}</li>
 <li>L'instruction {{jsxref("Instructions/function*", "function*")}}</li>
 <li>L'expression {{jsxref("Opérateurs/function*", "function*")}}</li>
 <li>{{jsxref("Fonctions/Fonctions_fléchées", "Les fonctions fléchées","",1)}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Instructions/async_function">L'instruction <code>async function</code> (les déclarations des fonctions asynchrones)</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/async_function">L'opérateur <code>async function</code> (les expressions de fonctions asynchrones)</a></li>
</ul>
