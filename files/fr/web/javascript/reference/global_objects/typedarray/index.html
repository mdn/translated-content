---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
tags:
  - JavaScript
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray
---
<div>{{JSRef}}</div>

<p>Un objet <strong><em>TypedArray</em></strong> décrit une vue organisée à la façon d'un tableau pour manipuler <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/ArrayBuffer">un tampon (<em>buffer</em>) de données binaires</a>. <code>TypedArray</code> n'est pas une propriété globale, il n'existe pas non plus de constructeur <code>TypedArray</code>.  En revanche, plusieurs propriétés globales existent et leurs valeurs permettent de construire des tableaux typés (<em>typed arrays</em>) avec différents types de données. Ceux-ci sont listés ci-après. Les pages suivantes permettent de décrire les propriétés et méthodes qui peuvent être utilisées sur les différents tableaux typés.</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new<em> TypedArray</em>(<var>longueur</var>);
new <em>TypedArray</em>(<var>tableauTypé</var>);
new <em>TypedArray</em>(<var>objet</var>);
new <em>TypedArray</em>(<var>tampon</var> [, <var>décalageEnOctet</var> [, <var>longueur</var>]]);

// où <em>TypedArray()</em> est l'un de :

Int8Array();
Uint8Array();
Uint8ClampedArray();
Int16Array();
Uint16Array();
Int32Array();
Uint32Array();
Float32Array();
Float64Array();
BigInt64Array();
BigUint64Array();
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>longueur</code></dt>
 <dd>Lorsque le constructeur est appelé avec un argument <code>longueur</code>, un tableau typé sera créé, contenant autant de zéros que <code>longueur</code> (par exemple avec une longueur de 3, on aura un tableau dont les trois éléments seront des zéros).</dd>
 <dt><code>tableauTypé</code></dt>
 <dd>Lorsque le constructeur est appelé avec un argument <code>tableauTypé</code>, qui peut être un tableau typé de n'importe quel type (par exemple <code>Int32Array</code>), le <code>tableauTypé</code> est copié dans un nouveau tableau typé. Chaque valeur du <code>tableauTypé</code> est convertie dans le type correspondant du nouveau tableau. Enfin, la longueur du tableau typé est fixée avec la longueur de <code>tableauTypé</code>.</dd>
 <dt><code>objet</code></dt>
 <dd>Lorsque le constructeur est invoqué avec un argument <code>objet</code>, un nouveau tableau typé est créé avec la méthode <code><em>TypedArray</em>.from()</code>.</dd>
 <dt><code>tampon</code>,<code> décalageOctet</code>, <code> longueur</code></dt>
 <dd>Lorsque le constructeur est appelé avec un <code>tampon</code> (<em>buffer</em>) ainsi qu'avec les paramètres optionnels <code>décalageOctet</code> et <code>longueur</code>, un nouveau tableau typé est créé comme une vue pour l'objet {{jsxref("ArrayBuffer")}}. Les paramètres <code>décalageOctet</code> et <code>longueur</code> permettent de définir l'intervalle de mémoire du buffer qui est présenté dans la vue qu'est le tableau typé. Si les deux derniers paramètres sont absents, l'ensemble du <code>tampon</code> sera considéré. Si <code>longueur </code>est absent, on considèrera l'ensemble de <code>tampon</code> à partir de l'octet <em>décalageOctet</em>.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>ECMAScript 2015 (ES6) définit un constructeur <code>%TypedArray%</code> qui est un <code>[[Prototype]]</code> de tous les constructeurs <em>TypedArray</em>. Ce constructeur n'est pas accessible directement. Il n'existe pas de  <code>%TypedArray%</code> global ou de propriété <code>TypedArray</code>.  Il est uniquement accessible via <code>Object.getPrototypeOf(Int8Array.prototype)</code> ou avec les méthodes semblables. L'ensemble des différents constructeurs <em>TypedArray</em>s hérite de propriétés communes de la fonction <code>%TypedArray%</code>. De plus, tous les prototypes des tableaux typés (<em>TypedArray</em><code>.prototype</code>) ont <code>%TypedArray%.prototype</code> pour <code>[[Prototype]]</code>.</p>

