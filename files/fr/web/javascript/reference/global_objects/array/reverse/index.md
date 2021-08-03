---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/reverse
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/reverse
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>reverse()</strong></code> transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.</p>

<div>{{EmbedInteractiveExample("pages/js/array-reverse.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.reverse()</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le tableau inversé.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>reverse()</code> permet d'inverser l'ordre des éléments du tableau. La méthode modifie le tableau courant et renvoie une référence à ce tableau.</p>

<p>Cette méthode est intentionnellement générique et peut être appelée (via {{jsxref("Function.call()")}}) ou appliquée (via {{jsxref("Function.apply()")}}) sur des objets semblables à des tableaux. Les objets qui ne contiennent pas de propriété <code>length</code> qui soit cohérente avec leurs propriétés indexées sur des nombres ne seront pas traités par <code>reverse()</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Inverser_l'ordre_des_éléments_d'un_tableau">Inverser l'ordre des éléments d'un tableau</h3>

<p>L'exemple qui suit crée un tableau <code>monArray</code>, qui contient trois éléments, puis inverse celui-ci.</p>

<pre class="brush: js">var monArray = ["un", "deux", "trois"];
monArray.reverse();

console.log(monArray) // ["trois", "deux", "un"]
</pre>

<h3 id="Inverser_l'ordre_des_éléments_d'un_objet_semblable_à_un_tableau">Inverser l'ordre des éléments d'un objet semblable à un tableau</h3>

<p>Dans l'exemple suivant, on crée un objet semblable à un tableau <code>a</code> qui contient trois éléments et une propriété <code>length</code>. On appelle ensuite <code>reverse()</code> grâce à <code>call()</code> sur cet objet pour inverser ses éléments :</p>

<pre class="brush: js">const a = {0: 1, 1: 2, 2: 3, length: 3};

console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); // On aurait pu utiliser apply() également

console.log(a); // {0: 3, 1: 2, 2 : 1, length: 3}
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.4.4.8', 'Array.prototype.reverse')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.reverse")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.join()")}}</li>
 <li>{{jsxref("Array.prototype.sort()")}}</li>
 <li>{{jsxref("TypedArray.prototype.reverse()")}}</li>
</ul>
