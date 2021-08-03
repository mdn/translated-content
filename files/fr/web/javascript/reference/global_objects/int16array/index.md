---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/Int16Array
original_slug: Web/JavaScript/Reference/Objets_globaux/Int16Array
---
<div>{{JSRef}}</div>

<p>Le tableau typé <strong><code>Int16Array</code></strong> permet de représenter un tableau d'entiers signés (en complément à deux) représentés sur 16 bits et dans l'ordre des octets de la plate-forme. Pour avoir un contrôle sur le boutisme utilisé, il faudra utiliser un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à 0. Une fois le tableau construit, il est possible de faire référence aux éléments en utilisant les méthodes de l'objet ou en utilisant la notation usuelle de parcours d'un tableau (la syntaxe utilisant les crochets).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Int16Array(); // apparu avec ES2017
new Int16Array(longueur);
new Int16Array(tableauTypé);
new Int16Array(objet);
new Int16Array(buffer [, positionOctet [, longueur]]);</pre>

<p>Pour plus d'informations sur la syntaxe du constructeur, voir la page sur les <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe">tableaux typés</a><em> (TypedArray)</em>.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}</dt>
 <dd>Renvoie un nombre représentant la taille d'un élément du tableau en termes d'octets. Dans le cas de <code>Int16Array</code>, la propriété vaudra 2.</dd>
 <dt><code>Int16Array.length</code></dt>
 <dd>Une propriété de longueur qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}.</dd>
 <dt>{{jsxref("TypedArray.name", "Int16Array.name")}}</dt>
 <dd>Renvoie la chaîne de caractère représentant le nom du constructeur. Dans le cas de <code>Int16Array</code>, la propriété vaudra "Int16Array".</dd>
 <dt>{{jsxref("TypedArray.prototype", "Int16Array.prototype")}}</dt>
 <dd>Prototype pour les objets <em>TypedArray</em>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("TypedArray.from", "Int16Array.from()")}}</dt>
 <dd>Crée un nouvel objet <code>Int16Array</code> à partir d'un objet semblable à un tableau ou d'un objet itérable. Voir également la page {{jsxref("Array.from()")}}.</dd>
 <dt>{{jsxref("TypedArray.of", "Int16Array.of()")}}</dt>
 <dd>Crée un nouvel objet <code>Int16Array</code> à partir d'un nombre variable d'arguments. Voir également la page {{jsxref("Array.of()")}}.</dd>
</dl>

<h2 id="Prototype_de_Int16Array">Prototype de <code>Int16Array</code></h2>

<p>Tous les objets <code>Int16Array</code> héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<dl>
 <dt><code>Int16Array.prototype.constructor</code></dt>
 <dd>Renvoie la fonction qui a créé le prototype de l'instance. Par défaut, ce sera le constructeur natif<code> Int16Array</code>.</dd>
 <dt>{{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}} {{readonlyInline}}</dt>
 <dd>Renvoie l'{{jsxref("ArrayBuffer")}} référencée par l'objet <code>Int16Array</code>. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}} {{readonlyInline}}</dt>
 <dd>Renvoie la longueur, exprimée en octets, de l'objet <code>Int16Array</code> depuis le début de l'{{jsxref("ArrayBuffer")}} correspondant. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}} {{readonlyInline}}</dt>
 <dd>Renvoie le décalage, exprimé en octets, entre l'objet <code>Int16Array</code> et le début de l'{{jsxref("ArrayBuffer")}} correspondant. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en <strong>lecture seule</strong>.</dd>
 <dt>{{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}} {{readonlyInline}}</dt>
 <dd>Renvoie le nombre d'éléments contenus dans l'objet <code>Int16Array</code>. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en <strong>lecture seule</strong>.</dd>
</dl>

<h3 id="Méthodes_2">Méthodes</h3>

<dl>
 <dt>{{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}</dt>
 <dd>Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.</dd>
 <dt>{{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}</dt>
 <dd>Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.</dd>
 <dt>{{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}</dt>
 <dd>Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.</dd>
 <dt>{{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}</dt>
 <dd>Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.</dd>
 <dt>{{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}</dt>
 <dd>Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément <code>undefined</code> sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.</dd>
 <dt>{{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}</dt>
 <dd>Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.</dd>
 <dt>{{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}</dt>
 <dd>Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.</dd>
 <dt>{{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}}</dt>
 <dd>Détermine si le tableau typé contient un élément donné. Cette méthode renvoie <code>true</code> ou <code>false</code> selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.</dd>
 <dt>{{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}</dt>
 <dd>Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}</dt>
 <dd>Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.</dd>
 <dt>{{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.</dd>
 <dt>{{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}</dt>
 <dd>Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.</dd>
 <dt>{{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}</dt>
 <dd>Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.</dd>
 <dt>{{jsxref("TypedArray.move", "Int16Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}</dt>
 <dd>Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}</dt>
 <dd>Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.</dd>
 <dt>{{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}</dt>
 <dd>Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.</dd>
 <dt>{{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}</dt>
 <dd>Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.</dd>
 <dt>{{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}</dt>
 <dd>Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.</dd>
 <dt>{{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}</dt>
 <dd>Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.</dd>
 <dt>{{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}</dt>
 <dd>Renvoie <code>true</code> si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.</dd>
 <dt>{{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}</dt>
 <dd>Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.</dd>
 <dt>{{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Int16Array</code> qui est le fragment du tableau courant, entre les indices de début et de fin donnés.</dd>
 <dt>{{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.</dd>
 <dt>{{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}</dt>
 <dd>Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.</dd>
 <dt>{{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}</dt>
 <dd>Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.</dd>
 <dt>{{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}</dt>
 <dd>Renvoie un nouvel objet <code>Array Iterator</code> qui contient les valeurs correspondantes à chaque indice du tableau.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Différentes façons de créer un <code>Int16Array</code> :</p>

<pre class="brush: js">// Construction à partir d'une longueur
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// Construction à partir d'un tableau
var arr = new Int16Array([21,31]);
console.log(arr[1]); // 31

// Construction à partir d'un autre TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);

// Construction à partir d'un itérable
var iterable = function*(){ yield* [1,2,3]; }();
var int16 = new Int16Array(iterable);
// Int16Array[1, 2, 3]
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
   <td>Remplacée dans ECMAScript 2015.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#table-49', 'TypedArray constructors')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA. <code>new</code> est obligatoire.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>ECMAScript 2017 a modifié le constructeur <code>Int16Array</code> afin d'utiliser l'opération interne <code>ToIndex</code> pour permettre de l'utiliser sans argument.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Int16Array")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<p>À partir d'ECMAScript 2015 (ES6), <code>Int16Array</code> doit être utilisé avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur <code>Int16Array</code> comme une fonction, sans <code>new</code>, provoquera une exception {{jsxref("TypeError")}}.</p>

<pre class="brush: js example-bad">var dv = Int16Array([1, 2, 3]);
// TypeError: calling a builtin Int16Array constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Int16Array([1, 2, 3]);</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés" title="en/JavaScript typed arrays">Les tableaux typés (<em>typed arrays</em>) en JavaScript</a></li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
