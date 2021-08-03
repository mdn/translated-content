---
title: 'SyntaxError: Unexpected token'
slug: Web/JavaScript/Reference/Errors/Unexpected_token
tags:
  - Erreurs
  - JavaScript
  - Reference
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_token
original_slug: Web/JavaScript/Reference/Erreurs/Unexpected_token
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=&gt;' after argument list, got "x"
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La syntaxe du langage « attendait » un élément mais quelque chose d'autre est écrit à la place dans le script. Cela peut simplement être dû à une coquille dans le code.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Expression_attendue">Expression attendue</h3>

<p>Lorsqu'on enchaîne des expressions, par exemple, les virgules ne sont pas autorisées en fin d'expression :</p>

<pre class="brush: js example-bad">for (let i = 0; i &lt; 5,; ++i) {
  console.log(i);
}
// SyntaxError: expected expression, got ')'
</pre>

<p>Pour corriger cette erreur, on peut retirer la virgule superflue ou bien ajouter une autre expression :</p>

<pre class="brush: js example-good">for (let i = 0; i &lt; 5; ++i) {
  console.log(i);
}
</pre>

<h3 id="Parenthèses_manquantes">Parenthèses manquantes</h3>

<p>Il peut également arriver que des parenthèses manquent autour des instructions <code>if</code> :</p>

<pre class="brush: js example-bad">function round(n, upperBound, lowerBound){
  if(n &gt; upperBound) || (n &lt; lowerBound){
    throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
  }else if(n &lt; ((upperBound + lowerBound)/2)){
    return lowerBound;
  }else{
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'</pre>

<p>Si on compte les parenthèses ouvrantes et fermantes, c'est correct mais on peut voir que le OU logique (<code>||</code>) n'est contenu au sein d'aucune paire de parenthèses.</p>

<p>Pour corriger ce problème, il suffit d'ajouter une paire de parenthèses englobante :</p>

<pre class="brush: js example-good">function round(n, upperBound, lowerBound){
  if((n &gt; upperBound) || (n &lt; lowerBound)){
    throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
  }else if(n &lt; ((upperBound + lowerBound)/2)){
    return lowerBound;
  }else{
    return upperBound;
  }
}
</pre>
