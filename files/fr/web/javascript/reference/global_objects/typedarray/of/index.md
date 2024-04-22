---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
---

{{JSRef}}

La méthode **`TypedArray.of()`** crée un nouvel objet {{jsxref("TypedArray", "TypedArray", "#Les_objets_TypedArray")}} à partir d'un nombre variable d'arguments. Cette méthode est similaire à {{jsxref("Array.of()")}}.

## Syntaxe

```js
TypedArray.of(élément0[, élément1[, ...[, élémentN]]])
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

- `élémentN`
  - : Les éléments avec lesquels on souhaite construire le nouveau tableau typé.

### Valeur de retour

Une nouvelle instance de {{jsxref("TypedArray")}}.

## Description

Il existe de légères différences entre {{jsxref("Array.of()")}} et `TypedArray.of()` :

- Si la valeur de `this` passée à `TypedArray.of` n'est pas un constructeur, `TypedArray.of` lèvera une exception {{jsxref("TypeError")}}, tandis que `Array.of` créera un nouvel objet {{jsxref("Array")}}.
- `TypedArray.of` utilise `[[Put]]` tandis que `Array.of` utilise `[[DefineProperty]]`. Ainsi lorsque les arguments sont des objets {{jsxref("Proxy")}} la première méthode appellera {{jsxref("Objets_globaux/Proxy/handler/set", "handler.set")}} pour créer les nouveaux éléments et la seconde appellera {{jsxref("Objets_globaux/Proxy/handler/defineProperty", "handler.defineProperty")}}.

## Exemples

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // Int16Array [ 0 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
