---
title: "Atomics : méthode statique or()"
short-title: or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`or()`** de l'objet {{JSxRef("Atomics")}} calcule un OU binaire entre une valeur donnée et la valeur présente à une position donnée du tableau, et retourne l'ancienne valeur à cette position. Cette opération atomique garantit qu'aucune autre écriture n'intervient tant que la valeur modifiée n'a pas été réinscrite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.or()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 (0101) OR 2 (0010) = 7 (0111)
console.log(Atomics.or(uint8, 0, 2));
// Résultat attendu : 5

console.log(Atomics.load(uint8, 0));
// Résultat attendu : 7
```

## Syntaxe

```js-nolint
Atomics.or(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position du tableau `typedArray` sur laquelle calculer le OU binaire.
- `value`
  - : Le nombre avec lequel calculer le OU binaire.

### Valeur de retour

L'ancienne valeur contenue à l'emplacement du tableau (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lèvee si `typedArray` n'est pas l'un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Description

L'opération binaire OU retourne 1 si `a` ou `b` valent 1. La table de vérité de cette opération est&nbsp;:

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

Par exemple, un OU binaire de `5 | 1` retourne `0101`, ce qui correspond à 5 en notation décimale.

```plain
5  0101
1  0001
   ----
5  0101
```

## Exemples

### Utilisation de `or()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // retourne 2, l'ancienne valeur
Atomics.load(ta, 0); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.and()")}}
- La méthode {{JSxRef("Atomics.xor()")}}
