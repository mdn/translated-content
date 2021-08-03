---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
tags:
  - BigInt
  - Constructeur
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt64Array
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt64Array
---
<div>{{JSRef}}</div>

<p>Le tableau typé <strong><code>BigInt64Array</code></strong> permet de représenter un tableau d'entiers signés représentés sur 64 bits, où l'ordre des octets correspond à celui de la plateforme utilisée. Si on souhaite contrôler l'ordre des octets utilisé (le « boutisme »), on utilisera un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à <code>0n</code>. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new BigInt64Array();
new BigInt64Array(longueur);
new BigInt64Array(tableauTypé);
new BigInt64Array(objet);
new BigInt64Array(tampon [, décalage [, longueur]]);</pre>

<p>Pour plus d'informations sur la syntaxe du constructeur et le rôle des différents paramètres, voir la page <em><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe">TypedArray</a></em>.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}</dt>
 <dd>Cette propriété renvoie un nombre correspondant à la quantité d'octets pour un élément du tableau. Dans le cas d'<code>BigInt64Array</code>, ce sera <code>8</code>.</dd>
 <dt><code>BigInt64Array.length</code></dt>
 <dd>La propriété de longueur statique qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}}.</dd>
 <dt>{{jsxref("TypedArray.name", "BigInt64Array.name")}}</dt>
 <dd>Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour <code>BigInt64Array</code> ce sera : "BigInt64Array".</dd>
 <dt>{{jsxref("TypedArray.prototype", "BigInt64Array.prototype")}}</dt>
 <dd>Le prototype des objets <em>TypedArray</em>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("TypedArray.from", "BigInt64Array.from()")}}</dt>
 <dd>Cette méthode permet de créer un nouveau tableau typé <code>BigInt64Array</code> à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of", "BigInt64Array.of()")}}</dt>
 <dd>Cette méthode permet de créer un nouvel objet <code>BigInt64Array</code> à partir d'un nombre d'arguments variables. Voir aussi {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Prototype_BigInt64Array">Prototype <code>BigInt64Array</code></h2>

<p>Tous les objets <code>BigInt64Array</code> héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<dl>
 <dt><code>BigInt64Array.prototype.constructor</code></dt>
 <dd>Cette propriété renvoie la fonction qui a créé l'instance du prototype. Par défaut, ce sera le constructeur <code>BigInt64Array</code>.</dd>
 <dt>{{jsxref("TypedArray.prototype.buffer", "BigInt64Array.prototype.buffer")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie l'objet {{jsxref("ArrayBuffer")}} référencé par l'objet <code>BigInt64Array</code> Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteLength", "BigInt64Array.prototype.byteLength")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie la longueur, exprimée en octets, de l'objet <code>BigInt64Array</code> à partir du début de l'objet {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteOffset", "BigInt64Array.prototype.byteOffset")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie le nombre d'éléments contenus dans le tableau <code>BigInt64Array</code>. Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
</dl>

<h3 id="Méthodes_2">Méthodes</h3>

<dl>
 <dt>{{jsxref("TypedArray.copyWithin", "BigInt64Array.prototype.copyWithin()")}}</dt>
 <dd>Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.entries", "BigInt64Array.prototype.entries()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.</dd>
 <dt>{{jsxref("TypedArray.every", "BigInt64Array.prototype.every()")}}</dt>
 <dd>Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.</dd>
 <dt>{{jsxref("TypedArray.fill", "BigInt64Array.prototype.fill()")}}</dt>
 <dd>Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.</dd>
 <dt>{{jsxref("TypedArray.filter", "BigInt64Array.prototype.filter()")}}</dt>
 <dd>Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.</dd>
 <dt>{{jsxref("TypedArray.find", "BigInt64Array.prototype.find()")}}</dt>
 <dd>Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément <code>undefined</code> sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.</dd>
 <dt>{{jsxref("TypedArray.findIndex", "BigInt64Array.prototype.findIndex()")}}</dt>
 <dd>Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.</dd>
 <dt>{{jsxref("TypedArray.forEach", "BigInt64Array.prototype.forEach()")}}</dt>
 <dd>Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.</dd>
 <dt>{{jsxref("TypedArray.includes", "BigInt64Array.prototype.includes()")}}</dt>
 <dd>Détermine si le tableau typé contient un élément donné. Cette méthode renvoie <code>true</code> ou <code>false</code> selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.</dd>
 <dt>{{jsxref("TypedArray.indexOf", "BigInt64Array.prototype.indexOf()")}}</dt>
 <dd>Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.join", "BigInt64Array.prototype.join()")}}</dt>
 <dd>Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.</dd>
 <dt>{{jsxref("TypedArray.keys", "BigInt64Array.prototype.keys()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.</dd>
 <dt>{{jsxref("TypedArray.lastIndexOf", "BigInt64Array.prototype.lastIndexOf()")}}</dt>
 <dd>Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.map", "BigInt64Array.prototype.map()")}}</dt>
 <dd>Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduce", "BigInt64Array.prototype.reduce()")}}</dt>
 <dd>Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduceRight", "BigInt64Array.prototype.reduceRight()")}}</dt>
 <dd>Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.</dd>
 <dt>{{jsxref("TypedArray.reverse", "BigInt64Array.prototype.reverse()")}}</dt>
 <dd>Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.</dd>
 <dt>{{jsxref("TypedArray.set", "BigInt64Array.prototype.set()")}}</dt>
 <dd>Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.</dd>
 <dt>{{jsxref("TypedArray.slice", "BigInt64Array.prototype.slice()")}}</dt>
 <dd>Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.</dd>
 <dt>{{jsxref("TypedArray.some", "BigInt64Array.prototype.some()")}}</dt>
 <dd>Renvoie <code>true</code> si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.</dd>
 <dt>{{jsxref("TypedArray.sort", "BigInt64Array.prototype.sort()")}}</dt>
 <dd>Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.</dd>
 <dt>{{jsxref("TypedArray.subarray", "BigInt64Array.prototype.subarray()")}}</dt>
 <dd>Renvoie un nouvel objet <code>BigInt64Array</code> qui est le fragment du tableau courant, entre les indices de début et de fin donnés.</dd>
 <dt>{{jsxref("TypedArray.values", "BigInt64Array.prototype.values()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.</dd>
 <dt>{{jsxref("TypedArray.toLocaleString", "BigInt64Array.prototype.toLocaleString()")}}</dt>
 <dd>Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.</dd>
 <dt>{{jsxref("TypedArray.toString", "BigInt64Array.prototype.toString()")}}</dt>
 <dd>Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.</dd>
 <dt>{{jsxref("TypedArray.@@iterator", "BigInt64Array.prototype[@@iterator]()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les valeurs correspondantes à chaque indice du tableau.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Différentes façons de créer un objet <code>BigInt64Array</code> :</p>

<pre class="brush: js">// Construction à partir d'une longueur
var bigInt64 = new BigInt64Array(2);
bigInt64[0] = 42n;
console.log(bigInt64[0]); // 42n
console.log(bigInt64.length); // 2
console.log(bigInt64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
var arr = new BigInt64Array([21n,31n]);
console.log(arr[1]); // 31n

// Construction à partir d'un tableau typé
var x = new BigInt64Array([21n, 31n]);
var y = new BigInt64Array(x);
console.log(y[0]); // 21n

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigInt64Array(buffer, 0, 4);

// Construction à partir d'un itérable
var iterable = function*(){ yield* [1n, 2n, 3n]; }();
var BigInt64 = new BigInt64Array(iterable);
// BigInt64Array[1n, 2n, 3n]
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
   <td><a href="https://tc39.github.io/proposal-bigint/#sec-typedarrays-and-dataview">Proposition pour <code>BigInt</code></a></td>
   <td>Proposition de niveau 3</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.BigInt64Array")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li>{{jsxref("BigUint64Array")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
