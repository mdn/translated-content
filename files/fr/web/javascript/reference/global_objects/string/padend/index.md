---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
tags:
  - JavaScript
  - Méthode
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/padEnd
original_slug: Web/JavaScript/Reference/Objets_globaux/String/padEnd
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>padEnd()</code></strong> permet de compléter la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixée. Pour atteindre cette longueur, la chaîne complémentaire peut être répétée. La chaîne courante est complétée depuis la fin.</p>

<div>{{EmbedInteractiveExample("pages/js/string-padend.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.padEnd(<var>longueurCible</var> [, <var>chaîneComplémentaire</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>longueurCible</code></dt>
 <dd>La longueur de la chaîne qu'on souhaite obtenir. Si la longueur indiquée est inférieure à celle de la chaîne courante, cette dernière est renvoyée telle quelle.</dd>
 <dt><code>chaîneComplémentaire</code> {{optional_inline}}</dt>
 <dd>La chaîne de caractères avec laquelle on veut compléter la chaîne courante. Si cette chaîne est trop longue, on prendra uniquement le début (la partie la plus à gauche pour les langues écrites de gauche à droite et la partie la plus à droite pour les langues écrites de droite à gauche). La valeur par défaut de ce paramètre est l'espace " " (U+0020). Si cette chaîne est trop courte, elle sera répétée.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères ({{jsxref("String")}}) dont la longueur est celle indiquée, complétée avec la chaîne fournie.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">'abc'.padEnd(10);         // "abc       "
'abc'.padEnd(10, "toto"); // "abctototot"
'abc'.padEnd(6,"123456"); // "abc123"
'abc'.padEnd(1);          // "abc"
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.padend', 'String.prototype.padEnd')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-string.prototype.padend', 'String.prototype.padEnd')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.padEnd")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.padStart()")}}</li>
</ul>