<p>Le constructeur <code>%TypedArray%</code> en tant que tel n'est pas très utile. Toute tentative d'appel ou d'utilisation avec une expression <code>new</code> renverra <code>TypeError</code>, sauf quand il est utilisé par le moteur JavaScript lors de la création de l'objet quand le moteur supporte les sous-classes. À l'heure actuelle, il n'existe pas de tels moteurs, pour cette raison <code>%TypedArray%</code> est uniquement utile dans les fonctions d'émulation (<em>polyfill</em>) our pour les propriétés des différents constructeurs <em>TypedArray</em>.</p>

<p>Lorsqu'on crée une instance de <em>TypedArray</em> (ex. une instance de <code>Int8Array</code> ou autre), un tampon de mémoire tableau est créé en interne par le moteur (si un objet <code>ArrayBuffer</code> est passé en argument, c'est celui-ci qui est utilisé). C'est l'adresse de cette mémoire tampon qui est sauvegardée comme une propriété interne à l'objet. Toutes les méthodes de <code>%TypedArray%.prototype</code> utiliseront ensuite cet espace pour les opérations.</p>

<h3 id="Accès_aux_propriétés">Accès aux propriétés</h3>

<p>Il est possible d'accéder aux éléments du tableau en utilisant la notation usuelle avec les crochets. Cependant, définir ou accéder à des propriétés indexées ne se fera pas avec la chaîne de prototypes, même si l'indice utilisé est en dehors des limites du tableau. Les propriétés indexées seront uniquement basées sur le contenu du {{jsxref("ArrayBuffer")}} et ne consulteront pas les propriétés des objets. En revanche, il est toujours possible d'utiliser des propriétés nommées, comme avec les autres objets.</p>

<pre class="brush: js">// Définir et accéder du contenu avec la syntaxe usuelle
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Les propriétés indexées sur les prototypes ne sont pas consultées (Fx 25)
Int8Array.prototype[20] = "toto";
(new Int8Array(32))[20]; // 0
// y compris en dehors des limites
Int8Array.prototype[20] = "toto";
(new Int8Array(8))[20]; // undefined
// ou avec des index négatifs
Int8Array.prototype[-1] = "toto";
(new Int8Array(8))[-1]; // undefined

// Mais il est possible d'utiliser des propriétés nommées (Fx 30)
Int8Array.prototype.toto = "truc";
(new Int8Array(32)).toto; // "truc" </pre>

