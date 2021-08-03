---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/toLocaleString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleString()</strong></code> renvoie une chaîne de caractères uqi représente les éléments du tableau typé. Les éléments sont convertis en chaînes de caractères et séparés par une chaîne de caractères qui est fonction de la locale (la virgule « , » par exemple). Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.toLocaleString()")}} et vu que les éléments d'un tableau typé sont des nombres, elle utilise le même algorithme que {{jsxref("Number.prototype.toLocaleString()")}} pour chaque élément. Dans la suite de cet article, <em>TypedArray</em> fait référence à <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">l'un des types de tableau typé listés ici</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarr</var>ay.toLocaleString([locales [, options]]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<div>{{page('/fr/docs/Web/JavaScript/Référence/Objets_globaux/NumberFormat', 'Paramètres')}}</div>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente les éléments du tableau typé.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// Si on utilise la locale de-DE
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.tolocalestring', 'TypedArray.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.tolocalestring', 'TypedArray.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.toLocaleString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
</ul>
