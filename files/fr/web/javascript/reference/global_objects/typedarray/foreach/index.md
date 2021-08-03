---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/forEach
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>forEach()</strong></code> permet d'exécuter une fonction donnée sur chaque élément du tableau. Cette méthode implémente le même algorithme que {{jsxref("Array.prototype.forEach()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>tableauTypé</var>.forEach(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>La fonction à utiliser pour chaque élément du tableau typé. Elle prend trois arguments :
 <dl>
  <dt><code>valeurÉlément</code></dt>
  <dd>La valeur de l'élément traité actuellement.</dd>
  <dt><code>indiceÉlément</code></dt>
  <dd>L'indice de l'élément traité actuellement.</dd>
  <dt><code>tableau</code></dt>
  <dd>Le tableau parcouru par <code>forEach()</code>.</dd>
 </dl>
 </dd>
 <dt><code>thisArg</code></dt>
 <dd>Optionnel. La valeur utilisée pour <code>this</code> lors de l'appel à <code>callback()</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>forEach()</code> exécute la fonction <code>callback()</code> une fois pour chaque élément présent dans le tableau typé, par ordre d'indice croissant. Cette fonction n'est pas appelée pour les indices sur lesquels les éléments ont été supprimés ou n'ont pas été définis. <code>callback()</code> est cependant appelée pour les éléments qui portent la valeur {{jsxref("undefined")}}.</p>

<p><code>callback()</code> accepte <strong>trois arguments</strong> :</p>

<ul>
 <li>la <strong>valeur de l'élément</strong></li>
 <li>l'<strong>indice de l'élément</strong></li>
 <li>le <strong>le tableau typé traversé</strong></li>
</ul>

<p>Si le paramètre <code>thisArg</code> est fourni à <code>forEach()</code>, il sera la valeur du <code>this</code> utilisé par chaque exécution de <code>callback()</code>. Dans le cas contraire, la valeur {{jsxref("undefined")}} sera utilisée par défaut. Pour déterminer la valeur de <code>this</code> véritablement visible par <code>callback()</code> durant son exécution, les règles habituelles pour {{jsxref("Operators/this", "déterminer la valeur de this du point de vue d'une fonction")}} sont appliquées.</p>

<p>L'ensemble des éléments visités par <code>forEach()</code> est fixé avant le premier appel à <code>callback</code>. Ainsi, les éléments qui sont ajoutés au tableau typé après que l'exécution de <code>forEach()</code> soit lancée ne seront pas traités. Cependant, si la valeur d'un élément à traiter est modifiée pendant l'exécution de <code>forEach()</code>, la valeur passée à <code>callback()</code> sera celle de l'élément au moment où il est traité. Si un élément est supprimé avant d'être visité, il ne sera pas traité.</p>

<p><code>forEach()</code> lance un appel à la fonction <code>callback()</code> pour chaque élément du tableau typé ; à la différence de {{jsxref("TypedArray.prototype.every()", "every()")}} et {{jsxref("TypedArray.prototype.some()", "some()")}} cette méthode renvoie toujours {{jsxref("undefined")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_Affichage_du_contenu_d'un_tableau_typé">Exemple: Affichage du contenu d'un tableau typé</h3>

<p>Le code ci-dessous affiche une ligne pour chaque élément du tableau typé :</p>

<pre class="brush:js">function affichageContenuTableau(élément, index, tableau) {
  console.log('a[' + index + '] = ' + élément);
}

new Uint8Array([0, 1, 2, 3]).forEach(affichageContenuTableau);
// log :
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.foreach', '%TypedArray%.prototype.forEach')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.foreach', '%TypedArray%.prototype.forEach')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.forEach")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.map()")}}</li>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
</ul>
