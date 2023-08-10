---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
---

{{JSRef}}

Le tableau typé **`Float32Array`** représente un tableau de nombres flottants représentés sur 32 bits (ce qui correspond au type C `float`), l'ordre des octets utilisés étant celui de la plate-forme. Si on souhaite maîtriser le boutisme (_endianness_) utilisé, on pourra utiliser une {{jsxref("DataView")}}. Les éléments du tableau sont initialisés à `0`. Une fois que le tableau est établi, on peut référencer des éléments dans le tableau en utilisant les méthodes de l'objet ou la syntaxe usuelle des crochets.

## Syntaxe

```js
new Float32Array(); // Apparu avec ES2017
new Float32Array(longueur);
new Float32Array(tableauTypé);
new Float32Array(objet);
new Float32Array(buffer [, décalageOctets [, longueur]]);
```

Pour plus d'informations sur la syntaxe de ce constructeur et les paramètres utilisés, voir la page {{jsxref("Objets_globaux/TypedArray","TypedArray","#Syntaxe")}}.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Renvoie le nombre d'octets par élément. `4` dans le cas de `Float32Array`.
- Float32Array.length
  - : Une propriété de longueur statique qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float32Array.name")}}
  - : Renvoie la chaîne de caractères correspondant au nom du constructeur, dans le cas de `Float32Array`, ce sera : "Float32Array".
- {{jsxref("TypedArray.prototype", "Float32Array.prototype")}}
  - : Le prototype des objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from", "Float32Array.from()")}}
  - : Crée un nouvel objet `Float32Array` à partir d'un objet semblable à un tableau ou d'un objet itérable. Voir également la page {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float32Array.of()")}}
  - : Crée un nouvel objet `Float32Array` à partir d'un nombre variable d'arguments. Voir également la page {{jsxref("Array.of()")}}.

## Prototype `Float32Array`

Chacun des objets `Float32Array` hérite de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriétés

- `Float32Array.prototype.constructor`
  - : Renvoie la fonction qui a crée le prototype de l'instance. Par défaut, ce sera le constructeur `Float32Array`.
- {{jsxref("TypedArray.prototype.buffer", "Float32Array.prototype.buffer")}} {{readonlyInline}}
  - : Renvoie l'objet {{jsxref("ArrayBuffer")}} référencé par l'objet `Float32Array`. Cette propriété est fixée lors de la construction et n'est donc disponible qu'en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteLength", "Float32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Renvoie la longueur, exprimée en octets, de l'objet `Float32Array` à partir du début de l'{{jsxref("ArrayBuffer")}} correspondant. Cette propriété est fixée lors de la construction et n'est donc disponible qu'en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteOffset", "Float32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Renvoie le décalage, exprimé en octets, de l'objet `Float32Array` par rapport au début de l'{{jsxref("ArrayBuffer")}} correspondant. Cette propriété est fixée lors de la construction et n'est donc disponible qu'en **lecture seule**.
- {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}} {{readonlyInline}}
  - : Renvoie le nombre d'éléments contenus dans l'objet `Float32Array`. Cette propriété est fixée lors de la construction et n'est donc disponible qu'en **lecture seule**.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float32Array.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float32Array.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float32Array.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float32Array.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float32Array.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float32Array.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float32Array.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float32Array.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float32Array.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float32Array.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float32Array.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float32Array.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float32Array.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float32Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float32Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Float32Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float32Array.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "Float32Array.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float32Array.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Float32Array.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float32Array.prototype.subarray()")}}
  - : Renvoie un nouvel objet `Float32Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "Float32Array.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float32Array.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float32Array.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float32Array.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façons de créer un objet `Float32Array` :

```js
// Construction à partir d'une longueur
var float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// Construction à partir d'un tableau
var arr = new Float32Array([21, 31]);
console.log(arr[1]); // 31

// Construction à partir d'un tableau typé
var x = new Float32Array([21, 31]);
var y = new Float32Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Float32Array(buffer, 0, 4);

// Construction à partir d'un itérable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var float32 = new Float32Array(iterable);
// Float32Array[1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), `Float32Array` doit être utilisée avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur `Float32Array` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = Float32Array([1, 2, 3]);
// TypeError: calling a builtin Float32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float32Array([1, 2, 3]);
```

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
