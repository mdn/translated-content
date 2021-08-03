---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
tags:
  - ECMAScript 2016
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/includes
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>includes()</strong></code> détermine si un tableau typé possède un certain élément et renvoie <code>true</code> ou <code>false</code> selon le cas de figure. Cette méthode utilise le même algorithme que la méthode {{jsxref("Array.prototype.includes()")}}. Dans le reste de l'article <em>TypedArray</em> fait référence à un des <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">types de tableau typé</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.includes(élémentRecherché[, <var>indiceDébut</var>]);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>élémentRecherché</code></dt>
 <dd>L'élément qu'on cherche au sein du tableau typé.</dd>
 <dt><code>indiceDébut</code></dt>
 <dd>Paramètre optionnel qui correspond à la position du tableau à partir de laquelle effectuer la recherche. La valeur par défaut est 0.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen indiquant la présence de l'élément (<code>true</code> s'il y est, <code>false</code> sinon).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var uint8 = new Uint8Array([1,2,3]);
uint8.includes(2);     // true
uint8.includes(4);     // false
uint8.includes(3, 3);  // false

// Gestion de NaN (vrai uniquement pour Float32 et Float64)
new Uint8Array([NaN]).includes(NaN); // false car NaN est converti en 0 par le constructeur
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
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
   <td>{{SpecName('ES7', '#sec-%typedarray%.prototype.includes', 'TypedArray.prototype.includes')}}</td>
   <td>{{Spec2('ES7')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.includes', 'TypedArray.prototype.includes')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.includes")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
</ul>
