---
title: "Atomics : méthode statique wait()"
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`wait()`** de l'objet {{JSxRef("Atomics")}} vérifie qu'un emplacement de mémoire partagée contient une valeur donnée et, si c'est le cas, se met en sommeil en attendant une notification de réveil ou l'expiration d'un délai. Elle retourne une chaîne de caractères valant `"not-equal"` si l'emplacement mémoire ne correspond pas à la valeur donnée, `"ok"` si elle est réveillée par {{JSxRef("Atomics.notify()")}}, ou `"timed-out"` si le délai expire.

`Atomics.wait()` et {{JSxRef("Atomics.notify()")}} sont utilisés ensemble pour permettre la synchronisation des processus basée sur une valeur en mémoire partagée. Un processus peut continuer immédiatement si la valeur de synchronisation a changé, ou attendre la notification d'un autre processus lorsqu'il atteint le point de synchronisation.

Cette méthode ne fonctionne qu'avec un {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}} qui observe un {{JSxRef("SharedArrayBuffer")}}. Elle est bloquante et ne peut pas être utilisée dans le thread principal. Pour une version non bloquante et asynchrone de cette méthode, voir {{JSxRef("Atomics.waitAsync()")}}.

## Syntaxe

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### Paramètres

- `typedArray`
  - : Un tableau typé partagé de type {{JSxRef("Int32Array")}}.
- `index`
  - : La position du tableau typé `typedArray` sur laquelle on attend un changement.
- `value`
  - : La valeur attendue qu'on souhaite tester.
- `timeout` {{Optional_Inline}}
  - : Le temps à attendre pour le changement de valeur, exprimé en millisecondes. La valeur par défaut est {{JSxRef("Infinity")}}.

### Valeur de retour

Une chaîne de caractères qui vaut `"ok"`, `"not-equal"` ou `"timed-out"` selon le cas.

- `"not-equal"` est retournée immédiatement si la `value` initiale n'est pas égale à la valeur stockée à `index`.
- `"ok"` est retournée si elle est réveillée par un appel à `Atomics.notify()`, **indépendamment du fait que la valeur attendue ait changé ou non**.
- `"timed-out"` est retournée si une attente en sommeil dépasse le `timeout` spécifié sans être réveillée par `Atomics.notify()`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Si `typedArray` n'est pas un {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}} qui observe un {{JSxRef("SharedArrayBuffer")}}.
    - Si le processus courant ne peut pas être bloqué (par exemple, parce qu'il s'agit du processus principal).
- {{JSxRef("RangeError")}}
  - : Levée si `index` est hors des limites de `typedArray`.

## Exemples

### Utilisation de `wait()`

Étant donné un `Int32Array` partagé&nbsp;:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Un processus de lecture est en sommeil et attend l'emplacement 0 parce que la `value` fournie correspond à ce qui est stocké à un `index` donné.
Le processus de lecture ne reprend pas l'exécution tant que le processus d'écriture n'a pas appelé `Atomics.notify()` sur la position 0 du `typedArray` fourni.
Remarquez que si, après le réveil, la valeur de l'emplacement 0 n'a pas été modifiée par le processus d'écriture, le processus de lecture **ne** se remettra **pas** en sommeil, mais continuera son exécution.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Un processus d'écriture stocke une nouvelle valeur et notifie le processus en attente une fois l'écriture effectuée&nbsp;:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.waitAsync()")}}
- La méthode {{JSxRef("Atomics.notify()")}}
