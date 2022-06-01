---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
browser-compat: javascript.builtins.Atomics.waitAsync
---
{{JSRef}}

La méthode statique **`Atomics.waitAsync()`** permet d'attendre de façon asynchrone à un emplacement de mémoire partagée et renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

À la différence de [`Atomics.wait()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait), `waitAsync()` n'est pas bloquante et peut être utilisée sur le fil d'exécution principal.

> **Note :** Cette opération ne fonctionne qu'avec un tableau typé partagé entier [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) ou [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array).

## Syntaxe

```js
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Paramètres

- `typedArray`
  - : Un tableau typé partagé de type [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) ou [`BigInt64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array).
- `index`
  - : La position au sein du tableau typé `typedArray` à laquelle on souhaite attendre.
- `value`
  - : La valeur attendue à tester.
- `timeout` {{optional_inline}}
  - : Le temps à attendre, exprimé en millisecondes. Par défaut, c'est la valeur [`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity) qui est utilisée.

### Valeur de retour

Un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution est l'un des objets suivants&nbsp;:

```js
{ async: false, value: 'ok' }
{ async: false, value: 'not-equal' } 
{ async: false, value: 'timed-out' }
{ async: true, value: promise }
```

## Exemples

### Utiliser `waitAsync()`

Soit un tableau de mémoire partagée `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Un <i lang="en">thread</i> de lecture est en sommeil et attend la valeur 0 à l'emplacement 0. La promesse `resultat` est renvoyée immédiatement.

```js
const resultat = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: promise }
```

Dans le <i lang="en">thread</i> de lecture ou dans un autre <i lang="en">thread</i>, on fait appel à l'emplacement mémoire 0 et la promesse peut être résolue avec `value: "ok"`.

```js
Atomics.notify(int32, 0);
// { async: false, value: "ok" }
```

Si la résolution ne founit pas `value: "ok"`, cela signifie que&nbsp;:

- La valeur située à cet emplacement de la mémoire partagée n'était pas la valeur attendue (`"not-equal"`)
- Ou que la durée d'attente a expiré (`"time-out"`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Atomics`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- [`Atomics.wait()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait)
- [`Atomics.notify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify)
