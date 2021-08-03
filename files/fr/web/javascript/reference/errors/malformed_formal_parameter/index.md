---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
original_slug: Web/JavaScript/Reference/Erreurs/Malformed_formal_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Expected {x} (Edge)
SyntaxError: malformed formal parameter (Firefox)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La méthode {{jsxref("Function()")}} a été utilisée avec au moins deux arguments. Le dernier argument correspond au code source de la nouvelle fonction qui est créée. Les autres arguments sont la liste des arguments passés à la fonction.</p>

<p>C'est cette liste d'arguments qui est, pour une certaine raison, invalide. Il s'agit peut-être d'un mot-clé (<code>if</code> ou <code>var</code> par exemple) utilisé comme un nom d'argument, ou d'un signe de ponctuation mal placé. Il peut également s'agir d'une valeur invalide comme un nombre ou un objet.</p>

<h2 id="OK_mais_pourquoi_cette_formulation_étrange">OK mais pourquoi cette formulation étrange ?</h2>

<p>En effet, "Formal parameter" est une manière étrange de dire  « argument de fonction ». Le mot "malformed" (malformé) est utilisé car les ingénieurs travaillant sur Firefox engineers apprécient énormément les romans gothiques du XIXe.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<pre class="brush: js example-bad">var f = Function("x y", "return x + y;");
// SyntaxError (virgule manquante)

var f = Function("x,", "return x;");
// SyntaxError (virgule mal placée)

var f = Function(37, "console.log('OK')");
// SyntaxError (des nombres ne peuvent être des noms)
</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<pre class="brush: js example-good"> // Ponctuation correcte
var f = Function("x, y", "return x + y;");

var f = Function("x", "return x;");

// Voici une alternative plus rapide
// si vous pouvez éviter Function
var f = function (x) { return x; };
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Fonctions">Le chapitre du Guide JavaScript sur les fonctions</a></li>
 <li><a href="https://www.gutenberg.org/ebooks/84"><em>Frankenstein</em> par Mary Wollstonecraft Shelley</a> ("<em>Cursed (although I curse myself) be the hands that formed you! You have made me wretched beyond expression. You have left me no power to consider whether I am just to you or not. Begone! Relieve me from the sight of your detested form.</em>")</li>
</ul>
