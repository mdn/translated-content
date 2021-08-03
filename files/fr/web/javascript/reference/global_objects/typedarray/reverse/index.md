---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/reverse
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>reverse()</strong></code> inverse les éléments d'un tableau. Le premier élément du tableau typé devient le dernier, le dernier élément devient le premier et ainsi de suite. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.reverse()")}}<em>.</em> Dans le reste de cet article <em>TypedArray</em> correspond à un des <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">types de tableaux typés</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-reverse.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.reverse();</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le tableau typé dont les éléments ont été inversés.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.reverse', 'TypedArray.prototype.reverse')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.reverse', 'TypedArray.prototype.reverse')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.reverse")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.reverse()")}}</li>
</ul>
