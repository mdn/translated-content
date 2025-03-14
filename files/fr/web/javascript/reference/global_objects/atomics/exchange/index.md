---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
---

{{JSRef}}

La méthode statique **`Atomics.exchange()`** permet d'enregistrer une valeur à une position donnée d'un tableau et de renvoyer l'ancienne valeur qui était contenue dans le tableau. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("JavaScript Demo: Atomics.exchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.load(uint8, 0));
// Expected output: 5

Atomics.exchange(uint8, 0, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntaxe

```js
Atomics.exchange(typedArray, index, valeur);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position dans le tableau `typedArray` à laquelle on veut placer `valeur`.
- `valeur`
  - : Le nombre qu'on souhaite échanger.

### Valeur de retour

L'ancienne valeur qui était contenue à (`typedArray[index]`).

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // renvoie 0, l'ancienne valeur
Atomics.load(ta, 0); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
