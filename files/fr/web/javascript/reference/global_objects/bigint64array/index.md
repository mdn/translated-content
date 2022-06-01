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
{{JSRef}}

Le tableau typé **`BigInt64Array`** permet de représenter un tableau d'entiers signés représentés sur 64 bits, où l'ordre des octets correspond à celui de la plateforme utilisée. Si on souhaite contrôler l'ordre des octets utilisé (le « boutisme »), on utilisera un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à `0n`. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).

## Syntaxe

```js
new BigInt64Array();
new BigInt64Array(longueur);
new BigInt64Array(tableauTypé);
new BigInt64Array(objet);
new BigInt64Array(tampon [, décalage [, longueur]]);
```

Pour plus d'informations sur la syntaxe du constructeur et le rôle des différents paramètres, voir la page _[TypedArray](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe)_.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Cette propriété renvoie un nombre correspondant à la quantité d'octets pour un élément du tableau. Dans le cas d'`BigInt64Array`, ce sera `8`.
- `BigInt64Array.length`
  - : La propriété de longueur statique qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "BigInt64Array.name")}}
  - : Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour `BigInt64Array` ce sera : "BigInt64Array".
- {{jsxref("TypedArray.prototype", "BigInt64Array.prototype")}}
  - : Le prototype des objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from", "BigInt64Array.from()")}}
  - : Cette méthode permet de créer un nouveau tableau typé `BigInt64Array` à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "BigInt64Array.of()")}}
  - : Cette méthode permet de créer un nouvel objet `BigInt64Array` à partir d'un nombre d'arguments variables. Voir aussi {{jsxref("Array.of()")}}.

## Prototype `BigInt64Array`

Tous les objets `BigInt64Array` héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriétés

- `BigInt64Array.prototype.constructor`
  - : Cette propriété renvoie la fonction qui a créé l'instance du prototype. Par défaut, ce sera le constructeur `BigInt64Array`.
- {{jsxref("TypedArray.prototype.buffer", "BigInt64Array.prototype.buffer")}} {{readonlyInline}}
  - : Cette propriété renvoie l'objet {{jsxref("ArrayBuffer")}} référencé par l'objet `BigInt64Array` Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteLength", "BigInt64Array.prototype.byteLength")}} {{readonlyInline}}
  - : Cette propriété renvoie la longueur, exprimée en octets, de l'objet `BigInt64Array` à partir du début de l'objet {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteOffset", "BigInt64Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}} {{readonlyInline}}
  - : Cette propriété renvoie le nombre d'éléments contenus dans le tableau `BigInt64Array`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "BigInt64Array.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "BigInt64Array.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "BigInt64Array.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "BigInt64Array.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "BigInt64Array.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "BigInt64Array.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "BigInt64Array.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "BigInt64Array.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "BigInt64Array.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "BigInt64Array.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "BigInt64Array.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "BigInt64Array.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "BigInt64Array.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "BigInt64Array.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "BigInt64Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "BigInt64Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "BigInt64Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "BigInt64Array.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "BigInt64Array.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "BigInt64Array.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "BigInt64Array.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "BigInt64Array.prototype.subarray()")}}
  - : Renvoie un nouvel objet `BigInt64Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "BigInt64Array.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "BigInt64Array.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "BigInt64Array.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "BigInt64Array.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façons de créer un objet `BigInt64Array` :

```js
// Construction à partir d'une longueur
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
```

## Spécifications

| Spécification                                                                                     | État                    | Commentaires |
| ------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `BigInt`](https://tc39.github.io/proposal-bigint/#sec-typedarrays-and-dataview) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.BigInt64Array")}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
