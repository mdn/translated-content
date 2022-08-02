---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - TypedArray
  - TypedArrays
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/from
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/from
---
{{JSRef}}

La méthode **`TypedArray.from()`** crée un nouvel objet {{jsxref("TypedArray", "TypedArray", "#Les_objets_TypedArray")}} à partir d'un objet itérable ou d'un objet semblable à un tableau. Cette méthode est similaire à {{jsxref("Array.from()")}}.

## Syntaxe

```js
TypedArray.from(source[, mapFn[, thisArg]])
```

où TypedArray est l'un de :

- [`Int8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
- [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`Uint8ClampedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
- [`Int16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
- [`Uint16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
- [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
- [`Uint32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
- [`Float32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
- [`Float64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
- [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array)
- [`BigUint64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array)

### Paramètres

- `source`
  - : Un objet semblable à un tableau ou un objet itérable, et à partir duquel on souhaite créer un tableau typé.
- `fonctionMap`
  - : Argument optionnel, une fonction à appliquer à chacun des éléments du tableau.
- `thisArg`
  - : Argument optionnel. La valeur à utiliser pour `this` lors de l'exécution de la fonction `fonctionMap`.

### Valeur de retour

Une nouvelle instance de {{jsxref("TypedArray")}}.

## Description

`TypedArray.from()` permet de créer des tableaux typés à partir :

- d'[objets semblables à des tableaux](/fr/docs/Web/JavaScript/Guide/Objets_élémentaires_JavaScript#Manipuler_des_objets_semblables_aux_tableaux) (qui disposent d'une propriété `length` et d'éléments indexés) ou
- d'[objets itérables](/fr/docs/Web/JavaScript/Guide/iterable) (par exemple des objets {{jsxref("Map")}} ou {{jsxref("Set")}}).

`Array.from` possède un paramètre optionnel `fonctionMap`, qui permet d'exécuter une fonction {{jsxref("Array.prototype.map", "map")}} sur chacun des éléments du tableau typé (ou de l'instance de la classe fille) qui est créé. Autrement dit `TypedArray.from(obj, fonctionMap, thisArg)` correspond exactement à `TypedArray.from(obj).map(fonctionMap, thisArg)`.

Il existe de légères différences entre {{jsxref("Array.from()")}} et `TypedArray.from()` :

- Si la valeur de `this` passée à `TypedArray.from` n'est pas un constructeur, `TypedArray.from` lèvera une exception {{jsxref("TypeError")}}, tandis que `Array.from` créera un nouvel objet {{jsxref("Array")}}.
- `TypedArray.from` utilise `[[Set]]` tandis que `Array.from` utilise `[[DefineProperty]]`. Ainsi par exemple lorsque des objets {{jsxref("Proxy")}} sont manipulés la première méthode appellera {{jsxref("Objets_globaux/Proxy/handler/set", "handler.set")}} pour créer les nouveaux éléments et la seconde appellera {{jsxref("Objets_globaux/Proxy/handler/defineProperty", "handler.defineProperty")}}.
- Lorsque `source` est un itérable, `TypedArray.from` va dans un premier temps récupérer toutes ses valeurs, puis initialiser une instance de `this` à l'aide de leur nombre, et enfin ajouter ces valeurs à l'instance. `Array.from` ajoute les valeurs au nouvel objet lors du parcours de l'itérateur et ne définit la taille de l'objet qu'en dernière étape.
- Si `Array.from` reçoit un objet semblable à un tableau qui n'est pas un itérable, les valeurs non définies sont conservées. `TypedArray.from` construit un objet dense en éliminant ces valeurs.

## Exemples

```js
// Set (objet itérable)
var s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]


// String
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]


// En utilisant un fonction fléchée en tant que
// fonctionMap pour manipuler les éléments
Float32Array.from([1, 2, 3], x => x + x);
// Float32Array [ 2, 4, 6 ]


// Pour construire une séquence de nombres
Uint8Array.from({length: 5}, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.from', '%TypedArray%.from')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.from', '%TypedArray%.from')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.from")}}

## Voir aussi

- {{jsxref("TypedArray.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Array.prototype.map()")}}
