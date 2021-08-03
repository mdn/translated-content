---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/byteOffset
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>byteOffset</code></strong> est un accesseur qui représente le décalage, exprimé en octets, entre le début du tableau typé par rapport au début du {{jsxref("ArrayBuffer")}} correspondant.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.byteOffset</pre>

<h2 id="Description">Description</h2>

<p>La propriété <code>byteOffset</code> est un accesseur dont le mutateur correspondant vaut <code>undefined</code>, ce qui signifie qu'elle n'est accessible qu'en lecture seule. La valeur de cette propriété est déterminée lors de la construction du <em>TypedArray</em> et ne peut pas être modifiée.<em> TypedArray</em> est l'un des objets <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">TypedArray</a>.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var tampon = new ArrayBuffer(8);

var uint8 = new Uint8Array(tampon);
uint8.byteOffset; // 0 (aucun décalage n'a été défini)

var uint8 = new Uint8Array(tampon, 3);
uint8.byteOffset; // 3 (correspond au décalage défini lors de la construction du Uint8Array)
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-get-%typedarray%.prototype.byteoffset', 'TypedArray.prototype.byteOffset')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.byteoffset', 'TypedArray.prototype.byteOffset')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.byteOffset")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li>{{jsxref("TypedArray")}}</li>
</ul>
