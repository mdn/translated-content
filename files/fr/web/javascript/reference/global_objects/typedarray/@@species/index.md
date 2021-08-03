---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/@@species
---
<div>{{JSRef}}</div>

<p>La propriété d'accesseur <code><strong>TypedArray[@@species]</strong></code> renvoie le constructeur <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">du tableau typé</a>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>TypedArray</em>[Symbol.species]

où <em>TypedArray</em> vaut :

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
</pre>

<h2 id="Description">Description</h2>

<p>L'accesseur <code>species</code> renvoie le constructeur par défaut pour les tableaux typés. Les constructeurs des sous-classes peuvent surcharger ce symbole pour modifier l'affectation du constructeur.</p>

<h2 id="Exemples">Exemples</h2>

<p>La propriété <code>species</code> renvoie le constructeur par défaut qui est l'un des constructeurs de tableau typé (selon le type <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">de tableau typé</a> de l'objet) :</p>

<pre class="brush: js">Int8Array[Symbol.species];    // function Int8Array()
Uint8Array[Symbol.species];   // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
</pre>

<p>Pour un objet construit sur mesure (par exemple une tableau <code>MonTableauTypé</code>), le symbole <code>species</code> de <code>MonTableauTypé</code> sera le constructeur <code>MonTableauTypé</code>. Mais on peut vouloir surcharger ce comportement pour renvoyer le constructeur du type parent :</p>

<pre class="brush: js">class MonTableauTypé extends Uint8Array {
  // On surcharge species pour MonTableauTypé
  // pour récupérer le constructeur Uint8Array
  static get [Symbol.species]() { return Uint8Array; }
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
   <td>{{SpecName('ES6', '#sec-get-%typedarray%-@@species', 'get %TypedArray% [ @@species ]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-%typedarray%-@@species', 'get %TypedArray% [ @@species ]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.@@species")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
