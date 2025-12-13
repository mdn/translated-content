---
title: "Atomics : méthode statique exchange()"
short-title: exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`exchange()`** de l'objet {{JSxRef("Atomics")}} permet d'enregistrer une valeur à une position donnée d'un tableau et de renvoyer l'ancienne valeur qui était contenue dans le tableau. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.exchange()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.load(uint8, 0));
// Résultat attendu : 5

Atomics.exchange(uint8, 0, 2); // Retourne 5
console.log(Atomics.load(uint8, 0));
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
Atomics.exchange(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position dans le tableau `typedArray` où échanger une `value`.
- `value`
  - : Le nombre qu'on souhaite échanger.

### Valeur de retour

L'ancienne valeur qui était contenue à (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

### Utilisation de `exchange()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // retourne 0, l'ancienne valeur
Atomics.load(ta, 0); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.compareExchange()")}}
