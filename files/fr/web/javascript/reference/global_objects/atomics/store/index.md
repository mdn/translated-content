---
title: "Atomics : méthode statique store()"
short-title: store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

La méthode statique **`store()`** de l'objet {{JSxRef("Atomics")}} enregistre une valeur donnée à un emplacement donné du tableau partagé et retourne cette valeur.

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

Notez que ces exemples ne peuvent pas être exécutés directement depuis la console ou une page web arbitraire, car `SharedArrayBuffer` n'est pas défini à moins que [ses exigences de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#contraintes_de_sécurité) ne soient respectées.

### Utiliser `Atomics.store()`

```js
// Crée un SharedArrayBuffer avec une taille en octets
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

console.log(Atomics.store(ta, 0, 12)); // 12, la nouvelle/valeur actuelle
console.log(Atomics.load(ta, 0)); // 12, la nouvelle/valeur actuelle
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.load()")}}
- La méthode {{JSxRef("Atomics.exchange()")}}
