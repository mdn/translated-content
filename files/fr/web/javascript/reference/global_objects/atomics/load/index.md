---
title: Atomics.load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
---

{{JSRef}}

La méthode statique **`Atomics.load()`** renvoie une valeur située à une position donnée du tableau.

{{InteractiveExample("JavaScript Demo: Atomics.load()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 + 2 = 7
console.log(Atomics.add(uint8, 0, 2));
// Expected output: 5

console.log(Atomics.load(uint8, 0));
// Expected output: 7
```

## Syntaxe

```js
Atomics.load(typedArray, index);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` qu'on souhaite charger.

### Valeur de retour

La valeur à la position indiquée (`typedArray[index]`).

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.store()")}}
