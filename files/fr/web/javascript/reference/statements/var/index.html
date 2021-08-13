---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/var
original_slug: Web/JavaScript/Reference/Instructions/var
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>var</code></strong> (pour variable) permet de déclarer une variable et éventuellement d'initialiser sa valeur.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-var.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>nomVar1 [</em>= <em>valeur1] [</em>, <em>nomVar2 [</em>= <em>valeur2] </em><em>... [</em>, <em>nomVarN [</em>= <em>valeurN]]]</em>;</pre>

<dl>
 <dt><code>nomvarN</code></dt>
 <dd>Le nom de la variable, cela peut être n'importe quel identifiant valide.</dd>
 <dt><code>valeurN</code></dt>
 <dd>La valeur initiale à affecter à la variable, cela peut être n'importe quelle expression valide. S'il n'y a aucune valeur fournie, la variable vaudra {{jsxref("undefined")}}.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les déclarations de variables sont traitées avant que le code soit exécuté, quel que soit leur emplacement dans le code. La portée d'une variable déclarée avec <code>var</code> est le <em>contexte d'exécution</em> courant, c'est-à-dire : <strong>la fonction</strong> qui contient la déclaration <strong>ou le contexte global</strong> si la variable est déclarée en dehors de toute fonction.</p>

<p>Si on affecte une valeur à une variable qui n'a pas été déclarée (le mot-clé <code>var</code> n'a pas été utilisé), cela devient une variable globale (une propriété de l'objet global) lorsque l'affectation est exécutée. Les différences entre les variables déclarées et les variables non-déclarées sont :</p>

<ol>
 <li>Les variables déclarées sont contraintes dans le contexte d'exécution dans lequel elles sont déclarées. Les variables non-déclarées sont toujours globales.
  <pre class="brush: js">function x() {
  y = 1;   // Lève une exception ReferenceError en mode strict
  var z = 2;
}

x();

console.log(y); // Affiche "1" dans la console
console.log(z); // Lève une exception ReferenceError:
                // z n'est pas définie en dehors de x
</pre>
 </li>
 <li>Les variables déclarées sont créées avant que n'importe quel autre code soit exécuté. Les variables non-déclarées n'existent pas tant que leur code n'est pas exécuté.
  <pre class="brush: js">console.log(a);                // Lève une exception ReferenceError.
console.log('on continue...'); // N'est jamais exécuté</pre>

  <pre class="brush: js">var a;
console.log(a);                // Affiche "undefined".
console.log('on continue...'); // Affiche "on continue...".</pre>
 </li>
 <li>Les variables déclarées sont des propriétés non-configurables de leur contexte d'exécution (la fonction courante ou le contexte global). Les variables non-déclarées sont configurables (ce qui signifie qu'elles peuvent être supprimées).
  <pre class="brush: js">var a = 1;
b = 2;

delete this.a; // Lève une TypeError en mode strict. Échoue silencieusement sinon.
delete this.b;

console.log(a, b); // Lève une exception ReferenceError.
// La propriété 'b' a été supprimée et n'existe plus.</pre>
 </li>
</ol>

<p>En raison de ces trois différences, il faut éviter de ne pas déclarer une variable car cela peut provoquer des résultats inattendus. <strong>Il est donc fortement recommandé de toujours déclarer les variables, qu'elles soient dans une fonction ou dans la portée globale.</strong> Le <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>, introduit avec ECMAScript 5, lève une exception lorsqu'une variable n'est pas déclarée.</p>

<h3 id="La_remontée_de_variables_(hoisting)">La remontée de variables (<em>hoisting</em>)</h3>

<p>Les déclarations de variables (et les déclarations en général) sont traitées avant que n'importe quel autre code soit exécuté. Ainsi, déclarer une variable n'importe où dans le code équivaut à la déclarer au début de son contexte d'exécution. Cela signifie qu'une variable peut également apparaître dans le code avant d'avoir été déclarée. Ce comportement est appelé « remontée » (<em>hoisting</em> en anglais) car la déclaration de la variable est « remontée » au début de la fonction courante ou du contexte global.</p>

