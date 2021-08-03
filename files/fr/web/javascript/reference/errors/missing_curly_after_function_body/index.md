---
title: 'SyntaxError: missing } after function body'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
original_slug: Web/JavaScript/Reference/Erreurs/Missing_curly_after_function_body
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after function body (Firefox)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Il y a une erreur de syntaxe près d'une création de fonction. Dans ce cas, il est préférable de vérifier que les parenthèses et accolades fermantes sont bien présentes et dans le bon ordre. Indenter et formater le code peut vous aider à vous y retrouver parmi les éventuels différents niveaux d'imbrication.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Oubli_d'une_accolade_fermante">Oubli d'une accolade fermante</h3>

<p>La plupart du temps, il s'agit d'une accolade manquante dans le code de la fonction :</p>

<pre class="brush: js example-bad">var charge = function() {
  if (soleil) {
    utiliserPanneauSolaire();
  } else {
    utiliserVelo();
};
</pre>

<p>La forme correcte est :</p>

<pre class="brush: js example-good">var charge = function() {
  if (soleil) {
    utiliserPanneauSolaire();
  } else {
    utiliserVelo();
  }
};</pre>

<p>Une erreur de ce type peut être moins visible lorsqu'on utilise les fonctions qui sont appelées immédiatement, <a href="/fr/docs/Web/JavaScript/Closures">les fermetures</a> ou d'autres formes qui utilisent de nombreuses parenthèses et/ou accolades comme par exemple :</p>

<pre class="brush: js example-bad">(function() { if (true) { return false; } );
</pre>

<p>Généralement, mettre en forme et vérifier l'indentation permet de repérer ces erreurs.</p>

<pre class="brush: js example-good">(function() {
  if (true) {
    return false;
  }
});</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Fonctions">Les fonctions</a></li>
</ul>
