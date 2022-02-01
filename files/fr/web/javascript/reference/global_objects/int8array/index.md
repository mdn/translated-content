---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
tags:
  - Constructor
  - Int8Array
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrrays
translation_of: Web/JavaScript/Reference/Global_Objects/Int8Array
original_slug: Web/JavaScript/Reference/Objets_globaux/Int8Array
---
{{JSRef}}

Le tableau typé **`Int8Array`** permet de représenter un tableau d'entiers signés (en complément à deux) représentés sur 8 bits. Les éléments du tableau sont initialisés à 0. Une fois le tableau construit, il est possible de faire référence aux éléments en utilisant les méthodes de l'objet ou en utilisant la notation usuelle de parcours d'un tableau (la syntaxe utilisant les crochets).

## Syntaxe

    new Int8Array(); // apparu avec ES2017
    new Int8Array(length);
    new Int8Array(typedArray);
    new Int8Array(object);
    new Int8Array(buffer [, byteOffset [, length]]);

Pour plus d'informations sur la syntaxe du constructeur, voir la page sur les [tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe) _(TypedArray)_.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : Renvoie un nombre représentant la taille d'un élément du tableau en termes d'octets. Dans le cas de `Int8Array`, la propriété vaudra 1.
- `Int8Array.length`
  - : Une propriété de longueur statique qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int8Array.name")}}
  - : Renvoie la chaîne de caractère représentant le nom du constructeur. Dans le cas de `Int8Array`, la propriété vaudra "Int8Array".
- {{jsxref("TypedArray.prototype", "Int8Array.prototype")}}
  - : Prototype pour les objets _TypedArray_.

## Méthodes

- Int8Array.from()
  - : Crée un nouvel objet `Int8Array` à partir d'un objet semblable à un tableau ou d'un objet itérable. Voir également la page {{jsxref("Array.from()")}}.
- Int8Array.of()
  - : Crée un nouvel objet `Int8Array` à partir d'un nombre variable d'arguments. Voir également la page {{jsxref("Array.of()")}}.

## Prototype de `Int8Array`

Tous les objets `Int8Array` héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriétés

- `Int8Array.prototype.constructor`
  - : Renvoie la fonction qui a créé l'instance. Par défaut, c'est le constructeur `Int8Array`.
- {{jsxref("TypedArray.prototype.buffer", "Int8Array.prototype.buffer")}} {{readonlyInline}}
  - : Renvoie l'objet {{jsxref("ArrayBuffer")}} auquel fait référence le tableau `Int8Array`. Cette valeur est fixée lors de la construction et est uniquement disponible en lecture.
- {{jsxref("TypedArray.prototype.byteLength", "Int8Array.prototype.byteLength")}} {{readonlyInline}}
  - : Renvoie la longueur (exprimée en octet) du tableau `Int8Array` depuis le début du tampon {{jsxref("ArrayBuffer")}}. Cette valeur est fixée lors de la construction et est uniquement disponible en lecture.
- {{jsxref("TypedArray.prototype.byteOffset", "Int8Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Renvoie le décalage (exprimé en octets) du tableau `Int8Array` par rapport au début du tampon {{jsxref("ArrayBuffer")}}. Cette valeur est fixée lors de la construction et est uniquement disponible en lecture.
- {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}} {{readonlyInline}}
  - : Renvoie le nombre d'éléments contenus dans le tableau `Int8Array`. Cette valeur est fixée lors de la construction et est uniquement disponible en lecture.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int8Array.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int8Array.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int8Array.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int8Array.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int8Array.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int8Array.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int8Array.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int8Array.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int8Array.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int8Array.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int8Array.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int8Array.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int8Array.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int8Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int8Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int8Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int8Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int8Array.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "Int8Array.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int8Array.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Int8Array.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int8Array.prototype.subarray()")}}
  - : Renvoie un nouvel objet `Int8Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "Int8Array.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int8Array.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int8Array.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int8Array.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façons de créer un objet `Int8Array` :

```js
// Construction à partir d'une longueur
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// Construction à partir d'un tableau
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// Construction à partir d'un autre TypedArray
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);

// Construction à partir d'un itérable
var iterable = function*(){ yield* [1,2,3]; }();
var int8 = new Int8Array(iterable);
// Int8Array[1, 2, 3]
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires                                                                                                                          |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Remplacée dans ECMAScript 2015.                                                                                                       |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Définition initiale au sein d'un standard ECMA. `new` est obligatoire.                                                                |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 a modifié le constructeur afin d'utiliser l'opération interne `ToIndex` et permettre de l'utiliser sans constructeur. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Int8Array")}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), `Int8Array` doit être utilisé avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur `Int8Array` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

## Voir aussi

- [Les tableaux typés (_typed arrays_) en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
