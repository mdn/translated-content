---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/is
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/is
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.is()</strong></code> permet de déterminer si deux valeurs sont <a href="/fr/docs/Web/JavaScript/Guide/%C3%89galit%C3%A9_en_JavaScript">les mêmes</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.is(<var>value1</var>, <var>value2</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur1</code></dt>
 <dd>La première valeur à comparer.</dd>
 <dt><code>valeur2</code></dt>
 <dd>La seconde valeur à comparer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen indiquant si les arguments ont la même valeur.</p>

<h2 id="Description">Description</h2>

<p><code>Object.is()</code> permet de déterminer si deux valeurs sont <a href="/fr/docs/Web/JavaScript/Guide/%C3%89galit%C3%A9_en_JavaScript">identiques</a>. Deux valeurs sont considérées identiques si :</p>

<ul>
 <li>elles sont toutes les deux {{jsxref("undefined")}}</li>
 <li>elles sont toutes les deux {{jsxref("null")}}</li>
 <li>elles sont toutes les deux <code>true</code> ou toutes les deux <code>false</code></li>
 <li>elles sont des chaînes de caractères de la même longueur et avec les mêmes caractères (dans le même ordre)</li>
 <li>elles sont toutes les deux le même objet</li>
 <li>elles sont des nombres et
  <ul>
   <li>sont toutes les deux égales à <code>+0</code></li>
   <li>sont toutes les deux égales à <code>-0</code></li>
   <li>sont toutes les deux égales à {{jsxref("NaN")}}</li>
   <li>sont non-nulles, ne sont pas <code>NaN</code> et ont toutes les deux la même valeur</li>
  </ul>
 </li>
</ul>

<p>Attention, ce n'est pas la même égalité qu'avec l'opérateur {{jsxref("Opérateurs/Opérateurs_de_comparaison", "==", "#.C3.89galit.C3.A9_simple_(.3D.3D)")}}. L'opérateur == applique différentes conversions à chaque opérande (si ils ne sont pas du même type) avant de tester l'égalité (d'où le comportement <code>"" == false</code> qui donne <code>true</code>), <code>Object.is</code> ne convertit aucune des deux valeurs.</p>

<p>Cette égalité est également différente de l'égalité stricte qu'on peut avoir avec l'opérateur {{jsxref("Opérateurs/Opérateurs_de_comparaison", "===", "#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)")}}. L'opérateur === (et également l'opérateur ==) considère que <code>-0</code> et <code>+0</code> sont égales et que {{jsxref("Number.NaN")}} n'est pas égal à {{jsxref("NaN")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js;">Object.is("toto", "toto");     // true
Object.is(window, window);     // true

Object.is("toto", "truc");     // false
Object.is([], []);             // false

var toto = {a: 1};
var truc = {a: 1};
Object.is(toto, toto);          // true
Object.is(toto, truc);          // false

Object.is(null, null);          // true

// Cas aux limites (cas spéciaux)
Object.is(0, -0);                // false
Object.is(-0, -0);               // true
Object.is(NaN, 0/0);             // true</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<pre class="brush:js">if (!Object.is) {
  Object.is = function(v1, v2) {
    // Algorithme SameValue
    if (v1 === v2) { //Étapes 1-5, 7-10
      //Étapes 6.b-6.b +0 !=-0
      return v1 !== 0 || 1 / v1 === 1 / v2;
    } else {
      //Étapes 6.a: NaN == NaN
      return v1 !== v1 &amp;&amp; v2 !== v2;
    }
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
   <td>{{SpecName('ES2015', '#sec-object.is', 'Object.is')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.is', 'Object.is')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.is")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Égalité_en_JavaScript">Guide JavaScript : L'égalité en JavaScript</a> qui illustre les trois manières de comparer en JavaScript</li>
 <li>{{jsxref("Opérateurs/Opérateurs_de_comparaison","Les opérateurs de comparaison","",1)}}</li>
</ul>
