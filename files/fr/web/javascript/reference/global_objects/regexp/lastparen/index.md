---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
tags:
  - JavaScript
  - Propriété
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/lastParen
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La propriété <code><strong>lastParen</strong></code> est une propriété statique accessible en lecture seule qui contient la dernière correspondance enregistrée dans un groupe (entre parenthèse) si jamais elle existe. <code>RegExp.$+</code> est un alias pour cette propriété.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>RegExp</var>.lastParen
RegExp['$+']
</pre>

<h2 id="Description">Description</h2>

<p>La propriété <code>lastParen</code> est une propriété statique, ce n'est pas une propriété liée à chaque objet. Il faut donc toujours utiliser la syntaxe <code>RegExp.lastParen</code> ou <code>RegExp['$+'].</code></p>

<p>La valeur de la propriété <code>lastParen</code> n'est accessible qu'en lecture seule et est modifiée automatiquement à chaque fois qu'il y a une correspondance.</p>

<p>Cet alias ne peut pas être utilisé avec la notation utilisant le point pour l'accès aux propriétés (<code>RegExp.$+</code>). En effet, le parseur attend une expression avec "+", dans ce cas, une exception {{jsxref("SyntaxError")}} est levée. Pour utiliser cette notation raccourcie, on utilisera <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets">la notation avec les crochets</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_lastParen_et">Utiliser <code>lastParen</code> et <code>$+</code></h3>

<pre class="brush: js">var re = /(coucou)/g;
re.test("coucou toi !");
RegExp.lastParen; // "coucou"
RegExp['$+'];     // "coucou"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété n'est pas standard. Elle ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.lastParen")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}</li>
</ul>
