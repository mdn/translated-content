---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/let
original_slug: Web/JavaScript/Reference/Instructions/let
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>let</code></strong> permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-let.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">let var1 [= valeur1] [, var2 [= valeur2]] [, ..., varN [= valeurN]];</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>var1</code>, <code>var2</code>, …, <code>varN</code></dt>
 <dd>Le nom de la ou des variables. Ces noms doivent être des identifiants JavaScript valides.</dd>
 <dt><code>valeur1</code>, <code>valeur2</code>, …, <code>valeurN</code>{{optional_inline}}</dt>
 <dd>Pour chaque variable déclaré, on peut indiquer, de façon optionnelle, sa valeur initiale. Ces valeurs peuvent être n'importe quelle expression légale.</dd>
</dl>

<h2 id="Description">Description</h2>

<p><code>let</code> permet de déclarer des variables dont la portée est limitée à celle du <a href="/fr/docs/Web/JavaScript/Reference/Instructions/bloc">bloc</a> dans lequel elles sont déclarées. Le mot-clé {{jsxref("Instructions/var","var")}}, quant à lui, permet de définir une variable globale ou locale à une fonction (sans distinction des blocs utilisés dans la fonction).</p>

<p>Une autre différence entre <code>let</code> et <code>var</code> est la façon dont la variable est initialisée : pour <code>let</code>, la variable est initialisée à l'endroit où le parseur évalue son contenu (cf. ci-après).</p>

<p>À l'instar de {{jsxref("instructions/const", "const")}}, <code>let</code> ne crée pas de propriété sur l'objet {{domxref("window")}} quand les variables sont déclarées au niveau global.</p>

<p>L'origine du nom <code>let</code> est décrite <a href="https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri">dans cette réponse (en anglais)</a>.</p>

<h3 id="Les_portées_de_bloc_avec_let">Les portées de bloc avec <code>let</code></h3>

<p>Le mot-clé <code>let</code> permet de définir des variables au sein d'un bloc et des blocs qu'il contient. <code>var</code> permet quant à lui de définir une variable dont la portée est celle de la fonction englobante.</p>

