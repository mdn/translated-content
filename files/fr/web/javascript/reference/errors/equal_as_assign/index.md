---
title: 'SyntaxError: test for equality (==) mistyped as assignment (=)?'
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Equal_as_assign
original_slug: Web/JavaScript/Reference/Erreurs/Equal_as_assign
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>Uniquement pour Firefox. Un avertissement sous la forme d'une exception {{jsxref("SyntaxError")}}, généré uniquement si la préférence <code>javascript.options.strict</code> vaut <code>true</code>.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Le code utilise une affectation (<code>=</code>) là où on attendrait un test d'égalité (<code>==</code>). Afin d'aider au débogage, le moteur JavaScript déclenche des avertissements lorsqu'il détecte ce motif.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Des_affectations_utilisées_au_sein_d'expressions_conditionnelles">Des affectations utilisées au sein d'expressions conditionnelles</h3>

<p>Il est conseillé de ne pas utiliser d'affectations simples dans des expressions conditionnelles (comme le test effectué avec <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if...else</a></code>) car on peut confondre les deux à la lecture du code. Ainsi, on n'utilisera pas la forme suivante :</p>

<pre class="brush: js example-bad">if (x = y) {
  // do the right thing
}
</pre>

<p>Si on doit effectivement affecter une variable dans une expression conditionnelle, on entourera l'affectation d'une paire de parenthèses supplémentaires afin de montrer qu'on veut bien effectuer une affectation, comme ceci :</p>

<pre class="brush: js">if ((x = y)) {
  // exécuter le code
}</pre>

<p>Autrement (généralement), on veut plutôt utiliser un opérateur de comparaison (<code>==</code> ou <code>===</code> par exemple) :</p>

<pre class="brush: js">if (x == y) {
  // exécuter le code
}</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if...else</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison">Les opérateurs de comparaison</a></li>
</ul>
