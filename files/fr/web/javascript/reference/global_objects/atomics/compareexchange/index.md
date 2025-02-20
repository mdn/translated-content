---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
---

{{JSRef}}

La méthode statique **`Atomics.compareExchange()`** échange une valeur d'un tableau à un emplacement donné si la valeur qui était dans le tableau correspond à une valeur donnée. Cette méthode renvoie l'ancienne valeur à cet emplacement, qu'il y ait eu remplacement ou non. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("JavaScript Demo: Atomics.compareExchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2

Atomics.compareExchange(uint8, 0, 5, 4); // Returns 2
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntaxe

```js
Atomics.compareExchange(typedArray, index, valeurAttendue, valeurRemplacement);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` à laquelle on veut échanger les valeurs.
- `valeurAttendue`
  - : La valeur avec laquelle on teste l'égalité.
- `valeurRemplacement`
  - : Le nombre qu'on souhaite placer dans le tableau si l'ancienne valeur est égale avec `valeurAttendue`.

### Valeur de retour

L'ancienne valeur présente à `typedArray[index]`.

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // renvoie 7, l'ancienne valeur
Atomics.load(ta, 0); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
