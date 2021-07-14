---
title: RegExp.prototype[@@match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@match
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>[@@match]()</code></strong> permet de récupérer les correspondances obtenues lorsqu'on teste une chaîne de caractères par rapport à une expression rationnelle (<em>regexp</em>).</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>regexp</var>[Symbol.match](str)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>La chaîne de caractères ({{jsxref("String")}}) sur laquelle on veut chercher des correspondances.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau ({{jsxref("Array")}}) qui contient les résultats des correspondances et les groupes capturés grâce aux parenthèse. S'il n'y a aucune correspondance, ce sera {{jsxref("null")}}.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode est appelée de façon interne lorsqu'on utilise {{jsxref("String.prototype.match()")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier :</p>

<pre class="brush: js">'abc'.match(/a/);

/a/[Symbol.match]('abc');</pre>

<p>Cette méthode existe afin de permettre d'adapter le comportement de la recherche des correspondances pour les sous-classes de <code>RegExp</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Appel_direct">Appel direct</h3>

<p>Cette méthode peut être utilisée comme {{jsxref("String.prototype.match()")}} mais avec un objet <code>this</code> différent et un ordre des paramètres également différent.</p>

<pre class="brush: js">var re = /[0-9]+/g;
var str = '2016-01-02';
var résultat = re[Symbol.match](str);
console.log(résultat);  // ["2016", "01", "02"]
</pre>

<h3 id="Utilisation_de_match_avec_une_sous-classe">Utilisation de <code>@@match</code> avec une sous-classe</h3>

<p>Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger la méthode <code>[@@match]()</code> afin de modifier le comportement.</p>

<pre class="brush: js">class MaRegExp extends RegExp {
  [Symbol.match](str) {
    var résultat = RegExp.prototype[Symbol.match].call(this, str);
    if (!résultat) return null;
    return {
      group(n) {
        return résultat[n];
      }
    };
  }
}

var re = new MaRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
var str = '2016-01-02';
var résultat = str.match(re); // String.prototype.match appelle re[@@match].
console.log(résultat.group(1)); // 2016
console.log(résultat.group(2)); // 01
console.log(résultat.group(3)); // 02
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
   <td>{{SpecName('ES6', '#sec-regexp.prototype-@@match', 'RegExp.prototype[@@match]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@match', 'RegExp.prototype[@@match]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.@@match")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
