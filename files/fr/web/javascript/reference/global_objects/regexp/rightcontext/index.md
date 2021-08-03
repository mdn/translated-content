---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/rightContext
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La propriété non-standard <strong><code>rightContext</code> </strong>est une propriété statique, accessible uniquement en lecture, qui contient la sous-chaîne suivant la correspondance la plus récente. <code>RegExp.$'</code> est un alias pour cette propriété.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>RegExp</var>.rightContext
RegExp["$'"]
</pre>

<h2 id="Description">Description</h2>

<p>La propriété <code>rightContext</code> est une propriété statique et n'est pas liée à une instance d'expression rationnelle. Pour cette raison, il faut toujours utiliser la syntaxe <code>RegExp.rightContext</code> ou <code>RegExp["$'"].</code></p>

<p>La valeur de la propriété <code>rightContext</code> n'est accessible qu'en lecture. Le moteur la modifie à chaque fois qu'une nouvelle correspondance est trouvée.</p>

<p>L'alias ne peut pas être utilisé avec la syntaxe utilisant le point (<code>RegExp.$'</code>). En effet, l'analyseur (<em>parser</em>) attend un début de chaîne du fait de la simple quote, ce qui provoquerait une exception {{jsxref("SyntaxError")}}. Il faut donc utiliser <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets">la notation à base de crochets</a>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var re = /coucou/g;
re.test("coucou monde !");
RegExp.rightContext; // " monde !"
RegExp["$'"];       // " monde !"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété n'est pas standard, elle ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.rightContext")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}</li>
</ul>
