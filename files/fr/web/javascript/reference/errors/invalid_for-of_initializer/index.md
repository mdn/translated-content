---
title: >-
  SyntaxError: a declaration in the head of a for-of loop can't have an
  initializer
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_for-of_initializer
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>L'en-tête d'une boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code> contient une expression d'initialisation, c'est-à-dire qu'une variable est déclarée et qu'on lui affecte une valeur. Ceci n'est pas autorisé pour les boucles <code>for-of</code>. En revanche, les boucles <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a></code> permettent d'avoir un initialisateur.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Boucles_for-of_invalides">Boucles <code>for-of</code> invalides</h3>

<pre class="brush: js example-bad">let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer</pre>

<h3 id="Boucles_for-of_valides">Boucles <code>for-of</code> valides</h3>

<p>Il faut retirer l'initialisateur de l'en-tête de la boucle pour ne plus avoir l'erreur. Si cette valeur devait servir d'incrément, on peut ajouter l'addition dans le corps de la boucle.</p>

<pre class="brush: js example-good">let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in">for...in</a></code> interdit également d'utiliser un initialisateur en mode strict (<a href="/fr/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer">SyntaxError: for-in loop head declarations may not have initializers</a>)</li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a></code> permet de définir un initialisateur lors de l'itération</li>
</ul>
