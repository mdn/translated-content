---
title: Opérateur de coalescence des nuls (Nullish coalescing operator)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
tags:
  - Coalescence
  - JavaScript
  - Opérateur
  - Reference
  - falsy
  - nullish
translation_of: Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
original_slug: Web/JavaScript/Reference/Opérateurs/Nullish_coalescing_operator
---
<p>{{JSSidebar("Operators")}}</p>

<p>L'<strong>opérateur de coalescence des nuls</strong> (<code>??</code>), est un opérateur logique qui renvoie son opérande de droite lorsque son opérande de gauche vaut <code>{{jsxref("null")}}</code> ou <code>{{jsxref("undefined")}}</code> et qui renvoie son opérande de gauche sinon.</p>

<p>Contrairement à <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques">l'opérateur logique OU (<code>||</code>)</a>, l'opérande de gauche sera renvoyé s'il s'agit d'une <a href="/fr/docs/Glossaire/Falsy">valeur équivalente à <code>false</code></a> <strong>qui n'est ni</strong> <code>null</code><strong>, ni</strong> <code>undefined</code>. En d'autres termes, si vous utilisez <code>||</code> pour fournir une valeur par défaut à une variable <code>foo</code>, vous pourriez rencontrer des comportements inattendus si vous considérez certaines valeurs <em>falsy</em> comme utilisables (par exemple une chaine vide <code>''</code> ou <code>0</code>). Voir ci-dessous pour plus d'exemples.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><var>leftExpr</var> ?? <var>rightExpr</var>
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_lopérateur_de_coalescence_des_nuls">Utilisation de l'opérateur de coalescence des nuls</h3>

<p>Dans cet exemple, nous fournirons des valeurs par défaut mais conserverons des valeurs autres que <code>null</code> ou <code>undefined</code>.</p>

<pre class="brush: js notranslate">const valeurNulle = null;
const texteVide = ""; // falsy
const unNombre = 42;

const valA = valeurNulle ?? "valeur par défaut pour A";
const valB = texteVide ?? "valeur par défaut pour B";
const valC = unNombre ?? 0;

console.log(valA); // "valeur par défaut pour A"
console.log(valB); // "" (car la chaine vide n'est ni `<code>null`</code> ni `<code>undefined`</code>)
console.log(valC); // 42</pre>

<h3 id="Affectation_dune_valeur_par_défaut_à_une_variable">Affectation d'une valeur par défaut à une variable</h3>

<p>Auparavant, lorsque l'on voulait attribuer une valeur par défaut à une variable, une solution fréquente consistait à utiliser l'opérateur logique OU (<code>||</code>) :</p>

<pre class="brush: js notranslate">let toto;

// toto ne se voit jamais attribuer de valeur, il vaut donc undefined
let unTexteBateau = toto || 'Coucou !';</pre>

<p>Cependant, parce que <code>||</code> est un opérateur logique booléen, l'opérande de gauche a été converti en un booléen pour l'évaluation et aucune valeur <em>falsy</em> (<code>0</code>, <code>''</code>, <code>NaN</code>, <code>null</code>, <code>undefined</code>) n'a été renvoyée. Ce comportement peut entraîner des conséquences inattendues si on souhaite considérer <code>0</code>, <code>''</code> ou <code>NaN</code> comme des valeurs valides.</p>

<pre class="brush: js notranslate">let compteur = 0;
let texte = "";

let qté = compteur || 42;
let message = texte || "Coucou !";
console.log(qté);     // 42 et non 0
console.log(message); // "Coucou !" et non ""
</pre>

<p>L'opérateur de coalescence des nuls évite ce risque en ne renvoyant le deuxième opérande que lorsque le premier vaut <code>null</code> ou <code>undefined</code> (mais pas d'autres valeurs <em>falsy</em>) :</p>

<pre class="brush: js notranslate">let monTexte = ''; // Un chaine vide (qui est donc une valeur falsy)

let notFalsyText = monTexte || 'Hello world';
console.log(notFalsyText); // Hello world

let preservingFalsy = monTexte ?? 'Salut le voisin';
console.log(preservingFalsy); // '' (car monTexte n'est ni null ni undefined)
</pre>

<h3 id="Court-circuitage">Court-circuitage</h3>

<p>À l'instar des opérateurs logiques OR (<code>||</code>) et AND (<code>&amp;&amp;</code>), l'expression de droite n'est pas évaluée si celle de gauche ne vaut ni <code>null</code> ni <code>undefined</code>.</p>

<pre class="brush: js notranslate">function A() { console.log('A a été appelée'); return undefined; }
function B() { console.log('B a été appelée'); return false; }
function C() { console.log('C a été appelée'); return "toto"; }

console.log( A() ?? C() );
// Inscrit "A a été appelée" puis "C a été appelée" et enfin "toto"
// puisque : A() retourne undefined, les deux expressions sont donc évaluées

console.log( B() ?? C() );
// Inscrit "B a été appelée" puis false
// puisque : B() retourne false (et non null ou undefined) et
// l'opérande de droite n'est pas évaluée
</pre>

<h3 id="Pas_de_chaînage_possible_avec_les_opérateurs_AND_ou_OR">Pas de chaînage possible avec les opérateurs AND ou OR</h3>

<p>Il n'est pas possible de combiner les opérateurs AND (<code>&amp;&amp;</code>) ou OR (<code>||</code>) directement avec l'opérateur de coalescence des nuls (<code>??</code>). Un tel cas lèverait une exception <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/SyntaxError">SyntaxError</a></code>.</p>

<pre class="brush: js example-bad notranslate">null || undefined ?? "toto"; // soulève une SyntaxError
true || undefined ?? "toto"; // soulève une SyntaxError</pre>

<p>Cependant, fournir des parenthèses pour indiquer explicitement la priorité est correct :</p>

<pre class="brush: js example-good notranslate">(null || undefined) ?? "toto"; // Renvoie "toto"
</pre>

<h3 id="Relation_avec_lopérateur_de_chaînage_optionnel_.">Relation avec l'opérateur de chaînage optionnel (<code>?.</code>)</h3>

<p>Tout comme l'opérateur de coalescence des nuls, l'<a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Optional_chaining">opérateur de chaînage optionnel (?.)</a> traite les valeurs <code>null</code> et <code>undefined</code> comme des valeurs spécifiques. Ce qui permet d'accéder à une propriété d'un objet qui peut être <code>null</code> ou <code>undefined</code>.</p>

<pre class="brush: js notranslate">let toto = { uneProprieteToto: "coucou" };

console.log(toto.uneProprieteToto?.toUpperCase());  // "COUCOU"
console.log(toto.uneProprieteTiti?.toUpperCase()); // undefined
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#prod-Nulli', 'nullish coalescing expression')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.nullish_coalescing")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Glossaire/Falsy"><em>Falsy values</em> (Valeurs équivalentes à <code>false</code> dans un contexte booléen)</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Optional_chaining">Opérateur de chaînage optionnel (<em>optional chaining</em>)</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques#Logical_OR">Opérateur logique OU (<code>||</code>)</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_d%C3%A9faut_des_arguments">Valeurs par défaut des arguments</a></li>
</ul>