<pre class="brush:js">if (x &gt; y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // c'est la même variable !
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // c'est une variable différente
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
</pre>

<h3 id="Une_meilleure_lisibilité_pour_les_fonctions_internes">Une meilleure lisibilité pour les fonctions internes</h3>

<p><code>let</code> peut parfois permettre de rendre le code plus lisible lorsqu'on utilise des fonctions internes.</p>

<pre class="brush:js">var list = document.getElementById("list");

for (let i = 1; i &lt;= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Élément " + i));

  item.onclick = function (ev) {
    console.log("Clic sur l'élément " + i + ".");
  };
  list.appendChild(item);
}

// Pour obtenir le même effet avec var
// il aurait fallu créer un contexte différent
// avec une fermeture (closure) pour la valeur

for (var i = 1; i &lt;= 5; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  (function(i) {
    item.onclick = function(ev) {
      console.log("Item " + i + " a reçu un clic.");
    };
  })(i);
  list.appendChild(item);
}
</pre>

<p>Dans l'exemple précédent, cela fonctionne comme on l'attend car les cinq instances de la fonction anonyme sont liées à cinq instances différentes de <code>i</code>. Si on remplace <code>let</code> par {{jsxref("Instructions/var","var")}}, on n'obtiendra pas l'effet escompté car on aura une même variable pour cette portée <code>i=6</code> (au lieu de 5 différentes).</p>

<h4 id="Règles_de_portées">Règles de portées</h4>

<p>Les variables déclarées avec <code>let</code> appartiennent à la portée du bloc dans lequel elles sont définies et indirectement aux portées des blocs de ce bloc. D'une certaine façon <code>let</code> fonctionne comme <code>var</code>, la seule différence dans cette analogie est que <code>let</code> fonctionne avec les portées de bloc et <code>var</code> avec les portées des fonctions :</p>

<pre class="brush:js">function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // c'est la même variable !
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // c'est une variable différente
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
</pre>

<p>Au niveau le plus haut (la portée globale), <code>let</code> crée une variable globale alors que <code>var</code> ajoute une propriété à l'objet global :</p>

<pre class="brush:js">var x = 'global';
let y = 'global2';
console.log(this.x); // "global"
console.log(this.y); // undefined
console.log(y);      // "global2"
</pre>

<h3 id="Émuler_le_fonctionnement_des_interfaces_privées">Émuler le fonctionnement des interfaces privées</h3>

<p>En utilisant l'instruction <code>let</code> avec <a href="/fr/docs/Glossaire/Constructeur">des constructeurs</a>, on peut créer des <em>interfaces privées</em> sans avoir à utiliser <a href="/fr/docs/Web/JavaScript/Closures">de fermetures</a> :</p>

<pre class="brush: js">var Truc;

{
  let porteePrivee = new WeakMap();
  let compteur = 0;

  Truc = function() {
    this.unePropriete = 'toto';

    porteePrivee.set(this, {
      cachee: ++compteur,
    });
  };

  Truc.prototype.montrerPublique = function() {
    return this.unePropriete;
  };

  Truc.prototype.montrerPrivee = function() {
    return porteePrivee.get(this).cachee;
  };
}

console.log(typeof porteePrivee);
// "undefined"

var truc = new Truc();

console.log(truc);
// Truc {unePropriete: "toto"}

truc.montrerPublique();
// "toto"

truc.montrerPrivee();
// 1
</pre>

<p>Cette technique permet d'obtenir un état privé « statique ». Ainsi, dans l'exemple qui précède, toutes les instances de <code>Truc</code> partageront la même <code>portéePrivée</code>.<br>
 Il était possible d'obtenir un tel isolement avec <code>var</code> mais il fallait passer par des fonctions isolées (généralement des fonctions immédiatement appelées (<em>IIFE</em>)).</p>

<h3 id="Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)_et_les_erreurs_liées_à_let">Zone morte temporaire (<em>Temporal Dead Zone</em> / TDZ)  et les erreurs liées à <code>let</code></h3>

<p>Lorsqu'on redéclare une même variable au sein d'une même portée de bloc, cela entraîne une exception {{jsxref("SyntaxError")}}.</p>

<pre class="brush: js example-bad">if (x) {
  let toto;
  let toto; // SyntaxError
}</pre>

<p>Avec ECMAScript 2015 (ES6), <code>let</code><strong> remontera</strong> (<em>hoisting</em>) la déclaration variable au début de la portée (au début du bloc) mais pas l'initialisation. Si on fait référence à une variable dans un bloc avant la déclaration de celle-ci avec <code>let</code>, cela entraînera une exception {{jsxref("ReferenceError")}}. En effet, la variable est placée dans une « zone morte temporaire » entre le début du bloc et le moment où la déclaration est traitée. Autrement dit, la déclaration est bien remontée mais la variable ne peut pas être utilisée tant que l'affectation (qui n'est pas remontée) n'a pas été effectuée.</p>

<pre class="brush: js example-bad">function faire_quelque_chose() {
  console.log(truc); // undefined
  console.log(toto); // ReferenceError
  let toto = 2;
  var truc = 1;
}</pre>

<p>Il est possible d'obtenir des erreurs au sein de l'instruction {{jsxref("Instructions/switch")}}. En effet, il y a un seul bloc implicite pour cette instruction.</p>

<pre class="brush: js example-bad">switch (x) {
  case 0:
    let toto;
    break;

  case 1:
    let toto; // SyntaxError for redeclaration.
    break;
}</pre>

<p>Par contre, si on ajoute une instruction de bloc dans la clause <code>case</code>, cela créera une nouvelle portée et empêchera l'erreur :</p>

<pre class="brush: js">let x = 1;

switch(x) {
  case 0: {
    let toto;
    break;
  }
  case 1: {
    let toto;
    break;
  }
}</pre>

<h3 id="Autres_situations">Autres situations</h3>

<p>Lorsqu'on utilise <code>let</code> dans un bloc, sa portée est limitée à celle du bloc. On notera ici la différence avec <code>var</code> dont la portée est celle de la fonction où il est utilisé.</p>

<pre class="brush: js">var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // la portée est la portée globale
  let b = 22; // la portée est celle du bloc if

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2
</pre>

<p>Cependant, la combinaison utilisée ci-après déclenchera une exception <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/SyntaxError">SyntaxError</a></code> car la déclaration avec <code>var</code> est remontée en haut du bloc et il y a donc une redéclaration implicite de la variable (également utilisée avec <code>let</code>).</p>

<pre class="brush: js example-bad">let x = 1;

if (true) {
  var x = 2; // SyntaxError liée à la redéclaration
}
</pre>

<h3 id="La_zone_morte_temporaire_et_typeof">La zone morte temporaire et <code>typeof</code></h3>

<p>Si on utilise <code>typeof</code> sur des variables non déclarées ou qui valent {{jsxref("undefined")}}, on obtiendra la valeur <code>undefined</code>. Mais si on utilise <code>typeof</code> sur une variable au sein de la zone morte temporaire de cette variable, cela déclenchera une {{jsxref("ReferenceError")}} :</p>

<pre class="brush: js">console.log(typeof variableNonDeclaree); // affiche 'undefined'

console.log(typeof i); // ReferenceError
let i = 10;</pre>

<h3 id="Autre_exemple_lié_à_la_zone_morte_temporaire_et_aux_portées_lexicales">Autre exemple lié à la zone morte temporaire et aux portées lexicales</h3>

<p>Dans l'exemple qui suit, dans l'expression <code>toto + 55</code>, l'identifiant <code>toto</code> fait référence à la variable du bloc courant et non à celle qui est déclarée au dessus et qui a la valeur 33. Dans l'instruction <code>let toto = (toto + 55);</code> l'instruction est bien remontée mais l'endroit où on utilise <code>toto</code> (dans le fragment <code>(toto + 55</code>)) est toujours dans la zone morte temporaire car <code>toto</code> n'a pas encore été affecté.</p>

<pre class="brush: js example-bad">function test(){
  var toto = 33;
  if (true) {
    let toto = (toto + 55); // ReferenceError: can't access lexical declaration `toto` before initialization
  }
}
test();
</pre>

<p>Si on utilise <code>let</code> avec un nom de variable qui est le même que celui de l'argument passé à la fonction, on aura une erreur due à la confusion des portées :</p>

<pre class="brush: js example-bad">function go(n) {
  for (let n of n.a){ // ReferenceError: can't access lexical declaration `n' before initialization
    console.log(n);
  }
}
go({a:[1, 2, 3]});
</pre>

<h3 id="Les_variables_déclarées_avec_let_et_les_boucles_for">Les variables déclarées avec <code>let</code> et les boucles <code>for</code></h3>

<p>Le mot-clé <code>let</code> permet de lier des variables localement dans la portée des boucles for. Contrairement au mot-clé var qui lui rend les variables visibles depuis l'ensemble de la fonction qui contient la boucle.</p>

<pre class="brush:js">var a = 0;
for ( let i = a; i &lt; 10; i++ ) {
  console.log(i);
}
</pre>

<h4 id="Règles_de_portées_2">Règles de portées</h4>

<pre class="eval">for (let <var>expr1</var>; <var>expr2</var>; <var>expr3</var>) instruction</pre>

<p>Dans cet exemple, <code><var>expr2</var></code>, <code><var>expr3</var></code>, et <code>instruction</code> sont contenues dans un bloc implicite qui contient la variable de bloc local déclarée avec <code>let <var>expr1</var></code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="let_var"><code>let</code> / <code>var</code></h3>

<p>Lorsqu'il est utilisé dans un bloc, <code>let</code> permet de limiter la portée de la variable à ce bloc. <em>var </em>quant à lui limite la portée de la variable à la fonction.</p>

<pre class="brush: js">var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // La portée est celle du bloc if
  var b = 1; // La portée est celle interne à la fonction

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1</pre>

<h3 id="let_utilisé_dans_les_boucles"><code>let</code> utilisé dans les boucles</h3>

<p>Le mot-clé let permet de lier des variables à la portée de la boucle plutôt qu'à celle de la fonction (avec <code>var</code>) :</p>

<pre class="brush: js">for (let i = 0; i&lt;10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // i n'est pas défini</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-let-and-const-declarations', 'Let and Const Declarations')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale. Cette définition n'inclue pas les expressions et blocs <code>let</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-let-and-const-declarations', 'Let and Const Declarations')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.let")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/var","var")}}</li>
 <li>{{jsxref("Instructions/const","const")}}</li>
 <li><a href="https://tech.mozfr.org/post/2015/08/06/ES6-en-details-%3A-let-et-const">ES6 en détails : <code>let</code> et <code>const</code></a></li>
 <li><a href="https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/">Changements liés à <code>let</code> et <code>const</code> dans Firefox 44 (en anglais)</a></li>
 <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md">Le chapitre de <em>You Don't Know JS</em> sur la portée des fonctions et des blocs</a> (en anglais)</li>
 <li><a href="https://stackoverflow.com/a/33198850/1125029">StackOverflow : qu'est-ce que la zone morte temporaire ?</a></li>
 <li><a href="https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable">StackOverflow : quelle est la différence entre <code>let</code> et <code>var</code> ?</a></li>
</ul>
