---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/input
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/input
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La propriété non-standard <strong><code>input</code></strong> est une propriété statique de l'expression rationnelle qui contient la chaîne de caractères sur laquelle est effectuée la recherche de correspondances. <code>RegExp.$_</code> est un alias de cette propriété.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>RegExp</var>.input
RegExp.$_
</pre>

<h2 id="Description">Description</h2>

<p>La propriété <code>input</code> est statique. Ce n'est pas la propriété d'une instance d'expression rationnelle. Cette propriété doit toujours être utilisée avec la syntaxe <code>RegExp.input</code> ou <code>RegExp.$_.</code></p>

<p>La valeur de la propriété <code><strong>input</strong></code> est modifiée à chaque fois que la chaîne sur laquelle on recherche est modifiée et qu'il y a une correspondance.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_input_et__">Utiliser <code>input</code> et <code>$_</code></h3>

<pre class="brush: js">var re = /coucou/g;
re.test("coucou toi !");
RegExp.input;         // "coucou toi !"
re.test("toto");      // nouveau test, pas de correspondance
RegExp.$_;            // "coucou toi !"
re.test("coucou monde !"); // nouveau test avec correspondance
RegExp.$_;            // "coucou monde !"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété n'est pas standard. Elle ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.input")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}</li>
</ul>
