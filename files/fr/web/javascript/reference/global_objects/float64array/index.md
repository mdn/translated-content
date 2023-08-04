---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
---

{{JSRef}}

Le constructeur **`Floa64Array`** permet de représenter un tableau typé dont les éléments sont des nombres flottants représentés sur 64 bits (ce qui correspond à la représentation du type `double` en C) dans l'ordre des octets utilisé par la plate-forme. Si on souhaite maîtriser le boutisme (_endianness_), on pourra utiliser un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à `0`. Une fois construit, il est possible de faire référence aux éléments du tableau en utilisant les méthodes de l'objet ou la syntaxe usuelle pour l'accès aux éléments du tableau (les crochets).

## Syntaxe

```js
new Float64Array(); // apparu avec ES2017
new Float64Array(longueur);
new Float64Array(tableauTypé);
new Float64Array(objet);
new Float64Array(buffer [, positionOctet [, longueur]]);
```

Pour plus d'informations sur la syntaxe du constructeur et ses paramètres, voir _[TypedArray](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntaxe)_.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : Renvoie un nombre traduisant la taille de l'élément en octets, `8` dans le cas d'un `Float64Array`.
- Float64Array.length
  - : Une propriété de longueur statique qui vaut 3. Pour connaître le nombre d'éléments, voir {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float64Array.name")}}
  - : Renvoie la chaîne de caractère correspondant au nom du constructeur, dans le cas de `Float64Array`, ce sera : "Float64Array".
- {{jsxref("TypedArray.prototype", "Float64Array.prototype")}}
  - : Prototype pour les objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from", "Float64Array.from()")}}
  - : Crée un nouvel objet `Float64Array` à partir d'un objet semblable à un tableau ou d'un objet itérable. Voir aussi {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float64Array.of()")}}
  - : Crée un nouvel objet `Float64Array` à partir d'un nombre variable d'arguments. Voir aussi {{jsxref("Array.of()")}}.

## Prototype de `Float64Array`

Tous les objets `Float64Array` héritent de {{jsxref("TypedArray.prototype", "Float64Array.prototype")}}.

### Propriétés

- `Float64Array.prototype.constructor`
  - : Renvoie la fonction qui a créé le prototype de l'instance. Par défaut, ce sera le constructeur natif `Float64Array`.
- {{jsxref("TypedArray.prototype.buffer", "Float64Array.prototype.buffer")}} {{readonlyInline}}
  - : Renvoie l'{{jsxref("ArrayBuffer")}} référencé par l'objet `Float64Array`. Cette valeur est fixée lors de la construction de l'objet et n'est accessible qu'**en lecture seule**.
- {{jsxref("TypedArray.prototype.byteLength", "Float64Array.prototype.byteLength")}} {{readonlyInline}}
  - : Renvoie la longueur, exprimée en octets, de l'objet `Float64Array` depuis le début de son {{jsxref("ArrayBuffer")}}. Cette valeur est fixée lors de la construction de l'objet et n'est accessible qu'**en lecture seule**.
- {{jsxref("TypedArray.prototype.byteOffset", "Float64Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Renvoie le décalage, exprimé en octets, entre l'objet `Float64Array` et le début de son {{jsxref("ArrayBuffer")}}. Cette valeur est fixée lors de la construction de l'objet et n'est accessible qu'**en lecture seule**.
- {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}} {{readonlyInline}}
  - : Renvoie le nombre d'éléments contenus dans l'objet `Float64Array`. Cette valeur est fixée lors de la construction de l'objet et n'est accessible qu'**en lecture seule**.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float64Array.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float64Array.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float64Array.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float64Array.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float64Array.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float64Array.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float64Array.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float64Array.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float64Array.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float64Array.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float64Array.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float64Array.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float64Array.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float64Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float64Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float64Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Float64Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float64Array.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "Float64Array.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float64Array.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Float64Array.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float64Array.prototype.subarray()")}}
  - : Renvoie un nouvel objet `Float64Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "Float64Array.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float64Array.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float64Array.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float64Array.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façons de créer un objet `Float64Array` :

```js
// Construction avec une longueur de tableau
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
var arr = new Float64Array([21, 31]);
console.log(arr[1]); // 31

// Construction à partir d'un autre tableau typé
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// Construction à partir d'un itérable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), les constructeurs `TypedArray` doivent être utilisés avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur `TypedArray` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor without new is forbidden
```

```js example-good
var dv = new Float64Array([1, 2, 3]);
```

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
