---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
tags:
  - ArrayBuffer
  - JavaScript
  - Propriété
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
original_slug: Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/@@species
---
<div>{{JSRef}}</div>

<p>La propriété d'accesseur <code><strong>ArrayBuffer[@@species]</strong></code> renvoie le constructeur <code>ArrayBuffer</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">ArrayBuffer[Symbol.species]
</pre>

<h2 id="Description">Description</h2>

<p>L'accesseur <code>species</code> renvoie le constructeur par défaut pour les objets <code>ArrayBuffer</code>. Les constructeurs des sous-classes peuvent surcharger ce symbole pour modifier l'affectation du constructeur.</p>

<h2 id="Exemples">Exemples</h2>

<p>La propriété <code>species</code> renvoie le constructeur par défaut, soit <code>ArrayBuffer</code> dans le cas des objets <code>ArrayBuffer</code> :</p>

<pre class="brush: js">ArrayBuffer[Symbol.species]; // function ArrayBuffer()</pre>

<p>Pour un objet dérivé (par exemple une classe sur mesure <code>MonArrayBuffer</code>), le symbole <code>species</code> renverra le constructeur <code>MonArrayBuffer</code>. Il est possible de surcharger ce comportement pour renvoyer le constructeur <code>ArrayBuffer</code> :</p>

<pre class="brush: js">class MonArrayBuffer extends ArrayBuffer {
  // On surcharge species pour renvoyer
  // le constructeur parent ArrayBuffer
  static get [Symbol.species]() { return ArrayBuffer; }
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
   <td>{{SpecName('ES6', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.@@species")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
