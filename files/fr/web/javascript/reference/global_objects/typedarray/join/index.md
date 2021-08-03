---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
tags:
  - ECMAScript6
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/join
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/join
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>join()</strong></code> fusionne l'ensemble des éléments d'un tableau en une chaîne de caractères. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.join()")}}. Dans le reste de cet article <em>TypedArray</em> fait référence à l'un des <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">types de tableaux typés</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.join([<var>séparateur</var> = ',']);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>séparateur</code></dt>
 <dd>Paramètre optionnel qui définit la chaîne de caractères à utiliser pour séparer chaque élément. Si nécessaire, le séparateur sera converti en une chaîne de caractère. La valeur par défaut du paramètre est une virgule (",").</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères formée par la concaténation des différents éléments du tableau typé.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var uint8 = new Uint8Array([1,2,3]);
uint8.join();      // '1,2,3'
uint8.join(' / '); // '1 / 2 / 3'
uint8.join('');    // '123'
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Il n'existe pas d'objet global <em>TypedArray</em>, il faut donc ajouter une prothèse correspondant à chaque type de tableau typé.</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
if (!Uint8Array.prototype.join) {
  Object.defineProperty(Uint8Array.prototype, 'join', {
    value: Array.prototype.join
  });
}
</pre>

<p>Mieux vaut ne pas ajouter de prothèses pour <code>TypedArray.prototype</code> si le moteur JavaScript ne prend pas en charge {{jsxref("Object.defineProperty()")}} car on ne peut pas les rendre non-énumérables.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.join', 'TypedArray.prototype.join')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.join', 'TypedArray.prototype.join')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.join")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("Array.prototype.join()")}}</li>
</ul>