<pre class="brush: js">bla = 2
var bla;
// ...

// est implicitement traité comme :

var bla;
bla = 2;
</pre>

<p>Étant donné ce comportement, il est recommandé de toujours déclarer les variables au début de leurs portées (le début du code global ou le début du corps de la fonction) afin de mieux (sa)voir quelles variables font partie de la fonction et lesquelles proviennent de la chaîne de portées.</p>

<p>Il est important de noter que la remontée des variables affecte uniquement la déclaration et pas l'initialisation de la valeur. La valeur sera affectée lorsque le moteur accèdera à l'instruction d'affectation. Par exemple :</p>

<pre class="brush: js">function faireQuelqueChose() {
  console.log(truc); // undefined
  var truc = 111;
  console.log(truc); // 111
}

// Correspond en fait à :
function faireQuelqueChose() {
  var truc;
  console.log(truc); // undefined
  truc = 111;
  console.log(truc); // 111
}
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Déclarer_et_initialiser_deux_variables">Déclarer et initialiser deux variables</h3>

<pre class="brush: js">var a = 0, b = 0;
</pre>

<h3 id="Affecter_deux_variables_avec_la_même_chaîne_de_caractères">Affecter deux variables avec la même chaîne de caractères</h3>

<pre class="brush: js">var a = "A";
var b = a;

// est équivalent à :

var a, b = a = "A";
</pre>

<p>Attention à l'ordre :</p>

<pre class="brush: js">var x = y, y = 'A';
console.log(x + y); // undefinedA
</pre>

<p>Ici, <code>x</code> et <code>y</code> sont déclarées avant que n'importe quel code soit exécuté, <strong>les affectations sont réalisées après !</strong> Au moment où <code>x = y</code> est évalué, <code>y</code> existe donc on n'a pas d'erreur {{jsxref("ReferenceError")}} mais sa valeur est {{jsxref("undefined")}}. Ainsi, <code>x</code> reçoit la valeur <code>undefined</code>. Ensuite, <code>y</code> reçoit la valeur <code>'A'</code>. Après la première ligne de code, on a donc la situation où <code>x === undefined &amp;&amp; y === 'A'</code>, ce qui explique le résultat.</p>

<h3 id="Initialiser_plusieurs_variables">Initialiser plusieurs variables</h3>

<pre class="brush: js">var x = 0; // Variable dans la portée globale (le fichier)

function f(){
  var x = y = 1; // x est déclaré localement
                 // ce qui n'est pas le cas de y !
}
f();

console.log(x, y); // 0, 1
// x a bien la valeur globale attendue
// y a été contaminé dans la fonction !
// Une exception ReferenceError sera levée en mode
// strict car y n'est pas défini dans cette portée
</pre>

<h3 id="Les_variables_globales_implicites">Les variables globales implicites</h3>

<p>Il est possible de faire référence à des variables qui sont des variables globales implicites depuis la portée d'une fonction externe :</p>

<pre class="brush: js">var x = 0;  // Déclare x comme variable globale du fichier, on lui affecte 0

console.log(typeof z); // "undefined", car z n'existe pas encore

function a() {
  var y = 2;   // Déclare y dans la portée de la fonction a
               // Affecte 2 comme valeur à y

  console.log(x, y);   // 0 2

  function b() {
    x = 3;  // Affecte 3 à la variable globale x
            // Ne crée pas une nouvelle variable globale
    y = 4;  // Affecte 4 à la variable externe y,
            // Ne crée pas une nouvelle variable globale
    z = 5;  // Crée une nouvelle variable globale
            // et lui affecte la valeur 5.
  }         // (lève une ReferenceError en mode strict.)

  b();     // Crée z en tant que variable globale
  console.log(x, y, z);  // 3 4 5
}

a();                   // l'appel à a() entraîne un appel à b()
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined" car y est local à la fonction a</pre>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.0</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.2', 'instruction var')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-variable-statement', 'instruction de variable')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-variable-statement', 'variable statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.var")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/let","let")}}</li>
 <li>{{jsxref("Instructions/const","const")}}</li>
</ul>
