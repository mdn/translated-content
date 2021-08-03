---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/endsWith
original_slug: Web/JavaScript/Reference/Objets_globaux/String/endsWith
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>endsWith()</strong></code> renvoie un booléen indiquant si la chaine de caractères se termine par la chaine de caractères fournie en argument.</p>

<div>{{EmbedInteractiveExample("pages/js/string-endswith.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.endsWith(chaîneRecherchée[, <var>position</var>]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>chaîneRecherchée</code></dt>
 <dd>Les caractères à rechercher à la fin de la chaine de caractères.</dd>
 <dt><code>position</code> {{optional_inline}}</dt>
 <dd>Paramètre optionnel. Permet de rechercher dans la chaine de caractères comme si elle faisait cette longueur ; par défaut il s'agit de la longueur de la chaine de caractères <code>chaîneRecherchée</code>. Si la valeur fournie est supérieure à la longueur de la chaine de caractères, elle ne sera pas prise en compte.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la chaîne de caractères se termine par la sous-chaîne indiquée, <code>false</code> sinon.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode permet de savoir si une chaine de caractères se termine avec une certaine chaine de caractères (comme les autres méthodes fonctionnant avec des chaînes de caractères, cette méthode est sensible à la casse).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js;">var str = "Être, ou ne pas être : telle est la question.";

console.log(str.endsWith("question."));     // true
console.log(str.endsWith("pas être"));      // false
console.log(str.endsWith("pas être", 20));  // true
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Cette méthode a été ajoutée dans la spécification ECMAScript 6 et peut ne pas être disponible dans toutes les implémentations de JavaScript. Cependant, il est possible d'émuler le comportement de <code>String.prototype.endsWith</code> avec le fragment de code suivant :</p>

<pre class="brush: js">if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position &gt; subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 &amp;&amp; lastIndex === position;
  };
}
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
   <td>{{SpecName('ES6', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.endswith', 'String.prototype.endsWith')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.endsWith")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.startsWith()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
</ul>
