---
title: "Atomics : méthode statique load()"
short-title: load()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/load
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

La méthode statique **`load()`** de l'objet {{JSxRef("Atomics")}} retourne une valeur située à une position donnée du tableau.

## Syntaxe

```js-nolint
Atomics.load(typedArray, index)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position du tableau `typedArray` qu'on souhaite charger.

### Valeur de retour

La valeur à la position indiquée (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

Notez que ces exemples ne peuvent pas être exécutés directement depuis la console ou une page web arbitraire, car `SharedArrayBuffer` n'est pas défini à moins que [ses exigences de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#contraintes_de_sécurité) ne soient respectées.

### Utiliser `Atomics.load()`

```js
// Crée un SharedArrayBuffer avec une taille en octets
const sab = new SharedArrayBuffer(1024);
// Crée une vue et définit la valeur de l'index 0
const ta = new Uint8Array(sab);
ta[0] = 7;

console.log(Atomics.add(ta, 0, 12)); // Ajoute 12 à l'index 0
console.log(Atomics.load(ta, 0)); // 19, la nouvelle/valeur actuelle
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.store()")}}
