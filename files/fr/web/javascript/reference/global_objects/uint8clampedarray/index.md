---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
  - Uint8ClampedArray
translation_of: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
original_slug: Web/JavaScript/Reference/Objets_globaux/Uint8ClampedArray
---
{{JSRef}}

Le tableau typé **`Uint8ClampedArray`** permet de représenter un tableau d'entiers non signés représentés sur 8 bits, dont les valeurs sont ramenées entre 0 et 255. Si une valeur non-entière est fournie, elle sera arrondie à l'entier le plus proche. Les éléments du tableau sont initialisés à `0`. Une fois que le tableau est construit, on peut manipuler ses différents éléments grâce aux méthodes de l'objet ou grâce à la notation usuelle (avec les crochets).

## Syntaxe

    new Uint8ClampedArray(); // apparu avec ES2017
    new Uint8ClampedArray(longueur);
    new Uint8ClampedArray(tableauTypé);
    new Uint8ClampedArray(objet);
    new Uint8ClampedArray(tampon [, décalage [, longueur]]);

Pour plus d'informations sur la syntaxe du constructeur et le rôle des différents paramètres, voir la page _[TypedArray](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Syntaxe)_.

## Propriétés

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : Cette propriété renvoie la taille d'un élément du tableau, en octets. En l'occurence, pour `Uint8ClampedArray` ce sera `1`.
- Uint8ClampedArray.length
  - : La propriété de longueur statique qui vaut 3. Pour connaître le nombre d'éléments, voir {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}}.
- {{jsxref("TypedArray.name", "Uint8ClampedArray.name")}}
  - : Cette propriété renvoie la chaîne de caractères correspondant au nom du constructeur. Pour `Uint8ClampedArray` ce sera : "Uint8ClampedArray".
- {{jsxref("TypedArray.prototype", "Uint8ClampedArray.prototype")}}
  - : Le prototype des objets _TypedArray_.

## Méthodes

