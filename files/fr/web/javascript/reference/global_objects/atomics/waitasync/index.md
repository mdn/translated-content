---
title: "Atomics : méthode statique waitAsync()"
short-title: waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`waitAsync()`** de l'objet {{JSxRef("Atomics")}} vérifie qu'un emplacement de mémoire partagée contient une valeur donnée, retournant immédiatement un objet dont la propriété `value` contient la chaîne de caractères `"not-equal"` si l'emplacement de mémoire ne correspond pas à la valeur donnée, ou `"timed-out"` si le délai d'attente a été fixé à zéro. Sinon, la méthode renvoie un objet dont la propriété `value` est une {{JSxRef("Promise")}} qui s'exécute avec `"ok"` lorsque {{JSxRef("Atomics.notify()")}} est appelée, ou `"timed-out"` si le délai d'attente a expiré.

`Atomics.waitAsync()` et {{JSxRef("Atomics.notify()")}} sont utilisés ensemble pour permettre la synchronisation des processus basée sur une valeur en mémoire partagée. Un processus peut continuer immédiatement si la valeur de synchronisation a changé, ou attendre la notification d'un autre processus lorsqu'il atteint le point de synchronisation.

Cette méthode ne fonctionne qu'avec un {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}} qui observe un {{JSxRef("SharedArrayBuffer")}}. Elle est non bloquante et, contrairement à {{JSxRef("Atomics.wait()")}}, peut être utilisée dans le processus principal. Comme elle ne bloque pas le processus entier, il faut veiller à ne pas accéder à la mémoire partagée avant que la promesse ne soit résolue.

## Syntaxe

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Paramètres

- `typedArray`
  - : Un objet {{JSxRef("Int32Array")}} ou {{JSxRef("BigInt64Array")}} qui observe un {{JSxRef("SharedArrayBuffer")}}.
- `index`
  - : La position au sein du tableau typé `typedArray` à laquelle on souhaite attendre.
- `value`
  - : La valeur attendue à tester.
- `timeout` {{Optional_Inline}}
  - : Le temps d'attente en millisecondes. {{JSxRef("NaN")}} (et les valeurs qui sont converties en `NaN`, comme `undefined`) devient {{JSxRef("Infinity")}}. Les valeurs négatives deviennent `0`.

### Valeur de retour

Un objet ({{JSxRef("Object")}}) avec les propriétés suivantes&nbsp;:

- `async`
  - : Un booléen indiquant si la propriété `value` est une {{JSxRef("Promise")}} ou non.
- `value`
  - : Si `async` est `false`, ce sera une chaîne de caractères qui est soit `"not-equal"` soit `"timed-out"` (uniquement lorsque le paramètre `timeout` est `0`). Si `async` est `true`, ce sera une {{JSxRef("Promise")}} qui est résolue avec une valeur de chaîne, soit `"ok"` soit `"timed-out"`. La promesse n'est jamais rejetée.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un objet {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}} qui observe un {{JSxRef("SharedArrayBuffer")}}.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est hors des limites de `typedArray`.

## Exemples

### Utilisation de `waitAsync()`

Soit un tableau de mémoire partagée `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Un processus de lecture est en train de dormir et d'attendre sur l'emplacement 0 qui devrait être 0.
Le `result.value` sera une promesse.

```js
const resultat = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

Dans le processus de lecture ou dans un autre processus, l'emplacement mémoire 0 est appelé et la promesse peut être résolue avec `"ok"`.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

Si elle ne se résout pas en `"ok"`, la valeur dans la mémoire partagée n'était pas celle attendue (la `valeur` serait `"not-equal"` au lieu d'une promesse) ou le délai d'attente a été atteint (la promesse se résoudra en `"time-out"`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.wait()")}}
- La méthode {{JSxRef("Atomics.notify()")}}
