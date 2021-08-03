---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - TypedArray
  - TypedArrays
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/from
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/from
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>TypedArray.from()</strong></code> crée un nouvel objet {{jsxref("TypedArray", "TypedArray", "#Les_objets_TypedArray")}} à partir d'un objet itérable ou d'un objet semblable à un tableau. Cette méthode est similaire à {{jsxref("Array.from()")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>TypedArray</var>.from(<var>source</var>[, <var>mapFn</var>[,<var> thisArg</var>]])

où <var>TypedArray</var> est l'un de :

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>source</code></dt>
 <dd>Un objet semblable à un tableau ou un objet itérable, et à partir duquel on souhaite créer un tableau typé.</dd>
 <dt><code>fonctionMap</code></dt>
 <dd>Argument optionnel, une fonction à appliquer à chacun des éléments du tableau.</dd>
 <dt><code>thisArg</code></dt>
 <dd>Argument optionnel. La valeur à utiliser pour <code>this</code> lors de l'exécution de la fonction <code>fonctionMap</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle instance de {{jsxref("TypedArray")}}.</p>

<h2 id="Description">Description</h2>

<p><code><var>TypedArray</var>.from()</code> permet de créer des tableaux typés à partir :</p>

<ul>
 <li>d'<a href="/fr/docs/Web/JavaScript/Guide/Objets_élémentaires_JavaScript#Manipuler_des_objets_semblables_aux_tableaux">objets semblables à des tableaux</a> (qui disposent d'une propriété <code>length</code> et d'éléments indexés) ou</li>
 <li>d'<a href="/fr/docs/Web/JavaScript/Guide/iterable">objets itérables</a> (par exemple des objets {{jsxref("Map")}} ou {{jsxref("Set")}}).</li>
</ul>

<p><code>Array.from</code> possède un paramètre optionnel <code>fonctionMap</code>, qui permet d'exécuter une fonction {{jsxref("Array.prototype.map", "map")}} sur chacun des éléments du tableau typé (ou de l'instance de la classe fille) qui est créé. Autrement dit <code><var>TypedArray</var>.from(obj, fonctionMap, thisArg)</code> correspond exactement à <code><var>TypedArray</var>.from(obj).map(fonctionMap, thisArg)</code>.</p>

<p>Il existe de légères différences entre {{jsxref("Array.from()")}} et <code><var>TypedArray</var>.from()</code> :</p>

<ul>
 <li>Si la valeur de <code>this</code> passée à <code><var>TypedArray</var>.from</code> n'est pas un constructeur, <code><var>TypedArray</var>.from</code> lèvera une exception {{jsxref("TypeError")}}, tandis que <code>Array.from</code> créera un nouvel objet {{jsxref("Array")}}.</li>
 <li><code><var>TypedArray</var>.from</code> utilise <code>[[Set]]</code> tandis que <code>Array.from</code> utilise <code>[[DefineProperty]]</code>. Ainsi par exemple lorsque des objets {{jsxref("Proxy")}} sont manipulés la première méthode appellera {{jsxref("Objets_globaux/Proxy/handler/set", "handler.set")}} pour créer les nouveaux éléments et la seconde appellera {{jsxref("Objets_globaux/Proxy/handler/defineProperty", "handler.defineProperty")}}.</li>
 <li>Lorsque <code>source</code> est un itérable, <code><var>TypedArray</var>.from</code> va dans un premier temps récupérer toutes ses valeurs, puis initialiser une instance de <code>this</code> à l'aide de leur nombre, et enfin ajouter ces valeurs à l'instance. <code>Array.from</code> ajoute les valeurs au nouvel objet lors du parcours de l'itérateur et ne définit la taille de l'objet qu'en dernière étape.</li>
 <li>Si <code>Array.from</code> reçoit un objet semblable à un tableau qui n'est pas un itérable, les valeurs non définies sont conservées. <code><var>TypedArray</var>.from</code> construit un objet dense en éliminant ces valeurs.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Set (objet itérable)
var s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]


// String
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]


// En utilisant un fonction fléchée en tant que
// fonctionMap pour manipuler les éléments
Float32Array.from([1, 2, 3], x =&gt; x + x);
// Float32Array [ 2, 4, 6 ]


// Pour construire une séquence de nombres
Uint8Array.from({length: 5}, (v, k) =&gt; k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
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
   <td>{{SpecName('ES2015', '#sec-%typedarray%.from', '%TypedArray%.from')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.from', '%TypedArray%.from')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray.from")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("TypedArray.of()")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
</ul>
