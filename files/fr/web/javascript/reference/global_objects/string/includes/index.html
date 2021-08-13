---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/includes
original_slug: Web/JavaScript/Reference/Objets_globaux/String/includes
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>includes()</strong></code> détermine si une chaîne de caractères est contenue dans une autre et renvoie <code>true</code> ou <code>false</code> selon le cas de figure.</p>

<div>{{EmbedInteractiveExample("pages/js/string-includes.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.includes(<var>chaîneRecherchée</var>);
<var>str</var>.includes(<var>chaîneRecherchée</var>, <var>position</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>chaîneRecherchée</code></dt>
 <dd>Une chaîne à rechercher dans la chaîne courante.</dd>
 <dt><code>position</code> {{optional_inline}}</dt>
 <dd>La position dans la chaîne à partir de laquelle commencera la recherche. La valeur par défaut de <code><var>position</var></code> est 0.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la chaîne de caractères contient la sous-chaîne recherchée, <code>false</code> sinon.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode détermine si une chaîne de caractères est contenue dans une autre.</p>

<h3 id="Sensibilité_à_la_case">Sensibilité à la case</h3>

<p><code>includes()</code> est sensible à la casse. Par exemple, l'expression suivante nous retournera <code>false</code> :</p>

<pre class="brush: js">'Baleine bleue'.includes('baleine'); // false</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_includes">Utiliser <code>includes()</code></h3>

<pre class="brush:js;">const str = "Être ou ne pas être, telle est la question.";

console.log(str.includes("Être"));       // true
console.log(str.includes("question"));   // true
console.log(str.includes("pléonasme"));  // false
console.log(str.includes("Être", 1));    // false
console.log(str.includes("ÊTRE"));       // false
console.log(str.includes(""));       // true
</pre>

<h2 id="Prothèse_démulation_polyfill">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Cette méthode a été ajoutée à la spécification ECMAScript 2015 et n'est peut-être pas encore disponible dans toutes les implémentations JavaScript.</p>

<p>Cependant, vous pouvez facilement {{Glossary('polyfill')}} cette méthode pour de vieux navigateurs :</p>

<pre class="brush: js">if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.includes', 'String.prototype.includes')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.includes', 'String.prototype.includes')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("javascript.builtins.String.includes")}}</p>

<h2 id="String.prototype.contains">String.prototype.contains</h2>

<p>Les versions de Firefox allant de Firefox 18 à Firefox 39 utilisent cette méthode avec le nom <code>contains()</code>. Cette méthode a été renommée en <code>includes()</code> via {{bug(1102219)}} pour la raison suivante :</p>

<p>Il a été <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=789036">rapporté</a> que certains sites web utilisant MooTools 1.2 plantaient sur Firefox 17. Cette version de MooTools vérifie que <code>String.prototype.contains()</code> existe bien, et si ce n'est pas le cas, ajoute sa propre fonction similaire. Avec l'introduction de cette fonction dans Firefox 17, le comportement de ce contrôle a changé de telle manière qu'il cause un plantage du code de MooTools implémenté pour <code>String.prototype.contains()</code>. En conséquence, cette implémentation a été <a href="https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8" title="https://bugzilla.mozilla.org/show_bug.cgi?id=793781">désactivée</a> de Firefox 17. <code>String.prototype.contains()</code> est ainsi disponible sur une version ultérieure : Firefox 18 lorsque <a href="https://mootools.net/blog/2013/02/19/mootools-1-2-6-released">MooTools a déclenché la sortie de la version 1.2.6.</a></p>

<p>MooTools 1.3 force sa propre version de <code>String.prototype.includes()</code>, les sites Web l'implémentant ne sont donc pas perturbés. Néanmoins, il faut noter que les signatures des méthodes diffèrent entre <a href="https://mootools.net/docs/core/Types/String#String:includes">MooTools 1.3</a> et ECMAScript 2015 (pour le second paramètre). <a href="https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note">MooTools 1.5+ a modifié sa signature afin de prendre en compte le standard de ES2015.</a></p>

<p>Dans Firefox 48, la méthode <code>String.prototype.contains()</code> a été retirée. <code>String.prototype.includes()</code> doit être utilisée à la place.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.includes()")}}</li>
 <li>{{jsxref("TypedArray.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("String.prototype.startsWith()")}}</li>
 <li>{{jsxref("String.prototype.endsWith()")}}</li>
</ul>
