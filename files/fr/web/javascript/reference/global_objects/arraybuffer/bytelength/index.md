---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
original_slug: Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/byteLength
---
<div>{{JSRef}}</div>

<p>L'accesseur <code><strong>byteLength</strong></code> est une propriété représentant la longueur d'un {{jsxref("ArrayBuffer")}} en octets.</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>aybuffer.byteLength</pre>

<h2 id="Description">Description</h2>

<p>La propriété <code>byteLength</code> est un accesseur dont le mutateur associé vaut <code>undefined</code>. Cela signifie que cette propriété est en lecture seule. La valeur est déterminée lors de la construction du tableau et ne peut pas être changée par la suite. Cette propriété renvoie 0 si ce <code>ArrayBuffer</code> a été détaché.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js">var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
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
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Remplacée dans ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
