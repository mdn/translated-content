---
title: RegExp.prototype[@@search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@search
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>[@@search]()</code></strong> recherche une correspondance entre une expression rationnelle décrite par <code>this</code> et une chaîne de caractères donnée.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>regexp</var>[Symbol.search](str)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>str</code></dt>
 <dd>Une chaîne de caractères ({{jsxref("String")}}) sur laquelle on veut rechercher une correspondance.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<dl>
 <dt><code>entier</code></dt>
 <dd>Si la recherche réussit, <code>[@@search]()</code> renvoie la position de la première correspondance de l'expression rationnelle au sein de la chaîne, sinon elle renvoie <code>-1</code>.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Cette méthode est appelée en interne lors de l'utilisation de {{jsxref("String.prototype.search()")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier :</p>

<pre class="brush: js">'abc'.search(/a/);

/a/[Symbol.search]('abc');</pre>

<p>Cette méthode existe afin de pouvoir adapter le comportement de la recherche pour les sous-classes de <code>RegExp</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Appel_direct">Appel direct</h3>

<p>Cette méthode peut être utilisée comme {{jsxref("String.prototype.search()")}}, elle utilise simplement un objet <code>this</code> différent et un ordre de paramètres différent :</p>

<pre class="brush: js">var re = /-/g;
var str = '2016-01-02';
var résultat = re[Symbol.search](str);
console.log(résultat);  // 4
</pre>

<h3 id="Utiliser_search_avec_une_sous-classe">Utiliser <code>@@search</code> avec une sous-classe</h3>

<p>Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger <code>[@@search]()</code> afin de modifier le comportement obtenu :</p>

<pre class="brush: js">class MaRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MaRegExp('a+b');
var str = 'ab a+b';
var résultat = str.search(re); // String.prototype.search appelle re[@@search].
console.log(résultat); // 3
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
   <td>{{SpecName('ES6', '#sec-regexp.prototype-@@search', 'RegExp.prototype[@@search]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype-@@search', 'RegExp.prototype[@@search]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.@@search")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.search()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}</li>
 <li>{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
