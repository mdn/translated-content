---
title: "Atomics : méthode statique compareExchange()"
short-title: compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

La méthode statique **`compareExchange()`** de l'objet {{JSxRef("Atomics")}} échange une valeur d'un tableau à un emplacement donné si la valeur qui était dans le tableau correspond à une valeur donnée. Cette méthode renvoie l'ancienne valeur à cet emplacement, qu'il y ait eu remplacement ou non. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

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

Notez que ces exemples ne peuvent pas être exécutés directement depuis la console ou une page web arbitraire, car `SharedArrayBuffer` n'est pas défini à moins que [ses exigences de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#contraintes_de_sécurité) ne soient respectées.

### Utiliser `Atomics.compareExchange()`

```js
// Crée un SharedArrayBuffer avec une taille en octets
const sab = new SharedArrayBuffer(1024);
// Crée une vue et définit la valeur de l'index 0
const ta = new Uint8Array(sab);
ta[0] = 7;

console.log(Atomics.compareExchange(ta, 0, 7, 12)); // retourne 7, l'ancienne valeur
console.log(Atomics.load(ta, 0)); // 12, la nouvelle/valeur actuelle
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
