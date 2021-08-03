---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/copyWithin
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>copyWithin()</strong></code> permet de copier des éléments d'un tableau dans le tableau typé à partir de la position <code>cible</code>. Les éléments copiés sont ceux contenus entre les index <code>début</code> et <code>fin</code>. L'argument <code>fin</code> est optionnel, sa valeur par défaut correspondra à la longueur du tableau dont on souhaite copier les éléments. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.copyWithin")}}<em>.</em> <em>TypedArray</em> est l'un des types de <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">tableaux typés</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-copywithin.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.copyWithin(<var>cible</var>, <var>début</var>[, fin = this.length])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cible</code></dt>
 <dd>La position, dans le tableau typé, à partir de laquelle on souhaite copier les éléments.</dd>
 <dt><code>début</code></dt>
 <dd>La position du tableau contenant les éléments à copier à partir de laquelle copier les éléments.</dd>
 <dt><code>fin {{optional_inline}}</code></dt>
 <dd>Paramètre optionnel. La position jusqu'à laquelle prendre les éléments à copier.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le tableau typé, modifié par la fonction.</p>

<h2 id="Description">Description</h2>

<p>Voir la page {{jsxref("Array.prototype.copyWithin")}} pour plus d'informations.</p>

<p>Cette méthode remplace la méthode expérimentale {{jsxref("TypedArray.prototype.move()")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1,2,3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3,0,3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
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
   <td>{{SpecName('ES6', '#sec-%typedarray%.prototype.copywithin', 'TypedArray.prototype.copyWithin')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.copywithin', 'TypedArray.prototype.copyWithin')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.copyWithin")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray")}}</li>
</ul>
