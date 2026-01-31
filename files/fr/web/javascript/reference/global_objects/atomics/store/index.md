---
title: "Atomics : méthode statique store()"
short-title: store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`store()`** de l'objet {{JSxRef("Atomics")}} enregistre une valeur donnée à un emplacement donné du tableau partagé et retourne cette valeur.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.store()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));
// Résultat attendu : 2

console.log(Atomics.load(uint8, 0));
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
Atomics.store(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position du tableau `typedArray` à laquelle on souhaite stocker la valeur.
- `value`
  - : Le nombre à enregistrer.

### Valeur de retour

La valeur qui a été enregistrée.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lèvee si `typedArray` n'est pas l'un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

### Utilisation de `store()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.load()")}}
