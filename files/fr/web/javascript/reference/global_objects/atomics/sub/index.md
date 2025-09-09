---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
---

{{JSRef}}

La méthode statique **`Atomics.sub()`** permet de soustraire une valeur donnée à une position donnée du tableau partagé. Elle renvoie l'ancienne valeur qui était contenue dans le tableau avant l'opération. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("JavaScript Demo: Atomics.sub()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 - 2 = 5
console.log(Atomics.sub(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## Syntaxe

```js
Atomics.sub(typedArray, index, valeur);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau typé `typedArray` à laquelle on veut soustraire `valeur`.
- `valeur`
  - : La quantité qu'on souhaite soustraire.

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
ta[0] = 48;

Atomics.sub(ta, 0, 12); // renvoie 48, l'ancienne valeur
Atomics.load(ta, 0); // 36
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
