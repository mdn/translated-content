---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Redeclared_parameter
original_slug: Web/JavaScript/Reference/Erreurs/Redeclared_parameter
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Let/Const redeclaration (Edge)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Le même nom de variable est présent comme paramètre de la fonction et dans une affectation <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let">let</a></code> au sein du corps de cette fonction et il n'est pas possible de redéclarer la même variable dans la même fonction ou dans le même bloc avec <code>let</code>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code qui suit, la variable <code>arg</code> redéclare l'argument passé à la fonction.</p>

<pre class="brush: js example-bad">function f(arg) {
  let arg = "toto";
}

// SyntaxError: redeclaration of formal parameter "arg"
</pre>

<p>Si on souhaite changer la valeur de <code>arg</code> dans le corps de la fonction, c'est possible mais il ne faut pas la redéclarer. Autrement dit, on peut retirer le mot-clé <code>let</code>. Si on souhaite plutôt créer une nouvelle variable, mieux vaudra utiliser un autre nom afin d'éviter les conflits avec les noms des paramètres existants.</p>

<pre class="brush: js example-good">function f(arg) {
  arg = "toto";
}

function f(arg) {
  let truc = "toto";
}
</pre>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<ul>
 <li>Avant Firefox 49 {{geckoRelease(49)}}, cela provoquait une exception {{jsxref("TypeError")}} ({{bug(1275240)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let">let</a></code></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/const">const</a></code></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/var">var</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Déclarations">Déclarer des variables</a> dans le <a href="/fr/docs/Web/JavaScript/Guide">guide JavaScript</a></li>
</ul>
