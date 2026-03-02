---
title: "Atomics : méthode statique xor()"
short-title: xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

La méthode statique **`Atomics.xor()`** calcule un OU Exclusif binaire (ou «&nbsp;XOR&nbsp;») avec une valeur donnée à une position donnée dans le tableau, et retourne l'ancienne valeur à cette position. Cette opération atomique garantit qu'aucune autre écriture n'a lieu avant que la valeur modifiée ne soit réécrite.

## Syntaxe

```js-nolint
Atomics.xor(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position du tableau `typedArray` à laquelle calculer le OU exclusif binaire.
- `value`
  - : La valeur avec laquelle on souhaite calculer le OU exclusif binaire.

### Valeur de retour

L'ancienne valeur située à cet emplacement du tableau (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lèvee si `typedArray` n'est pas l'un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Description

L'opération binaire OU exclusif (XOR) retourne 1 si `a` et `b` sont différents. La table de vérité correspondante est&nbsp;:

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

Par exemple, le calcul d'un OU exclusif binaire `5 ^ 1` retourne `0100`, qui correspond à 4 en notation décimale.

```plain
5  0101
1  0001
   ----
4  0100
```

## Exemples

Notez que ces exemples ne peuvent pas être exécutés directement depuis la console ou une page web arbitraire, car `SharedArrayBuffer` n'est pas défini à moins que [ses exigences de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#contraintes_de_sécurité) ne soient respectées.

### Utiliser `Atomics.xor()`

```js
// Crée un SharedArrayBuffer avec une taille en octets
const sab = new SharedArrayBuffer(1024);
// Crée une vue et définit la valeur de l'index 0
const ta = new Uint8Array(sab);
ta[0] = 7;

// 7 (0111) XOR 2 (0010) = 5 (0101)
console.log(Atomics.xor(ta, 0, 2)); // retourne , l'ancienne valeur
console.log(Atomics.load(ta, 0)); // 5, la nouvelle/valeur actuelle
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.and()")}}
- La méthode {{JSxRef("Atomics.or()")}}