<h2 id="Les_objets_TypedArray">Les objets <code>TypedArray</code></h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">Type</td>
   <td class="header">Intervalle</td>
   <td class="header">Taille (exprimée en octets)</td>
   <td class="header">Description</td>
   <td class="header">Type Web IDL</td>
   <td class="header">Type équivalent en C</td>
  </tr>
  <tr>
   <td>{{jsxref("Int8Array")}}</td>
   <td>-128 à 127</td>
   <td>1</td>
   <td>Entier signé en complément à deux sur 8 bits.</td>
   <td><code>byte</code></td>
   <td><code>int8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8Array")}}</td>
   <td>0 à 255</td>
   <td>1</td>
   <td>Entier non signé sur 8 bits.</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8ClampedArray")}}</td>
   <td>0 à 255</td>
   <td>1</td>
   <td>Entier non signé sur 8 bits (compris entre 0 et 255).</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int16Array")}}</td>
   <td>-32768 à 32767</td>
   <td>2</td>
   <td>Entier signé en complément à deux sur 16 bits.</td>
   <td><code>short</code></td>
   <td><code>int16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint16Array")}}</td>
   <td>0 à 65535</td>
   <td>2</td>
   <td>Entier non signé sur 16 bits.</td>
   <td><code>unsigned short</code></td>
   <td><code>uint16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int32Array")}}</td>
   <td>-2147483648 à 2147483647</td>
   <td>4</td>
   <td>Entier signé en complément à deux sur 32 bits.</td>
   <td><code>long</code></td>
   <td><code>int32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint32Array")}}</td>
   <td>0 à 4294967295</td>
   <td>4</td>
   <td>Entier non signé sur 32 bits.</td>
   <td><code>unsigned long</code></td>
   <td><code>uint32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float32Array")}}</td>
   <td>1.2x10^-38 à 3.4x10^38</td>
   <td>4</td>
   <td>Nombre flottant sur 32 bits selon la représentation IEEE (7 chiffres significatifs).</td>
   <td><code>unrestricted float</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float64Array")}}</td>
   <td>5.0x10^-324 à 1.8x10^308</td>
   <td>8</td>
   <td>Nombre flottant sur 64 bits selon la représentation IEEE (16 chiffres significatifs).</td>
   <td><code>unrestricted double</code></td>
   <td><code>double</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigInt64Array")}}</td>
   <td>-2^63 à 2^63-1</td>
   <td>8</td>
   <td>Nombre entier signé sur 64 bits en complément à deux.</td>
   <td><code>bigint</code></td>
   <td><code>int64_t (signed long long)</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigUint64Array")}}</td>
   <td>0 à 2^64-1</td>
   <td>8</td>
   <td>Nombre entier non signé sur 64 bits.</td>
   <td><code>bigint</code></td>
   <td><code>uint64_t (unsigned long long)</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT")}}</dt>
 <dd>Cette propriété renvoie un nombre correspondant à la taille d'un élément du tableau selon le type de tableau utilisé.</dd>
 <dt><em>TypedArray</em>.length</dt>
 <dd>La propriété de longueur, elle vaut 3.</dd>
 <dt>{{jsxref("TypedArray.name")}}</dt>
 <dd>Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur (par exemple "Int8Array").</dd>
 <dt>{{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}</dt>
 <dd>La fonction de construction utilisée pour créer des objets dérivés.</dd>
 <dt>{{jsxref("TypedArray.prototype")}}</dt>
 <dd>Le prototype des objets <em>TypedArray</em>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("TypedArray.from()")}}</dt>
 <dd>Cette méthode permet de créer un nouveau tableau typé à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of()")}}</dt>
 <dd>Cette méthode permet de créer un nouveau tableau typé à partir d'un nombre variable d'arguments. Voir aussi {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Prototype_TypedArray">Prototype <code>TypedArray</code></h2>

<p>Toutes les instances de <em>TypedArray</em>s héritent de {{jsxref("TypedArray.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray/prototype','Propriétés')}}</p>

<h3 id="Méthodes_2">Méthodes</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray/prototype','Méthodes')}}</p>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>La plupart des méthodes des tableaux typés peuvent être en partie émulées grâce aux méthodes rattachées à {{jsxref("Array")}} :</p>

<pre class="brush: js">var typedArrayTypes = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, ​​​Int32Array, Uint32Array, ​​​Float32Array, Float64Array];
for (var k in typedArrayTypes){
  for (var v in Array.prototype){
    if (Array.prototype.hasOwnProperty(v) &amp;&amp;
  ​​​​​         !typedArrayTypes[k].prototype.hasOwnProperty(v)){
      typedArrayTypes[k].prototype[v] = Array.prototype[v];
    }
  }
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
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Défini comme <code>TypedArray</code> et interface <code>ArrayBufferView</code> avec les différents types de vues des tableaux typés. Cette spécification a été englobée dans ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-typedarray-objects', 'TypedArray Objects')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale au sein d'un standard ECMA. <code>new</code> est obligatoire.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>ECMAScript 2017 a modifié les constructeurs <code><em>TypedArray</em></code> afin qu'ils utilisent l'opération <code>ToIndex</code> et puissent être utilisés sans argument.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.TypedArray")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<p>À partir d'ECMAScript 2015 (ES6), les constructeurs <code>TypedArray</code> doivent être utilisés avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur <code>TypedArray</code> comme une fonction, sans <code>new</code>, provoquera une exception {{jsxref("TypeError")}}.</p>

<pre class="brush: js example-bad">var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Float64Array([1, 2, 3]);</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
