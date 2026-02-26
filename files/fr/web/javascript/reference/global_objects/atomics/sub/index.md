---
title: "Atomics : méthode statique sub()"
short-title: sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

La méthode statique **`sub()`** de l'objet {{JSxRef("Atomics")}} soustrait une valeur donnée à une position donnée du tableau et retourne l'ancienne valeur à cette position. Cette opération atomique garantit qu'aucune autre écriture n'intervient tant que la valeur modifiée n'a pas été réécrite.

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

Notez que ces exemples ne peuvent pas être exécutés directement depuis la console ou une page web arbitraire, car `SharedArrayBuffer` n'est pas défini à moins que [ses exigences de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#contraintes_de_sécurité) ne soient respectées.

### Utiliser `Atomics.sub()`

```js
// Crée un SharedArrayBuffer avec une taille en octets
const sab = new SharedArrayBuffer(1024);
// Crée une vue et définit la valeur de l'index 0
const ta = new Uint8Array(sab);
ta[0] = 48;

// 48 - 12 = 36
Atomics.sub(ta, 0, 12); // retourne 48, l'ancienne valeur
Atomics.load(ta, 0); // 36, la nouvelle/valeur actuelle
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.add()")}}
