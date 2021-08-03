---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/filter
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>filter()</strong></code> crée un nouveau tableau qui contient l'ensemble des éléments qui remplissent une condition fournie par la fonction de test passée en argument. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.filter()")}}<em>.</em> <em>TypedArray</em> est utilisé ici de façon générique pour représenter <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray">l'un des types de tableaux typés possibles</a>.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-filter.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>typedarray</var>.filter(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>Une fonction qui est utilisée pour tester chacun des éléments du tableau typé. Cette fonction est appelée avec trois arguments <code>(élément, index, tableautypé)</code>. La fonction renvoie <code>true</code> si on souhaite conserver l'élément, <code>false</code> sinon.</dd>
 <dt><code>thisArg {{optional_inline}}</code></dt>
 <dd>La valeur à utiliser pour <code>this</code> lors de l'appel à <code>callback</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouveau tableau typé contenant les éléments qui remplissent la condition donnée par la fonction de rappel.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>filter()</code> appelle une fonction <code>callback</code> appelée une fois pour chaque élément du tableau typé. Elle construit un nouveau tableau typé constitué des valeurs du tableau original pour lesquelles <code>callback</code> a renvoyé <code>true</code>. <code>callback</code> est appelée uniquement pour les éléments du tableau auxquels on a affecté une valeur, elle n'est pas appelé pour les éléments supprimés ou ceux qui n'ont jamais reçu de valeurs. Les éléments du tableau typé qui ne passent pas le test de la fonction ne sont pas inclus dans le nouveau tableau typé.</p>

<p><code>callback</code> est appelée avec trois arguments :</p>

<ol>
 <li>la valeur de l'élément</li>
 <li>l'indice de l'élément</li>
 <li>le tableau typé courant</li>
</ol>

<p>Si le paramètre <code>thisArg</code> est fourni, il sera utilisé comme objet <code>this</code> lors de l'appel de la fonction <code>callback</code>. Sinon, la valeur <code>undefined</code> sera utilisée à la place. Par ailleurs, la valeur de <code>this</code> accessible depuis la fonction <code>callback</code> est déterminée selon <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this">les règles usuelles déterminant la valeur this au sein d'une fonction</a>.</p>

<p><code>filter()</code> ne modifie pas le tableau typé sur lequel elle a été appelée.</p>

<p>La liste des éléments parcourus par <code>filter()</code> est définie avant la première invocation de la fonction <code>callback</code>. Les éléments qui sont ajoutés au tableau typé après le début de l'appel de <code>filter()</code> (grâce à la fonction <code>callback</code> par exemple) ne seront pas visités. Si des éléments existants du tableau typé ont modifiés ou supprimés, la valeur fournie à la fonction <code>callback</code> sera leur valeur au moment où <code>filter()</code> les visite - les éléments supprimés ne seront pas traités par la fonction.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Filtrer_les_valeurs_inférieures_à_un_seuil">Filtrer les valeurs inférieures à un seuil</h3>

<p>Dans l'exemple qui suit, on utilise <code>filter()</code> pour créer un nouveau tableau typé qui contient uniquement les éléments supérieurs à 10.</p>

<pre class="brush: js">function supSeuil(élément, indice, tableauTypé) {
  return élément &gt;= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(supSeuil);
// Uint8Array [ 12, 130, 44 ]
</pre>

<h3 id="Filtrer_les_éléments_d'un_tableau_typé_avec_les_fonctions_fléchées">Filtrer les éléments d'un tableau typé avec les fonctions fléchées</h3>

<p><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">Les fonctions fléchées</a> permettent d'utiliser une syntaxe plus concise pour réaliser le même test que montré précédemment :</p>

<pre class="brush: js">new Uint8Array([12, 5, 8, 130, 44]).filter(élém =&gt; élém &gt;= 10);
// Uint8Array [ 12, 130, 44 ]</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-%typedarray%.prototype.filter', 'TypedArray.prototype.filter')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.filter', 'TypedArray.prototype.filter')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.filter")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.filter()")}}</li>
</ul>
