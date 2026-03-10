---
title: "Atomics : méthode statique or()"
short-title: or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

La méthode statique **`or()`** de l'objet {{JSxRef("Atomics")}} calcule un OU binaire entre une valeur donnée et la valeur présente à une position donnée du tableau, et retourne l'ancienne valeur à cette position. Cette opération atomique garantit qu'aucune autre écriture n'intervient tant que la valeur modifiée n'a pas été réinscrite.

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

Notez que ces exemples ne peuvent pas être exécutés directement depuis la console ou une page web arbitraire, car `SharedArrayBuffer` n'est pas défini à moins que [ses exigences de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#contraintes_de_sécurité) ne soient respectées.

### Utiliser `Atomics.or()`

```js
// Crée un SharedArrayBuffer avec une taille en octets
const sab = new SharedArrayBuffer(1024);
// Crée une vue et définit la valeur de l'index 0
const ta = new Uint8Array(sab);
ta[0] = 7;

// 7 (0111) OR 10 (1010) = 15 (1111)
console.log(Atomics.or(ta, 0, 10)); // 7, l'ancienne valeur
console.log(Atomics.load(ta, 0)); // 15, la nouvelle/valeur actuelle
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.and()")}}
- La méthode {{JSxRef("Atomics.xor()")}}
