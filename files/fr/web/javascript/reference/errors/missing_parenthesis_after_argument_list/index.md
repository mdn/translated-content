---
title: 'SyntaxError: missing ) after argument list'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
original_slug: Web/JavaScript/Reference/Erreurs/Missing_parenthesis_after_argument_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: Expected ')' (Edge)
SyntaxError: missing ) after argument list (Firefox)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p> </p>

<p>Il y a une erreur avec la façon dont une fonction est appelée . Cela peut être une faute de frappe, un opérateur manquant, ou une chaîne non-échappée, par exemple .</p>

<h2 id="Exemple">Exemple</h2>

<p>Parce qu'il n'y a pas d'opérateur "+" pour concaténer la chaîne de caractères, JavaScript s'attend à trouver une parenthèse après "PI : ", qu'il considère comme  l'argument de la fonction <code>log. </code></p>

<pre class="brush: js example-bad">console.log("PI: " Math.PI);
// SyntaxError: missing ) after argument list
</pre>

<p>La fonction <code>log</code> peut être corrigée en ajoutant un opérateur "+".</p>

<pre class="brush: js example-good">console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"</pre>

<h3 id="Chaînes_non_terminées">Chaînes non terminées</h3>

<pre class="brush: js example-bad">console.log('"Java" + "Script" = \"' + 'Java' + 'Script\");
// SyntaxError: missing ) after argument list</pre>

<p>Dans cet exemple, le moteur JavaScript considère qu'on souhaitait avoir <code>);</code> dans la chaîne de caractères et l'ignore. Aussi, le moteur considère que l'appelle à <code>console.log</code> n'est pas terminé et qu'il manque une parenthèse fermante. Pour corriger ce problème, on peut rajouter une quote <code>'</code> après la chaîne de caractères <code>"Script"</code> :</p>

<pre class="brush: js example-good">console.log('"Java" + "Script" = \"' + 'Java' + 'Script\"');
// '"Java" + "Script" = "JavaScript"'
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Functions">Functions</a></li>
</ul>
