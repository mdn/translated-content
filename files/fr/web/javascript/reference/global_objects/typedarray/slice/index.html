---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/slice
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>slice()</strong></code> renvoie une copie superficielle (shallow copy) d'un fragment du tableau typé courant dans un nouveau tableau typé. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.slice()")}}<em>.</em> <em>TypedArray</em> est utilisé par la suite de façon générique pour réprésenter l'un des <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">types de tableaux typés</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-slice.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarr</var>ay.slice([<var>début</var>[, fin]])</pre>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt><code>début</code> {{optional_inline}}</dt>
 <dd>L'indice (compté à partir de zéro) à partir duquel commencer le fragment. Si l'indice fourni est négatif, <code>début</code> indiquera le décalage par rapport à la fin de la séquence. Par exemple, <code>slice(-2)</code> extrait les deux derniers éléments de la séquence. Par défaut, si <code>début</code> n'est pas utilisé, <code>slice()</code> commencera à partir de l'indice <code>0</code>.</dd>
 <dt><code>fin</code> {{optional_inline}}</dt>
 <dd>L'indice (compté à partir de zéro) jusqu'auquel extraire le fragment. Le fragment obtenu n'incluera pas l'élément situé à l'indice <code>fin</code>. <code>slice(1,4)</code> extrait par exemple à partir du deuxième élément et jusqu'au quatrième (c'est-à-dire les éléments dont les indices respectifs sont 1, 2, et 3). Si l'indice utilisé est négatif, <code>fin</code> indiquera le décalage par rapport à la fin de la séquence. Ainsi, <code>slice(2,-1)</code> extraira à partir du troisième élément et jusqu'à l'avant dernier élément (compris). Par défaut, si <code>fin</code> n'est pas utilisé, <code>slice()</code> extraira les éléments jusqu'à la fin de la séquence (<code>arr.length</code>).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau typé qui contient les éléments extraits.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>slice()</code> ne modifie pas le tableau typé courant, elle renvoie une copie superficielle (<em>shallow copy</em>) du tableau typé original.</p>

<p>Si un nouvel élément est ajouté à l'un des deux tableaux typés, l'autre ne sera pas impacté.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var uint8 = new Uint8Array([1,2,3]);
uint8.slice(1);   // Uint8Array [ 2, 3 ]
uint8.slice(2);   // Uint8Array [ 3 ]
uint8.slice(-2);  // Uint8Array [ 2, 3 ]
uint8.slice(0,1); // Uint8Array [ 1 ]</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Il n'existe pas d'objet global intitulé <em>TypedArray</em>, la prothèse doit donc uniquement être employée si nécessaire :</p>

<pre class="brush: js">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
if (!Uint8Array.prototype.slice) {
  Object.defineProperty(Uint8Array.prototype, 'slice', {
    value: function (begin, end){
      return new Uint8Array(Array.prototype.slice.call(this, begin, end));
    }
  });
}
</pre>

<p>De plus cette prothèse n'est pas parfaite car elle renvoie une instance d'<code>Array</code> et pas de <code>Uint8Array</code>. Elle manque donc des propriétés normalement associées aux objets <code>TypedArray</code>.</p>

<p>S'il faut également prendre en charge les moteurs JavaScript qui ne prennent pas en charge la méthode {{jsxref("Object.defineProperty")}}, mieux vaut ne pas ajouter de prothèse du tout pour <code>TypedArray.prototype</code> car on ne peut pas les rendre non-énumérables.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.slice', '%TypedArray%.prototype.slice')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.slice', '%TypedArray%.prototype.slice')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.slice")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.slice()")}}</li>
</ul>
