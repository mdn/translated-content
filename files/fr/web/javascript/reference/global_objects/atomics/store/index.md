---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
---

{{JSRef}}

La méthode statique **`Atomics.store()`** enregistre une valeur donnée à un emplacement donné du tableau partagé et renvoie cette valeur.

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## Syntaxe

```js
Atomics.store(typedArray, index, valeur);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` à laquelle on souhaite stocker la valeur.
- `valeur`
  - : Le nombre à enregistrer.

### Valeur de retour

La valeur qui a été enregistrée.

### Exceptions

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

```js
var buffer = new ArrayBuffer(4); // Buffer classique
var float32 = new Float32Array(buffer); // Nombre flottant
var uint32 = new Uint32Array(buffer); // Représentation IEEE754

float32[0] = 0.5;
console.log("0x" + uint32[0].toString(16));

uint32[0] = 0x3f000000; /// Représentation sur 32 bits de 0.5 (IEEE754)
console.log(float32[0]);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