- {{jsxref("TypedArray.from", "Uint8ClampedArray.from()")}}
  - : Cette méthode permet de créer un nouvel objet `Uint8ClampedArray` à partir d'un itérable ou d'un objet semblable à un tableau. Voir aussi {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Uint8ClampedArray.of()")}}
  - : Cette méthode permet de créer un nouvel objet `Uint8ClampedArray` à partir d'un nombre variable d'arguments. Voir aussi {{jsxref("Array.of()")}}.

## Prototype `Uint8ClampedArray`

Tous les objets `Uint8ClampedArray` héritent de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriétés

- `Uint8ClampedArray.prototype.constructor`
  - : Cette propriété renvoie la fonction qui a créé l'instance du prototype. Par défaut, ce sera le constructeur `Uint8ClampedArray`.
- {{jsxref("TypedArray.prototype.buffer", "Uint8ClampedArray.prototype.buffer")}} {{readonlyInline}}
  - : Cette propriété renvoie l'objet {{jsxref("ArrayBuffer")}} référencé par l'objet `Uint8ClampedArray` Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteLength", "Uint8ClampedArray.prototype.byteLength")}} {{readonlyInline}}
  - : Cette propriété renvoie la longueur, exprimée en octets, de l'objet `Uint8ClampedArray` à partir du début de l'objet {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.byteOffset", "Uint8ClampedArray.prototype.byteOffset")}} {{readonlyInline}}
  - : Cette propriété renvoie le décalage, en nombre d'octets, entre le début du tableau typé courant et du début du {{jsxref("ArrayBuffer")}} correspondant. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.
- {{jsxref("TypedArray.prototype.length", "Uint8ClampedArray.prototype.length")}} {{readonlyInline}}
  - : Cette propriété renvoie le nombre d'éléments contenus dans le tableau `Uint8ClampedArray`. Elle est déterminée lors de la construction et est accessible uniquement en **lecture seule**.

### Méthodes

- {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}
  - : Copie une suite d'éléments d'un tableau dans le tableau. Voir également {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Uint8ClampedArray.prototype.entries()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les paires clé/valeur pour chaque indice du tableau. Voir également {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Uint8ClampedArray.prototype.every()")}}
  - : Teste si l'ensemble des éléments du tableau remplissent une certaine condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Uint8ClampedArray.prototype.fill()")}}
  - : Remplit les éléments d'un tableau avec une certaine valeur pour les éléments compris entre un indice de début et un indice de fin. Voir également {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Uint8ClampedArray.prototype.filter()")}}
  - : Crée un nouveau tableau dont tous les éléments proviennent de ce tableau et respectent une condition fournie par une fonction de test. Voir également {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Uint8ClampedArray.prototype.find()")}}
  - : Renvoie une valeur trouvée dans le tableau s'il existe un élément du tableau qui satisfait une condition fournie par une fonction de test, s'il n'y a pas de tel élément `undefined` sera renvoyé. Voir également {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Uint8ClampedArray.prototype.findIndex()")}}
  - : Renvoie l'indice d'un élément qui satisfait une condition fournie par une fonction de test, si aucun élément ne remplit la condition -1 sera renvoyé. Voir également {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Uint8ClampedArray.prototype.forEach()")}}
  - : Appelle une fonction pour chacun des élément du tableau. Voir également {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Uint8ClampedArray.prototype.includes()")}}
  - : Détermine si le tableau typé contient un élément donné. Cette méthode renvoie `true` ou `false` selon le cas de figure. Voir également {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Uint8ClampedArray.prototype.indexOf()")}}
  - : Renvoie le premier indice (le plus petit) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Uint8ClampedArray.prototype.join()")}}
  - : Fusionne l'ensemble des éléments du tableau en une chaîne de caractères. Voir également {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Uint8ClampedArray.prototype.keys()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les clés de chaque indice du tableau. Voir également {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Uint8ClampedArray.prototype.lastIndexOf()")}}
  - : Renvoie le dernier indice (le plus élevé) d'un élément du tableau qui est égal à la valeur fournie. Si aucun élément ne correspond, la valeur -1 sera renvoyée. Voir également {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Uint8ClampedArray.prototype.map()")}}
  - : Crée un nouveau tableau dont les éléments sont les images des éléments du tableau courant par une fonction donnée. Voir également {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Uint8ClampedArray.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Ancienne version, non-standard, de {{jsxref("TypedArray.copyWithin", "Uint8ClampedArray.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Uint8ClampedArray.prototype.reduce()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de gauche à droite) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Uint8ClampedArray.prototype.reduceRight()")}}
  - : Applique une fonction sur un accumulateur et chaque élément du tableau (de droite à gauche) afin de réduire le tableau en une seule valeur. Voir également {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Uint8ClampedArray.prototype.reverse()")}}
  - : Inverse l'ordre des éléments d'un tableau. Le premier élément du tableau devient le dernier et le dernier devient le premier (et ainsi de suite). Voir également {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Uint8ClampedArray.prototype.set()")}}
  - : Enregistre plusieurs valeurs dans le tableau typé à partir de valeurs d'un autre tableau.
- {{jsxref("TypedArray.slice", "Uint8ClampedArray.prototype.slice()")}}
  - : Extrait un fragment d'un tableau et renvoie ce fragment. Voir également {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Uint8ClampedArray.prototype.some()")}}
  - : Renvoie `true` si au moins un des éléments remplit une condition donnée par une fonction de test. Voir également {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Uint8ClampedArray.prototype.sort()")}}
  - : Trie les éléments du tableau et renvoie ce tableau. Voir également {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Uint8ClampedArray.prototype.subarray()")}}
  - : Renvoie un nouvel objet `Uint8ClampedArray` qui est le fragment du tableau courant, entre les indices de début et de fin donnés.
- {{jsxref("TypedArray.values", "Uint8ClampedArray.prototype.values()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau. Voir également {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Uint8ClampedArray.prototype.toLocaleString()")}}
  - : Renvoie une chaîne de caractères localisée qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Uint8ClampedArray.prototype.toString()")}}
  - : Renvoie une chaîne de caractère qui représente le tableau et ses éléments. Voir également {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Uint8ClampedArray.prototype[@@iterator]()")}}
  - : Renvoie un nouvel objet `Array Iterator` qui contient les valeurs correspondantes à chaque indice du tableau.

## Exemples

Différentes façon de créer un objet `Uint8ClampedArray` :

```js
// Construction à partir d'une longueur
var uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (valeur ramenée à 255)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// Construction à partir d'un tableau
var arr = new Uint8ClampedArray([21,31]);
console.log(arr[1]); // 31

// Construction à partir d'un autre TypedArray
var x = new Uint8ClampedArray([21, 31]);
var y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// Construction à partir d'un ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8ClampedArray(buffer, 1, 4);

// Construction à partir d'un itérable
var iterable = function*(){ yield* [1,2,3]; }();
var uintc8 = new Uint8ClampedArray(iterable);
// Uint8ClampedArray[1, 2, 3]
```

## Spécifications

| Spécification                                                                        | Statut                           | Commentaires                                                                                                                                       |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Englobée par ECMAScript 2015                                                                                                                       |
| {{SpecName('ES6', '#table-49', 'TypedArray constructors')}}     | {{Spec2('ES6')}}             | Définition initiale au sein d'un standard ECMA. `new` est obligatoire.                                                                             |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 a modifié le constructeur `Uint8ClampedArray` afin qu'il utilise l'opération `ToIndex` et qu'il puisse être utilisé sans argument. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Uint8ClampedArray")}}

## Notes de compatibilité

À partir d'ECMAScript 2015 (ES6), `Uint8ClampedArray` doit être utilisé avec {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Appeler `Uint8ClampedArray` comme une fonction, sans `new`, provoquera une exception {{jsxref("TypeError")}}.

```js example-bad
var dv = Uint8ClampedArray([1, 2, 3]);
// TypeError: calling a builtin Uint8ClampedArray constructor
// without new is forbidden
```

```js example-good
var dv = new Uint8ClampedArray([1, 2, 3]);
```

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
