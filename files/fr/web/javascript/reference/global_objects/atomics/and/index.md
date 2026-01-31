---
title: "Atomics : méthode statique and()"
short-title: and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`and()`** de l'objet {{JSxRef("Atomics")}} calcule un ET binaire avec une valeur donnée, à un emplacement donné du tableau. Elle renvoie l'ancienne valeur qui était contenue à cet emplacement. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.and()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) AND 2 (0010) = 2 (0010)
console.log(Atomics.and(uint8, 0, 2));
// Résultat attendu : 7

console.log(Atomics.load(uint8, 0));
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
Atomics.and(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position dans `typedArray` où calculer le ET binaire.
- `valeur`
  - : Le nombre avec lequel on souhaite calculer le ET binaire.

### Valeur de retour

L'ancienne valeur à la position donnée (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Description

Un ET binaire fournit la valeur 1 uniquement si `a` et `b` valent 1. La table de vérité pour l'opération ET est :

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

Ainsi, si on calcule le ET binaire de 5 et 1 avec l'instruction `5 & 1`, cela fournira la valeur `0001`, qui correspond à 1 en notation décimale.

```plain
5  0101
1  0001
   ----
1  0001
```

## Exemples

### Utilisation de `and()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // retourne 5, l'ancienne valeur
Atomics.load(ta, 0); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.or()")}}
- La méthode {{JSxRef("Atomics.xor()")}}
