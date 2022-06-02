---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
tags:
  - BigInt
  - Constructeur
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/BigUint64Array
original_slug: Web/JavaScript/Reference/Objets_globaux/BigUint64Array
---
{{JSRef}}

Le tableau typé **`BigUint64Array`** permet de représenter un tableau d'entiers non signés représentés sur 64 bits, où l'ordre des octets correspond à celui de la plateforme utilisée. Si on souhaite contrôler l'ordre des octets utilisé (le « boutisme »), on utilisera un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à `0n`. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).

## Syntaxe

```js
new BigUint64Array();
new BigUint64Array(longueur);
new BigUint64Array(tableauTypé);
new BigUint64Array(objet);
new BigUint64Array(tampon [, décalage [, longueur]]);
```

Pour plus d'informations sur la syntaxe du constructeur et le rôle des différents paramètres, voir la page _[TypedArray](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe)_.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : Cette propriété renvoie un nombre correspondant à la quantité d'octets pour un élément du tableau. Dans le cas d'`BigUint64Array`, ce sera `8`.
- `BigUint64Array.length`
  - : La propriété de longueur statique qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "BigUint64Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "BigUint64Array.name")}}
  - : Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour `BigUint64Array` ce sera : "BigUint64Array".
- {{jsxref("TypedArray.prototype", "BigUint64Array.prototype")}}
  - : Le prototype des objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from", "BigUint64Array.from()")}}
  - : Cette méthode permet de créer un nouveau tableau typé `BigUint64Array` à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "BigUint64Array.of()")}}
  - : Cette méthode permet de créer un nouvel objet `BigUint64Array` à partir d'un nombre d'arguments variables. Voir aussi {{jsxref("Array.of()")}}.

## Prototype `BigUint64Array`

Tous les objets `BigUint64Array` héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriétés

- `BigUint64Array.prototype.constructor`
  - : Cette propriété renvoie la fonction qui a créé l'instance du prototype. Par défaut, ce sera le constructeur `BigUint64Array`.
- {{jsxref("TypedArray.prototype.buffer", "BigUint64Array.prototype.buffer")}} {{readonlyInline}}
  - : Cette propriété renvoie l'objet {{jsxref("ArrayBuffer")}} référencé par l'objet `BigUint64Array` Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteLength", "BigUint64Array.prototype.byteLength")}} {{readonlyInline}}
  - : Cette propriété renvoie la longueur, exprimée en octets, de l'objet `BigUint64Array` à partir du début de l'objet {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteOffset", "BigUint64Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.length", "BigUint64Array.prototype.length")}} {{readonlyInline}}
  - : Cette propriété renvoie le nombre d'éléments contenus dans le tableau `BigUint64Array`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "BigUint64Array.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "BigUint64Array.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "BigUint64Array.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "BigUint64Array.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "BigUint64Array.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "BigUint64Array.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "BigUint64Array.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "BigUint64Array.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "BigUint64Array.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "BigUint64Array.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "BigUint64Array.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "BigUint64Array.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "BigUint64Array.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "BigUint64Array.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "BigUint64Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "BigUint64Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "BigUint64Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "BigUint64Array.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "BigUint64Array.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "BigUint64Array.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "BigUint64Array.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "BigUint64Array.prototype.subarray()")}}
  - : Renvoie un nouvel objet `BigUint64Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "BigUint64Array.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "BigUint64Array.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "BigUint64Array.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "BigUint64Array.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façons de créer un objet `BigUint64Array` :

```js
// Construction à partir d'une longueur
var bigInt64 = new BigUint64Array(2);
bigInt64[0] = 42n;
console.log(bigInt64[0]); // 42n
console.log(bigInt64.length); // 2
console.log(bigInt64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
var arr = new BigUint64Array([21n,31n]);
console.log(arr[1]); // 31n

// Construction à partir d'un tableau typé
var x = new BigUint64Array([21n, 31n]);
var y = new BigUint64Array(x);
console.log(y[0]); // 21n

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigUint64Array(buffer, 0, 4);

// Construction à partir d'un itérable
var iterable = function*(){ yield* [1n, 2n, 3n]; }();
var BigInt64 = new BigUint64Array(iterable);
// BigUint64Array[1n, 2n, 3n]
```

## Spécifications

| Spécification                                                                                     | État                    | Commentaires |
| ------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `BigInt`](https://tc39.github.io/proposal-bigint/#sec-typedarrays-and-dataview) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.BigUint64Array")}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
