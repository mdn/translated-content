---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Erreurs
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
original_slug: Web/JavaScript/Reference/Erreurs/Unexpected_type
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: "x" is (not) "y" (Firefox)

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Un type inattendu a été rencontré. Cela se produit la plupart du temps avec les valeurs {{jsxref("undefined")}} ou {{jsxref("null")}}.</p>

<p>Certaines méthodes comme {{jsxref("Object.create()")}} ou {{jsxref("Symbol.keyFor()")}} ont des contraintes sur le type de valeur qui peut être passé en argument.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<pre class="brush: js example-bad">// undefined et null : des valeurs
// sur lesquelles la méthode substring
// ne fonctionnera pas
var toto = undefined;
toto.substring(1); // TypeError: toto is undefined

var toto = null;
toto.substring(1); // TypeError: toto is null


// Certaines méthodes nécessitent une valeur
// d'un type spécifique
var toto = {}
Symbol.keyFor(toto); // TypeError: toto is not a symbol

var toto = "truc"
Object.create(toto); // TypeError: "toto" is not an object or null
</pre>

<h3 id="Résoudre_le_problème">Résoudre le problème</h3>

<p>Pour résoudre ce problème et écarter les cas où la valeur vaut <code>undefined</code>, on peut par exemple utiliser l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_typeof">typeof</a></code>.</p>

<pre class="brush: js">if (typeof toto !== 'undefined') {
  // Désormais, on sait que toto est bien
  // défini et on peut poursuivre.
}</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("null")}}</li>
</ul>
