---
title: Uint16Array
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
  - Uint16Array
translation_of: Web/JavaScript/Reference/Global_Objects/Uint16Array
original_slug: Web/JavaScript/Reference/Objets_globaux/Uint16Array
---
<div>{{JSRef}}</div>

<p>Le tableau typé <strong><code>Uint16Array</code></strong> permet de représenter un tableau d'entiers non signés représentés sur 16 bits, où l'ordre des octets correspond à celui de la plateforme utilisée. Si on souhaite contrôler l'ordre des octets utilisé (le « boutisme »), on utilisera un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à <code>0</code>. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Uint16Array(); // apparu avec ES2017
new Uint16Array(<var>longueur</var>);
new Uint16Array(<var>tableauTypé</var>);
new Uint16Array(<var>objet</var>);
new Uint16Array(<var>tampon</var> [, <var>décalage</var> [, <var>longueur</var>]]);</pre>

<p>Pour plus d'informations sur la syntaxe du constructeur et le rôle des différents paramètres, voir la page <em><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe">TypedArray</a></em>.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint16Array.BYTES_PER_ELEMENT")}}</dt>
 <dd>Cette propriété renvoie un nombre correspondant à la quantité d'octets pour un élément du tableau. Dans le cas d'<code>Uint16Array</code>, ce sera <code>2</code>.</dd>
 <dt><code>Uint16Array.length</code></dt>
 <dd>La propriété de longueur statique qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "Uint16Array.prototype.length")}}.</dd>
 <dt>{{jsxref("TypedArray.name", "Uint16Array.name")}}</dt>
 <dd>Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour <code>Uint16Array</code> ce sera : "Uint16Array".</dd>
 <dt>{{jsxref("TypedArray.prototype", "Uint16Array.prototype")}}</dt>
 <dd>Le prototype des objets <em>TypedArray</em>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("TypedArray.from","Uint16Array.from()")}}</dt>
 <dd>Cette méthode permet de créer un <code>Uint16Array</code> à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of","Uint16Array.of()")}}</dt>
 <dd>Cette méthode permet de créer un Uint16Array à partir d'un nombre variable d'arguments. Voir aussi {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Prototype_Uint16Array">Prototype <code>Uint16Array</code></h2>

<p>Tous les objets <code>Uint16Array</code> héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<dl>
 <dt><code>Uint16Array.prototype.constructor</code></dt>
 <dd>Cette propriété renvoie la fonction qui a créé l'instance du prototype. Par défaut, ce sera le constructeur <code>Uint16Array</code>.</dd>
 <dt>{{jsxref("TypedArray.prototype.buffer", "Uint16Array.prototype.buffer")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie l'objet {{jsxref("ArrayBuffer")}} référencé par l'objet <code>Uint16Array</code> Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteLength", "Uint16Array.prototype.byteLength")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie la longueur, exprimée en octets, de l'objet <code>Uint16Array</code> à partir du début de l'objet {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteOffset", "Uint16Array.prototype.byteOffset")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.length", "Uint16Array.prototype.length")}} {{readonlyInline}}</dt>
 <dd>Cette propriété renvoie le nombre d'éléments contenus dans le tableau <code>Uint16Array</code>. Elle est déterminée lors de la construction et est accessible uniquement en <strong>lecture seule</strong>.</dd>
</dl>

<h3 id="Méthodes_2">Méthodes</h3>

<dl>
 <dt>{{jsxref("TypedArray.copyWithin", "Uint16Array.prototype.copyWithin()")}}</dt>
 <dd>Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.entries", "Uint16Array.prototype.entries()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.</dd>
 <dt>{{jsxref("TypedArray.every", "Uint16Array.prototype.every()")}}</dt>
 <dd>Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.</dd>
 <dt>{{jsxref("TypedArray.fill", "Uint16Array.prototype.fill()")}}</dt>
 <dd>Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.</dd>
 <dt>{{jsxref("TypedArray.filter", "Uint16Array.prototype.filter()")}}</dt>
 <dd>Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.</dd>
 <dt>{{jsxref("TypedArray.find", "Uint16Array.prototype.find()")}}</dt>
 <dd>Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément <code>undefined</code> sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.</dd>
 <dt>{{jsxref("TypedArray.findIndex", "Uint16Array.prototype.findIndex()")}}</dt>
 <dd>Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.</dd>
 <dt>{{jsxref("TypedArray.forEach", "Uint16Array.prototype.forEach()")}}</dt>
 <dd>Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.</dd>
 <dt>{{jsxref("TypedArray.includes", "Uint16Array.prototype.includes()")}}</dt>
 <dd>Détermine si le tableau typé contient un élément donné. Cette méthode renvoie <code>true</code> ou <code>false</code> selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.</dd>
 <dt>{{jsxref("TypedArray.indexOf", "Uint16Array.prototype.indexOf()")}}</dt>
 <dd>Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.join", "Uint16Array.prototype.join()")}}</dt>
 <dd>Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.</dd>
 <dt>{{jsxref("TypedArray.keys", "Uint16Array.prototype.keys()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.</dd>
 <dt>{{jsxref("TypedArray.lastIndexOf", "Uint16Array.prototype.lastIndexOf()")}}</dt>
 <dd>Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.map", "Uint16Array.prototype.map()")}}</dt>
 <dd>Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.</dd>
 <dt>{{jsxref("TypedArray.move", "Uint16Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}</dt>
 <dd>Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Uint16Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduce", "Uint16Array.prototype.reduce()")}}</dt>
 <dd>Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduceRight", "Uint16Array.prototype.reduceRight()")}}</dt>
 <dd>Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.</dd>
 <dt>{{jsxref("TypedArray.reverse", "Uint16Array.prototype.reverse()")}}</dt>
 <dd>Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.</dd>
 <dt>{{jsxref("TypedArray.set", "Uint16Array.prototype.set()")}}</dt>
 <dd>Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.</dd>
 <dt>{{jsxref("TypedArray.slice", "Uint16Array.prototype.slice()")}}</dt>
 <dd>Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.</dd>
 <dt>{{jsxref("TypedArray.some", "Uint16Array.prototype.some()")}}</dt>
 <dd>Renvoie <code>true</code> si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.</dd>
 <dt>{{jsxref("TypedArray.sort", "Uint16Array.prototype.sort()")}}</dt>
 <dd>Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.</dd>
 <dt>{{jsxref("TypedArray.subarray", "Uint16Array.prototype.subarray()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Uint16Array</code> qui est le fragment du tableau courant, entre les indices de début et de fin donnés.</dd>
 <dt>{{jsxref("TypedArray.values", "Uint16Array.prototype.values()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.</dd>
 <dt>{{jsxref("TypedArray.toLocaleString", "Uint16Array.prototype.toLocaleString()")}}</dt>
 <dd>Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.</dd>
 <dt>{{jsxref("TypedArray.toString", "Uint16Array.prototype.toString()")}}</dt>
 <dd>Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.</dd>
 <dt>{{jsxref("TypedArray.@@iterator", "Uint16Array.prototype[@@iterator]()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les valeurs correspondantes à chaque indice du tableau.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Différentes façons de créer un objet <code>Uint16Array</code> :</p>

<pre class="brush: js">// Construction à partir d'une longueur
var uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// Construction à partir d'un tableau
var arr = new Uint16Array([21,31]);
console.log(arr[1]); // 31

// Construction à partir d'un tableau typé
var x = new Uint16Array([21, 31]);
var y = new Uint16Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint16Array(buffer, 0, 4);

// Construction à partir d'un itérable
var iterable = function*(){ yield* [1,2,3]; }();
var uint16 = new Uint16Array(iterable);
// Uint16Array[1, 2, 3]
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
   <td>{{SpecName('Typed Array')}}</td>
   <td>{{Spec2('Typed Array')}}</td>
   <td>Englobée par ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#table-49', 'TypedArray constructors')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA. <code>new</code> est obligatoire.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>ECMAScript 2017 a modifié le constructeur <code>Uint16Array</code> afin qu'il utilise l'opération <code>ToIndex</code> et qu'il puisse être utilisé sans argument.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Uint16Array")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<p>À partir d'ECMAScript 2015 (ES6), <code>Uint16Array</code> doit être utilisé avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur <code>Uint16Array</code> comme une fonction, sans <code>new</code>, provoquera une exception {{jsxref("TypeError")}}.</p>

<pre class="brush: js example-bad">var dv = Uint16Array([1, 2, 3]);
// TypeError: calling a builtin Uint16Array constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Uint16Array([1, 2, 3]);</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Les tableaux typés en JavaScript</a></li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
