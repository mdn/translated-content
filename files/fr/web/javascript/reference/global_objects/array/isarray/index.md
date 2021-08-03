---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/isArray
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/isArray
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Array.isArray()</strong></code> permet de déterminer si l'objet passé en argument est un objet {{jsxref("Array")}}, elle renvoie <code>true</code> si le paramètre passé à la fonction est de type <code>Array</code> et <code>false</code> dans le cas contraire.</p>

<pre class="brush: js">Array.isArray([1, 2, 3]);   // true
Array.isArray({toto: 123}); // false
Array.isArray("tototruc");  // false
Array.isArray(undefined);   // false
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Array.isArray(<var>value</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>La valeur dont on veut vérifier le type</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si la valeur est un tableau (une instance de {{jsxref("Array")}}), <code>false</code> sinon.</p>

<h2 id="Description">Description</h2>

<p>Si l'objet indiqué en paramètre est un {{jsxref("Array")}}, la méthode renvoie <code>true</code>, sinon, elle renvoie <code>false</code>.</p>

<p>Voir aussi : « <a href="http://web.mit.edu/jwalden/www/isArray.html">Determining with absolute accuracy whether or not a JavaScript object is an array</a> » (en anglais) pour avoir plus de détails. Si on passe un objet {{jsxref("TypedArray")}} en argument, ce sera toujours la valeur <code>false</code> qui sera renvoyée.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Tous les appels suivant renvoient true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c'));
Array.isArray(new Array(3));
// Une petite anecdote: Array.prototype lui même est un Array
Array.isArray( Array.prototype );

// Tous les appels suivant renvoient false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__ : Array.prototype });
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Exécuter ce code avant tout les autres aboutira à la création de la méthode <code>Array.isArray()</code>si elle n'est pas nativement prise en charge par le navigateur.</p>

<pre class="brush: js">if(!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.3.2', 'Array.isArray')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.isarray', 'Array.isArray')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.isarray', 'Array.isArray')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.isArray")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
</ul>
