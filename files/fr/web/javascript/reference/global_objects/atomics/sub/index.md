---
title: "Atomics : méthode statique sub()"
short-title: sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`sub()`** de l'objet {{JSxRef("Atomics")}} soustrait une valeur donnée à une position donnée du tableau et retourne l'ancienne valeur à cette position. Cette opération atomique garantit qu'aucune autre écriture n'intervient tant que la valeur modifiée n'a pas été réécrite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.sub()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 - 2 = 5
console.log(Atomics.sub(uint8, 0, 2));
// Résultat attendu : 7

console.log(Atomics.load(uint8, 0));
// Résultat attendu : 5
```

## Syntaxe

```js-nolint
Atomics.sub(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position du tableau typé `typedArray` à laquelle on veut soustraire `value`.
- `value`
  - : La quantité qu'on souhaite soustraire.

### Valeur de retour

L'ancienne valeur qui était contenue à (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lèvee si `typedArray` n'est pas l'un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

### Utilisation de `sub()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // retourne 48, l'ancienne valeur
Atomics.load(ta, 0); // 36
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.add()")}}
