---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
tags:
  - ECMAScript6
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/startsWith
original_slug: Web/JavaScript/Reference/Objets_globaux/String/startsWith
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>startsWith()</strong></code> renvoie un booléen indiquant si la chaine de caractères commence par la deuxième chaine de caractères fournie en argument.</p>

<div>{{EmbedInteractiveExample("pages/js/string-startswith.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.startsWith(<var>chaîneRecherchée</var> [, <var>position</var>]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>chaîneRecherchée</code></dt>
 <dd>Les caractères à rechercher au début de la chaine de caractères.</dd>
 <dt><code>position</code> {{optional_inline}}</dt>
 <dd>La position à laquelle commencer la recherche de <code><var>chaîneRecherchée</var></code> ; par défaut 0.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la chaîne de caractères commence avec la sous-chaîne en argument, <code>false</code> sinon</p>

<h2 id="Description">Description</h2>

<p>Cette méthode permet de savoir si une chaine de caractères commence avec une autre chaine de caractères (comme pour les autres méthodes fonctionnant avec les chaînes de caractères, cette méthode est sensible à la casse).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js;">var str = "Être, ou ne pas être : telle est la question.";

console.log(str.startsWith("Être"));         // true
console.log(str.startsWith("pas être"));     // false
console.log(str.startsWith("pas être", 12)); // true</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.startswith', 'String.prototype.startsWith')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.startsWith")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.endsWith()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li><a href="https://github.com/mathiasbynens/String.prototype.startsWith">Prothèse (<em>polyfill</em>) de Mathias Bynens</a></li>
</ul>
