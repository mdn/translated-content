---
title: "Atomics : méthode statique add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`add()`** de l'objet {{JSxRef("Atomics")}} ajoute une valeur donnée à un élément du tableau à une position donnée et retourne l'ancienne valeur qui était contenue à cet emplacement. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.add()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 + 2 = 9
console.log(Atomics.add(uint8, 0, 2));
// Résultat attendu : 7

console.log(Atomics.load(uint8, 0));
// Résultat attendu : 9
```

## Syntaxe

```js-nolint
Atomics.add(typedArray, index, value)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}} ou {{JSxRef("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` auquel on souhaite ajouter une valeur.
- `value`
  - : La valeur à ajouter.

### Valeur de retour

L'ancienne valeur à la position donnée (`typedArray[index]`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

### Utilisation de `add()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // retourne 0, l'ancienne valeur
Atomics.load(ta, 0); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.sub()")}}
