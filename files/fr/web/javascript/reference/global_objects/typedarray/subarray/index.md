---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/subarray
---
<div>{{JSRef}}</div>

<p>La méthode <code>subarray()</code> permet de renvoyer un nouvel objet <em>TypedArray</em> basé sur le même {{jsxref("ArrayBuffer")}} et dont les éléments sont du même type que l'objet <em>TypedArray</em> courant. Le paramètre <code>début</code> est à considérer au sens large et le paramètre <code>end</code> est à considérer au sens strict. <em>TypedArray</em> est l'un des types de <a href="/fr/docs/Web/JavaScript/Tableaux_typés#Les_objets_TypedArray">tableaux typés</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-subarray.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarr</var>ay.subarray([début[,fin]])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>début</code>{{optional_inline}}</dt>
 <dd>L'élément à partir duquel commencer le nouveau tableau typé. Cet élément initial sera inclus dans le nouveau tableau (sens large). Si la valeur n'est pas définie, tout le tableau sera inclus dans la nouvelle vue.</dd>
 <dt><code>fin</code>{{optional_inline}}</dt>
 <dd>L'élément auquel finir le nouveau tableau typé. Cet élément ne fera pas partie du nouveau tableau (sens strict). Si ce paramètre n'est pas utilisé, tous les éléments contenus à partir de <code>début</code> jusqu'à la fin du tableau courant seront inclus dans la nouvelle vue.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet {{jsxref("TypedArray")}}.</p>

<h2 id="Description">Description</h2>

<p>L'intervalle défini par <code>début</code> et <code>fin</code> est redimensionné si besoin pour être un intervalle valide en regard du tableau courant. Si la longueur du nouveau tableau est négative, elle est ramenée à zéro. Si <code>début </code>ou <code>fin </code>a une valeur négative, on prendra en compte la position à partir de la fin du tableau et non à partir du début de celui-ci.</p>

<p>On notera que cette méthode permet de créer un nouvelle vue sur le tampon (<em>buffer</em>) existant, tous les changements apportés via le nouvel objet impacteront le tableau typé initial et vice versa.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1,2,3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

var sub = uint8.subarray(0,4);

console.log(sub);   // Uint8Array [ 1, 2, 3, 0 ]
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
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Remplacée par ECMAScript 6.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-%typedarray%.prototype.subarray', 'TypedArray.prototype.subarray')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.subarray', 'TypedArray.prototype.subarray')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.subarray")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés JavaScript</a></li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
