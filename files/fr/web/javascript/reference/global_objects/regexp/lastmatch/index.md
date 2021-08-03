---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
tags:
  - JavaScript
  - Non-standard
  - Propriété
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/lastMatch
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La propriété non-standard <strong><code>lastMatch</code> </strong>est une propriété statique en lecture seule pour les expressions rationnelles qui contient les caractères de la dernière correspondance. <code>RegExp.$&amp;</code> est un alias pour cette propriété.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>RegExp</var>.lastMatch
RegExp['$&amp;']
</pre>

<h2 id="Description">Description</h2>

<p>La propriété <code>lastMatch</code> est une propriété statique, ce n'est pas une propriété pour chaque objet qui représente une expression rationnelle. Cette propriété doit donc toujours être utilisée avec la syntaxe <code>RegExp.lastMatch</code> ou <code>RegExp['$&amp;'].</code></p>

<p>La valeur de la propriété <code>lastMatch</code> n'est accessible qu'en lecture seule et est modifiée à chaque fois qu'une correspondance est trouvée.</p>

<p>Il n'est pas possible d'utiliser l'alias avec la notation utilisant le point pour accéder à la propriété (<code>RegExp.$&amp;</code>) car le parseur attend une expression avec "&amp;" dans ce cas, ce qui provoque une exception {{jsxref("SyntaxError")}}. Pour utiliser l'alias, on prendra donc la notation <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres#Notation_avec_crochets">utilisant les crochets</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_lastMatch_et">Utiliser <code>lastMatch</code> et <code>$&amp;</code></h3>

<pre class="brush: js">var re = /coucou/g;
re.test("coucou toi!");
RegExp.lastMatch; // "coucou"
RegExp['$&amp;'];     // "coucou"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété n'est pas standard. Elle ne fait partie d'aucune spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.lastMatch")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}</li>
 <li>{{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}</li>
</ul>
