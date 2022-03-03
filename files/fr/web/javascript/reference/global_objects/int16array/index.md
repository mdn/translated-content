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
{{JSRef}}

Le tableau typé **`Int16Array`** permet de représenter un tableau d'entiers signés (en complément à deux) représentés sur 16 bits et dans l'ordre des octets de la plate-forme. Pour avoir un contrôle sur le boutisme utilisé, il faudra utiliser un objet {{jsxref("DataView")}} à la place. Les éléments du tableau sont initialisés à 0. Une fois le tableau construit, il est possible de faire référence aux éléments en utilisant les méthodes de l'objet ou en utilisant la notation usuelle de parcours d'un tableau (la syntaxe utilisant les crochets).

## Syntaxe

    new Int16Array(); // apparu avec ES2017
    new Int16Array(longueur);
    new Int16Array(tableauTypé);
    new Int16Array(objet);
    new Int16Array(buffer [, positionOctet [, longueur]]);

Pour plus d'informations sur la syntaxe du constructeur, voir la page sur les [tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe) _(TypedArray)_.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Renvoie un nombre représentant la taille d'un élément du tableau en termes d'octets. Dans le cas de `Int16Array`, la propriété vaudra 2.
- `Int16Array.length`
  - : Une propriété de longueur qui vaut 3. Pour connaître le nombre d'élément, voir {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int16Array.name")}}
  - : Renvoie la chaîne de caractère représentant le nom du constructeur. Dans le cas de `Int16Array`, la propriété vaudra "Int16Array".
- {{jsxref("TypedArray.prototype", "Int16Array.prototype")}}
  - : Prototype pour les objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from", "Int16Array.from()")}}
  - : Crée un nouvel objet `Int16Array` à partir d'un objet semblable à un tableau ou d'un objet itérable. Voir également la page {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int16Array.of()")}}
  - : Crée un nouvel objet `Int16Array` à partir d'un nombre variable d'arguments. Voir également la page {{jsxref("Array.of()")}}.

## Prototype de `Int16Array`

Tous les objets `Int16Array` héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriétés

- `Int16Array.prototype.constructor`
  - : Renvoie la fonction qui a créé le prototype de l'instance. Par défaut, ce sera le constructeur natif `Int16Array`.
- {{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}} {{readonlyInline}}
  - : Renvoie l'{{jsxref("ArrayBuffer")}} référencée par l'objet `Int16Array`. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}} {{readonlyInline}}
  - : Renvoie la longueur, exprimée en octets, de l'objet `Int16Array` depuis le début de l'{{jsxref("ArrayBuffer")}} correspondant. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Renvoie le décalage, exprimé en octets, entre l'objet `Int16Array` et le début de l'{{jsxref("ArrayBuffer")}} correspondant. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en **lecture seule**.
- {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}} {{readonlyInline}}
  - : Renvoie le nombre d'éléments contenus dans l'objet `Int16Array`. Cette propriété est déterminée lors de la construction de l'objet et n'est accessible qu'en **lecture seule**.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int16Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}
  - : Renvoie un nouvel objet `Int16Array` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façons de créer un `Int16Array` :

```js
// Construction à partir d'une longueur
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
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires                                                                                                                                     |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Remplacée dans ECMAScript 2015.                                                                                                                  |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}} | {{Spec2('ES2015')}}         | Définition initiale au sein d'un standard ECMA. `new` est obligatoire.                                                                           |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 a modifié le constructeur `Int16Array` afin d'utiliser l'opération interne `ToIndex` pour permettre de l'utiliser sans argument. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Int16Array")}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), `Int16Array` doit être utilisé avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler un constructeur `Int16Array` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = Int16Array([1, 2, 3]);
// TypeError: calling a builtin Int16Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int16Array([1, 2, 3]);
```

## Voir aussi

- [Les tableaux typés (_typed arrays_) en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés "en/JavaScript typed arrays")
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
