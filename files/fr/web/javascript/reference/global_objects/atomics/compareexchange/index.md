---
title: "Atomics : méthode statique compareExchange()"
short-title: compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`compareExchange()`** de l'objet {{JSxRef("Atomics")}} échange une valeur d'un tableau à un emplacement donné si la valeur qui était dans le tableau correspond à une valeur donnée. Cette méthode renvoie l'ancienne valeur à cet emplacement, qu'il y ait eu remplacement ou non. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Atomics.compareExchange()")}}

```js interactive-example
// Crée un SharedArrayBuffer avec une taille en octets
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Retourne 5
console.log(Atomics.load(uint8, 0));
// Résultat attendu : 2

Atomics.compareExchange(uint8, 0, 5, 4); // Retourne 2
console.log(Atomics.load(uint8, 0));
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{JSxRef("Int8Array")}}, {{JSxRef("Uint8Array")}}, {{JSxRef("Int16Array")}}, {{JSxRef("Uint16Array")}}, {{JSxRef("Int32Array")}}, {{JSxRef("Uint32Array")}}, {{JSxRef("BigInt64Array")}} ou {{JSxRef("BigUint64Array")}}.
- `index`
  - : La position dans le `typedArray` où échanger une `replacementValue`.
- `expectedValue`
  - : La valeur avec laquelle on teste l'égalité.
- `replacementValue`
  - : Le nombre à échanger.

### Valeur de retour

L'ancienne valeur à la position définie (`typedArray[index]`). Si la valeur retournée est égale à `expectedValue`, l'échange a réussi&nbsp;; sinon, l'échange a échoué.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un des types d'entiers autorisés.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

### Utilisation de `compareExchange()`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // retourne 7, l'ancienne valeur
Atomics.load(ta, 0); // 12
```

### Vérification de la valeur de retour

[Compare-and-swap](https://fr.wikipedia.org/wiki/Compare-and-swap) garantit que la nouvelle valeur est calculée à partir d'informations à jour&nbsp;; si la valeur a été mise à jour par un autre processus entre-temps, l'écriture échouera. Par conséquent, vous devez vérifier la valeur de retour de `compareExchange()` pour savoir si l'opération a échoué, et réessayer si nécessaire.

Voici un exemple d'additionneur atomique (même fonctionnalité que {{JSxRef("Atomics.add()")}}), adapté de l'article Wikipédia lié&nbsp;:

```js
function add(mem, index, a) {
  let done = false;
  while (!done) {
    const value = Atomics.load(mem, index);
    done = Atomics.compareExchange(mem, index, value, value + a) === value;
  }
  return value + a;
}
```

Il lit d'abord la valeur à l'index donné, puis tente de la mettre à jour avec la nouvelle valeur. Il continue de réessayer jusqu'à ce qu'il réussisse à mettre à jour la valeur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Atomics")}}
- {{JSxRef("Atomics.exchange()")}}
