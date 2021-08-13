---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@split
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>[@@split]()</code></strong> permet de découper une chaîne de caractères ({{jsxref("String")}}) en un tableau de sous-chaînes.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><var>regexp</var>[Symbol.split](str[, <var>limite</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>La chaîne de caractères qu'on souhaite découper.</dd>
 <dt><code>limite</code></dt>
 <dd>
 <p>Paramètre optionnel. Un entier indiquant le nombre maximal de sous-chaînes à trouver. La méthode <code>[@@split]()</code> découpe la chaîne pour chaque correspondance de l'expression rationnelle <code>this</code> jusqu'à ce que le nombre d'éléments obtenus atteigne cette limite ou que la chaîne n'ait plus de correspondances.</p>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau ({{jsxref("Array")}}) dont les éléments sont les sous-chaînes de caractères issues de la découpe.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode est appelée de façon interne par la méthode {{jsxref("String.prototype.split()")}} lorsque l'argument <code>str</code> est un objet {{jsxref("RegExp")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier :</p>

<pre class="brush: js notranslate">'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');</pre>

<p>Cette méthode existe afin de pouvoir adapter le fonctionnement de la découpe pour les sous-classes de <code>RegExp</code>.</p>

<p>Si le séparateur n'est pas un objet {{jsxref("RegExp")}}, la méthode {{jsxref("String.prototype.split()")}} n'appellera pas cette méthode et ne créera pas d'objet {{jsxref("RegExp")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Appel_direct">Appel direct</h3>

<p>Cette méthode peut être utilisée comme  {{jsxref("String.prototype.split()")}}, l'objet <code>this</code> est différent et l'ordre des arguments également.</p>

<pre class="brush: js notranslate">var re = /-/g;
var str = '2016-01-02';
var résultat = re[Symbol.split](str);
console.log(résultat);  // ["2016", "01", "02"]
</pre>

<h3 id="Utiliser_split_avec_une_sous-classe">Utiliser <code>@@split</code> avec une sous-classe</h3>

<p>Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger  <code>[@@split]()</code> afin de modifier le comportement de la découpe :</p>

<pre class="brush: js notranslate">class MaRegExp extends RegExp {
  [Symbol.split](str, limit) {
    var résultat = RegExp.prototype[Symbol.split].call(this, str, limit);
    return résultat.map(x =&gt; "(" + x + ")");
  }
}

var re = new MaRegExp('-');
var str = '2016-01-02';
var résultat = str.split(re); // String.prototype.split appelle re[@@split].
console.log(résultat); // ["(2016)", "(01)", "(02)"]
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
   <td>{{SpecName('ES6', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.@@split")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.split()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
